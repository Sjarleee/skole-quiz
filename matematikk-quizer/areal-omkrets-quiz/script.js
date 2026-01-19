/**
 * AREAL OG OMKRETS QUIZ - 5. KLASSE
 * 
 * En interaktiv quiz om areal og omkrets av rettvinklede figurer.
 * Figurene vises på et rutenett der hver rute er 1x1.
 * 
 * @version 1.0
 * @date 2026-01-14
 */

// Beregn areal automatisk basert på rektanglene
function calculateArea(rectangles) {
    // Bygg et grid for å finne alle celler som er fylt
    const cells = new Set();
    rectangles.forEach(rect => {
        for (let y = rect.y; y < rect.y + rect.h; y++) {
            for (let x = rect.x; x < rect.x + rect.w; x++) {
                cells.add(`${x},${y}`);
            }
        }
    });
    return cells.size;
}

// Beregn omkrets automatisk basert på rektanglene
function calculatePerimeter(rectangles) {
    // Bygg et grid for å finne alle celler som er fylt
    const cells = new Set();
    rectangles.forEach(rect => {
        for (let y = rect.y; y < rect.y + rect.h; y++) {
            for (let x = rect.x; x < rect.x + rect.w; x++) {
                cells.add(`${x},${y}`);
            }
        }
    });
    
    // Tell omkrets ved å sjekke hver celle
    let perimeter = 0;
    cells.forEach(cellStr => {
        const [x, y] = cellStr.split(',').map(Number);
        // Sjekk alle 4 sider
        const neighbors = [
            `${x},${y-1}`,    // opp
            `${x},${y+1}`,    // ned
            `${x-1},${y}`,    // venstre
            `${x+1},${y}`     // høyre
        ];
        // Tell hvor mange sider som grenser mot utenfor
        neighbors.forEach(neighbor => {
            if (!cells.has(neighbor)) {
                perimeter++;
            }
        });
    });
    
    return perimeter;
}

// Figurdefinisjoner - hver figur består av rektangler på rutenettet
// Format: {x, y, width, height} der hver enhet = 1 rute
const figures = [
    // Enkle kvadrater og rektangler
    {
        name: "Kvadrat 3x3",
        rectangles: [{x: 2, y: 2, w: 3, h: 3}],
        area: 9,
        perimeter: 12
    },
    {
        name: "Rektangel 4x2",
        rectangles: [{x: 2, y: 3, w: 4, h: 2}],
        area: 8,
        perimeter: 12
    },
    {
        name: "Kvadrat 4x4",
        rectangles: [{x: 1, y: 1, w: 4, h: 4}],
        area: 16,
        perimeter: 16
    },
    {
        name: "Rektangel 5x3",
        rectangles: [{x: 1, y: 2, w: 5, h: 3}],
        area: 15,
        perimeter: 16
    },
    {
        name: "Rektangel 6x2",
        rectangles: [{x: 1, y: 3, w: 6, h: 2}],
        area: 12,
        perimeter: 16
    },
    {
        name: "Kvadrat 5x5",
        rectangles: [{x: 1, y: 1, w: 5, h: 5}],
        area: 25,
        perimeter: 20
    },
    
    // L-former (to bokser)
    {
        name: "L-form 1",
        rectangles: [
            {x: 1, y: 1, w: 3, h: 2},
            {x: 1, y: 3, w: 2, h: 3}
        ],
        area: 12,
        perimeter: 16
    },
    {
        name: "L-form 2",
        rectangles: [
            {x: 2, y: 1, w: 4, h: 2},
            {x: 2, y: 3, w: 2, h: 2}
        ],
        area: 12,
        perimeter: 16
    },
    {
        name: "L-form 3",
        rectangles: [
            {x: 1, y: 1, w: 2, h: 4},
            {x: 3, y: 3, w: 3, h: 2}
        ],
        area: 14,
        perimeter: 18
    },
    
    // T-former
    {
        name: "T-form 1",
        rectangles: [
            {x: 1, y: 1, w: 5, h: 2},
            {x: 2, y: 3, w: 3, h: 2}
        ],
        area: 16,
        perimeter: 20
    },
    {
        name: "T-form 2",
        rectangles: [
            {x: 2, y: 1, w: 2, h: 4},
            {x: 1, y: 4, w: 4, h: 2}
        ],
        area: 16,
        perimeter: 20
    },
    
    // Trapp-former
    {
        name: "Trapp 1",
        rectangles: [
            {x: 1, y: 1, w: 2, h: 2},
            {x: 3, y: 2, w: 2, h: 2},
            {x: 5, y: 3, w: 2, h: 2}
        ],
        area: 12,
        perimeter: 20
    },
    {
        name: "Trapp 2",
        rectangles: [
            {x: 1, y: 2, w: 2, h: 2},
            {x: 3, y: 2, w: 2, h: 3},
            {x: 5, y: 2, w: 2, h: 4}
        ],
        area: 18,
        perimeter: 26
    },
    
    // Plus-form
    {
        name: "Plus-form",
        rectangles: [
            {x: 2, y: 1, w: 2, h: 5},
            {x: 1, y: 2, w: 4, h: 2}
        ],
        area: 14,
        perimeter: 20
    },
    
    // U-form
    {
        name: "U-form",
        rectangles: [
            {x: 1, y: 1, w: 2, h: 4},
            {x: 4, y: 1, w: 2, h: 4},
            {x: 1, y: 5, w: 5, h: 2}
        ],
        area: 18,
        perimeter: 24
    },
    
    // Mer komplekse sammensatte figurer
    {
        name: "Kompleks 1",
        rectangles: [
            {x: 1, y: 1, w: 3, h: 2},
            {x: 2, y: 3, w: 2, h: 2},
            {x: 3, y: 5, w: 3, h: 2}
        ],
        area: 16,
        perimeter: 24
    },
    {
        name: "Kompleks 2",
        rectangles: [
            {x: 1, y: 2, w: 2, h: 2},
            {x: 3, y: 1, w: 2, h: 4},
            {x: 5, y: 2, w: 2, h: 2}
        ],
        area: 16,
        perimeter: 24
    },
    {
        name: "Stor L",
        rectangles: [
            {x: 1, y: 1, w: 5, h: 2},
            {x: 1, y: 3, w: 2, h: 4}
        ],
        area: 18,
        perimeter: 22
    },
    {
        name: "Dobbel boks",
        rectangles: [
            {x: 1, y: 1, w: 3, h: 3},
            {x: 4, y: 2, w: 3, h: 3}
        ],
        area: 18,
        perimeter: 24
    },
    {
        name: "Zigzag",
        rectangles: [
            {x: 1, y: 1, w: 2, h: 2},
            {x: 2, y: 3, w: 2, h: 2},
            {x: 3, y: 5, w: 2, h: 2}
        ],
        area: 12,
        perimeter: 20
    }
];

// Quiz variabler
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 15;
let questions = [];

// DOM elementer
const questionCounter = document.getElementById('question-counter');
const questionEl = document.getElementById('question');
const svgEl = document.getElementById('grid-svg');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const quizContainer = document.getElementById('quiz-container');
const scoreContainer = document.getElementById('score-container');

// Initialiser quiz
function initQuiz() {
    // Velg tilfeldige figurer og lag spørsmål
    const shuffledFigures = shuffle([...figures]);
    questions = [];
    
    for (let i = 0; i < Math.min(totalQuestions, shuffledFigures.length); i++) {
        const figure = shuffledFigures[i];
        
        // Beregn riktig areal og omkrets automatisk
        const calculatedArea = calculateArea(figure.rectangles);
        const calculatedPerimeter = calculatePerimeter(figure.rectangles);
        
        // Avgjør om vi spør om areal eller omkrets
        const askAboutArea = Math.random() < 0.5;
        
        if (askAboutArea) {
            questions.push({
                figure: figure,
                type: 'area',
                question: 'Hva er arealet av figuren?',
                correctAnswer: calculatedArea,
                unit: 'kvadratenheter'
            });
        } else {
            questions.push({
                figure: figure,
                type: 'perimeter',
                question: 'Hva er omkretsen av figuren?',
                correctAnswer: calculatedPerimeter,
                unit: 'enheter'
            });
        }
    }
    
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
}

// Vis spørsmål
function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }
    
    const q = questions[currentQuestionIndex];
    
    questionCounter.textContent = `Spørsmål ${currentQuestionIndex + 1} av ${questions.length}`;
    questionEl.textContent = q.question;
    
    // Tegn figur
    drawFigure(q.figure);
    
    // Generer svaralternativer
    const options = generateOptions(q.correctAnswer, q.type);
    displayOptions(options, q.correctAnswer);
    
    feedbackEl.style.display = 'none';
    feedbackEl.className = '';
    nextBtn.style.display = 'none';
}

// Tegn figur på rutenett
function drawFigure(figure) {
    const gridSize = 8;
    const cellSize = 40;
    const svgWidth = gridSize * cellSize;
    const svgHeight = gridSize * cellSize;
    
    svgEl.setAttribute('width', svgWidth);
    svgEl.setAttribute('height', svgHeight);
    svgEl.innerHTML = '';
    
    // Tegn rutenett
    for (let i = 0; i <= gridSize; i++) {
        // Vertikale linjer
        const vLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        vLine.setAttribute('x1', i * cellSize);
        vLine.setAttribute('y1', 0);
        vLine.setAttribute('x2', i * cellSize);
        vLine.setAttribute('y2', svgHeight);
        vLine.setAttribute('stroke', '#ddd');
        vLine.setAttribute('stroke-width', '1');
        svgEl.appendChild(vLine);
        
        // Horisontale linjer
        const hLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        hLine.setAttribute('x1', 0);
        hLine.setAttribute('y1', i * cellSize);
        hLine.setAttribute('x2', svgWidth);
        hLine.setAttribute('y2', i * cellSize);
        hLine.setAttribute('stroke', '#ddd');
        hLine.setAttribute('stroke-width', '1');
        svgEl.appendChild(hLine);
    }
    
    // Tegn figuren
    figure.rectangles.forEach(rect => {
        const rectangle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rectangle.setAttribute('x', rect.x * cellSize);
        rectangle.setAttribute('y', rect.y * cellSize);
        rectangle.setAttribute('width', rect.w * cellSize);
        rectangle.setAttribute('height', rect.h * cellSize);
        rectangle.setAttribute('fill', '#667eea');
        rectangle.setAttribute('stroke', '#333');
        rectangle.setAttribute('stroke-width', '2');
        rectangle.setAttribute('opacity', '0.7');
        svgEl.appendChild(rectangle);
    });
}

// Generer svaralternativer
function generateOptions(correctAnswer, type) {
    const options = new Set([correctAnswer]);
    
    // Generer feil svar
    while (options.size < 4) {
        let wrongAnswer;
        if (type === 'area') {
            // For areal, lag feil svar som er nære det riktige
            wrongAnswer = correctAnswer + Math.floor(Math.random() * 8) - 4;
            if (wrongAnswer < 1) wrongAnswer = correctAnswer + Math.floor(Math.random() * 5) + 1;
        } else {
            // For omkrets
            wrongAnswer = correctAnswer + Math.floor(Math.random() * 8) - 4;
            if (wrongAnswer < 4) wrongAnswer = correctAnswer + Math.floor(Math.random() * 6) + 1;
        }
        if (wrongAnswer !== correctAnswer && wrongAnswer > 0) {
            options.add(wrongAnswer);
        }
    }
    
    return shuffle([...options]);
}

// Vis svaralternativer
function displayOptions(options, correctAnswer) {
    optionsEl.innerHTML = '';
    
    options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option;
        button.onclick = () => checkAnswer(parseInt(option), correctAnswer, button);
        optionsEl.appendChild(button);
    });
}

// Sjekk svar
function checkAnswer(selectedAnswer, correctAnswer, button) {
    const allButtons = document.querySelectorAll('.option-button');
    allButtons.forEach(btn => btn.disabled = true);
    
    if (selectedAnswer === correctAnswer) {
        button.classList.add('correct');
        feedbackEl.textContent = '🎉 Riktig! Flott jobbet!';
        feedbackEl.className = 'correct';
        score++;
    } else {
        button.classList.add('incorrect');
        // Vis riktig svar
        allButtons.forEach(btn => {
            if (parseInt(btn.textContent) === correctAnswer) {
                btn.classList.add('correct');
            }
        });
        feedbackEl.textContent = `❌ Feil. Det riktige svaret er ${correctAnswer}.`;
        feedbackEl.className = 'incorrect';
    }
    
    feedbackEl.style.display = 'block';
    nextBtn.style.display = 'block';
}

// Neste spørsmål
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    displayQuestion();
});

// Vis resultater
function showResults() {
    quizContainer.style.display = 'none';
    scoreContainer.style.display = 'block';
    
    const percentage = Math.round((score / questions.length) * 100);
    let message = '';
    
    if (percentage >= 90) {
        message = '🌟 Fantastisk! Du er en mester i areal og omkrets!';
    } else if (percentage >= 75) {
        message = '👏 Flott! Du kan dette godt!';
    } else if (percentage >= 60) {
        message = '👍 Bra jobbet! Fortsett å øve!';
    } else if (percentage >= 50) {
        message = '😊 Greit! Prøv gjerne igjen!';
    } else {
        message = '📚 Fortsett å øve, så blir du bedre!';
    }
    
    scoreContainer.innerHTML = `
        <h2>Resultater</h2>
        <div id="score-message">
            Du fikk ${score} av ${questions.length} riktige!<br>
            (${percentage}%)
        </div>
        <p style="font-size: 1.3em; margin-bottom: 30px;">${message}</p>
        <button id="restart-btn">Prøv igjen</button>
    `;
    
    document.getElementById('restart-btn').addEventListener('click', () => {
        scoreContainer.style.display = 'none';
        quizContainer.style.display = 'block';
        initQuiz();
    });
}

// Hjelpe funksjoner
function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Start quiz
initQuiz();
