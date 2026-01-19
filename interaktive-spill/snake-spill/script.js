/**
 * SNAKE ET BEAST - KLASSISK SLANGEMAT SPILL
 * 
 * Et klassisk Snake-spill hvor spilleren styrer en slange som spiser epler
 * og vokser. Målet er å få så mange poeng som mulig uten å kræsje.
 * 
 * @author Skolequiz Prosjekt
 * @version 1.0
 * @date 2026-01-19
 */

// ============================================================================
// KONFIGURASJON
// ============================================================================

const GRID_SIZE = 20;           // Størrelse på hvert rutenett-felt
const GRID_WIDTH = 20;          // Antall ruter i bredden
const GRID_HEIGHT = 20;         // Antall ruter i høyden
const INITIAL_SPEED = 150;      // Millisekunder mellom hver oppdatering
const SPEED_INCREASE = 5;       // Hastighetsøkning per eple
const MIN_SPEED = 50;           // Maksimal hastighet

// ============================================================================
// DOM-ELEMENTER
// ============================================================================

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('high-score');
const startScreen = document.getElementById('start-screen');
const gameOverScreen = document.getElementById('game-over-screen');
const finalScoreElement = document.getElementById('final-score');
const newRecordElement = document.getElementById('new-record');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

// ============================================================================
// SPILLTILSTAND
// ============================================================================

let snake = [];
let direction = { x: 1, y: 0 };
let nextDirection = { x: 1, y: 0 };
let food = { x: 0, y: 0 };
let score = 0;
let highScore = localStorage.getItem('snakeHighScore') || 0;
let gameLoop = null;
let gameSpeed = INITIAL_SPEED;
let isGameRunning = false;

// ============================================================================
// INITIALISERING
// ============================================================================

/**
 * Initialiserer spillet
 */
function init() {
    highScoreElement.textContent = highScore;
    
    // Event listeners
    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', restartGame);
    
    // Keyboard controls
    document.addEventListener('keydown', handleKeyPress);
    
    // Touch controls for mobile
    let touchStartX = 0;
    let touchStartY = 0;
    
    canvas.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });
    
    canvas.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horisontal sveip
            if (deltaX > 0 && direction.x === 0) {
                nextDirection = { x: 1, y: 0 }; // Høyre
            } else if (deltaX < 0 && direction.x === 0) {
                nextDirection = { x: -1, y: 0 }; // Venstre
            }
        } else {
            // Vertikal sveip
            if (deltaY > 0 && direction.y === 0) {
                nextDirection = { x: 0, y: 1 }; // Ned
            } else if (deltaY < 0 && direction.y === 0) {
                nextDirection = { x: 0, y: -1 }; // Opp
            }
        }
    });
}

/**
 * Starter et nytt spill
 */
function startGame() {
    // Nullstill spillet
    snake = [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 }
    ];
    direction = { x: 1, y: 0 };
    nextDirection = { x: 1, y: 0 };
    score = 0;
    gameSpeed = INITIAL_SPEED;
    
    scoreElement.textContent = score;
    placeFood();
    
    // Skjul start-skjerm
    startScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
    
    // Start spill-løkken
    isGameRunning = true;
    gameLoop = setInterval(update, gameSpeed);
}

/**
 * Restarter spillet
 */
function restartGame() {
    clearInterval(gameLoop);
    startGame();
}

// ============================================================================
// SPILLOGIKK
// ============================================================================

/**
 * Oppdaterer spilltilstanden
 */
function update() {
    // Oppdater retning
    direction = { ...nextDirection };
    
    // Beregn ny hodeposisjon
    const head = { 
        x: snake[0].x + direction.x, 
        y: snake[0].y + direction.y 
    };
    
    // Sjekk kollisjon med vegg
    if (head.x < 0 || head.x >= GRID_WIDTH || head.y < 0 || head.y >= GRID_HEIGHT) {
        gameOver();
        return;
    }
    
    // Sjekk kollisjon med seg selv
    if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        gameOver();
        return;
    }
    
    // Legg til nytt hode
    snake.unshift(head);
    
    // Sjekk om slangen spiste mat
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreElement.textContent = score;
        placeFood();
        
        // Øk hastigheten
        if (gameSpeed > MIN_SPEED) {
            gameSpeed = Math.max(MIN_SPEED, gameSpeed - SPEED_INCREASE);
            clearInterval(gameLoop);
            gameLoop = setInterval(update, gameSpeed);
        }
    } else {
        // Fjern halen hvis ingen mat ble spist
        snake.pop();
    }
    
    // Tegn spillet
    draw();
}

/**
 * Plasserer mat på en tilfeldig posisjon
 */
function placeFood() {
    let validPosition = false;
    
    while (!validPosition) {
        food = {
            x: Math.floor(Math.random() * GRID_WIDTH),
            y: Math.floor(Math.random() * GRID_HEIGHT)
        };
        
        // Sjekk at maten ikke er på slangen
        validPosition = !snake.some(segment => 
            segment.x === food.x && segment.y === food.y
        );
    }
}

/**
 * Håndterer tast-input
 */
function handleKeyPress(e) {
    if (!isGameRunning) return;
    
    switch(e.key) {
        case 'ArrowUp':
            if (direction.y === 0) {
                nextDirection = { x: 0, y: -1 };
            }
            e.preventDefault();
            break;
        case 'ArrowDown':
            if (direction.y === 0) {
                nextDirection = { x: 0, y: 1 };
            }
            e.preventDefault();
            break;
        case 'ArrowLeft':
            if (direction.x === 0) {
                nextDirection = { x: -1, y: 0 };
            }
            e.preventDefault();
            break;
        case 'ArrowRight':
            if (direction.x === 0) {
                nextDirection = { x: 1, y: 0 };
            }
            e.preventDefault();
            break;
    }
}

/**
 * Avslutter spillet
 */
function gameOver() {
    isGameRunning = false;
    clearInterval(gameLoop);
    
    // Oppdater high score
    let isNewRecord = false;
    if (score > highScore) {
        highScore = score;
        highScoreElement.textContent = highScore;
        localStorage.setItem('snakeHighScore', highScore);
        isNewRecord = true;
    }
    
    // Vis game over skjerm
    finalScoreElement.textContent = `Du fikk ${score} poeng!`;
    
    if (isNewRecord) {
        newRecordElement.classList.remove('hidden');
    } else {
        newRecordElement.classList.add('hidden');
    }
    
    gameOverScreen.classList.remove('hidden');
}

// ============================================================================
// TEGNING
// ============================================================================

/**
 * Tegner hele spillet
 */
function draw() {
    // Tøm canvas
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Tegn rutenett (subtilt)
    ctx.strokeStyle = '#2a2a2a';
    ctx.lineWidth = 1;
    for (let i = 0; i <= GRID_WIDTH; i++) {
        ctx.beginPath();
        ctx.moveTo(i * GRID_SIZE, 0);
        ctx.lineTo(i * GRID_SIZE, canvas.height);
        ctx.stroke();
    }
    for (let i = 0; i <= GRID_HEIGHT; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * GRID_SIZE);
        ctx.lineTo(canvas.width, i * GRID_SIZE);
        ctx.stroke();
    }
    
    // Tegn slangen
    snake.forEach((segment, index) => {
        if (index === 0) {
            // Hode - lysere grønn
            ctx.fillStyle = '#4ade80';
        } else {
            // Kropp - mørkere grønn
            ctx.fillStyle = '#22c55e';
        }
        
        ctx.fillRect(
            segment.x * GRID_SIZE + 1,
            segment.y * GRID_SIZE + 1,
            GRID_SIZE - 2,
            GRID_SIZE - 2
        );
        
        // Legg til øyne på hodet
        if (index === 0) {
            ctx.fillStyle = '#1a1a1a';
            const eyeSize = 3;
            const eyeOffset = 6;
            
            if (direction.x === 1) { // Høyre
                ctx.fillRect(segment.x * GRID_SIZE + 12, segment.y * GRID_SIZE + 5, eyeSize, eyeSize);
                ctx.fillRect(segment.x * GRID_SIZE + 12, segment.y * GRID_SIZE + 12, eyeSize, eyeSize);
            } else if (direction.x === -1) { // Venstre
                ctx.fillRect(segment.x * GRID_SIZE + 5, segment.y * GRID_SIZE + 5, eyeSize, eyeSize);
                ctx.fillRect(segment.x * GRID_SIZE + 5, segment.y * GRID_SIZE + 12, eyeSize, eyeSize);
            } else if (direction.y === -1) { // Opp
                ctx.fillRect(segment.x * GRID_SIZE + 5, segment.y * GRID_SIZE + 5, eyeSize, eyeSize);
                ctx.fillRect(segment.x * GRID_SIZE + 12, segment.y * GRID_SIZE + 5, eyeSize, eyeSize);
            } else if (direction.y === 1) { // Ned
                ctx.fillRect(segment.x * GRID_SIZE + 5, segment.y * GRID_SIZE + 12, eyeSize, eyeSize);
                ctx.fillRect(segment.x * GRID_SIZE + 12, segment.y * GRID_SIZE + 12, eyeSize, eyeSize);
            }
        }
    });
    
    // Tegn mat (eple)
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(
        food.x * GRID_SIZE + GRID_SIZE / 2,
        food.y * GRID_SIZE + GRID_SIZE / 2,
        GRID_SIZE / 2 - 2,
        0,
        Math.PI * 2
    );
    ctx.fill();
    
    // Legg til stilk på eplet
    ctx.fillStyle = '#15803d';
    ctx.fillRect(
        food.x * GRID_SIZE + GRID_SIZE / 2 - 1,
        food.y * GRID_SIZE + 2,
        2,
        4
    );
}

// ============================================================================
// START APPLIKASJONEN
// ============================================================================

init();
