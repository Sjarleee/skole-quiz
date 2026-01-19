/**
 * HALVERINGSQUIZ
 * 
 * En interaktiv quiz for å øve på halvering av tall.
 * Spør om halvparten av tall mellom 0 og 200.
 * 
 * FUNKSJONER:
 * - Genererer tilfeldige halveringsspørsmål
 * - 6 svaralternativer
 * - Tall mellom 0-200
 * - Umiddelbar tilbakemelding
 * 
 * @author Skolequiz Prosjekt
 * @version 1.0
 * @date 2026-01-19
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
     * Genererer ett enkelt halveringsspørsmål.
     * Format: Hva er halvparten av X?
     * 
     * Algoritme:
     * 1. Velg et tilfeldig partall mellom 0-200
     * 2. Beregn halvparten (riktig svar)
     * 3. Generer 5 feil alternativer
     * 
     * @returns {Object} Spørsmålsobjekt med tekst, alternativer og svar
     */
    function generateSingleQuestion() {
        // Velg et tilfeldig partall mellom 0-200 (for å få hele tall som svar)
        const number = Math.floor(Math.random() * 101) * 2; // 0, 2, 4, ..., 200
        
        // Beregn halvparten (det riktige svaret)
        const correctAnswer = number / 2;

        // Lag spørsmålsteksten
        const questionText = `Hva er halvparten av ${number}?`;

        // Generer svaralternativer
        const options = new Set();
        options.add(correctAnswer); // Legg til riktig svar

        // Generer unike feilalternativer
        while (options.size < NUMBER_OF_OPTIONS) {
            // Generer alternativer i nærheten av riktig svar
            let randomOption;
            const strategy = Math.random();
            
            if (strategy < 0.3) {
                // Noen ganger: halvparten +/- 1-5
                randomOption = correctAnswer + Math.floor(Math.random() * 11) - 5;
            } else if (strategy < 0.6) {
                // Noen ganger: vanlige feil (f.eks. hele tallet, tallet -10, etc.)
                const commonErrors = [
                    number,          // Hele tallet (vanlig feil)
                    number - 10,     // Tallet minus 10
                    correctAnswer * 2, // Dobbelt så mye
                    Math.floor(correctAnswer / 2) // Kvart
                ];
                randomOption = commonErrors[Math.floor(Math.random() * commonErrors.length)];
            } else {
                // Ellers: tilfeldig tall mellom 0-100
                randomOption = Math.floor(Math.random() * 101);
            }
            
            // Sørg for at svaret er gyldig (ikke negativt)
            if (randomOption >= 0 && randomOption <= 100) {
                options.add(randomOption);
            }
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

    // ========================================================================
    // QUIZ-FUNKSJONER
    // ========================================================================
    
    /**
     * Viser gjeldende spørsmål med svaralternativer.
     * Hvis alle spørsmål er besvart, vises resultatene.
     */
    function displayQuestion() {
        if (currentQuestionIndex < TOTAL_QUESTIONS) {
            const questionData = currentQuestions[currentQuestionIndex];
            questionElement.textContent = questionData.question;
            questionCounterElement.textContent = `Spørsmål ${currentQuestionIndex + 1} av ${TOTAL_QUESTIONS}`;

            optionsContainer.innerHTML = '';
            questionData.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('option-btn');
                button.addEventListener('click', () => selectAnswer(option, questionData.answer));
                optionsContainer.appendChild(button);
            });

            feedbackElement.textContent = '';
            feedbackElement.className = 'feedback';
            nextButton.style.display = 'none';
            enableOptionButtons(true);
        } else {
            showResults();
        }
    }

    /**
     * Håndterer valg av et svar.
     * Sjekker om svaret er riktig og gir tilbakemelding.
     * 
     * @param {number} selectedOption - Svaret eleven valgte
     * @param {number} correctAnswer - Det riktige svaret
     */
    function selectAnswer(selectedOption, correctAnswer) {
        enableOptionButtons(false);
        if (selectedOption === correctAnswer) {
            feedbackElement.innerHTML = '<span class="feedback-icon">✓</span> Riktig!';
            feedbackElement.className = 'feedback correct';
            score++;
        } else {
            // Finn det opprinnelige tallet
            const originalNumber = correctAnswer * 2;
            
            // Lag en visuell forklaring som viser oppdeling
            const explanation = `Del ${originalNumber} i to like deler:<br>${correctAnswer} + ${correctAnswer} = ${originalNumber}`;
            
            feedbackElement.innerHTML = `
                <div class="feedback-icon">✗</div>
                <div class="feedback-answer">Riktig svar: ${correctAnswer}</div>
                <div class="feedback-explanation">${explanation}</div>
            `;
            feedbackElement.className = 'feedback incorrect';
        }
        nextButton.style.display = 'block';
    }

    /**
     * Aktiverer eller deaktiverer svarknapper.
     * Brukes for å hindre flere klikk etter at svar er gitt.
     * 
     * @param {boolean} enable - true for å aktivere, false for å deaktivere
     */
    function enableOptionButtons(enable) {
        const optionButtons = optionsContainer.querySelectorAll('.option-btn');
        optionButtons.forEach(button => {
            button.disabled = !enable;
        });
    }

    /**
     * Viser sluttresultatene og restart-knapp.
     */
    function showResults() {
        quizContainer.style.display = 'none';
        scoreContainer.style.display = 'block';
        
        const percentage = Math.round((score / TOTAL_QUESTIONS) * 100);
        let message = '';
        
        if (percentage === 100) {
            message = '🎉 Perfekt! Du er en halveringsmester!';
        } else if (percentage >= 80) {
            message = '🌟 Veldig bra! Du er flink til å halvere!';
        } else if (percentage >= 60) {
            message = '👍 Bra jobbet! Du er på god vei!';
        } else {
            message = '💪 Godt forsøk! Øv litt mer, så blir du enda bedre!';
        }
        
        scoreContainer.innerHTML = `
            <h2>Quiz ferdig!</h2>
            <p>${message}</p>
            <p>Du fikk <strong>${score} av ${TOTAL_QUESTIONS}</strong> riktige.</p>
            <p>Det er <strong>${percentage}%</strong> riktig!</p>
            <button id="restart-btn" class="button">Spill Igjen</button>
        `;
        document.getElementById('restart-btn').addEventListener('click', startQuiz);
    }

    /**
     * Starter (eller restarter) quizen.
     * Nullstiller tilstand, genererer nye spørsmål, og viser første spørsmål.
     */
    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        generateAllQuestions();
        scoreContainer.style.display = 'none';
        quizContainer.style.display = 'block';
        displayQuestion();
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
    startQuiz();
});
