/* ═══════════════════════════════════════════════════════
   기초 영어 · Basic English for Korean Speakers
   week-common.js — Shared helpers for week pages 6-10
   Provides: flashcards, review quiz, generic fill,
   dialogue builder, vocab table, teacher notes, complete.
   ═══════════════════════════════════════════════════════ */
'use strict';

var _wk = { num:1, cardIndex:0, cardMode:'en-ko', cardFlipped:false, cardKnown:new Set() };

/* ── Page init ─────────────────────────────────── */
function initWeekPage(weekNum, nameElId) {
  _wk.num = weekNum;
  try {
    StudentDB.load();
    var name = StudentDB.get('name');
    var el = document.getElementById(nameElId);
    if (el && name) el.textContent = '학생: ' + name + '  ·  Student: ' + name;
    var fc = StudentDB.getExercise(weekNum, 'flashcards');
    if (fc && fc.known) fc.known.forEach(function(i){ _wk.cardKnown.add(i); });
    var n = StudentDB.getExercise(weekNum, 'teacher_notes');
    if (n && n.notes) { var ta=document.getElementById('teacher-notes'); if (ta) ta.value=n.notes; }
  } catch(e){}
}

/* ── Tab navigation ────────────────────────────── */
function switchSection(id, btn) {
  document.querySelectorAll('.lesson-section').forEach(function(s){ s.classList.remove('active'); });
  document.querySelectorAll('.tab-btn').forEach(function(b){ b.classList.remove('active'); });
  var sec = document.getElementById('sec-' + id);
  if (sec) sec.classList.add('active');
  if (btn) btn.classList.add('active');
  window.scrollTo({ top:0, behavior:'smooth' });
}

/* ── Review quiz (text input) ──────────────────── */
function buildReviewQuiz(questions, containerId, badgeId, weekNum) {
  var c = document.getElementById(containerId);
  if (!c) return;
  c.innerHTML = '';
  window._reviewQs = questions;
  window._reviewBadge = badgeId;
  window._reviewWeek = weekNum;
  questions.forEach(function(q,i){
    var div = document.createElement('div');
    div.style.cssText = 'background:var(--white);border:1.5px solid var(--mist);border-radius:var(--radius-md);padding:1rem 1.25rem;';
    div.innerHTML =
      '<div style="font-family:var(--font-serif);font-size:1.02rem;color:var(--ink);margin-bottom:0.5rem;">' +
        q.prompt.replace('___','<input id="rq-'+i+'" style="border:2px solid var(--mist);border-radius:var(--radius-sm);padding:0.35rem 0.75rem;font-family:var(--font-serif);font-size:0.95rem;width:130px;outline:none;" autocomplete="off" spellcheck="false">') +
      '</div>' +
      '<div style="font-size:0.8rem;color:var(--text-light);">'+q.ko+'</div>' +
      '<div id="rq-fb-'+i+'" style="font-size:0.8rem;margin-top:0.4rem;font-style:italic;display:none;"></div>';
    c.appendChild(div);
    var inp = div.querySelector('input');
    if (inp) inp.addEventListener('keydown', function(e){ if(e.key==='Enter') checkAllReview(); });
  });
}

function checkAllReview() {
  var qs = window._reviewQs || [];
  var score = 0;
  qs.forEach(function(q,i){
    var inp=document.getElementById('rq-'+i), fb=document.getElementById('rq-fb-'+i);
    if (!inp) return;
    if (inp.value.trim().toLowerCase()===q.answer.toLowerCase()){
      score++; inp.style.borderColor='var(--celadon)'; inp.style.background='rgba(126,179,168,0.1)';
      if (fb){ fb.textContent='정답! / Correct!'; fb.style.color='var(--celadon)'; fb.style.display='block'; }
    } else {
      inp.style.borderColor='var(--crimson)'; inp.style.background='rgba(192,57,43,0.06)';
      if (fb){ fb.textContent='정답: '+q.answer; fb.style.color='var(--crimson)'; fb.style.display='block'; }
    }
  });
  var b=document.getElementById(window._reviewBadge);
  if (b) b.textContent=score+' / '+qs.length+' 정답';
  try { StudentDB.saveExercise(window._reviewWeek,'review',{score:score}); } catch(e){}
}

function resetReview() {
  var qs = window._reviewQs || [];
  qs.forEach(function(q,i){
    var inp=document.getElementById('rq-'+i), fb=document.getElementById('rq-fb-'+i);
    if (inp){ inp.value=''; inp.style.borderColor='var(--mist)'; inp.style.background='var(--white)'; }
    if (fb) fb.style.display='none';
  });
  var b=document.getElementById(window._reviewBadge);
  if (b) b.textContent='0 / '+qs.length+' 정답';
}

/* ── Generic multiple-choice fill ──────────────── */
function buildGenericFill(data, containerId, badgeId, prefix, weekNum, saveKey) {
  var c = document.getElementById(containerId);
  if (!c) return;
  c.innerHTML = '';
  c.dataset.score = '0';
  c.dataset.badge = badgeId;
  c.dataset.total = data.length;
  c.dataset.week = weekNum;
  c.dataset.savekey = saveKey || 'fill';
  c.dataset.prefix = prefix;
  data.forEach(function(item,i){
    var div=document.createElement('div');
    div.className='fill-item'; div.id=prefix+'-item-'+i;
    var label = item.sentence || ('one ' + item.singular + ' &rarr; two ___');
    var btns=item.options.map(function(o){
      return '<button class="fill-opt-btn" onclick="checkGenericFill(\''+containerId+'\','+i+',\''+o.replace(/'/g,"\\'")+'\',\''+item.answer.replace(/'/g,"\\'")+'\',this,\''+prefix+'\')">'+o+'</button>';
    }).join('');
    div.innerHTML =
      '<div class="fill-sentence">'+label+'</div>'+
      '<div class="fill-options">'+btns+'</div>'+
      '<div class="fill-hint">'+(item.hint||'')+'</div>';
    c.appendChild(div);
  });
}

function checkGenericFill(containerId, idx, chosen, correct, btn, prefix) {
  var item=document.getElementById(prefix+'-item-'+idx);
  if (!item||item.dataset.answered) return;
  item.dataset.answered='1';
  item.querySelectorAll('.fill-opt-btn').forEach(function(b){ b.disabled=true; });
  var c=document.getElementById(containerId);
  var score=parseInt(c.dataset.score||'0');
  if (chosen===correct){ btn.classList.add('correct'); score++; Speaker.speakWord(correct); }
  else { btn.classList.add('wrong'); item.querySelectorAll('.fill-opt-btn').forEach(function(b){ if(b.textContent.trim()===correct) b.classList.add('correct'); }); }
  item.classList.add('revealed');
  c.dataset.score=score;
  var b=document.getElementById(c.dataset.badge);
  if (b) b.textContent=score+' / '+c.dataset.total+' 정답';
  try { StudentDB.saveExercise(parseInt(c.dataset.week), c.dataset.savekey, {score:score}); } catch(e){}
}

/* ── Flashcards ────────────────────────────────── */
function getVocab() {
  var wk = COURSE_DATA['week'+_wk.num];
  return (wk && wk.vocabulary) ? wk.vocabulary : [];
}

function buildVocab(weekNum) {
  _wk.num = weekNum;
  var tb=document.getElementById('vocab-table-body');
  if (tb) {
    getVocab().forEach(function(w){
      var safe=w.en.replace(/'/g,'');
      var tr=document.createElement('tr');
      tr.style.borderBottom='1px solid var(--mist)';
      tr.innerHTML =
        '<td style="padding:0.55rem 0.75rem;font-weight:600;color:var(--ink);">'+w.en+'</td>'+
        '<td style="padding:0.55rem 0.75rem;color:var(--text-mid);">'+w.ko+'</td>'+
        '<td style="padding:0.55rem 0.75rem;color:var(--text-light);font-size:0.85em;font-style:italic;">'+(w.example||'')+'</td>'+
        '<td style="padding:0.55rem 0.75rem;"><button onclick="Speaker.speakWord(\''+safe+'\',this)" style="border:1px solid var(--mist);background:none;border-radius:100px;padding:3px 10px;cursor:pointer;font-size:0.8rem;color:var(--cobalt);">&#9654;</button></td>';
      tb.appendChild(tr);
    });
  }
  updateCard();
}

function setCardMode(mode) {
  _wk.cardMode=mode; _wk.cardFlipped=false;
  var fc=document.getElementById('flashcard'); if (fc) fc.classList.remove('flipped');
  var me=document.getElementById('mode-en-ko'), mk=document.getElementById('mode-ko-en');
  if (me&&mk){ if(mode==='en-ko'){me.style.borderColor='var(--cobalt)';me.style.color='var(--cobalt)';mk.style.borderColor='';mk.style.color='';}else{mk.style.borderColor='var(--cobalt)';mk.style.color='var(--cobalt)';me.style.borderColor='';me.style.color='';} }
  updateCard();
}

function updateCard() {
  var v=getVocab(); if (!v.length) return;
  var w=v[_wk.cardIndex];
  var ft=document.getElementById('card-front-text'),bt=document.getElementById('card-back-text'),et=document.getElementById('card-example-text'),ct=document.getElementById('card-counter'),pb=document.getElementById('vocab-progress-badge');
  if (_wk.cardMode==='en-ko'){ if(ft)ft.textContent=w.en; if(bt)bt.textContent=w.ko; } else { if(ft)ft.textContent=w.ko; if(bt)bt.textContent=w.en; }
  if (et) et.textContent=w.example?'"'+w.example+'"':'';
  if (ct) ct.textContent=(_wk.cardIndex+1)+' / '+v.length;
  if (pb) pb.textContent=_wk.cardKnown.size+' / '+v.length+' 익힘';
}

function flipCard(){ _wk.cardFlipped=!_wk.cardFlipped; var fc=document.getElementById('flashcard'); if(fc) fc.classList.toggle('flipped',_wk.cardFlipped); }
function nextCard(){ _wk.cardFlipped=false; var fc=document.getElementById('flashcard'); if(fc)fc.classList.remove('flipped'); var v=getVocab(); _wk.cardIndex=(_wk.cardIndex+1)%v.length; updateCard(); }
function prevCard(){ _wk.cardFlipped=false; var fc=document.getElementById('flashcard'); if(fc)fc.classList.remove('flipped'); var v=getVocab(); _wk.cardIndex=(_wk.cardIndex-1+v.length)%v.length; updateCard(); }
function markCard(s){ if(s==='know'){ _wk.cardKnown.add(_wk.cardIndex); try{ StudentDB.saveExercise(_wk.num,'flashcards',{known:Array.from(_wk.cardKnown),total:getVocab().length}); }catch(e){} } nextCard(); }
function speakCurrentCard(){ var w=getVocab()[_wk.cardIndex]; if(w) Speaker.speakWord(w.en); }

/* ── Dialogue builder ──────────────────────────── */
function buildDialogues(weekNum, containerId, studentSpeakers) {
  var c=document.getElementById(containerId);
  var wk=COURSE_DATA['week'+weekNum];
  if (!c||!wk||!wk.dialogues) return;
  c.innerHTML='';
  studentSpeakers = studentSpeakers || ['B'];
  wk.dialogues.forEach(function(dlg){
    var all=dlg.lines.map(function(l){return l.en;}).join('. ').replace(/'/g,'');
    var lines=dlg.lines.map(function(line){
      var isB = studentSpeakers.indexOf(line.speaker)>=0;
      return '<div class="dialogue-line"><span class="dl-speaker" style="color:'+(isB?'var(--cobalt)':'var(--crimson)')+';">'+line.speaker+'</span><div class="dl-bubble'+(isB?' b-student':'')+'"><span class="dl-text">'+line.en+'</span><span class="dl-ko">'+line.ko+'</span></div></div>';
    }).join('');
    var card=document.createElement('div');
    card.className='dialogue-scenario';
    card.innerHTML =
      '<div class="scenario-header"><div><span class="scenario-title">'+dlg.titleKo+'</span><span class="scenario-sub">'+dlg.titleEn+'</span></div>'+
      '<button onclick="Speaker.speakText(\''+all+'\')" class="btn-card-action btn-speak" style="margin-left:auto;padding:0.4rem 1rem;font-size:0.8rem;">&#9654; 전체 듣기</button></div>'+
      '<div class="dialogue-lines">'+lines+'</div>'+
      '<div style="background:rgba(43,93,160,0.06);border-radius:var(--radius-md);padding:0.875rem;font-size:0.82rem;color:var(--text-mid);">&#128161; 역할을 바꿔가며 반복 연습하세요! <em>Switch roles and repeat for extra practice.</em></div>';
    c.appendChild(card);
  });
}

/* ── Teacher notes & completion ────────────────── */
function saveTeacherNotes() {
  var n=(document.getElementById('teacher-notes')||{}).value||'';
  try { StudentDB.saveExercise(_wk.num,'teacher_notes',{notes:n}); } catch(e){}
  var m=document.getElementById('notes-saved-msg');
  if (m){ m.style.display='inline'; setTimeout(function(){m.style.display='none';},2500); }
}

function completeWeek(weekNum) {
  try { StudentDB.completeWeek(weekNum); } catch(e){}
  var btn=document.querySelector('.btn-complete-week'), msg=document.getElementById('completion-msg');
  if (btn) btn.style.display='none';
  if (msg) msg.style.display='block';
  Speaker.speakText('Congratulations! You completed Week ' + weekNum + '. Excellent work!');
}

/* ── Shuffle util ──────────────────────────────── */
function shuffle(a){ for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;} return a; }
