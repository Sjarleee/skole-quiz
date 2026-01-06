/**
 * QUIZ ENGINE - Generisk system for å lage interaktive quizer
 * 
 * Dette scriptet inneholder all kjernefunksjonalitet for å kjøre ulike
 * typer quizer med visuell tilbakemelding og talesyntese.
 * 
 * HVORDAN LEGGE TIL EN NY QUIZ:
 * 1. Kopier en eksisterende quiz-konfigurasjon (se nederst i filen)
 * 2. Opprett en ny HTML-fil som laster inn dette scriptet
 * 3. Kall startQuiz() med din egen konfigurasjon
 * 
 * @version 1.0
 * @date 2026-01-06
 */

// ============================================================================
// KONFIGURASJON OG KONSTANTER
// ============================================================================

/**
 * Standard konfigurasjon for quiz-systemet
 * Disse verdiene kan overstyres i hver enkelt quiz-konfigurasjon
 */
const DEFAULT_CONFIG = {
    numOptions: 3,              // Antall svaralternativer som vises
    feedbackMessages: {
        correct: ["Bra!", "Kjempebra!", "Riktig!", "Supert!", "Fantastisk!"],
        wrong: "Feil, forsøk igjen!"
    },
    audioEnabled: true,         // Aktiver talesyntese
    nextButtonText: "Neste runde!",
    homeLink: "index.html"      // Lenke tilbake til hovedside
};

// ============================================================================
// GLOBALE VARIABLER
// ============================================================================

let quizConfig = null;          // Gjeldende quiz-konfigurasjon
let currentTarget = null;       // Nåværende riktig svar
let preferredVoice = null;      // Foretrukket talestemme
let currentRoundOptions = [];   // Svaralternativer i nåværende runde

// DOM-elementer (initialiseres ved oppstart)
let questionEl, optionsContainer, feedbackEl, nextButton;

// ============================================================================
// TALE-SYNTESE (TEXT-TO-SPEECH)
// ============================================================================

/**
 * Oppdaterer listen over tilgjengelige stemmer for talesyntese
 * Prioriterer norske stemmer, spesielt Google-stemmer hvis tilgjengelig
 */
function updateVoiceList() {
    if (!('speechSynthesis' in window)) return;
    
    const voices = speechSynthesis.getVoices();
    if (voices.length === 0 && speechSynthesis.onvoiceschanged === null) {
        speechSynthesis.onvoiceschanged = updateVoiceList;
        return;
    }

    // Prioriter norske stemmer, gjerne Google-stemmer hvis tilgjengelig
    preferredVoice = voices.find(voice => voice.lang === 'nb-NO' && /google/i.test(voice.name)) ||
                     voices.find(voice => voice.lang === 'nb-NO');
}

/**
 * Uttaler tekst med talesyntese
 * 
 * @param {string} text - Teksten som skal uttales
 * @param {string} lang - Språkkode (standard: 'nb-NO')
 * @param {Function} callback - Funksjon som kjøres når talen er ferdig
 */
function speak(text, lang = 'nb-NO', callback) {
    if (!quizConfig.audioEnabled || !('speechSynthesis' in window)) {
        if (typeof callback === 'function') {
            setTimeout(callback, 0);
        }
        return;
    }

    // Stopp eventuell pågående tale
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    if (preferredVoice) {
        utterance.voice = preferredVoice;
    }

    if (typeof callback === 'function') {
        utterance.onend = function() {
            utterance.onend = null;
            callback();
        };
        utterance.onerror = function(event) {
            console.error('Feil med talesyntese:', event);
            utterance.onerror = null;
            callback();
        };
    }
    speechSynthesis.speak(utterance);
}

// ============================================================================
// HJELPEFUNKSJONER
// ============================================================================

/**
 * Stokker en array tilfeldig (Fisher-Yates algoritme)
 * 
 * @param {Array} array - Array som skal stokkes (endres in-place)
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Velger et tilfeldig element fra en array
 * 
 * @param {Array} array - Array å velge fra
 * @returns {*} Tilfeldig element fra arrayen
 */
function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// ============================================================================
// QUIZ-LOGIKK
// ============================================================================

/**
 * Starter en ny runde i quizen
 * 
 * Denne funksjonen:
 * 1. Nullstiller UI
 * 2. Velger et nytt målsvar
 * 3. Genererer svaralternativer
 * 4. Viser spørsmålet og uttaler det
 */
function startNewRound() {
    // Nullstill UI
    feedbackEl.textContent = '';
    feedbackEl.className = '';
    nextButton.style.display = 'none';
    optionsContainer.innerHTML = '';

    // Velg tilfeldige alternativer og et målsvar
    const allOptions = [...quizConfig.options];
    shuffleArray(allOptions);
    currentRoundOptions = allOptions.slice(0, quizConfig.numOptions);
    currentTarget = randomChoice(currentRoundOptions);

    // Generer spørsmålet
    const questionText = quizConfig.generateQuestion(currentTarget);
    questionEl.textContent = questionText;
    speak(questionText);

    // Vis svaralternativene
    shuffleArray(currentRoundOptions);
    currentRoundOptions.forEach(option => {
        const element = quizConfig.renderOption(option);
        element.dataset.optionId = option.id;
        element.addEventListener('click', handleOptionClick);
        optionsContainer.appendChild(element);
    });
}

/**
 * Håndterer klikk på et svaralternativ
 * 
 * @param {Event} event - Click event fra brukerens klikk
 */
function handleOptionClick(event) {
    const clickedElement = event.currentTarget;
    const clickedId = clickedElement.dataset.optionId;
    
    if (clickedId === currentTarget.id) {
        // RIKTIG SVAR
        handleCorrectAnswer();
        
        // Fjern event listeners for å unngå flere klikk
        document.querySelectorAll('[data-option-id]').forEach(el => {
            el.removeEventListener('click', handleOptionClick);
        });
    } else {
        // FEIL SVAR
        handleWrongAnswer(clickedElement);
    }
}

/**
 * Håndterer riktig svar
 * Viser tilbakemelding og klargjør neste runde
 */
function handleCorrectAnswer() {
    const randomPraise = randomChoice(quizConfig.feedbackMessages.correct);
    feedbackEl.textContent = `🎉 ${randomPraise} 🎉`;
    feedbackEl.className = 'feedback-correct';
    nextButton.style.display = 'inline-block';

    speak(randomPraise, 'nb-NO', () => {
        speak("Klar for neste runde?");
    });
}

/**
 * Håndterer feil svar
 * Viser tilbakemelding og markerer feil alternativ
 * 
 * @param {HTMLElement} element - Elementet som ble klikket feil
 */
function handleWrongAnswer(element) {
    feedbackEl.textContent = quizConfig.feedbackMessages.wrong;
    feedbackEl.className = 'feedback-wrong';
    speak(quizConfig.feedbackMessages.wrong);
    
    // Marker feil valg visuelt
    if (quizConfig.markWrongAnswer) {
        quizConfig.markWrongAnswer(element);
    } else {
        // Standard markering
        element.style.borderColor = '#dc3545';
        setTimeout(() => { 
            element.style.borderColor = 'transparent';
        }, 800);
    }
}

// ============================================================================
// INITIALISERING
// ============================================================================

/**
 * Initialiserer quiz-systemet
 * 
 * @param {Object} config - Quiz-konfigurasjon
 * @param {Array} config.options - Array med alle svaralternativer
 * @param {Function} config.generateQuestion - Funksjon som genererer spørsmålstekst
 * @param {Function} config.renderOption - Funksjon som lager HTML for et svaralternativ
 * @param {number} [config.numOptions] - Antall alternativer per runde
 * @param {Object} [config.feedbackMessages] - Tilbakemeldingsmeldinger
 * @param {boolean} [config.audioEnabled] - Om talesyntese skal brukes
 */
function startQuiz(config) {
    // Slå sammen med standardkonfigurasjon
    quizConfig = {
        ...DEFAULT_CONFIG,
        ...config,
        feedbackMessages: {
            ...DEFAULT_CONFIG.feedbackMessages,
            ...config.feedbackMessages
        }
    };

    // Hent DOM-elementer
    questionEl = document.getElementById('question');
    optionsContainer = document.getElementById('options-container');
    feedbackEl = document.getElementById('feedback');
    nextButton = document.getElementById('next-button');

    if (!questionEl || !optionsContainer || !feedbackEl || !nextButton) {
        console.error('Mangler nødvendige DOM-elementer for quiz');
        return;
    }

    // Sett opp neste-knapp
    nextButton.textContent = quizConfig.nextButtonText;
    nextButton.addEventListener('click', startNewRound);

    // Initialiser talesyntese
    if (quizConfig.audioEnabled && 'speechSynthesis' in window) {
        speechSynthesis.onvoiceschanged = updateVoiceList;
        updateVoiceList();
    }

    // Start første runde
    startNewRound();
}

// ============================================================================
// EKSEMPEL-KONFIGURASJONER
// ============================================================================

/**
 * EKSEMPEL 1: Fargequiz
 * 
 * Bruk denne som mal for å lage lignende quizer:
 */
const colorQuizConfig = {
    // Definer alle svaralternativer
    options: [
        { id: 'red', norwegian: 'røde', hex: '#E74C3C' },
        { id: 'blue', norwegian: 'blå', hex: '#3498DB' },
        { id: 'green', norwegian: 'grønne', hex: '#2ECC71' },
        { id: 'yellow', norwegian: 'gule', hex: '#F1C40F' },
        { id: 'purple', norwegian: 'lilla', hex: '#9B59B6' },
        { id: 'orange', norwegian: 'oransje', hex: '#E67E22' }
    ],
    
    numOptions: 3,
    
    // Funksjon som genererer spørsmålet
    generateQuestion: (target) => {
        return `Kan du trykke på den ${target.norwegian} rundingen?`;
    },
    
    // Funksjon som lager HTML-element for et alternativ
    renderOption: (option) => {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.backgroundColor = option.hex;
        return circle;
    },
    
    // Egendefinert markering av feil svar
    markWrongAnswer: (element) => {
        element.style.borderColor = '#dc3545';
        element.style.borderWidth = '3px';
        setTimeout(() => { 
            element.style.borderColor = 'transparent';
        }, 800);
    }
};

/**
 * EKSEMPEL 2: Dyrelyd-quiz (mal for fremtidig bruk)
 * 
 * const animalSoundQuizConfig = {
 *     options: [
 *         { id: 'cat', norwegian: 'katten', sound: 'mjau', image: 'cat.png' },
 *         { id: 'dog', norwegian: 'hunden', sound: 'voff', image: 'dog.png' },
 *         // ... flere dyr
 *     ],
 *     
 *     numOptions: 4,
 *     
 *     generateQuestion: (target) => {
 *         return `Hvilket dyr sier ${target.sound}?`;
 *     },
 *     
 *     renderOption: (option) => {
 *         const img = document.createElement('img');
 *         img.src = option.image;
 *         img.alt = option.norwegian;
 *         img.classList.add('animal-image');
 *         return img;
 *     }
 * };
 */
