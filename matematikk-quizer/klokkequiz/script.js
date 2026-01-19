/**
 * KLOKKEQUIZ
 * 
 * En interaktiv quiz for å øve på å lese analog klokke.
 * Viser en urskive med visere og eleven skal velge riktige ord.
 * 
 * FUNKSJONER:
 * - Tegner analog klokke med visere
 * - Ordbokser som klikkes i riktig rekkefølge
 * - Støtter ulike tidsuttrykk (kvart over, halv, etc.)
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
    
    const questionCounterElement = document.getElementById('question-counter');
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const selectedWordsElement = document.getElementById('selected-words');
    const wordOptionsElement = document.getElementById('word-options');
    const feedbackElement = document.getElementById('feedback');
    const checkButton = document.getElementById('check-btn');
    const clearButton = document.getElementById('clear-btn');
    const nextButton = document.getElementById('next-btn');
    const scoreContainer = document.getElementById('score-container');
    const quizContainer = document.getElementById('quiz-container');

    // ========================================================================
    // KONFIGURASJON
    // ========================================================================
    
    const TOTAL_QUESTIONS = 10;
    
    // Ordbank for å bygge tidsuttrykk
    const WORD_BANK = {
        minutes: ['fem', 'ti', 'kvart', 'tjue'],
        prepositions: ['over', 'på'],
        half: ['halv'],
        numbers: ['ett', 'to', 'tre', 'fire', 'fem', 'seks', 'sju', 'åtte', 'ni', 'ti', 'elleve', 'tolv'],
        exact: ['klokka']
    };

    // ========================================================================
    // QUIZ-TILSTAND
    // ========================================================================
    
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let selectedWords = [];

    // ========================================================================
    // HJELPEFUNKSJONER
    // ========================================================================
    
    /**
     * Stokker en array tilfeldig
     */
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    /**
     * Tegner minuttstreker på urskiven
     */
    function drawMinuteMarks() {
        const marksGroup = document.getElementById('minute-marks');
        marksGroup.innerHTML = '';
        
        for (let i = 0; i < 60; i++) {
            const angle = (i * 6 - 90) * Math.PI / 180;
            const isHourMark = i % 5 === 0;
            const innerRadius = isHourMark ? 85 : 90;
            const outerRadius = 95;
            
            const x1 = 100 + innerRadius * Math.cos(angle);
            const y1 = 100 + innerRadius * Math.sin(angle);
            const x2 = 100 + outerRadius * Math.cos(angle);
            const y2 = 100 + outerRadius * Math.sin(angle);
            
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', x1);
            line.setAttribute('y1', y1);
            line.setAttribute('x2', x2);
            line.setAttribute('y2', y2);
            line.setAttribute('stroke', '#333');
            line.setAttribute('stroke-width', isHourMark ? '2' : '1');
            
            marksGroup.appendChild(line);
        }
    }

    /**
     * Oppdaterer klokkens visere
     */
    function updateClock(hours, minutes) {
        // Minuttviser (6 grader per minutt)
        const minuteAngle = minutes * 6 - 90;
        const minuteRad = minuteAngle * Math.PI / 180;
        const minuteX = 100 + 55 * Math.cos(minuteRad);
        const minuteY = 100 + 55 * Math.sin(minuteRad);
        
        minuteHand.setAttribute('x2', minuteX);
        minuteHand.setAttribute('y2', minuteY);
        
        // Timeviser (30 grader per time + 0.5 grader per minutt)
        const hourAngle = ((hours % 12) * 30 + minutes * 0.5) - 90;
        const hourRad = hourAngle * Math.PI / 180;
        const hourX = 100 + 40 * Math.cos(hourRad);
        const hourY = 100 + 40 * Math.sin(hourRad);
        
        hourHand.setAttribute('x2', hourX);
        hourHand.setAttribute('y2', hourY);
    }

    /**
     * Konverterer tall til ordform
     */
    function numberToWord(num) {
        const words = ['null', 'ett', 'to', 'tre', 'fire', 'fem', 'seks', 
                       'sju', 'åtte', 'ni', 'ti', 'elleve', 'tolv'];
        return words[num] || num.toString();
    }

    /**
     * Genererer tidsbeskrivelse basert på time og minutt
     */
    function generateTimeDescription(hours, minutes) {
        const hourWord = numberToWord(hours);
        
        if (minutes === 0) {
            return {
                words: ['klokka', hourWord],
                description: `klokka ${hourWord}`
            };
        } else if (minutes === 15) {
            return {
                words: ['kvart', 'over', hourWord],
                description: `kvart over ${hourWord}`
            };
        } else if (minutes === 30) {
            const nextHour = numberToWord(hours === 12 ? 1 : hours + 1);
            return {
                words: ['halv', nextHour],
                description: `halv ${nextHour}`
            };
        } else if (minutes === 45) {
            const nextHour = numberToWord(hours === 12 ? 1 : hours + 1);
            return {
                words: ['kvart', 'på', nextHour],
                description: `kvart på ${nextHour}`
            };
        } else if (minutes === 5) {
            return {
                words: ['fem', 'over', hourWord],
                description: `fem over ${hourWord}`
            };
        } else if (minutes === 10) {
            return {
                words: ['ti', 'over', hourWord],
                description: `ti over ${hourWord}`
            };
        } else if (minutes === 20) {
            return {
                words: ['tjue', 'over', hourWord],
                description: `tjue over ${hourWord}`
            };
        } else if (minutes === 25) {
            const nextHour = numberToWord(hours === 12 ? 1 : hours + 1);
            return {
                words: ['fem', 'på', 'halv', nextHour],
                description: `fem på halv ${nextHour}`
            };
        } else if (minutes === 35) {
            const nextHour = numberToWord(hours === 12 ? 1 : hours + 1);
            return {
                words: ['fem', 'over', 'halv', nextHour],
                description: `fem over halv ${nextHour}`
            };
        } else if (minutes === 40) {
            const nextHour = numberToWord(hours === 12 ? 1 : hours + 1);
            return {
                words: ['tjue', 'på', nextHour],
                description: `tjue på ${nextHour}`
            };
        } else if (minutes === 50) {
            const nextHour = numberToWord(hours === 12 ? 1 : hours + 1);
            return {
                words: ['ti', 'på', nextHour],
                description: `ti på ${nextHour}`
            };
        } else if (minutes === 55) {
            const nextHour = numberToWord(hours === 12 ? 1 : hours + 1);
            return {
                words: ['fem', 'på', nextHour],
                description: `fem på ${nextHour}`
            };
        }
        
        // Fallback for andre minutter (brukes ikke i denne versjonen)
        return {
            words: ['klokka', hourWord],
            description: `klokka ${hourWord}`
        };
    }

    // ========================================================================
    // SPØRSMÅLSGENERERING
    // ========================================================================
    
    /**
     * Genererer ett enkelt klokkespørsmål
     */
    function generateSingleQuestion() {
        // Mulige minutter: 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55
        const possibleMinutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
        const minutes = possibleMinutes[Math.floor(Math.random() * possibleMinutes.length)];
        
        // Timer: 1-12
        const hours = Math.floor(Math.random() * 12) + 1;
        
        // Generer beskrivelse
        const timeInfo = generateTimeDescription(hours, minutes);
        
        // Generer distraktorer (feil ord)
        const distractors = [];
        const allPossibleWords = [
            ...WORD_BANK.minutes,
            ...WORD_BANK.prepositions,
            ...WORD_BANK.half,
            ...WORD_BANK.numbers,
            ...WORD_BANK.exact
        ];
        
        // Velg 3-5 distraktorer som ikke er i riktig svar
        const numDistractors = Math.floor(Math.random() * 3) + 3;
        let attempts = 0;
        while (distractors.length < numDistractors && attempts < 50) {
            const word = allPossibleWords[Math.floor(Math.random() * allPossibleWords.length)];
            if (!timeInfo.words.includes(word) && !distractors.includes(word)) {
                distractors.push(word);
            }
            attempts++;
        }
        
        // Kombiner riktige ord og distraktorer
        const allWords = shuffleArray([...timeInfo.words, ...distractors]);
        
        return {
            hours: hours,
            minutes: minutes,
            correctWords: timeInfo.words,
            allWords: allWords,
            description: timeInfo.description
        };
    }

    /**
     * Genererer alle spørsmål for quizen
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
     * Viser gjeldende spørsmål
     */
    function displayQuestion() {
        if (currentQuestionIndex < TOTAL_QUESTIONS) {
            const question = currentQuestions[currentQuestionIndex];
            
            // Oppdater teller
            questionCounterElement.textContent = `Spørsmål ${currentQuestionIndex + 1} av ${TOTAL_QUESTIONS}`;
            
            // Oppdater klokka
            updateClock(question.hours, question.minutes);
            
            // Nullstill valgte ord
            selectedWords = [];
            updateSelectedWordsDisplay();
            
            // Vis ordalternativer
            wordOptionsElement.innerHTML = '';
            question.allWords.forEach((word, index) => {
                const button = document.createElement('button');
                button.textContent = word;
                button.classList.add('word-btn');
                button.dataset.word = word;
                button.addEventListener('click', () => selectWord(word, button));
                wordOptionsElement.appendChild(button);
            });
            
            // Nullstill feedback og knapper
            feedbackElement.textContent = '';
            feedbackElement.className = 'feedback';
            checkButton.style.display = 'inline-block';
            clearButton.style.display = 'inline-block';
            nextButton.style.display = 'none';
            
            // Aktiver alle knapper
            enableWordButtons(true);
        } else {
            showResults();
        }
    }

    /**
     * Håndterer valg av ord
     */
    function selectWord(word, button) {
        if (!button.classList.contains('selected')) {
            selectedWords.push(word);
            button.classList.add('selected');
            button.disabled = true;
            updateSelectedWordsDisplay();
        }
    }

    /**
     * Oppdaterer visning av valgte ord
     */
    function updateSelectedWordsDisplay() {
        if (selectedWords.length === 0) {
            selectedWordsElement.innerHTML = '<span class="placeholder">Velg ord...</span>';
        } else {
            selectedWordsElement.textContent = selectedWords.join(' ');
        }
    }

    /**
     * Tømmer valgte ord
     */
    function clearSelectedWords() {
        selectedWords = [];
        updateSelectedWordsDisplay();
        
        // Reaktiver alle ordknapper
        const buttons = wordOptionsElement.querySelectorAll('.word-btn');
        buttons.forEach(button => {
            button.classList.remove('selected');
            button.disabled = false;
        });
    }

    /**
     * Sjekker om svaret er riktig
     */
    function checkAnswer() {
        const question = currentQuestions[currentQuestionIndex];
        
        // Sjekk om svar er riktig
        const isCorrect = selectedWords.length === question.correctWords.length &&
                         selectedWords.every((word, index) => word === question.correctWords[index]);
        
        if (isCorrect) {
            feedbackElement.innerHTML = '<span class="feedback-icon">✓</span> Riktig!';
            feedbackElement.className = 'feedback correct';
            score++;
        } else {
            const hours = question.hours;
            const minutes = question.minutes;
            let explanation = '';
            
            // Lag forklaring basert på tid
            if (minutes === 0) {
                explanation = `Hele timer sier vi "klokka" + timetallet.`;
            } else if (minutes === 15) {
                explanation = `15 minutter over er det samme som kvart over.`;
            } else if (minutes === 30) {
                explanation = `30 minutter er halvveis til neste time, derfor "halv" + neste time.`;
            } else if (minutes === 45) {
                explanation = `15 minutter før neste time er "kvart på".`;
            } else if (minutes < 30) {
                explanation = `Når klokka er ${minutes} minutter over, sier vi antall minutter + "over" + timetallet.`;
            } else if (minutes > 30) {
                explanation = `Når klokka er over halv, teller vi minutter til neste time.`;
            }
            
            feedbackElement.innerHTML = `
                <span class="feedback-icon">✗</span> Feil. 
                <div class="feedback-answer">Riktig svar: <strong>${question.description}</strong></div>
                <div class="feedback-explanation">${explanation}</div>
            `;
            feedbackElement.className = 'feedback incorrect';
        }
        
        // Skjul sjekk-knapp, vis neste-knapp
        checkButton.style.display = 'none';
        clearButton.style.display = 'none';
        nextButton.style.display = 'block';
        
        // Deaktiver ordknapper
        enableWordButtons(false);
    }

    /**
     * Aktiverer eller deaktiverer ordknapper
     */
    function enableWordButtons(enable) {
        const buttons = wordOptionsElement.querySelectorAll('.word-btn');
        buttons.forEach(button => {
            if (enable && !button.classList.contains('selected')) {
                button.disabled = false;
            } else if (!enable) {
                button.disabled = true;
            }
        });
    }

    /**
     * Viser sluttresultater
     */
    function showResults() {
        quizContainer.style.display = 'none';
        scoreContainer.style.display = 'block';
        
        const percentage = Math.round((score / TOTAL_QUESTIONS) * 100);
        let message = '';
        
        if (percentage === 100) {
            message = '🎉 Perfekt! Du kan lese klokka som en mester!';
        } else if (percentage >= 80) {
            message = '🌟 Veldig bra! Du er flink til å lese klokka!';
        } else if (percentage >= 60) {
            message = '👍 Bra jobbet! Du lærer fort!';
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
     * Starter eller restarter quizen
     */
    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        selectedWords = [];
        generateAllQuestions();
        scoreContainer.style.display = 'none';
        quizContainer.style.display = 'block';
        displayQuestion();
    }

    // ========================================================================
    // EVENT LISTENERS
    // ========================================================================
    
    checkButton.addEventListener('click', checkAnswer);
    clearButton.addEventListener('click', clearSelectedWords);
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        displayQuestion();
    });

    // ========================================================================
    // INITIALISER
    // ========================================================================
    
    drawMinuteMarks();
    startQuiz();
});
