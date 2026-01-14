/**
 * NERVESYSTEMET OG HORMONSYSTEMET QUIZ - NATURFAG
 * 
 * En omfattende multiple choice quiz om samarbeidet mellom nervesystemet og hormonsystemet.
 * Dekker emner som:
 * - Melatonin og døgnrytme
 * - Temperaturregulering
 * - Stress og adrenalin
 * - Sult og metthet
 * - Blodsukkerregulering
 * - Pubertet
 * 
 * @version 1.0
 * @date 2026-01-14
 */

const questions = [
    // DEL 1: MELATONIN OG DØGNRYTME
    { 
        q: "Hvilken sans registrerer lys som påvirker melatoninproduksjonen?", 
        options: ["Hørsel", "Syn", "Lukt", "Berøring"],
        correct: 1,
        explanation: "Synet registrerer lys via øynene, og dette påvirker melatoninproduksjonen."
    },
    { 
        q: "Hvor ligger sansecellene som registrerer lys?", 
        options: ["Hypothalamus", "Hypofysen", "Netthinnen", "Storhjernen"],
        correct: 2,
        explanation: "Sansecellene som registrerer lys ligger i netthinnen i øyet."
    },
    { 
        q: "Melatonin produseres i:", 
        options: ["Hypofysen", "Binyrene", "Skjoldbruskkjertelen", "Konglekjertelen"],
        correct: 3,
        explanation: "Melatonin produseres i konglekjertelen (epifysen) i hjernen."
    },
    { 
        q: "Melatonin er et:", 
        options: ["Steroidhormon", "Peptidhormon", "Aminosyrederivat", "Fettløselig vitamin"],
        correct: 2,
        explanation: "Melatonin er et aminosyrederivat, laget fra aminosyren tryptofan."
    },
    { 
        q: "Melatonin dannes fra aminosyren:", 
        options: ["Glycin", "Tryptofan", "Tyrosin", "Leucin"],
        correct: 1,
        explanation: "Melatonin dannes fra aminosyren tryptofan."
    },
    { 
        q: "Hva skjer med melatoninmengden når det blir mørkt?", 
        options: ["Den synker", "Den øker", "Den forblir konstant", "Den stoppes helt"],
        correct: 1,
        explanation: "Når det blir mørkt, øker produksjonen av melatonin, noe som gjør oss trøtte."
    },
    { 
        q: "Økt melatonin fører til at du:", 
        options: ["Blir mer våken", "Får høyere puls", "Blir trøtt", "Får bedre syn"],
        correct: 2,
        explanation: "Økt melatonin gjør at vi blir trøtte og får søvnbehov."
    },
    { 
        q: "Lys reduserer melatoninproduksjonen fordi:", 
        options: ["Lys øker dopamin", "Lys aktiverer hypothalamus", "Lys hemmer konglekjertelen", "Lys aktiverer nyrene"],
        correct: 2,
        explanation: "Lys hemmer konglekjertelens produksjon av melatonin."
    },
    { 
        q: "Signalene om lys går fra øyet til:", 
        options: ["Hippocampus", "Hypothalamus", "Lillehjernen", "Binyrene"],
        correct: 1,
        explanation: "Signaler om lys går fra øyet til hypothalamus, som regulerer døgnrytmen."
    },
    { 
        q: "Hvilket system påvirkes direkte når melatonin endres?", 
        options: ["Fordøyelsessystemet", "Lymfesystemet", "Søvn/våkenhetsrytmen", "Immunforsvaret"],
        correct: 2,
        explanation: "Melatonin påvirker direkte søvn- og våkenhetsrytmen vår."
    },

    // DEL 2: TEMPERATURREGULERING
    { 
        q: "Termosensitive celler finner vi i:", 
        options: ["Binyrer og pons", "Hypothalamus og hud", "Lungene og leveren", "Ryggmargen og hypofysen"],
        correct: 1,
        explanation: "Termosensitive celler som registrerer temperatur finnes i hypothalamus og i huden."
    },
    { 
        q: "Hvilket system registrerer temperaturendringer først?", 
        options: ["Hormonsystemet", "Fordøyelsessystemet", "Nervesystemet", "Respirasjonssystemet"],
        correct: 2,
        explanation: "Nervesystemet registrerer temperaturendringer raskt via termosensitive nerveceller."
    },
    { 
        q: "Hvilket hormon øker ved langvarig kulde?", 
        options: ["Insulin", "T3/T4", "Ghrelin", "Leptin"],
        correct: 1,
        explanation: "Ved langvarig kulde øker produksjonen av skjoldbruskkjertelhormonene T3 og T4."
    },
    { 
        q: "T3 og T4 produseres i:", 
        options: ["Bukspyttkjertelen", "Nyrene", "Skjoldbruskkjertelen", "Hypofysen"],
        correct: 2,
        explanation: "T3 og T4 produseres i skjoldbruskkjertelen (thyreoidea)."
    },
    { 
        q: "T3/T4 er:", 
        options: ["Peptidhormoner", "Steroidhormoner", "Aminosyrederivater", "Fettstoffer"],
        correct: 2,
        explanation: "T3 og T4 er aminosyrederivater, laget fra aminosyren tyrosin."
    },
    { 
        q: "Hva er en typisk reaksjon ved varme?", 
        options: ["Åresammentrekning", "Skjelving", "Økt appetitt", "Blodåreutvidelse"],
        correct: 3,
        explanation: "Ved varme utvides blodårene (vasodilatasjon) for å slippe ut varme."
    },
    { 
        q: "Hva skjer ved kulde?", 
        options: ["Svetting", "Redusert stoffskifte", "Skjelving", "Pulsfall"],
        correct: 2,
        explanation: "Ved kulde skjelver kroppen for å produsere varme gjennom muskelaktivitet."
    },
    { 
        q: "Hva regulerer raske temperaturendringer mest?", 
        options: ["Hormonsystemet", "Blodsirkulasjonen", "Lymfesystemet", "Nervesystemet"],
        correct: 3,
        explanation: "Nervesystemet gir raske responser på temperaturendringer."
    },
    { 
        q: "Langvarig kulde øker stoffskiftet for å:", 
        options: ["Spare energi", "Øke varmetap", "Produsere varme", "Øke blodsukkeret"],
        correct: 2,
        explanation: "Økt stoffskifte ved langvarig kulde produserer mer varme for å holde kroppstemperaturen stabil."
    },
    { 
        q: "Hva påvirkes ikke direkte ved temperaturregulering?", 
        options: ["Svettekjertler", "Blodårer", "Skjelett", "Stoffskifte"],
        correct: 2,
        explanation: "Skjelettet påvirkes ikke direkte ved temperaturregulering, mens svettekjertler, blodårer og stoffskifte gjør det."
    },

    // DEL 3: STRESS OG ADRENALIN
    { 
        q: "Hvilken del av nervesystemet aktiveres ved fare?", 
        options: ["Parasympatiske", "Motoriske", "Sympatiske", "Sensoriske"],
        correct: 2,
        explanation: "Det sympatiske nervesystemet aktiveres ved fare og stress."
    },
    { 
        q: "Adrenalin produseres i:", 
        options: ["Hypofysen", "Binyrebarken", "Binyremargen", "Leverceller"],
        correct: 2,
        explanation: "Adrenalin produseres i binyremargen (medulla)."
    },
    { 
        q: "Adrenalin er et:", 
        options: ["Peptidhormon", "Steroidhormon", "Aminosyrederivat", "Fettsyre"],
        correct: 2,
        explanation: "Adrenalin er et aminosyrederivat, laget fra aminosyren tyrosin."
    },
    { 
        q: "Adrenalin lages fra aminosyren:", 
        options: ["Tryptofan", "Tyrosin", "Leucin", "Aspartat"],
        correct: 1,
        explanation: "Adrenalin lages fra aminosyren tyrosin."
    },
    { 
        q: "Adrenalin øker:", 
        options: ["Puls og blodtrykk", "Søvntrykk", "Melatonin", "Blodplatene"],
        correct: 0,
        explanation: "Adrenalin øker puls og blodtrykk for å forberede kroppen på kamp eller flukt."
    },
    { 
        q: "Hva skjer med blodsukkeret ved stress?", 
        options: ["Det faller", "Det øker", "Det stopper", "Det blir ustabilt"],
        correct: 1,
        explanation: "Ved stress øker blodsukkeret for å gi musklene mer energi."
    },
    { 
        q: "Hvilket uttrykk beskriver stressresponsen?", 
        options: ["Rest & digest", "Fight or flight", "Heat and cool", "Push and pull"],
        correct: 1,
        explanation: "'Fight or flight' (kamp eller flukt) beskriver stressresponsen."
    },
    { 
        q: "Stressresponsen er viktig for:", 
        options: ["Fordøyelsen", "Å spare energi", "Rask reaksjon", "Søvn"],
        correct: 2,
        explanation: "Stressresponsen gjør at kroppen kan reagere raskt i farlige situasjoner."
    },
    { 
        q: "Stressresponsen styres av:", 
        options: ["Gallenganger", "Sympatiske nervebaner", "Hudceller", "Sædceller"],
        correct: 1,
        explanation: "Stressresponsen styres av sympatiske nervebaner i det autonome nervesystemet."
    },
    { 
        q: "Noradrenalin produseres sammen med:", 
        options: ["Insulin", "Melatonin", "Adrenalin", "Leptin"],
        correct: 2,
        explanation: "Noradrenalin produseres sammen med adrenalin i binyremargen."
    },

    // DEL 4: SULT OG METTHET
    { 
        q: "Ghrelin produseres i:", 
        options: ["Leveren", "Tarmen", "Magesekken", "Hypothalamus"],
        correct: 2,
        explanation: "Ghrelin, 'sulthormonet', produseres i magesekken."
    },
    { 
        q: "Ghrelin fører til:", 
        options: ["Metthet", "Lavere puls", "Økt appetitt", "Lavere energibehov"],
        correct: 2,
        explanation: "Ghrelin øker appetitten og gir oss sultfølelse."
    },
    { 
        q: "Ghrelin er et:", 
        options: ["Steroidhormon", "Peptidhormon", "Enzym", "Karbohydrat"],
        correct: 1,
        explanation: "Ghrelin er et peptidhormon."
    },
    { 
        q: "Leptin produseres i:", 
        options: ["Fettvev", "Nyrene", "Hjernen", "Leverens glykogenlagre"],
        correct: 0,
        explanation: "Leptin, 'metthetshormonet', produseres i fettvev."
    },
    { 
        q: "Leptin sin hovedfunksjon er å:", 
        options: ["Øke sult", "Senke sult", "Øke puls", "Øke svette"],
        correct: 1,
        explanation: "Leptin senker sultfølelsen og signaliserer metthet."
    },
    { 
        q: "Leptin er viktig for:", 
        options: ["Kortvarig appetittregulering", "Langsiktig energibalansestyring", "Stress", "Immunforsvaret"],
        correct: 1,
        explanation: "Leptin er viktig for langsiktig regulering av energibalansen."
    },
    { 
        q: "Sultsignaler går fra magesekken via:", 
        options: ["Hormoner alene", "Nervesystemet", "Blodceller", "Hudreseptorer"],
        correct: 1,
        explanation: "Sultsignaler sendes via nervesystemet i tillegg til hormoner."
    },
    { 
        q: "Metthetssignaler kommer fra:", 
        options: ["Lever", "Hud", "Mage og tarm", "Hypofysen"],
        correct: 2,
        explanation: "Metthetssignaler kommer fra mage og tarm når de strekkes ut."
    },
    { 
        q: "Hvilket hormon aktiverer 'sultsenteret'?", 
        options: ["Leptin", "Ghrelin", "Insulin", "Adrenalin"],
        correct: 1,
        explanation: "Ghrelin aktiverer sultsenteret i hypothalamus."
    },
    { 
        q: "Leptin er et:", 
        options: ["Steroid", "Peptidhormon", "Karbohydrat", "Enzym"],
        correct: 1,
        explanation: "Leptin er et peptidhormon."
    },

    // DEL 5: BLODSUKKERREGULERING
    { 
        q: "Insulin produseres i:", 
        options: ["Alfa-cellene", "Beta-cellene", "Nyrene", "Leveren"],
        correct: 1,
        explanation: "Insulin produseres i beta-cellene i bukspyttkjertelen."
    },
    { 
        q: "Glukagon produseres i:", 
        options: ["Alfa-cellene", "Beta-cellene", "Muskler", "Hypothalamus"],
        correct: 0,
        explanation: "Glukagon produseres i alfa-cellene i bukspyttkjertelen."
    },
    { 
        q: "Insulin er et:", 
        options: ["Peptidhormon", "Steroidhormon", "Aminosyrederivat", "Gass"],
        correct: 0,
        explanation: "Insulin er et peptidhormon."
    },
    { 
        q: "Glukagon er et:", 
        options: ["Peptidhormon", "Steroidhormon", "Salt", "Protein uten hormonell funksjon"],
        correct: 0,
        explanation: "Glukagon er et peptidhormon."
    },
    { 
        q: "Insulin sin hovedoppgave er å:", 
        options: ["Øke blodsukker", "Senke blodsukker", "Heve blodtrykket", "Produsere fettsyrer"],
        correct: 1,
        explanation: "Insulin senker blodsukkeret ved å hjelpe glukose inn i cellene."
    },
    { 
        q: "Glukagon sin hovedoppgave er å:", 
        options: ["Senke blodsukker", "Øke blodsukker", "Starte svetting", "Aktivere melatonin"],
        correct: 1,
        explanation: "Glukagon øker blodsukkeret ved å frigjøre glukose fra leveren."
    },
    { 
        q: "Sensorer for glukose finnes i:", 
        options: ["Huden", "Blodårer og fordøyelsen", "Skjelettet", "Ørene"],
        correct: 1,
        explanation: "Sensorer for glukose finnes i blodårer og i fordøyelsessystemet."
    },
    { 
        q: "Bukspyttkjertelen produserer:", 
        options: ["Ghrelin", "Insulin og glukagon", "Leptin", "Melatonin"],
        correct: 1,
        explanation: "Bukspyttkjertelen (pankreas) produserer både insulin og glukagon."
    },
    { 
        q: "Lavt blodsukker aktiverer:", 
        options: ["Insulin", "Glukagon", "Leptin", "Melatonin"],
        correct: 1,
        explanation: "Lavt blodsukker aktiverer utskillelse av glukagon."
    },
    { 
        q: "Høyt blodsukker aktiverer:", 
        options: ["Glukagon", "Adrenalin", "Insulin", "Ghrelin"],
        correct: 2,
        explanation: "Høyt blodsukker aktiverer utskillelse av insulin."
    },

    // DEL 6: PUBERTET
    { 
        q: "Hva registrerer hypothalamus før pubertet starter?", 
        options: ["Tyrosinnivå", "Melatoninnivå", "Leptinnivå", "Insulinnivå"],
        correct: 2,
        explanation: "Hypothalamus registrerer leptinnivået, som signaliserer at kroppen er moden nok for pubertet."
    },
    { 
        q: "GnRH står for:", 
        options: ["Growth nerve releasing hormone", "Gonadotropin releasing hormone", "General reproductive hormone", "Gonadal nerve response hormone"],
        correct: 1,
        explanation: "GnRH står for Gonadotropin releasing hormone."
    },
    { 
        q: "GnRH stimulerer:", 
        options: ["Hypofysen", "Nyrene", "Lungene", "Magesekken"],
        correct: 0,
        explanation: "GnRH stimulerer hypofysen til å produsere LH og FSH."
    },
    { 
        q: "Hypofysen produserer:", 
        options: ["T3/T4", "Leptin", "LH og FSH", "Insulin"],
        correct: 2,
        explanation: "Hypofysen produserer LH (luteiniserende hormon) og FSH (follikkelstimulerende hormon)."
    },
    { 
        q: "LH og FSH er:", 
        options: ["Steroidhormoner", "Peptidhormoner", "Karbohydrater", "Enzymer"],
        correct: 1,
        explanation: "LH og FSH er peptidhormoner."
    },
    { 
        q: "Østrogen produseres i:", 
        options: ["Testikler", "Ovarier", "Lever", "Hypothalamus"],
        correct: 1,
        explanation: "Østrogen produseres hovedsakelig i ovariene (eggstokken)."
    },
    { 
        q: "Testosteron produseres i:", 
        options: ["Ovarier", "Hypofysen", "Testikler", "Lever"],
        correct: 2,
        explanation: "Testosteron produseres hovedsakelig i testiklene."
    },
    { 
        q: "Østrogen og progesteron er:", 
        options: ["Peptider", "Steroidhormoner", "Aminosyrer", "Proteiner"],
        correct: 1,
        explanation: "Østrogen og progesteron er steroidhormoner."
    },
    { 
        q: "Hva er en effekt av pubertetshormonene?", 
        options: ["Lavere blodsukker", "Modning av kjønnsceller", "Redusert stoffskifte", "Svetteproduksjon"],
        correct: 1,
        explanation: "Pubertetshormonene fører til modning av kjønnsceller og sekundære kjønnskarakteristika."
    },
    { 
        q: "Hva starter puberteten?", 
        options: ["Økt insulin", "Økt leptin", "Økt melatonin", "Økt glukagon"],
        correct: 1,
        explanation: "Økt leptinnivå signaliserer til hypothalamus at kroppen er klar for pubertet."
    }
];

// Shuffler spørsmålene
function shuffle(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Quiz variabler
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// DOM elementer
const quizAreaEl = document.getElementById('quiz-area');
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsContainerEl = document.getElementById('options-container');
const feedbackAreaEl = document.getElementById('feedback-area');
const submitBtnEl = document.getElementById('submit-btn');
const nextBtnEl = document.getElementById('next-btn');
const resultAreaEl = document.getElementById('result-area');
const scoreTextEl = document.getElementById('score-text');
const restartBtnEl = document.getElementById('restart-btn');

// Feedback meldinger
const correctFeedbackMessages = [
    "🎉 Helt riktig!",
    "👏 Utmerket!",
    "✅ Bra jobbet!",
    "⭐ Perfekt!",
    "💯 Flott svar!"
];

const incorrectFeedbackMessages = [
    "❌ Dette var dessverre feil.",
    "😕 Ikke helt riktig.",
    "🔄 Prøv igjen neste gang!",
    "📚 Lær av dette!"
];

// Start quiz
function startQuiz() {
    shuffledQuestions = shuffle(questions);
    currentQuestionIndex = 0;
    score = 0;
    
    quizAreaEl.classList.remove('hidden');
    resultAreaEl.classList.add('hidden');
    
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        showResults();
        return;
    }

    const question = shuffledQuestions[currentQuestionIndex];
    questionNumberEl.textContent = `Spørsmål ${currentQuestionIndex + 1} av ${shuffledQuestions.length}`;
    questionTextEl.textContent = question.q;
    
    optionsContainerEl.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainerEl.appendChild(button);
    });

    selectedAnswer = null;
    submitBtnEl.disabled = true;
    feedbackAreaEl.classList.add('hidden');
    nextBtnEl.classList.add('hidden');
}

function selectAnswer(index) {
    selectedAnswer = index;
    submitBtnEl.disabled = false;
    
    const buttons = optionsContainerEl.querySelectorAll('button');
    buttons.forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === index) btn.classList.add('selected');
    });
}

function submitAnswer() {
    if (selectedAnswer === null) return;

    const question = shuffledQuestions[currentQuestionIndex];
    const buttons = optionsContainerEl.querySelectorAll('button');
    const correct = question.correct;

    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === correct) {
            btn.classList.add('correct');
        } else if (i === selectedAnswer) {
            btn.classList.add('incorrect');
        }
    });

    feedbackAreaEl.classList.remove('hidden');
    
    if (selectedAnswer === correct) {
        score++;
        const randomMsg = correctFeedbackMessages[Math.floor(Math.random() * correctFeedbackMessages.length)];
        feedbackAreaEl.textContent = randomMsg;
        feedbackAreaEl.className = 'feedback correct';
    } else {
        const randomMsg = incorrectFeedbackMessages[Math.floor(Math.random() * incorrectFeedbackMessages.length)];
        feedbackAreaEl.innerHTML = `${randomMsg}<br><strong>Forklaring:</strong> ${question.explanation}`;
        feedbackAreaEl.className = 'feedback incorrect';
    }

    submitBtnEl.classList.add('hidden');
    nextBtnEl.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
    submitBtnEl.classList.remove('hidden');
}

function showResults() {
    quizAreaEl.classList.add('hidden');
    resultAreaEl.classList.remove('hidden');
    
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    let message = "";
    
    if (percentage >= 90) {
        message = "Utmerket! Du har svært god kunnskap om nervesystemet og hormonsystemet!";
    } else if (percentage >= 75) {
        message = "Meget bra! Du kan mye om dette emnet!";
    } else if (percentage >= 60) {
        message = "Bra jobbet! Du har god grunnkunnskap!";
    } else if (percentage >= 50) {
        message = "Greit! Men det er rom for forbedring!";
    } else {
        message = "Fortsett å lære! Prøv gjerne igjen!";
    }
    
    scoreTextEl.innerHTML = `
        Du fikk ${score} av ${shuffledQuestions.length} riktige<br>
        (${percentage}%)<br><br>
        ${message}
    `;
}

submitBtnEl.addEventListener('click', submitAnswer);
nextBtnEl.addEventListener('click', nextQuestion);
restartBtnEl.addEventListener('click', startQuiz);

// Start quiz
startQuiz();
