/**
 * ADDISJONSQUIZ
 * 
 * En interaktiv quiz for å øve på addisjon.
 * Finner manglende addend: a + ? = sum (der sum er mellom 0-100)
 * 
 * FUNKSJONER:
 * - Genererer tilfeldige addisjonsspørsmål
 * - 6 svaralternativer
 * - Sum alltid mellom 0-100
 * - Umiddelbar tilbakemelding
 * 
 * @author Skolequiz Prosjekt
 * @version 1.0
 * @date 2026-01-06
 */

document.addEventListener('DOMContentLoaded', () => {
    // ========================================================================
    // DOM-ELEMENTER
    // ========================================================================
    
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('next-btn');
    const scoreContainer = document.getElementById('score-container');
    const quizContainer = document.getElementById('quiz-container');
    const questionCounterElement = document.getElementById('question-counter');

    // ========================================================================
    // KONFIGURASJON
    // ========================================================================
    
    /** Totalt antall spørsmål i quizen */
    const TOTAL_QUESTIONS = 10;
    
    /** Antall svaralternativer per spørsmål */
    const NUMBER_OF_OPTIONS = 6;
    
    // ========================================================================
    // QUIZ-TILSTAND
    // ========================================================================
    
    /** Alle spørsmål i gjeldende quiz-runde */
    let currentQuestions = [];
    
    /** Indeks for nåværende spørsmål */
    let currentQuestionIndex = 0;
    
    /** Antall riktige svar */
    let score = 0;

    // ========================================================================
    // HJELPEFUNKSJONER
    // ========================================================================
    
    /**
     * Stokker en array tilfeldig ved hjelp av Fisher-Yates algoritme.
     * Endrer arrayen in-place.
     * 
     * @param {Array} array - Arrayen som skal stokkes
     */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // ========================================================================
    // SPØRSMÅLSGENERERING
    // ========================================================================
    
    /**
     * Genererer ett enkelt addisjonsspørsmål.
     * Format: a + ? = sum
     * 
     * Algoritme:
     * 1. Velg en tilfeldig sum mellom 0-100
     * 2. Velg tilfeldig første addend (a) mellom 0 og sum
     * 3. Beregn manglende addend: ? = sum - a
     * 4. Generer 5 feil alternativer
     * 
     * @returns {Object} Spørsmålsobjekt med tekst, alternativer og svar
     */
    function generateSingleQuestion() {
        // Velg tilfeldig sum (resultatet av addisjonen)
        const sumResult = Math.floor(Math.random() * 101); // 0-100
        
        // Velg første addend (det kjente tallet)
        const num1 = Math.floor(Math.random() * (sumResult + 1));
        
        // Beregn manglende addend (det vi spør om)
        const correctAnswer = sumResult - num1;

        // Lag spørsmålsteksten
        const questionText = `${num1} + ? = ${sumResult}`;

        // Generer svaralternativer
        const options = new Set();
        options.add(correctAnswer); // Legg til riktig svar

    // ========================================================================
    // QUIZ-FUNKSJONER
    // ========================================================================
    
    /**
     * Viser gjeldende spørsmål med svaralternativer.
     * Hvis alle spørsmål er besvart, vises resultatene.
     */
        // Generer unike feilalternativer
        while (options.size < NUMBER_OF_OPTIONS) {
            const randomOption = Math.floor(Math.random() * 101); // 0-100
            options.add(randomOption);
        }

        // Konverter til array og stokk
        const optionsArray = Array.from(options);
        shuffleArray(optionsArray);

        return {
            question: questionText,
            options: optionsArray,
            answer: correctAnswer
        };
    }

    /**
     * Genererer alle spørsmål for quizen.
     * Lager TOTAL_QUESTIONS nye spørsmål.
     */
    function generateAllQuestions() {
        currentQuestions = [];
        for (let i = 0; i < TOTAL_QUESTIONS; i++) {
            currentQuestions.push(generateSingleQuestion());
        }
    }

    function displayQuestion() {
        if (currentQuestionIndex < TOTAL_QUESTIONS) {
            const questionData = currentQuestions[currentQuestionIndex];
            questionElement.textContent = questionData.question;
            questionCounterElement.textContent = `Spørsmål ${currentQuestionIndex + 1} av ${TOTAL_QUESTIONS}`;

            optionsContainer.innerHTML = '';
            questionData.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('option-btn'); // Forventer styling fra style.css
                button.addEventListener('click', () => selectAnswer(option, questionData.answer));
                optionsContainer.appendChild(button);
            });

            feedbackElement.textContent = '';
    /**
     * Håndterer valg av et svar.
     * Sjekker om svaret er riktig og gir tilbakemelding.
     * 
     * @param {number} selectedOption - Svaret eleven valgte
     * @param {number} correctAnswer - Det riktige svaret
     */
            feedbackElement.className = 'feedback';
            nextButton.style.display = 'none';
            enableOptionButtons(true);
        } else {
            showResults();
        }
    /**
     * Aktiverer eller deaktiverer svarknapper.
     * Brukes for å hindre flere klikk etter at svar er gitt.
     * 
     * @param {boolean} enable - true for å aktivere, false for å deaktivere
     */
    }
/**
     * Viser sluttresultatene og restart-knapp.
     */
    
    function selectAnswer(selectedOption, correctAnswer) {
        enableOptionButtons(false);
        if (selectedOption === correctAnswer) {
            feedbackElement.textContent = 'Riktig!';
            feedbackElement.className = 'feedback correct'; // For styling av riktig svar
            score++;
        } else {
    /**
     * Starter (eller restarter) quizen.
     * Nullstiller tilstand, genererer nye spørsmål, og viser første spørsmål.
     */
            feedbackElement.textContent = `Feil. Riktig svar var ${correctAnswer}.`;
            feedbackElement.className = 'feedback incorrect'; // For styling av feil svar
        }
        nextButton.style.display = 'block';
    }

    function enableOptionButtons(enable) {
        const optionButtons = optionsContainer.querySelectorAll('.option-btn');
        optionButtons.forEach(button => {
            button.disabled = !enable;
        });
    }

    // ========================================================================
    // EVENT LISTENERS
    // ========================================================================
    
    /**
     * Håndterer klikk på "Neste Spørsmål"-knappen.
     * Går til neste spørsmål.
     */
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        displayQuestion();
    });

    // ========================================================================
    // INITIALISER
    // ========================================================================
    
    // Start quizen når siden lastes
    startQuiz();OTAL_QUESTIONS} riktige.</p>
            <button id="restart-btn" class="button">Spill Igjen</button>
        `;
        document.getElementById('restart-btn').addEventListener('click', startQuiz);
    }

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        generateAllQuestions();
        scoreContainer.style.display = 'none';
        quizContainer.style.display = 'block';
        displayQuestion();
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        displayQuestion();
    });

    startQuiz(); // Initialiser quizen
});