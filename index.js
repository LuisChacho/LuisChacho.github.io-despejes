// BANCO COMPLETO DE 40 PREGUNTAS DE DESPEJES DE FÓRMULAS
const questions = [
  // FÍSICA: CINEMÁTICA Y DINÁMICA (1-10)
  {
    id: 1,
    topic: "Cinemática (MRU)",
    text: "En la ecuación de velocidad $v = \\frac{d}{t}$, despeje el tiempo ($t$):",
    options: ["$t = v \\cdot d$", "$t = \\frac{v}{d}$", "$t = \\frac{d}{v}$", "$t = d + v$"],
    correct: 2
  },
  {
    id: 2,
    topic: "Cinemática (MRUV)",
    text: "En la fórmula $v_f = v_i + a \\cdot t$, despeje la aceleración ($a$):",
    options: ["$a = \\frac{v_f - v_i}{t}$", "$a = \\frac{v_f + v_i}{t}$", "$a = \\frac{t}{v_f - v_i}$", "$a = v_f - v_i \\cdot t$"],
    correct: 0
  },
  {
    id: 3,
    topic: "Cinemática (MRUV)",
    text: "Dada la ecuación $d = v_i \\cdot t + \\frac{1}{2}a t^2$ con $v_i = 0$, despeje el tiempo ($t$):",
    options: ["$t = \\frac{2d}{a}$", "$t = \\sqrt{\\frac{2d}{a}}$", "$t = \\sqrt{\\frac{d}{2a}}$", "$t = \\left(\\frac{2d}{a}\\right)^2$"],
    correct: 1
  },
  {
    id: 4,
    topic: "Dinámica (2da Ley)",
    text: "En la Segunda Ley de Newton $F = m \\cdot a$, despeje la masa ($m$):",
    options: ["$m = \\frac{F}{a}$", "$m = F \\cdot a$", "$m = \\frac{a}{F}$", "$m = F - a$"],
    correct: 0
  },
  {
    id: 5,
    topic: "Fuerza Centrípeta",
    text: "En la fórmula $F_c = \\frac{m v^2}{r}$, despeje el radio ($r$):",
    options: ["$r = \\frac{F_c}{m v^2}$", "$r = \\frac{m v^2}{F_c}$", "$r = m v^2 \\cdot F_c$", "$r = \\sqrt{\\frac{m v}{F_c}}$"],
    correct: 1
  },
  {
    id: 6,
    topic: "Fuerza Centrípeta",
    text: "A partir de $F_c = \\frac{m v^2}{r}$, despeje la velocidad ($v$):",
    options: ["$v = \\frac{F_c \\cdot r}{m}$", "$v = \\sqrt{\\frac{F_c \\cdot r}{m}}$", "$v = \\sqrt{\\frac{F_c \\cdot m}{r}}$", "$v = \\left(\\frac{F_c \\cdot r}{m}\\right)^2$"],
    correct: 1
  },
  {
    id: 7,
    topic: "Gravitación Universal",
    text: "En la Ley de Gravitación $F = G \\frac{m_1 m_2}{r^2}$, despeje la distancia ($r$):",
    options: ["$r = \\frac{G m_1 m_2}{F}$", "$r = \\sqrt{\\frac{G m_1 m_2}{F}}$", "$r = \\sqrt{\\frac{F}{G m_1 m_2}}$", "$r = \\left(\\frac{G m_1 m_2}{F}\\right)^2$"],
    correct: 1
  },
  {
    id: 8,
    topic: "Gravitación Universal",
    text: "Dada $F = G \\frac{m_1 m_2}{r^2}$, despeje la constante de gravitación ($G$):",
    options: ["$G = \\frac{F \\cdot r^2}{m_1 m_2}$", "$G = \\frac{F \\cdot m_1 m_2}{r^2}$", "$G = \\frac{r^2}{F \\cdot m_1 m_2}$", "$G = F \\cdot r^2 \\cdot m_1 m_2$"],
    correct: 0
  },
  {
    id: 9,
    topic: "Trabajo Mecánico",
    text: "En la ecuación $W = F \\cdot d \\cdot \\cos(\\theta)$, despeje el coseno de $\\theta$:",
    options: ["$\\cos(\\theta) = \\frac{F \\cdot d}{W}$", "$\\cos(\\theta) = \\frac{W}{F \\cdot d}$", "$\\cos(\\theta) = W - F \\cdot d$", "$\\cos(\\theta) = \\frac{W \\cdot F}{d}$"],
    correct: 1
  },
  {
    id: 10,
    topic: "Potencia Mecánica",
    text: "En la expresión $P = \\frac{W}{t}$, despeje el trabajo ($W$):",
    options: ["$W = \\frac{P}{t}$", "$W = \\frac{t}{P}$", "$W = P \\cdot t$", "$W = P + t$"],
    correct: 2
  },

  // ENERGÍA Y FLUIDOS (11-20)
  {
    id: 11,
    topic: "Energía Cinética",
    text: "En la expresión $E_k = \\frac{1}{2} m v^2$, despeje la masa ($m$):",
    options: ["$m = \\frac{E_k}{2 v^2}$", "$m = \\frac{2 E_k}{v^2}$", "$m = \\sqrt{\\frac{2 E_k}{v}}$", "$m = 2 E_k \\cdot v^2$"],
    correct: 1
  },
  {
    id: 12,
    topic: "Energía Cinética",
    text: "A partir de $E_k = \\frac{1}{2} m v^2$, despeje la velocidad ($v$):",
    options: ["$v = \\sqrt{\\frac{2 E_k}{m}}$", "$v = \\frac{2 E_k}{m}$", "$v = \\sqrt{\\frac{E_k}{2m}}$", "$v = \\left(\\frac{2 E_k}{m}\\right)^2$"],
    correct: 0
  },
  {
    id: 13,
    topic: "Energía Potencial",
    text: "En la fórmula $E_p = m \\cdot g \\cdot h$, despeje la altura ($h$):",
    options: ["$h = \\frac{E_p}{m \\cdot g}$", "$h = \\frac{m \\cdot g}{E_p}$", "$h = E_p \\cdot m \\cdot g$", "$h = E_p - m \\cdot g$"],
    correct: 0
  },
  {
    id: 14,
    topic: "Presión Hidrostática",
    text: "En la fórmula de presión $P = \\frac{F}{A}$, despeje el área ($A$):",
    options: ["$A = P \\cdot F$", "$A = \\frac{P}{F}$", "$A = \\frac{F}{P}$", "$A = F - P$"],
    correct: 2
  },
  {
    id: 15,
    topic: "Densidad",
    text: "Dada la ecuación $\\rho = \\frac{m}{V}$, despeje el volumen ($V$):",
    options: ["$V = \\rho \\cdot m$", "$V = \\frac{m}{\\rho}$", "$V = \\frac{\\rho}{m}$", "$V = m + \\rho$"],
    correct: 1
  },
  {
    id: 16,
    topic: "Presión Hidrostática",
    text: "En la ecuación $P = \\rho \\cdot g \\cdot h$, despeje la densidad ($\\rho$):",
    options: ["$\\rho = \\frac{P}{g \\cdot h}$", "$\\rho = \\frac{g \\cdot h}{P}$", "$\\rho = P \\cdot g \\cdot h$", "$\\rho = P - g \\cdot h$"],
    correct: 0
  },
  {
    id: 17,
    topic: "Caudal / Flujo",
    text: "En la ecuación de continuidad $Q = A \\cdot v$, despeje la velocidad ($v$):",
    options: ["$v = Q \\cdot A$", "$v = \\frac{A}{Q}$", "$v = \\frac{Q}{A}$", "$v = Q - A$"],
    correct: 2
  },
  {
    id: 18,
    topic: "Ley de Hooke",
    text: "En la Ley de Hooke $F = k \\cdot x$, despeje la constante elástica ($k$):",
    options: ["$k = \\frac{F}{x}$", "$k = F \\cdot x$", "$k = \\frac{x}{F}$", "$k = F - x$"],
    correct: 0
  },
  {
    id: 19,
    topic: "Energía Potencial Elástica",
    text: "Dada $E_e = \\frac{1}{2} k x^2$, despeje la deformación ($x$):",
    options: ["$x = \\sqrt{\\frac{2 E_e}{k}}$", "$x = \\frac{2 E_e}{k}$", "$x = \\sqrt{\\frac{E_e}{2k}}$", "$x = \\left(\\frac{2 E_e}{k}\\right)^2$"],
    correct: 0
  },
  {
    id: 20,
    topic: "Péndulo Simple",
    text: "En el periodo del péndulo $T = 2\\pi \\sqrt{\\frac{L}{g}}$, despeje la longitud ($L$):",
    options: ["$L = g \\left(\\frac{T}{2\\pi}\\right)^2$", "$L = \\frac{g \\cdot T}{2\\pi}$", "$L = \\sqrt{\\frac{T \\cdot g}{2\\pi}}$", "$L = \\frac{2\\pi T^2}{g}$"],
    correct: 0
  },

  // ELECTRICIDAD Y TERMODINÁMICA (21-30)
  {
    id: 21,
    topic: "Ley de Ohm",
    text: "En la Ley de Ohm $V = I \\cdot R$, despeje la corriente ($I$):",
    options: ["$I = \\frac{V}{R}$", "$I = V \\cdot R$", "$I = \\frac{R}{V}$", "$I = V - R$"],
    correct: 0
  },
  {
    id: 22,
    topic: "Potencia Eléctrica",
    text: "A partir de la potencia $P = I^2 \\cdot R$, despeje la corriente ($I$):",
    options: ["$I = \\frac{P}{R}$", "$I = \\sqrt{\\frac{P}{R}}$", "$I = \\left(\\frac{P}{R}\\right)^2$", "$I = \\sqrt{P \\cdot R}$"],
    correct: 1
  },
  {
    id: 23,
    topic: "Ley de Coulomb",
    text: "En la Ley de Coulomb $F = K_e \\frac{q_1 q_2}{r^2}$, despeje la distancia ($r$):",
    options: ["$r = \\sqrt{\\frac{K_e q_1 q_2}{F}}$", "$r = \\frac{K_e q_1 q_2}{F}$", "$r = \\sqrt{\\frac{F}{K_e q_1 q_2}}$", "$r = \\left(\\frac{K_e q_1 q_2}{F}\\right)^2$"],
    correct: 0
  },
  {
    id: 24,
    topic: "Capacidad Eléctrica",
    text: "En la ecuación $Q = C \\cdot V$, despeje la capacitancia ($C$):",
    options: ["$C = \\frac{Q}{V}$", "$C = Q \\cdot V$", "$C = \\frac{V}{Q}$", "$C = Q - V$"],
    correct: 0
  },
  {
    id: 25,
    topic: "Calorimetría",
    text: "En la ecuación de calor $Q = m \\cdot c \\cdot \\Delta T$, despeje el calor específico ($c$):",
    options: ["$c = \\frac{Q}{m \\cdot \\Delta T}$", "$c = \\frac{m \\cdot \\Delta T}{Q}$", "$c = Q \\cdot m \\cdot \\Delta T$", "$c = Q - m - \\Delta T$"],
    correct: 0
  },
  {
    id: 26,
    topic: "Gases Ideales",
    text: "En la Ley de Gases Ideales $P \\cdot V = n \\cdot R \\cdot T$, despeje la temperatura ($T$):",
    options: ["$T = \\frac{P \\cdot V}{n \\cdot R}$", "$T = \\frac{n \\cdot R}{P \\cdot V}$", "$T = P \\cdot V \\cdot n \\cdot R$", "$T = \\frac{P \\cdot n}{V \\cdot R}$"],
    correct: 0
  },
  {
    id: 27,
    topic: "Gases Ideales",
    text: "Dada $P \\cdot V = n \\cdot R \\cdot T$, despeje los moles ($n$):",
    options: ["$n = \\frac{P \\cdot V}{R \\cdot T}$", "$n = \\frac{R \\cdot T}{P \\cdot V}$", "$n = P \\cdot V \\cdot R \\cdot T$", "$n = \\frac{P \\cdot T}{V \\cdot R}$"],
    correct: 0
  },
  {
    id: 28,
    topic: "Dilatación Térmica",
    text: "En la fórmula $\\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T$, despeje el coeficiente $\\alpha$:",
    options: ["$\\alpha = \\frac{\\Delta L}{L_0 \\cdot \\Delta T}$", "$\\alpha = \\frac{L_0 \\cdot \\Delta T}{\\Delta L}$", "$\\alpha = \\Delta L \\cdot L_0 \\cdot \\Delta T$", "$\\alpha = \\Delta L - L_0 - \\Delta T$"],
    correct: 0
  },
  {
    id: 29,
    topic: "Ondas",
    text: "En la ecuación de onda $v = \\lambda \\cdot f$, despeje la longitud de onda ($\\lambda$):",
    options: ["$\\lambda = \\frac{v}{f}$", "$\\lambda = v \\cdot f$", "$\\lambda = \\frac{f}{v}$", "$\\lambda = v - f$"],
    correct: 0
  },
  {
    id: 30,
    topic: "Frecuencia y Periodo",
    text: "En la relación $f = \\frac{1}{T}$, despeje el periodo ($T$):",
    options: ["$T = f$", "$T = \\frac{1}{f}$", "$T = 1 - f$", "$T = f^2$"],
    correct: 1
  },

  // MATEMÁTICAS Y ÁLGEBRA (31-40)
  {
    id: 31,
    topic: "Álgebra Lineal",
    text: "En la ecuación de la recta $y = m \\cdot x + b$, despeje la pendiente ($m$):",
    options: ["$m = \\frac{y - b}{x}$", "$m = \\frac{y + b}{x}$", "$m = x(y - b)$", "$m = \\frac{x}{y - b}$"],
    correct: 0
  },
  {
    id: 32,
    topic: "Álgebra Lineal",
    text: "En la ecuación $y = m \\cdot x + b$, despeje la variable ($x$):",
    options: ["$x = \\frac{y - b}{m}$", "$x = \\frac{y + b}{m}$", "$x = m(y - b)$", "$x = \\frac{m}{y - b}$"],
    correct: 0
  },
  {
    id: 33,
    topic: "Teorema de Pitágoras",
    text: "En la ecuación $c^2 = a^2 + b^2$, despeje el cateto ($a$):",
    options: ["$a = \\sqrt{c^2 - b^2}$", "$a = \\sqrt{c^2 + b^2}$", "$a = c - b$", "$a = (c - b)^2$"],
    correct: 0
  },
  {
    id: 34,
    topic: "Geometría (Área)",
    text: "En el área del círculo $A = \\pi \\cdot r^2$, despeje el radio ($r$):",
    options: ["$r = \\sqrt{\\frac{A}{\\pi}}$", "$r = \\frac{A}{\\pi}$", "$r = \\sqrt{A \\cdot \\pi}$", "$r = \\left(\\frac{A}{\\pi}\\right)^2$"],
    correct: 0
  },
  {
    id: 35,
    topic: "Geometría (Volumen)",
    text: "En el volumen de la esfera $V = \\frac{4}{3} \\pi r^3$, despeje el radio ($r$):",
    options: ["$r = \\sqrt[3]{\\frac{3V}{4\\pi}}$", "$r = \\frac{3V}{4\\pi}$", "$r = \\sqrt{\\frac{3V}{4\\pi}}$", "$r = \\sqrt[3]{\\frac{4V}{3\\pi}}$"],
    correct: 0
  },
  {
    id: 36,
    topic: "Geometría (Trapecio)",
    text: "En el área del trapecio $A = \\frac{(B + b) \\cdot h}{2}$, despeje la altura ($h$):",
    options: ["$h = \\frac{2A}{B + b}$", "$h = \\frac{A}{2(B + b)}$", "$h = \\frac{2A(B + b)}{1}$", "$h = 2A - B - b$"],
    correct: 0
  },
  {
    id: 37,
    topic: "Interés Simple",
    text: "En la fórmula $I = C \\cdot i \\cdot t$, despeje la tasa de interés ($i$):",
    options: ["$i = \\frac{I}{C \\cdot t}$", "$i = \\frac{C \\cdot t}{I}$", "$i = I \\cdot C \\cdot t$", "$i = I - C \\cdot t$"],
    correct: 0
  },
  {
    id: 38,
    topic: "Ecuación Cuadrática",
    text: "En la forma $y = a(x - h)^2 + k$, despeje $(x - h)$:",
    options: ["$(x - h) = \\sqrt{\\frac{y - k}{a}}$", "$(x - h) = \\frac{y - k}{a}$", "$(x - h) = \\sqrt{\\frac{y + k}{a}}$", "$(x - h) = \\left(\\frac{y - k}{a}\\right)^2$"],
    correct: 0
  },
  {
    id: 39,
    topic: "Trigonometría",
    text: "En la razón $\\sin(\\theta) = \\frac{C_o}{H}$, despeje la hipotenusa ($H$):",
    options: ["$H = \\frac{C_o}{\\sin(\\theta)}$", "$H = C_o \\cdot \\sin(\\theta)$", "$H = \\frac{\\sin(\\theta)}{C_o}$", "$H = C_o - \\sin(\\theta)$"],
    correct: 0
  },
  {
    id: 40,
    topic: "Logaritmos",
    text: "En la ecuación $N = N_0 \\cdot e^{k t}$, despeje la constante ($k$):",
    options: ["$k = \\frac{\\ln(N / N_0)}{t}$", "$k = t \\cdot \\ln(N / N_0)$", "$k = \\frac{\\ln(N - N_0)}{t}$", "$k = \\frac{N}{N_0 \\cdot t}$"],
    correct: 0
  }
];

// ESTADO GLOBAL DE LA APLICACIÓN
let studentData = { name: '', class: '', date: '' };
let currentQuestionIndex = 0;
let userAnswers = {};
let bookmarks = {};
let strikes = 0;
const maxStrikes = 3;
let totalTime = 50 * 60; // 50 minutos
let timerInterval = null;
let isExamActive = false;

document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});

// CAPAS DE SEGURIDAD KIOSK
function setupSecurity() {
  document.addEventListener('contextmenu', e => e.preventDefault());

  document.addEventListener('keydown', e => {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
      (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 'c' || e.key === 'C' || e.key === 'v' || e.key === 'V'))
    ) {
      e.preventDefault();
    }
  });

  document.addEventListener('visibilitychange', handleSecurityViolation);
  window.addEventListener('blur', handleSecurityViolation);

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement && isExamActive) {
      handleSecurityViolation();
    }
  });
}

function handleSecurityViolation() {
  if (!isExamActive) return;

  strikes++;
  document.getElementById('strikeCounter').innerText = `${strikes} / ${maxStrikes}`;
  document.getElementById('securityModal').classList.remove('hidden');

  if (strikes >= maxStrikes) {
    document.getElementById('securityMessage').innerText = "Exceso de infracciones de seguridad. Su examen será enviado automáticamente.";
    setTimeout(() => {
      document.getElementById('securityModal').classList.add('hidden');
      submitExam();
    }, 2000);
  }
}

function resumeExam() {
  if (strikes < maxStrikes) {
    document.getElementById('securityModal').classList.add('hidden');
    requestFullscreen();
  }
}

function requestFullscreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch(() => {});
  }
}

// INICIO Y CONTROL DEL EXAMEN
function initExam(e) {
  e.preventDefault();

  studentData.name = document.getElementById('studentName').value;
  studentData.class = document.getElementById('studentClass').value;
  studentData.date = new Date().toLocaleDateString('es-EC');

  document.getElementById('userInfoDisplay').innerText = `${studentData.name} | ${studentData.class}`;

  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('examScreen').classList.remove('hidden');

  isExamActive = true;
  setupSecurity();
  requestFullscreen();

  loadSavedState();
  startTimer();

  renderSidebar();
  renderQuestion();
}

function startTimer() {
  timerInterval = setInterval(() => {
    totalTime--;
    saveState();

    const mins = Math.floor(totalTime / 60);
    const secs = totalTime % 60;
    document.getElementById('timer').innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    if (totalTime <= 0) {
      clearInterval(timerInterval);
      submitExam();
    }
  }, 1000);
}

function renderQuestion() {
  const q = questions[currentQuestionIndex];
  document.getElementById('questionTopic').innerText = q.topic;
  document.getElementById('questionNumber').innerText = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;

  const qTextElement = document.getElementById('questionText');
  qTextElement.innerHTML = parseMath(q.text);

  const container = document.getElementById('optionsContainer');
  container.innerHTML = '';

  const optionLetters = ['A', 'B', 'C', 'D'];

  q.options.forEach((opt, idx) => {
    const isSelected = userAnswers[q.id] === idx;
    const btn = document.createElement('button');
    btn.className = `option-btn w-full text-left p-4 rounded-xl border flex items-center justify-between ${
      isSelected 
        ? 'bg-brand-600/20 border-brand-500 text-white shadow-lg shadow-brand-500/10' 
        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:border-slate-700'
    }`;
    btn.onclick = () => selectOption(q.id, idx);
    btn.innerHTML = `
      <div class="flex items-center space-x-3">
        <span class="w-7 h-7 rounded-lg text-xs font-bold font-mono flex items-center justify-center ${isSelected ? 'bg-brand-500 text-white' : 'bg-slate-800 text-slate-400'}">
          ${optionLetters[idx]}
        </span>
        <span class="text-sm md:text-base">${parseMath(opt)}</span>
      </div>
      <div class="w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? 'border-brand-500 bg-brand-500' : 'border-slate-700'}">
        ${isSelected ? '<div class="w-2 h-2 rounded-full bg-white"></div>' : ''}
      </div>
    `;
    container.appendChild(btn);
  });

  const bookmarkBtn = document.getElementById('bookmarkBtn');
  if (bookmarks[q.id]) {
    bookmarkBtn.classList.add('text-amber-400', 'border-amber-500/40', 'bg-amber-500/10');
  } else {
    bookmarkBtn.classList.remove('text-amber-400', 'border-amber-500/40', 'bg-amber-500/10');
  }

  renderKaTeX();

  document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
  document.getElementById('nextBtn').querySelector('span').innerText = (currentQuestionIndex === questions.length - 1) ? "Finalizar Prueba" : "Siguiente";
}

function parseMath(text) {
  return text.replace(/\$(.*?)\$/g, (match, formula) => {
    return `<span class="math-inline">${formula}</span>`;
  });
}

function renderKaTeX() {
  if (window.katex) {
    document.querySelectorAll('.math-inline').forEach(el => {
      if (!el.classList.contains('rendered')) {
        katex.render(el.textContent, el, {
          throwOnError: false,
          displayMode: false
        });
        el.classList.add('rendered');
      }
    });
  }
}

function selectOption(qId, optionIdx) {
  userAnswers[qId] = optionIdx;
  saveState();
  renderQuestion();
  renderSidebar();
}

function toggleBookmark() {
  const qId = questions[currentQuestionIndex].id;
  bookmarks[qId] = !bookmarks[qId];
  saveState();
  renderQuestion();
  renderSidebar();
}

function navigateQuestion(direction) {
  if (direction === 1 && currentQuestionIndex === questions.length - 1) {
    confirmSubmission();
    return;
  }
  currentQuestionIndex += direction;
  renderQuestion();
}

function renderSidebar() {
  const grid = document.getElementById('questionGrid');
  grid.innerHTML = '';

  let answeredCount = 0;
  questions.forEach((q, idx) => {
    const isAnswered = userAnswers[q.id] !== undefined;
    const isBookmarked = bookmarks[q.id];
    if (isAnswered) answeredCount++;

    const btn = document.createElement('button');
    btn.className = `h-9 w-full rounded-lg font-mono text-xs font-semibold transition-all flex items-center justify-center ${
      currentQuestionIndex === idx 
        ? 'ring-2 ring-brand-500 font-bold' 
        : ''
    } ${
      isAnswered 
        ? 'bg-brand-600 text-white' 
        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:bg-slate-800'
    } ${isBookmarked ? 'bookmarked-item' : ''}`;
    btn.innerText = idx + 1;
    btn.onclick = () => {
      currentQuestionIndex = idx;
      renderQuestion();
    };
    grid.appendChild(btn);
  });

  const pct = Math.round((answeredCount / questions.length) * 100);
  document.getElementById('progressText').innerText = `${pct}%`;
  document.getElementById('progressBar').style.width = `${pct}%`;
  document.getElementById('sidebarCount').innerText = `${answeredCount}/${questions.length}`;
}

// PERSISTENCIA EN LOCALSTORAGE
function saveState() {
  const state = {
    studentData,
    userAnswers,
    bookmarks,
    totalTime,
    strikes,
    currentQuestionIndex
  };
  localStorage.setItem('formula_eval_state', JSON.stringify(state));
}

function loadSavedState() {
  const saved = localStorage.getItem('formula_eval_state');
  if (saved) {
    const parsed = JSON.parse(saved);
    userAnswers = parsed.userAnswers || {};
    bookmarks = parsed.bookmarks || {};
    totalTime = parsed.totalTime || totalTime;
    strikes = parsed.strikes || 0;
    currentQuestionIndex = parsed.currentQuestionIndex || 0;
  }
}

// FINALIZACIÓN Y REPORTE
function confirmSubmission() {
  if (confirm("¿Está seguro de que desea finalizar la prueba?")) {
    submitExam();
  }
}

function submitExam() {
  isExamActive = false;
  clearInterval(timerInterval);
  localStorage.removeItem('formula_eval_state');

  if (document.exitFullscreen) {
    document.exitFullscreen().catch(() => {});
  }

  let correctAnswers = 0;
  questions.forEach(q => {
    if (userAnswers[q.id] === q.correct) {
      correctAnswers++;
    }
  });
  const score = ((correctAnswers / questions.length) * 10).toFixed(2);

  document.getElementById('examScreen').classList.add('hidden');
  document.getElementById('resultScreen').classList.remove('hidden');

  document.getElementById('resStudentName').innerText = studentData.name;
  document.getElementById('resStudentClass').innerText = studentData.class;
  document.getElementById('resDate').innerText = studentData.date;
  document.getElementById('resStrikes').innerText = `${strikes} infracciones`;
  document.getElementById('scoreDisplay').innerText = score;

  lucide.createIcons();
}

function downloadPDF() {
  const element = document.getElementById('pdfContent');
  const opt = {
    margin:       10,
    filename:     `Reporte_${studentData.name.replace(/\s+/g, '_')}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, backgroundColor: '#0f172a' },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save();
}

function resetApp() {
  localStorage.clear();
  window.location.reload();
}