// ============================================================
//  PHYSIOLOGY QUIZ — LOGIC
// ============================================================

// --- STATE ---
let quizQuestions = [];
let currentIndex  = 0;
let score         = 0;
let answered      = false;
let categoryStats = {};

// --- DOM ---
const screens = {
  start:  document.getElementById('screen-start'),
  quiz:   document.getElementById('screen-quiz'),
  result: document.getElementById('screen-result'),
};

// --- UTILITIES ---
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

// ── CATEGORY CHECKLIST ──────────────────────────────────────

function getSelectedCats() {
  return [...document.querySelectorAll('.cat-checkbox:checked')].map(cb => cb.value);
}

function updateSelectedCount() {
  const selected = getSelectedCats();
  const pool = QUESTIONS.filter(q => selected.includes(q.category));
  document.getElementById('selected-count').textContent = pool.length + ' available';

  const btn = document.getElementById('start-btn');
  btn.disabled = selected.length === 0;
  btn.style.opacity = selected.length === 0 ? '0.4' : '';
}

function selectAllCats() {
  document.querySelectorAll('.cat-checkbox').forEach(cb => cb.checked = true);
  updateSelectedCount();
}

function selectNoneCats() {
  document.querySelectorAll('.cat-checkbox').forEach(cb => cb.checked = false);
  updateSelectedCount();
}

function selectCount(btn) {
  document.querySelectorAll('.count-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('count-select').value = btn.dataset.value;
}

function buildCatChecklist() {
  const list = document.getElementById('cat-checklist');
  list.innerHTML = '';

  // Category → question count map
  const counts = {};
  QUESTIONS.forEach(q => { counts[q.category] = (counts[q.category] || 0) + 1; });

  CATEGORIES.slice().sort().forEach(cat => {
    const id  = 'cat-' + cat.replace(/[^a-z0-9]/gi, '_');
    const row = document.createElement('label');
    row.className   = 'cat-row';
    row.htmlFor     = id;
    row.innerHTML   = `
      <input type="checkbox" class="cat-checkbox" id="${id}" value="${cat}" checked />
      <span class="cat-row-check"></span>
      <span class="cat-row-name">${cat}</span>
      <span class="cat-row-count">${counts[cat]}</span>
    `;
    row.querySelector('.cat-checkbox').addEventListener('change', updateSelectedCount);
    list.appendChild(row);
  });

  updateSelectedCount();
}

// ── START ────────────────────────────────────────────────────

function startQuiz() {
  const selected = getSelectedCats();
  if (selected.length === 0) return;

  const countSel = document.getElementById('count-select').value;

  let pool = QUESTIONS.filter(q => selected.includes(q.category));
  pool = shuffle(pool);

  if (countSel !== 'all') {
    pool = pool.slice(0, Math.min(parseInt(countSel), pool.length));
  }

  quizQuestions = pool;
  currentIndex  = 0;
  score         = 0;
  answered      = false;
  categoryStats = {};

  quizQuestions.forEach(q => {
    if (!categoryStats[q.category]) categoryStats[q.category] = { correct: 0, total: 0 };
    categoryStats[q.category].total++;
  });

  showScreen('quiz');
  renderQuestion();
}

// ── RENDER QUESTION ──────────────────────────────────────────

function renderQuestion() {
  answered = false;
  const q = quizQuestions[currentIndex];

  const progress = (currentIndex / quizQuestions.length) * 100;
  document.getElementById('progress-bar').style.width = progress + '%';
  document.getElementById('progress-text').textContent = `${currentIndex + 1} / ${quizQuestions.length}`;
  document.getElementById('score-display').textContent = `✓ ${score}`;

  document.getElementById('question-category').textContent = q.category;
  document.getElementById('question-text').textContent = q.question;

  const container = document.getElementById('answers-container');
  container.innerHTML = '';
  const shuffled = shuffle(q.answers);
  shuffled.forEach((ans, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + i)}</span><span class="answer-text">${ans.text}</span>`;
    btn.addEventListener('click', () => selectAnswer(btn, ans, shuffled, q));
    container.appendChild(btn);
  });

  const expBox = document.getElementById('explanation-box');
  expBox.classList.remove('visible', 'correct', 'wrong');
  expBox.innerHTML = '';
  document.getElementById('next-btn').classList.remove('visible');
}

// ── SELECT ANSWER ────────────────────────────────────────────

function selectAnswer(btn, chosen, allAnswers, q) {
  if (answered) return;
  answered = true;

  const isCorrect = chosen.correct;
  if (isCorrect) { score++; categoryStats[q.category].correct++; }

  document.querySelectorAll('.answer-btn').forEach((b, i) => {
    b.disabled = true;
    if (allAnswers[i].correct) b.classList.add('correct');
    else if (b === btn)        b.classList.add('wrong');
    else                       b.classList.add('faded');
  });

  const expBox = document.getElementById('explanation-box');
  expBox.classList.add('visible', isCorrect ? 'correct' : 'wrong');
  expBox.innerHTML = `
    <div class="exp-header">${isCorrect ? '✓ Correct!' : '✗ Wrong answer'}</div>
    <div class="exp-body">${q.explanation}</div>
  `;

  const nextBtn = document.getElementById('next-btn');
  nextBtn.classList.add('visible');
  nextBtn.textContent = currentIndex + 1 < quizQuestions.length ? 'Next question →' : 'See results →';
}

// ── NEXT ─────────────────────────────────────────────────────

function nextQuestion() {
  currentIndex++;
  if (currentIndex < quizQuestions.length) {
    renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    showResults();
  }
}

// ── QUIT MODAL ───────────────────────────────────────────────

function confirmQuit() { document.getElementById('quit-modal').classList.add('visible'); }
function cancelQuit()  { document.getElementById('quit-modal').classList.remove('visible'); }
function doQuit()      { document.getElementById('quit-modal').classList.remove('visible'); showScreen('start'); }

document.addEventListener('click', e => { if (e.target.id === 'quit-modal') cancelQuit(); });

// ── RESULTS ──────────────────────────────────────────────────

function showResults() {
  showScreen('result');
  const total = quizQuestions.length;
  const pct   = Math.round((score / total) * 100);

  document.getElementById('result-score').textContent = `${score} / ${total}`;
  document.getElementById('result-pct').textContent   = `${pct}%`;

  let msg = '';
  if (pct >= 90)      msg = 'Excellent! Near-perfect mastery.';
  else if (pct >= 75) msg = 'Very good! A few points to review.';
  else if (pct >= 50) msg = 'Not bad, but there is still work to do.';
  else                msg = 'Needs work — use the explanations to help!';
  document.getElementById('result-msg').textContent = msg;

  const ring = document.getElementById('score-ring-fill');
  const c    = 2 * Math.PI * 54;
  ring.style.strokeDasharray  = c;
  ring.style.strokeDashoffset = c * (1 - pct / 100);
  ring.style.stroke = pct >= 75 ? 'var(--green)' : pct >= 50 ? 'var(--yellow)' : 'var(--red)';

  const catContainer = document.getElementById('category-stats');
  catContainer.innerHTML = '';
  Object.entries(categoryStats).sort((a, b) => a[0].localeCompare(b[0])).forEach(([cat, stats]) => {
    const catPct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    const errPct = 100 - catPct;
    const div = document.createElement('div');
    div.className = 'cat-stat';
    div.innerHTML = `
      <div class="cat-stat-header">
        <span class="cat-name">${cat}</span>
        <span class="cat-score">${stats.correct}/${stats.total} — <span class="cat-err" style="color:${errPct > 30 ? 'var(--red)' : errPct > 10 ? 'var(--yellow)' : 'var(--green)'}">${errPct}% errors</span></span>
      </div>
      <div class="cat-bar-bg"><div class="cat-bar-fill" style="width:${catPct}%; background:${catPct >= 75 ? 'var(--green)' : catPct >= 50 ? 'var(--yellow)' : 'var(--red)'}"></div></div>
    `;
    catContainer.appendChild(div);
  });
}

// ── RESTART ──────────────────────────────────────────────────

function restartQuiz() { showScreen('start'); }

// ── KEYBOARD ─────────────────────────────────────────────────

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { if (document.getElementById('quit-modal').classList.contains('visible')) cancelQuit(); return; }
  if (!screens.quiz.classList.contains('active')) return;
  if (answered && (e.key === 'Enter' || e.key === 'ArrowRight')) nextQuestion();
  if (!answered) {
    const num = parseInt(e.key);
    if (num >= 1 && num <= 4) {
      const btns = document.querySelectorAll('.answer-btn');
      if (btns[num - 1]) btns[num - 1].click();
    }
  }
});

// ── BOOT ─────────────────────────────────────────────────────

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('total-questions').textContent = QUESTIONS.length;
  buildCatChecklist();
  showScreen('start');
});