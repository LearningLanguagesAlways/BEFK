/* ═══════════════════════════════════════════════════════
   기초 영어 · Basic English for Korean Speakers
   app.js — Core Application Logic
   Student data management, progress tracking, UI init
   ═══════════════════════════════════════════════════════ */

'use strict';

const STORAGE_KEY = 'gateway_to_english_v1';

/* ─── Student Manager ─────────────────────────────── */
const StudentDB = {

  _data: null,

  defaultData() {
    return {
      name: '',
      createdAt: new Date().toISOString(),
      weeks: {}
    };
  },

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      this._data = raw ? JSON.parse(raw) : this.defaultData();
    } catch (e) {
      this._data = this.defaultData();
    }
    return this._data;
  },

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._data));
    } catch (e) {
      console.warn('Storage unavailable:', e);
    }
  },

  get(field) {
    return this._data ? this._data[field] : null;
  },

  setName(name) {
    this._data.name = name;
    this.save();
  },

  /* Save exercise responses for a given week */
  saveExercise(weekNum, exerciseId, payload) {
    const key = `week${weekNum}`;
    if (!this._data.weeks[key]) {
      this._data.weeks[key] = {
        completed: false,
        startedAt: new Date().toISOString(),
        exercises: {}
      };
    }
    this._data.weeks[key].exercises[exerciseId] = {
      ...payload,
      savedAt: new Date().toISOString()
    };
    this.save();
  },

  /* Retrieve saved exercise data */
  getExercise(weekNum, exerciseId) {
    const key = `week${weekNum}`;
    const week = this._data.weeks[key];
    return week?.exercises?.[exerciseId] ?? null;
  },

  /* Mark a week complete */
  completeWeek(weekNum) {
    const key = `week${weekNum}`;
    if (!this._data.weeks[key]) this._data.weeks[key] = {};
    this._data.weeks[key].completed = true;
    this._data.weeks[key].completedAt = new Date().toISOString();
    this.save();
  },

  /* Count completed weeks */
  completedCount() {
    return Object.values(this._data.weeks)
      .filter(w => w.completed).length;
  },

  /* Is a given week completed? */
  isWeekComplete(weekNum) {
    return !!this._data.weeks[`week${weekNum}`]?.completed;
  },

  /* Reset all data (with confirmation) */
  reset() {
    this._data = this.defaultData();
    this.save();
  }
};

/* ─── App Controller ──────────────────────────────── */
const App = {

  init() {
    StudentDB.load();

    if (!StudentDB.get('name')) {
      this.showSetupModal();
    } else {
      this.onReady();
    }

    this.bindEvents();
  },

  bindEvents() {
    /* Setup modal */
    const beginBtn = document.getElementById('begin-btn');
    const nameInput = document.getElementById('name-input');

    if (beginBtn) beginBtn.addEventListener('click', () => this.handleSetup());
    if (nameInput) nameInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') this.handleSetup();
    });

    /* Reset button */
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) resetBtn.addEventListener('click', () => {
      if (confirm('정말로 모든 학습 기록을 초기화하시겠습니까?\nAre you sure you want to reset all progress?')) {
        StudentDB.reset();
        location.reload();
      }
    });
  },

  showSetupModal() {
    const modal = document.getElementById('setup-modal');
    if (modal) {
      modal.classList.remove('hidden');
      setTimeout(() => {
        const input = document.getElementById('name-input');
        if (input) input.focus();
      }, 350);
    }
  },

  hideSetupModal() {
    const modal = document.getElementById('setup-modal');
    if (modal) modal.classList.add('hidden');
  },

  handleSetup() {
    const input = document.getElementById('name-input');
    const name = input ? input.value.trim() : '';

    if (!name) {
      if (input) {
        input.classList.add('error');
        input.placeholder = '이름을 입력해 주세요! / Please enter your name!';
        input.focus();
      }
      return;
    }

    StudentDB.setName(name);
    this.hideSetupModal();
    this.onReady();
  },

  onReady() {
    this.updateHeaderName();
    this.updateProgress();
    this.renderWeekGrid();
    this.renderProgressFlowers();
    this.renderProgressStudentName();
  },

  updateHeaderName() {
    const el = document.getElementById('header-name');
    if (el) el.textContent = StudentDB.get('name') || '학생';
  },

  updateProgress() {
    const count = StudentDB.completedCount();
    const pct = Math.round((count / 10) * 100);

    const badge = document.getElementById('header-progress');
    if (badge) badge.textContent = count;

    const bar = document.getElementById('overall-bar');
    if (bar) bar.style.width = `${pct}%`;

    const label = document.getElementById('overall-label');
    if (label) label.textContent = `${pct}% 완료 · Complete`;
  },

  renderWeekGrid() {
    const grid = document.getElementById('weeks-grid');
    if (!grid || !COURSE_DATA?.weeks) return;

    grid.innerHTML = '';

    COURSE_DATA.weeks.forEach(week => {
      const isCompleted = StudentDB.isWeekComplete(week.number);
      const isActive    = week.active;

      const el = document.createElement(isActive ? 'a' : 'div');
      el.className = [
        'week-card',
        isActive    ? 'week-active' : 'week-locked',
        isCompleted ? 'week-done'   : ''
      ].join(' ').trim();

      if (isActive) el.href = week.file;

      const topicTags = week.topics
        .map(t => `<span class="topic-tag">${t}</span>`).join('');

      const arrow = isCompleted ? '&#10003;' : isActive ? '&rarr;' : 'locked';

      el.innerHTML = `
        <div class="wc-num">
          <span>Week</span>
          <strong>${String(week.number).padStart(2, '0')}</strong>
        </div>
        <div class="wc-body">
          <div class="wc-date">${week.date}</div>
          <h4>${week.titleKo}</h4>
          <p>${week.titleEn}</p>
          <div class="wc-topics">${topicTags}</div>
        </div>
        <div class="wc-arrow">${arrow}</div>
      `;

      grid.appendChild(el);
    });
  },

  renderProgressFlowers() {
    const container = document.getElementById('progress-flowers');
    if (!container) return;

    container.innerHTML = '';
    const indicators = ['01','02','03','04','05','06','07','08','09','10'];

    COURSE_DATA.weeks.forEach((week, i) => {
      const done = StudentDB.isWeekComplete(week.number);
      const div = document.createElement('div');
      div.className = `flower-item${done ? ' done' : ''}`;
      div.innerHTML = `
        <span class="flower-bloom">${indicators[i]}</span>
        <span>W${week.number}</span>
      `;
      div.title = `Week ${week.number}: ${week.titleEn}`;
      container.appendChild(div);
    });
  },

  renderProgressStudentName() {
    const el = document.getElementById('progress-student-name-display');
    if (el) el.textContent = StudentDB.get('name') || '';
  }
};

/* ─── Web Speech API Helper ───────────────────────── */
/* Smart voice selection ranks the device's available voices and
   picks the most natural-sounding English voice (neural / premium
   voices preferred, robotic ones demoted). Falls back gracefully. */
const Speaker = {
  supported: 'speechSynthesis' in window,
  _voice: null,
  _ready: false,

  /* Voice names known to sound natural across platforms.
     Higher in the list = higher priority. */
  _preferredNames: [
    // Apple (macOS / iOS) high-quality voices
    'Samantha', 'Ava', 'Allison', 'Susan', 'Zoe', 'Evan', 'Nathan', 'Tom',
    'Siri', 'Aaron', 'Nicky',
    // Google (Chrome / Android) natural voices
    'Google US English', 'Google UK English Female', 'Google UK English Male',
    // Microsoft (Edge / Windows) neural voices
    'Microsoft Aria', 'Microsoft Jenny', 'Microsoft Guy', 'Microsoft Michelle',
    'Microsoft Ana', 'Microsoft Zira', 'Microsoft David', 'Microsoft Mark',
    'Aria', 'Jenny', 'Michelle', 'Guy'
  ],

  /* Keywords that signal a low-quality / robotic voice — demote these */
  _avoidNames: [
    'eSpeak', 'espeak', 'Albert', 'Bad News', 'Bahh', 'Bells', 'Boing',
    'Bubbles', 'Cellos', 'Deranged', 'Good News', 'Hysterical', 'Jester',
    'Organ', 'Superstar', 'Trinoids', 'Whisper', 'Wobble', 'Zarvox',
    'Fred', 'Junior', 'Ralph', 'Kathy', 'compact', 'Grandma', 'Grandpa',
    'Reed', 'Rocko', 'Sandy', 'Shelley', 'Flo', 'Eddy'
  ],

  init() {
    if (!this.supported) return;
    this._pickVoice();
    // Voices load asynchronously in most browsers
    if (typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
      window.speechSynthesis.onvoiceschanged = () => this._pickVoice();
    }
  },

  _pickVoice() {
    const voices = window.speechSynthesis.getVoices();
    if (!voices || !voices.length) return;

    // Only consider English voices
    const englishVoices = voices.filter(v => /^en(-|_|$)/i.test(v.lang));
    const pool = englishVoices.length ? englishVoices : voices;

    const scored = pool.map(v => {
      let score = 0;
      const name = v.name || '';

      // Strongly prefer known natural voices (earlier = higher score)
      const prefIdx = this._preferredNames.findIndex(
        p => name.toLowerCase().includes(p.toLowerCase())
      );
      if (prefIdx !== -1) score += 1000 - prefIdx * 10;

      // Demote known robotic voices
      if (this._avoidNames.some(a => name.toLowerCase().includes(a.toLowerCase()))) {
        score -= 500;
      }

      // Prefer US then GB English
      if (/en[-_]US/i.test(v.lang)) score += 60;
      else if (/en[-_]GB/i.test(v.lang)) score += 40;
      else score += 10;

      // Prefer female-sounding default names slightly (often clearer for learners)
      if (/female|aria|jenny|samantha|ava|susan|zoe|michelle|zira/i.test(name)) score += 15;

      // Slightly prefer non-local (cloud / neural) voices when flagged
      if (v.localService === false) score += 25;

      // "Natural" / "Neural" / "Premium" / "Enhanced" in the name = high quality
      if (/natural|neural|premium|enhanced/i.test(name)) score += 120;

      return { voice: v, score };
    });

    scored.sort((a, b) => b.score - a.score);
    if (scored.length) this._voice = scored[0].voice;
    this._ready = true;
  },

  speak(text, options = {}) {
    if (!this.supported || !text) return;
    window.speechSynthesis.cancel();

    // Make sure a voice has been chosen
    if (!this._voice) this._pickVoice();

    const utt = new SpeechSynthesisUtterance(text);
    if (this._voice) {
      utt.voice = this._voice;
      utt.lang  = this._voice.lang;
    } else {
      utt.lang  = options.lang || 'en-US';
    }
    // Natural defaults: a touch slower than normal, warm pitch
    utt.rate   = options.rate  || 0.88;
    utt.pitch  = options.pitch || 1.02;
    utt.volume = options.volume || 1.0;
    if (options.onStart) utt.onstart = options.onStart;
    if (options.onEnd)   utt.onend   = options.onEnd;

    window.speechSynthesis.speak(utt);
  },

  /* Single word — slightly slower & clearer for pronunciation */
  speakWord(word, btn) {
    if (btn) btn.classList.add('speaking');
    this.speak(word, {
      rate: 0.80,
      onEnd: () => { if (btn) btn.classList.remove('speaking'); }
    });
  },

  /* Letters / very short items — slowest for clarity */
  speakLetter(letter, tile) {
    if (tile) tile.classList.add('speaking');
    this.speak(letter, {
      rate: 0.70,
      onEnd: () => { if (tile) tile.classList.remove('speaking'); }
    });
  },

  /* Full sentences & dialogue — natural conversational pace */
  speakText(text, btn) {
    if (btn) btn.classList.add('speaking');
    this.speak(text, {
      rate: 0.90,
      onEnd: () => { if (btn) btn.classList.remove('speaking'); }
    });
  }
};

/* ─── Auto-attach speaker buttons to English sentences ─────
   Scans the page after load and adds a small "play" button to
   every English example sentence and dialogue line that does
   not already have one, so ALL English on the site is speakable. */
const AutoSpeak = {

  init() {
    if (!Speaker.supported) return;
    // Wait a tick so week-page scripts finish building their DOM
    setTimeout(() => this.attachAll(), 600);
    // Re-scan when sections are switched (content may be lazy-rendered)
    document.addEventListener('click', e => {
      if (e.target.closest('.tab-btn')) {
        setTimeout(() => this.attachAll(), 350);
      }
    });
  },

  _makeBtn(getText) {
    const b = document.createElement('button');
    b.className = 'auto-speak-btn';
    b.type = 'button';
    b.setAttribute('aria-label', 'Play audio');
    b.innerHTML = '&#9654;';
    b.style.cssText =
      'border:1px solid var(--mist);background:var(--white);color:var(--cobalt);' +
      'border-radius:100px;width:24px;height:24px;min-width:24px;line-height:1;' +
      'font-size:0.62rem;cursor:pointer;margin-left:8px;padding:0;vertical-align:middle;' +
      'display:inline-flex;align-items:center;justify-content:center;transition:all 0.15s;flex-shrink:0;';
    b.addEventListener('mouseenter', () => {
      b.style.background = 'var(--cobalt)'; b.style.color = 'var(--white)';
    });
    b.addEventListener('mouseleave', () => {
      if (!b.classList.contains('speaking')) {
        b.style.background = 'var(--white)'; b.style.color = 'var(--cobalt)';
      }
    });
    b.addEventListener('click', ev => {
      ev.stopPropagation();
      const text = getText();
      if (text) Speaker.speakText(text, b);
    });
    return b;
  },

  attachAll() {
    /* 1. Dialogue lines — the English text inside each .dl-text */
    document.querySelectorAll('.dl-text').forEach(el => {
      if (el.dataset.speakAttached) return;
      el.dataset.speakAttached = '1';
      // Use only the English (strip any nested blank markers' spacing)
      const getText = () => el.textContent.replace(/_+/g, ' ').trim();
      el.appendChild(this._makeBtn(getText));
    });

    /* 2. Flashcard example sentences */
    document.querySelectorAll('.card-example').forEach(el => {
      if (el.dataset.speakAttached) return;
      el.dataset.speakAttached = '1';
      const getText = () => el.textContent.replace(/["""]/g, '').trim();
      if (getText()) el.appendChild(this._makeBtn(getText));
    });

    /* 3. Example sentences in vocabulary tables (italic example cells)
          handled already by the row's own play button, so skipped. */
  }
};

/* ─── Boot ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  App.init();
  Speaker.init();
  AutoSpeak.init();
});

// Initialize voice list as early as possible (some browsers need a nudge)
if (Speaker.supported) {
  Speaker.init();
}
