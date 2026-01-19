/**
 * GANGETABELL QUIZ
 * 
 * En interaktiv quiz for å øve på gangetabellen.
 * Støtter ulike vanskelighetsgrader (1-5, 1-10, 1-20) konfigurert via HTML.
 * 
 * @version 1.0
 * @date 2026-01-14
 */

// DOM-ELEMENTER
const quizContainer = document.getElementById('quiz-container');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const nextButton = document.getElementById('next-btn');
const scoreEl = document.getElementById('score-container');
const questionCounterEl = document.getElementById('question-counter');

// QUIZ-TILSTAND
let allPossibleQuestions = [];
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
const DEFAULT_NUM_QUESTIONS_TO_ASK = 20;
let NUM_QUESTIONS_TO_ASK = DEFAULT_NUM_QUESTIONS_TO_ASK;
let MAX_TABLE_NUMBER;

// TILBAKEMELDINGER
const correctFeedbackMessages = [
    "🎉 Helt riktig!",
    "👏 Utmerket!",
    "✅ Bra jobbet!",
    "⭐ Perfekt!",
    "💯 Flott svar!",
    "🌟 Fantastisk!",
    "🎯 Riktig i blinken!",
    "🚀 Du er på fyr og flamme!",
    "🏆 Mesterstatus!",
    "💪 Du er sterk på matte!"
];

const incorrectFeedbackMessages = [
    "❌ Ikke helt, riktig svar var ",
    "😕 Nesten! Riktig svar var ",
    "🔄 Prøv igjen! Riktig svar var ",
    "📚 Lær av dette! Riktig svar var ",
    "💭 Ikke helt der, riktig svar var ",
    "🤔 Hmmm, det var faktisk ",
    "⚡ Nærmere neste gang! Svaret var ",
    "🎯 Litt ved siden, riktig var "
];

// SPØRSMÅLSGENERERING
function generateAllPossibleQuestions() {
    allPossibleQuestions = [];
    
    for (let i = 1; i <= MAX_TABLE_NUMBER; i++) {
        for (let j = 1; j <= MAX_TABLE_NUMBER; j++) {
            const correctAnswer = i * j;
            let questionText = `${i} × ${j} = ?`;
            
            // Visuell representasjon for små tall
            if (MAX_TABLE_NUMBER <= 5) {
                const visual_i = '●'.repeat(i);
                const visual_j = '●'.repeat(j);
                questionText += `<br><span class="visual-math">${visual_i} × ${visual_j}</span>`;
            }

            // Generer svaralternativer
            let options = new Set();
            options.add(correctAnswer);

            let attempts = 0;
            while (options.size < 4 && attempts < 50) {
                attempts++;
                let distractor;
                const type = Math.random();

                if (type < 0.5 || correctAnswer < 5) {
                    const maxOffset = Math.max(3, Math.floor(correctAnswer * 0.3)) + (options.size * 2);
                    const offset = (Math.floor(Math.random() * maxOffset) + 1) * (Math.random() < 0.5 ? 1 : -1);
                    distractor = correctAnswer + offset;
                } else if (type < 0.75) {
                    const i_offset = (Math.random() < 0.5 && i > 1) ? -1 : 1;
                    distractor = (i + i_offset) * j;
                } else {
                    const j_offset = (Math.random() < 0.5 && j > 1) ? -1 : 1;
                    distractor = i * (j + j_offset);
                }

                if (distractor > 0 && !options.has(distractor)) {
                    options.add(distractor);
                }
            }
            
            let fallbackValue = 1;
            while (options.size < 4) {
                if (!options.has(fallbackValue) && fallbackValue !== correctAnswer) {
                    options.add(fallbackValue);
                }
                fallbackValue++;
                if (fallbackValue > correctAnswer + 20 && fallbackValue > 60) break;
            }

            allPossibleQuestions.push({
                text: questionText,
                options: shuffleArray(Array.from(options)),
                answer: correctAnswer
            });
        }
    }
    
    if (allPossibleQuestions.length < NUM_QUESTIONS_TO_ASK) {
        NUM_QUESTIONS_TO_ASK = allPossibleQuestions.length;
    }
}

function selectRandomQuestions() {
    currentQuestions = shuffleArray([...allPossibleQuestions]).slice(0, NUM_QUESTIONS_TO_ASK);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// QUIZ-FUNKSJONER
let selectedAnswerValue = null;
let selectedButtonElement = null;

function displayQuestion() {
    if (currentQuestionIndex < currentQuestions.length) {
        const q = currentQuestions[currentQuestionIndex];
        questionEl.innerHTML = q.text; 
        questionCounterEl.textContent = `Spørsmål ${currentQuestionIndex + 1} av ${currentQuestions.length}`;
        optionsEl.innerHTML = '';
        feedbackEl.textContent = '';
        
        q.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            button.addEventListener('click', () => handleOptionClick(option, button));
            optionsEl.appendChild(button);
        });

        nextButton.textContent = 'Sjekk Svar';
        nextButton.style.display = 'none';
        document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = false);
    } else {
        showResults();
    }
}

function handleOptionClick(option, buttonEl) {
    if (nextButton.textContent === 'Neste Spørsmål' || nextButton.textContent === 'Se Resultater') {
        return;
    }

    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    buttonEl.classList.add('selected');
    selectedAnswerValue = option;
    selectedButtonElement = buttonEl;
    nextButton.style.display = 'block';
}

function handleNextButtonClick() {
    if (nextButton.textContent === 'Sjekk Svar') {
        if (selectedAnswerValue === null) {
            feedbackEl.textContent = "Vennligst velg et svar.";
            feedbackEl.style.color = "#e67e22";
            return;
        }

        const currentQ = currentQuestions[currentQuestionIndex];
        const correctAnswer = currentQ.answer;

        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            if (parseInt(btn.textContent) === correctAnswer) {
                btn.classList.add('correct');
            }
        });

        if (selectedAnswerValue === correctAnswer) {
            score++;
            const randomCorrectMsg = correctFeedbackMessages[Math.floor(Math.random() * correctFeedbackMessages.length)];
            feedbackEl.textContent = randomCorrectMsg;
            feedbackEl.style.color = "#2ecc71";
            if (selectedButtonElement) selectedButtonElement.classList.add('correct');
        } else {
            const randomIncorrectMsg = incorrectFeedbackMessages[Math.floor(Math.random() * incorrectFeedbackMessages.length)];
            feedbackEl.textContent = `${randomIncorrectMsg}${correctAnswer}.`;
            feedbackEl.style.color = "#e74c3c";
            if (selectedButtonElement) selectedButtonElement.classList.add('incorrect');
        }

        if (currentQuestionIndex < currentQuestions.length - 1) {
            nextButton.textContent = 'Neste Spørsmål';
        } else {
            nextButton.textContent = 'Se Resultater';
        }

    } else if (nextButton.textContent === 'Neste Spørsmål') {
        currentQuestionIndex++;
        selectedAnswerValue = null;
        selectedButtonElement = null;
        displayQuestion();
    } else if (nextButton.textContent === 'Se Resultater') {
        showResults();
    }
}

function showResults() {
    quizContainer.style.display = 'none';
    scoreEl.style.display = 'block';
    
    const percentage = Math.round((score / currentQuestions.length) * 100);
    let message = '';
    
    if (percentage >= 90) {
        message = '🌟 Fantastisk! Du er en gangetabell-mester!';
    } else if (percentage >= 75) {
        message = '👏 Flott! Du kan dette godt!';
    } else if (percentage >= 60) {
        message = '👍 Bra jobbet! Fortsett å øve!';
    } else if (percentage >= 50) {
        message = '😊 Greit! Prøv gjerne igjen!';
    } else {
        message = '📚 Fortsett å øve, så blir du bedre!';
    }
    
    scoreEl.innerHTML = `
        <h2>Quiz Ferdig!</h2>
        <p style="font-size: 1.5em; margin: 20px 0;">Du fikk ${score} av ${currentQuestions.length} riktige<br>(${percentage}%)</p>
        <p style="font-size: 1.2em; margin: 20px 0;">${message}</p>
        <button id="restart-btn">Start på nytt</button>
    `;
    document.getElementById('restart-btn').addEventListener('click', startQuiz);
}

function startQuiz() {
    NUM_QUESTIONS_TO_ASK = DEFAULT_NUM_QUESTIONS_TO_ASK;
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswerValue = null;
    selectedButtonElement = null;
    
    generateAllPossibleQuestions();
    selectRandomQuestions();

    quizContainer.style.display = 'block';
    scoreEl.style.display = 'none';
    feedbackEl.textContent = '';
    
    nextButton.removeEventListener('click', handleNextButtonClick);
    nextButton.addEventListener('click', handleNextButtonClick);
    
    displayQuestion();
}

// INITIALISER
document.addEventListener('DOMContentLoaded', () => {
    const defaultMaxTable = 20;
    const maxTableAttr = document.body.dataset.maxTable;
    MAX_TABLE_NUMBER = maxTableAttr ? parseInt(maxTableAttr, 10) : defaultMaxTable;

    const quizTitleElement = document.querySelector('.app-container > h1');
    if (quizTitleElement) {
        quizTitleElement.textContent = `Gangetabell Quiz (1-${MAX_TABLE_NUMBER})`;
    }
    document.title = `Gangetabell Quiz (1-${MAX_TABLE_NUMBER})`;

    startQuiz();
});