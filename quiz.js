// ============================================================
//  PHYSIOLOGY QUIZ — LOGIC
// ============================================================

// --- STATE ---
let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;
let categoryStats = {}; // { "Neurologie": { correct: 0, total: 0 }, ... }

// --- DOM REFS ---
const screens = {
  start:   document.getElementById('screen-start'),
  quiz:    document.getElementById('screen-quiz'),
  result:  document.getElementById('screen-result'),
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

// --- START ---
function startQuiz(mode) {
  let pool = [...QUESTIONS];
  if (mode === 'category') {
    const sel = document.getElementById('category-select').value;
    if (sel !== 'all') pool = pool.filter(q => q.category === sel);
  }
  quizQuestions = shuffle(pool);
  currentIndex = 0;
  score = 0;
  answered = false;
  categoryStats = {};
  // Init category stats
  quizQuestions.forEach(q => {
    if (!categoryStats[q.category]) categoryStats[q.category] = { correct: 0, total: 0 };
    categoryStats[q.category].total++;
  });
  showScreen('quiz');
  renderQuestion();
}

// --- RENDER QUESTION ---
function renderQuestion() {
  answered = false;
  const q = quizQuestions[currentIndex];

  // Progress
  const progress = ((currentIndex) / quizQuestions.length) * 100;
  document.getElementById('progress-bar').style.width = progress + '%';
  document.getElementById('progress-text').textContent = `${currentIndex + 1} / ${quizQuestions.length}`;
  document.getElementById('score-display').textContent = `✓ ${score}`;

  // Category badge
  document.getElementById('question-category').textContent = q.category;

  // Question text
  document.getElementById('question-text').textContent = q.question;

  // Answers
  const container = document.getElementById('answers-container');
  container.innerHTML = '';
  const shuffledAnswers = shuffle(q.answers);
  shuffledAnswers.forEach((ans, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + i)}</span><span class="answer-text">${ans.text}</span>`;
    btn.addEventListener('click', () => selectAnswer(btn, ans, shuffledAnswers, q));
    container.appendChild(btn);
  });

  // Explanation box — hidden
  const expBox = document.getElementById('explanation-box');
  expBox.classList.remove('visible', 'correct', 'wrong');
  expBox.innerHTML = '';

  // Next button
  document.getElementById('next-btn').classList.remove('visible');
}

// --- SELECT ANSWER ---
function selectAnswer(btn, chosen, allAnswers, q) {
  if (answered) return;
  answered = true;

  const isCorrect = chosen.correct;
  if (isCorrect) {
    score++;
    categoryStats[q.category].correct++;
  }

  // Style all buttons
  const allBtns = document.querySelectorAll('.answer-btn');
  allBtns.forEach((b, i) => {
    const ans = allAnswers[i];
    b.disabled = true;
    if (ans.correct) {
      b.classList.add('correct');
    } else if (b === btn && !isCorrect) {
      b.classList.add('wrong');
    } else {
      b.classList.add('faded');
    }
  });

  // Explanation
  const expBox = document.getElementById('explanation-box');
  expBox.classList.add('visible', isCorrect ? 'correct' : 'wrong');
  expBox.innerHTML = `
    <div class="exp-header">${isCorrect ? '✓ Bonne réponse !' : '✗ Mauvaise réponse'}</div>
    <div class="exp-body">${q.explanation}</div>
  `;

  // Next button
  const nextBtn = document.getElementById('next-btn');
  nextBtn.classList.add('visible');
  nextBtn.textContent = currentIndex + 1 < quizQuestions.length ? 'Question suivante →' : 'Voir les résultats →';
}

// --- NEXT ---
function nextQuestion() {
  currentIndex++;
  if (currentIndex < quizQuestions.length) {
    renderQuestion();
    // Scroll back to top of quiz
    document.getElementById('screen-quiz').scrollTo({ top: 0, behavior: 'smooth' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    showResults();
  }
}

// --- RESULTS ---
function showResults() {
  showScreen('result');
  const total = quizQuestions.length;
  const pct = Math.round((score / total) * 100);

  document.getElementById('result-score').textContent = `${score} / ${total}`;
  document.getElementById('result-pct').textContent = `${pct}%`;

  // Feedback message
  let msg = '';
  if (pct >= 90) msg = "Excellent ! Maîtrise quasi parfaite.";
  else if (pct >= 75) msg = "Très bien ! Quelques points à revoir.";
  else if (pct >= 50) msg = "Pas mal, mais il reste du travail.";
  else msg = "À retravailler — les explications sont là pour aider !";
  document.getElementById('result-msg').textContent = msg;

  // Score ring color
  const ring = document.getElementById('score-ring-fill');
  const circumference = 2 * Math.PI * 54;
  ring.style.strokeDasharray = circumference;
  ring.style.strokeDashoffset = circumference * (1 - pct / 100);
  ring.style.stroke = pct >= 75 ? 'var(--green)' : pct >= 50 ? 'var(--yellow)' : 'var(--red)';

  // Category breakdown
  const catContainer = document.getElementById('category-stats');
  catContainer.innerHTML = '';
  Object.entries(categoryStats).sort((a,b) => a[0].localeCompare(b[0])).forEach(([cat, stats]) => {
    const catPct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    const errPct = 100 - catPct;
    const div = document.createElement('div');
    div.className = 'cat-stat';
    div.innerHTML = `
      <div class="cat-stat-header">
        <span class="cat-name">${cat}</span>
        <span class="cat-score">${stats.correct}/${stats.total} — <span class="cat-err" style="color:${errPct > 30 ? 'var(--red)' : errPct > 10 ? 'var(--yellow)' : 'var(--green)'}">${errPct}% d'erreurs</span></span>
      </div>
      <div class="cat-bar-bg"><div class="cat-bar-fill" style="width:${catPct}%; background:${catPct >= 75 ? 'var(--green)' : catPct >= 50 ? 'var(--yellow)' : 'var(--red)'}"></div></div>
    `;
    catContainer.appendChild(div);
  });
}

// --- RESTART ---
function restartQuiz() {
  showScreen('start');
}

// --- INIT START SCREEN ---
function initStartScreen() {
  const sel = document.getElementById('category-select');
  sel.innerHTML = '<option value="all">Toutes les catégories</option>';
  CATEGORIES.sort().forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    sel.appendChild(opt);
  });
  document.getElementById('total-questions').textContent = QUESTIONS.length;
}

// --- KEYBOARD NAVIGATION ---
document.addEventListener('keydown', e => {
  if (screens.quiz.classList.contains('active')) {
    if (answered && (e.key === 'Enter' || e.key === 'ArrowRight')) {
      nextQuestion();
    }
    if (!answered) {
      const num = parseInt(e.key);
      if (num >= 1 && num <= 4) {
        const btns = document.querySelectorAll('.answer-btn');
        if (btns[num - 1]) btns[num - 1].click();
      }
    }
  }
});

// --- BOOT ---
window.addEventListener('DOMContentLoaded', () => {
  initStartScreen();
  showScreen('start');
});