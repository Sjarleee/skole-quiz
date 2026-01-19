/**
 * ORDKLASSE QUIZ
 * 
 * En interaktiv quiz for å lære forskjellen mellom adjektiv, verb og substantiv.
 * Quizen velger tilfeldig 10 ord fra en større ordbank og tester eleven.
 * 
 * @author Skolequiz Prosjekt
 * @version 1.1
 * @date 2026-01-19
 */

// ============================================================================
// DOM-ELEMENTER
// ============================================================================

const questionWordEl = document.getElementById('question-word');
const optionsContainer = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const questionCounterEl = document.getElementById('question-counter');
const quizContainer = document.getElementById('quiz-container');
const scoreContainer = document.getElementById('score-container');
const scoreTextEl = document.getElementById('score-text');
const restartBtn = document.getElementById('restart-btn');

// ============================================================================
// KONFIGURASJON
// ============================================================================

/** De tre ordklassene som testes */
const wordClasses = ["Adjektiv", "Verb", "Substantiv"];

/** Antall spørsmål per quiz */
const totalQuizQuestions = 10;

// ============================================================================
// ORDBANK
// ============================================================================

/**
 * Komplett ordbank med 200+ norske ord fordelt på tre ordklasser.
 */
const allQuestions = [
    { word: "hus", type: "Substantiv" },
    { word: "løper", type: "Verb" },
    { word: "grønn", type: "Adjektiv" },
    { word: "bok", type: "Substantiv" },
    { word: "tenker", type: "Verb" },
    { word: "lykkelig", type: "Adjektiv" },
    { word: "ser", type: "Verb" },
    { word: "stor", type: "Adjektiv" },
    { word: "lærer", type: "Substantiv" },
    { word: "hjalp", type: "Verb" },
    { word: "gammel", type: "Adjektiv" },
    { word: "Norge", type: "Substantiv" },
    { word: "svømme", type: "Verb" },
    { word: "norsk", type: "Adjektiv" },
    { word: "bil", type: "Substantiv" },
    { word: "synger", type: "Verb" },
    { word: "rask", type: "Adjektiv" },
    { word: "katt", type: "Substantiv" },
    { word: "spiser", type: "Verb" },
    { word: "liten", type: "Adjektiv" },
    { word: "sol", type: "Substantiv" },
    { word: "danser", type: "Verb" },
    { word: "vakker", type: "Adjektiv" },
    { word: "tre", type: "Substantiv" },
    { word: "skriver", type: "Verb" },
    { word: "kald", type: "Adjektiv" },
    { word: "vann", type: "Substantiv" },
    { word: "leser", type: "Verb" },
    { word: "varm", type: "Adjektiv" },
    { word: "fjell", type: "Substantiv" },
    { word: "tegner", type: "Verb" },
    { word: "snill", type: "Adjektiv" },
    { word: "mat", type: "Substantiv" },
    { word: "sover", type: "Verb" },
    { word: "trist", type: "Adjektiv" },
    { word: "by", type: "Substantiv" },
    { word: "hopper", type: "Verb" },
    { word: "ny", type: "Adjektiv" },
    { word: "dag", type: "Substantiv" },
    { word: "snakker", type: "Verb" },
    { word: "lang", type: "Adjektiv" },
    { word: "venn", type: "Substantiv" },
    { word: "leker", type: "Verb" },
    { word: "sterk", type: "Adjektiv" },
    { word: "fisk", type: "Substantiv" },
    { word: "flyr", type: "Verb" },
    { word: "sint", type: "Adjektiv" },
    { word: "jobb", type: "Substantiv" },
    { word: "hører", type: "Verb" },
    { word: "tung", type: "Adjektiv" },
    { word: "sang", type: "Substantiv" },
    { word: "smiler", type: "Verb" },
    { word: "morsom", type: "Adjektiv" },
    { word: "år", type: "Substantiv" },
    { word: "reiser", type: "Verb" },
    { word: "redd", type: "Adjektiv" },
    { word: "barn", type: "Substantiv" },
    { word: "gråter", type: "Verb" },
    { word: "sur", type: "Adjektiv" },
    { word: "ball", type: "Substantiv" },
    { word: "elsker", type: "Verb" },
    { word: "sulten", type: "Adjektiv" },
    { word: "måne", type: "Substantiv" },
    { word: "kjører", type: "Verb" },
    { word: "tørst", type: "Adjektiv" },
    { word: "vindu", type: "Substantiv" },
    { word: "åpner", type: "Verb" },
    { word: "lys", type: "Adjektiv" },
    { word: "drøm", type: "Substantiv" },
    { word: "ønsker", type: "Verb" },
    { word: "modig", type: "Adjektiv" },
    { word: "blomst", type: "Substantiv" },
    { word: "vokser", type: "Verb" },
    { word: "myk", type: "Adjektiv" },
    { word: "gress", type: "Substantiv" },
    { word: "klipper", type: "Verb" },
    { word: "hard", type: "Adjektiv" },
    { word: "stein", type: "Substantiv" },
    { word: "kaster", type: "Verb" },
    { word: "rund", type: "Adjektiv" },
    { word: "sky", type: "Substantiv" },
    { word: "regner", type: "Verb" },
    { word: "våt", type: "Adjektiv" },
    { word: "snø", type: "Substantiv" },
    { word: "fryser", type: "Verb" },
    { word: "hvit", type: "Adjektiv" },
    { word: "is", type: "Substantiv" },
    { word: "smelter", type: "Verb" },
    { word: "klar", type: "Adjektiv" },
    { word: "stjerne", type: "Substantiv" },
    { word: "skinner", type: "Verb" },
    { word: "mørk", type: "Adjektiv" },
    { word: "natt", type: "Substantiv" },
    { word: "våkner", type: "Verb" },
    { word: "tidlig", type: "Adjektiv" },
    { word: "morgen", type: "Substantiv" },
    { word: "hilser", type: "Verb" },
    { word: "vennlig", type: "Adjektiv" },
    { word: "familie", type: "Substantiv" },
    { word: "besøker", type: "Verb" },
    { word: "koselig", type: "Adjektiv" },
    { word: "eventyr", type: "Substantiv" },
    { word: "forteller", type: "Verb" },
    { word: "spennende", type: "Adjektiv" },
    { word: "hemmelighet", type: "Substantiv" },
    { word: "visker", type: "Verb" },
    { word: "stille", type: "Adjektiv" },
    { word: "musikk", type: "Substantiv" },
    { word: "spiller", type: "Verb" },
    { word: "høy", type: "Adjektiv" },
    { word: "latter", type: "Substantiv" },
    { word: "ler", type: "Verb" },
    { word: "glad", type: "Adjektiv" },
    { word: "vei", type: "Substantiv" },
    { word: "bygger", type: "Verb" },
    { word: "bred", type: "Adjektiv" },
    { word: "elv", type: "Substantiv" },
    { word: "renner", type: "Verb" },
    { word: "dyp", type: "Adjektiv" },
    { word: "bro", type: "Substantiv" },
    { word: "krysser", type: "Verb" },
    { word: "langsom", type: "Adjektiv" },
    { word: "tog", type: "Substantiv" },
    { word: "stopper", type: "Verb" },
    { word: "full", type: "Adjektiv" },
    { word: "buss", type: "Substantiv" },
    { word: "venter", type: "Verb" },
    { word: "tom", type: "Adjektiv" },
    { word: "flyplass", type: "Substantiv" },
    { word: "lander", type: "Verb" },
    { word: "trygg", type: "Adjektiv" },
    { word: "skip", type: "Substantiv" },
    { word: "seiler", type: "Verb" },
    { word: "rolig", type: "Adjektiv" },
    { word: "hav", type: "Substantiv" },
    { word: "bølger", type: "Verb" },
    { word: "blå", type: "Adjektiv" },
    { word: "sand", type: "Substantiv" },
    { word: "graver", type: "Verb" },
    { word: "fin", type: "Adjektiv" },
    { word: "øy", type: "Substantiv" },
    { word: "oppdager", type: "Verb" },
    { word: "fjern", type: "Adjektiv" },
    { word: "skog", type: "Substantiv" },
    { word: "vandrer", type: "Verb" },
    { word: "grønne", type: "Adjektiv" },
    { word: "sti", type: "Substantiv" },
    { word: "følger", type: "Verb" },
    { word: "smal", type: "Adjektiv" }
];

// ============================================================================
// QUIZ-TILSTAND
// ============================================================================

/** Ordene som brukes i gjeldende quiz-runde */
let currentQuestions = [];

/** Indeks for nåværende spørsmål (0-basert) */
let currentQuestionIndex = 0;

/** Antall riktige svar i gjeldende runde */
let score = 0;

// ============================================================================
// HJELPEFUNKSJONER
// ============================================================================

/**
 * Stokker en array tilfeldig ved hjelp av Fisher-Yates algoritme
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ============================================================================
// QUIZ-FUNKSJONER
// ============================================================================

/**
 * Starter en ny quiz-runde
 */
function startGame() {
    // Nullstill tilstand
    currentQuestionIndex = 0;
    score = 0;
    
    // Stokk ordbanken og velg tilfeldige ord
    const shuffledQuestions = [...allQuestions];
    shuffleArray(shuffledQuestions);
    currentQuestions = shuffledQuestions.slice(0, totalQuizQuestions);
    
    // Vis quiz, skjul resultat
    quizContainer.style.display = 'block';
    scoreContainer.style.display = 'none';
    nextBtn.style.display = 'none';
    feedbackEl.textContent = '';
    
    // Last første spørsmål
    loadQuestion();
}

/**
 * Laster gjeldende spørsmål
 */
function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endQuiz();
        return;
    }

    const currentWordData = currentQuestions[currentQuestionIndex];
    questionWordEl.textContent = currentWordData.word;
    questionCounterEl.textContent = `Ord ${currentQuestionIndex + 1} av ${currentQuestions.length}`;
    optionsContainer.innerHTML = '';
    feedbackEl.textContent = '';
    feedbackEl.style.color = '';
    nextBtn.style.display = 'none';

    wordClasses.forEach(wordClass => {
        const button = document.createElement('button');
        button.textContent = wordClass;
        button.classList.add('option-btn');
        button.addEventListener('click', () => checkAnswer(wordClass, currentWordData.type, button));
        optionsContainer.appendChild(button);
    });
}

/**
 * Sjekker svar og gir tilbakemelding
 */
function checkAnswer(selectedType, correctType, button) {
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correctType) {
            btn.classList.add('correct');
        } else if (btn === button && selectedType !== correctType) {
            btn.classList.add('wrong');
        }
    });

    if (selectedType === correctType) {
        feedbackEl.textContent = '✓ Riktig!';
        feedbackEl.style.color = 'green';
        score++;
    } else {
        feedbackEl.textContent = `✗ Feil. Riktig svar var ${correctType}.`;
        feedbackEl.style.color = 'red';
    }
    nextBtn.style.display = 'inline-block';
}

/**
 * Avslutter quizen og viser resultater
 */
function endQuiz() {
    quizContainer.style.display = 'none';
    scoreContainer.style.display = 'block';
    
    const percentage = (score / currentQuestions.length) * 100;
    let message = "";

    if (percentage === 100) {
        message = "🎉 Fantastisk! Alle riktige!";
    } else if (percentage >= 80) {
        message = "🌟 Kjempebra jobba!";
    } else if (percentage >= 60) {
        message = "👍 Bra forsøk!";
    } else {
        message = "💪 Fortsett å øve!";
    }
    
    scoreTextEl.textContent = `Du fikk ${score} av ${currentQuestions.length} riktige.\n${message}`;
}

// ============================================================================
// EVENT LISTENERS
// ============================================================================

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('correct', 'wrong');
        btn.disabled = false;
    });
    loadQuestion();
});

restartBtn.addEventListener('click', startGame);

// ============================================================================
// INITIALISER
// ============================================================================

// Start spillet når siden lastes
startGame();
