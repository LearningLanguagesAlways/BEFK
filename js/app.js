/* ═══════════════════════════════════════════════════════
   영어의 문 · Gateway to English
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

      const arrow = isCompleted ? '✓' : isActive ? '→' : '🔒';

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
    const flowers = ['🌸','🌼','🌺','🌻','🌷','💐','🌹','🌸','🌼','🌺'];

    COURSE_DATA.weeks.forEach((week, i) => {
      const done = StudentDB.isWeekComplete(week.number);
      const div = document.createElement('div');
      div.className = `flower-item${done ? ' done' : ''}`;
      div.innerHTML = `
        <span class="flower-bloom">${flowers[i]}</span>
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
const Speaker = {
  supported: 'speechSynthesis' in window,

  speak(text, options = {}) {
    if (!this.supported) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang  = options.lang  || 'en-US';
    utt.rate  = options.rate  || 0.75;
    utt.pitch = options.pitch || 1.0;
    if (options.onStart) utt.onstart = options.onStart;
    if (options.onEnd)   utt.onend   = options.onEnd;
    window.speechSynthesis.speak(utt);
  },

  speakWord(word, btn) {
    if (btn) btn.classList.add('speaking');
    this.speak(word, {
      rate: 0.70,
      onEnd: () => { if (btn) btn.classList.remove('speaking'); }
    });
  },

  speakLetter(letter, tile) {
    if (tile) tile.classList.add('speaking');
    this.speak(letter, {
      rate: 0.55,
      onEnd: () => {
        if (tile) {
          tile.classList.remove('speaking');
        }
      }
    });
  },

  speakText(text) {
    this.speak(text, { rate: 0.72 });
  }
};

/* ─── Boot ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => App.init());
