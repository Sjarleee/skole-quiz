# 🎓 Skolequiz - Interaktiv Læringsportal

En samling av interaktive læringsspill og quizer for barn og elever på ulike alderstrinn. Alle quizene er bygget med HTML, CSS og vanilla JavaScript.

## 🌐 Live Demo

**Hovedside**: [https://sjarleee.github.io/skole-quiz/](https://sjarleee.github.io/skole-quiz/)

**GitHub Repository**: [https://github.com/Sjarleee/skole-quiz](https://github.com/Sjarleee/skole-quiz)

## 📋 Innholdsfortegnelse

- [Oversikt](#oversikt)
- [Prosjektstruktur](#prosjektstruktur)
- [Quizer og Spill](#quizer-og-spill)
- [Teknisk Dokumentasjon](#teknisk-dokumentasjon)
- [Hvordan Legge Til Nye Quizer](#hvordan-legge-til-nye-quizer)
- [Utviklingsguide](#utviklingsguide)

## 🎯 Oversikt

Dette prosjektet inneholder ulike typer quizer kategorisert etter fag:

- **Matematikk**: Gangetabell, addisjon, halvering, areal/omkrets og klokkequiz
- **Norsk**: Ordklasse-quiz (grammatikk)
- **Samfunnsfag & KRLE**: Kunnskapsquizer om samfunn og religion
- **Naturfag**: Nervesystemet og hormonsystemet
- **Interaktive Spill**: Lekbasert læring (farger, former)
- **Moro**: Humor og underholdning

## 📁 Prosjektstruktur

```
skolequiz/
├── index.html                    # Hovedside med alle quizer
├── README.md                     # Denne filen
│
├── matematikk-quizer/           # Matematikk-quizer
│   ├── gangetabell-quiz/        # Gangetabell-quizer
│   │   ├── index.html           # 1-20 gangetabell
│   │   ├── index-1-10.html      # 1-10 gangetabell
│   │   ├── index-1-5.html       # 1-5 gangetabell (nybegynner)
│   │   ├── script.js            # Quiz-logikk
│   │   └── style.css            # Styling
│   │
│   ├── addisjonsquiz/           # Addisjons-quiz
│   │   ├── index.html           # Quiz-side
│   │   ├── addisjon-quiz.js     # Quiz-logikk
│   │   └── README.md            # Dokumentasjon
│   │
│   ├── areal-omkrets-quiz/      # Areal og omkrets quiz
│   │   ├── index.html           # Quiz-side (5. klasse)
│   │   ├── script.js            # Quiz-logikk
│   │   ├── style.css            # Styling
│   │   └── README.md            # Dokumentasjon
│   │
│   ├── halverings-quiz/         # Halveringsquiz
│   │   ├── index.html           # Quiz-side
│   │   ├── script.js            # Quiz-logikk for halvering
│   │   ├── style.css            # Styling
│   │   └── README.md            # Dokumentasjon
│   │
│   └── klokkequiz/              # Lær å lese klokka
│       ├── index.html           # Quiz-side med analog klokke
│       ├── script.js            # Quiz-logikk
│       ├── style.css            # Styling
│       └── README.md            # Dokumentasjon
│
├── norsk-quizer/                # Norsk-quizer
│   └── ordklasse-quiz/          # Ordklasse-quiz (grammatikk)
│       ├── index.html           # Quiz-side
│       ├── script.js            # Logikk for ordklasse
│       ├── style.css            # Styling
│       └── README.md            # Dokumentasjon
│
├── krle-quizer/                 # KRLE-quizer (Religion og livssyn)
│   ├── shared/
│   │   └── quiz-style.css       # Felles styling for KRLE
│   ├── hinduismen-7trinn/
│   │   └── index.html           # 45 spørsmål om hinduismen
│   ├── islam-9trinn/
│   │   ├── index.html           # Islam quiz hovedside
│   │   ├── islam-quiz.js        # 100 spørsmål om islam
│   │   └── README.md            # Dokumentasjon
│   └── README.md                # KRLE dokumentasjon
│
├── naturfag-quizer/             # Naturfag-quizer
│   └── hormon-nerve-system/     # Nervesystemet og hormonsystemet
│       ├── index.html           # Quiz-side
│       ├── quiz.js              # 60 spørsmål
│       └── README.md            # Dokumentasjon
│
├── interaktive-spill/           # Interaktive spill
│   └── signes-fargespill/       # Interaktivt fargespill
│       ├── index.html           # Fargespill for barn
│       ├── quiz-engine.js       # Generisk quiz-motor
│       ├── style.css            # Styling
│       └── README.md            # Dokumentasjon for quiz-systemet
│
├── samfunnsfag-2025.html        # Samfunnsfag quiz
├── 202506-krle.html             # Hinduismen quiz (KRLE)
└── fredagsvisdom.html           # Humor/visdomsord
```

## 🎮 Quizer og Spill

### Matematikk

#### Gangetabell Quiz
**Filer**: `matematikk-quizer/gangetabell-quiz/`

Tre versjoner med ulik vanskelighetsgrad:
- **1-5**: For nybegynnere (med visuell representasjon)
- **1-10**: Standard gangetabell
- **1-20**: Avansert versjon

**Funksjoner**:
- Genererer tilfeldige spørsmål
- 4 svaralternativer per spørsmål
- Personlige tilbakemeldinger
- Poengsystem og resultatvisning
- Responsivt design

**Tilpasning**:
```javascript
// I script.js, endre antall spørsmål:
const DEFAULT_NUM_QUESTIONS_TO_ASK = 20;

// Eller i HTML, sett max tabell-nummer:
<body data-max-table="10">
```

#### Addisjonsquiz
**Filer**: `matematikk-quizer/addisjonsquiz/`

Quiz for å øve på addisjon med svar mellom 0-100.

**Funksjoner**:
- Tilfeldige addisjonsspørsmål (a + ? = sum)
- 6 svaralternativer
- 10 spørsmål per runde
- Progresstracking

#### Halveringsquiz
**Filer**: `matematikk-quizer/halverings-quiz/`

Quiz for å øve på halvering av tall mellom 0-200.

**Funksjoner**:
- Halvering av partall (0, 2, 4... 200)
- 6 svaralternativer med intelligente distraktorer
- 10 spørsmål per runde
- Visuelt tiltalende design med gradient bakgrunn

#### Areal og Omkrets Quiz
**Filer**: `matematikk-quizer/areal-omkrets-quiz/`

Quiz for 5. klasse om areal og omkrets av rettvinklede figurer på rutenett.

**Funksjoner**:
- Visuelle figurer på rutenett
- Øv på både areal og omkrets
- Tilpasset 5. klassetrinn
- Responsivt design

#### Klokkequiz
**Filer**: `matematikk-quizer/klokkequiz/`

Interaktiv quiz for å lære å lese analog klokke på norsk.

**Funksjoner**:
- Fullverdig analog klokke med SVG
- Interaktive ordbokser - bygg tidsuttrykk
- Norske tidsuttrykk (kvart over, halv, etc.)
- Støtter 12 forskjellige tider
- Distraktorer for ekstra utfordring

### Norsk

#### Ordklasse Quiz
**Filer**: `norsk-quizer/ordklasse-quiz/`

Lærer forskjellen mellom adjektiv, verb og substantiv.

**Funksjoner**:
- 150+ norske ord
- 10 spørsmål per runde
- Poengsystem
- Umiddelbar tilbakemelding
- Fargekodet feedback (grønt/rødt)

**Hvordan legge til nye ord**:
```javascript
// I script.js:
const allQuestions = [
    { word: "hus", type: "Substantiv" },
    { word: "løper", type: "Verb" },
    { word: "grønn", type: "Adjektiv" },
    // Legg til flere her...
];
```

### Samfunnsfag & KRLE

#### Samfunnsfag Quiz 2025
**Fil**: `samfunnsfag-2025.html`

Kunnskapsquiz om samfunnsrelevante emner.

#### KRLE-quizer
**Mappe**: `krle-quizer/`

Organiserte KRLE-quizer for ulike alderstrinn:

**Hinduismen Quiz (7. trinn)**
- **Sted**: `krle-quizer/hinduismen-7trinn/`
- **Spørsmål**: 45 spørsmål fordelt på flere temaer
- **Live**: [https://sjarleee.github.io/skole-quiz/krle-quizer/hinduismen-7trinn/](https://sjarleee.github.io/skole-quiz/krle-quizer/hinduismen-7trinn/)

**Islam Quiz (9. trinn)**
- **Sted**: `krle-quizer/islam-9trinn/`
- **Spørsmål**: 100 spørsmål fordelt på 8 temaer
  - Grunnleggende om islam (20)
  - Profeten Muhammed (15)
  - Koranen (15)
  - Hadith og sunna (10)
  - De fem søylene (15)
  - Islamsk historie (10)
  - Shia og sunni (10)
  - Islam i verden i dag (5)
- **Live**: [https://sjarleee.github.io/skole-quiz/krle-quizer/islam-9trinn/](https://sjarleee.github.io/skole-quiz/krle-quizer/islam-9trinn/)

**Funksjoner**:
- Flervalg spørsmål med 4 alternativer
- Forklaringer ved feil svar
- Navigasjon mellom spørsmål
- Resultatoppsummering med prosent
- Felles styling for konsistent design

**Hvordan legge til nye spørsmål**:
```javascript
const questions = [
    {
        q: "Ditt spørsmål her?",
        options: ["Alternativ 1", "Alternativ 2", "Alternativ 3", "Alternativ 4"],
        correct: 0, // Indeks for riktig svar (0-3)
        explanation: "Forklaring hvis svar er feil"
    }
];
```

Se `krle-quizer/README.md` for full dokumentasjon.

### Naturfag

#### Nervesystemet og Hormonsystemet
**Filer**: `naturfag-quizer/hormon-nerve-system/`

Quiz om samarbeidet mellom nervesystemet og hormonsystemet.

**Funksjoner**:
- 60 spørsmål fordelt på relevante temaer
- Flervalg med forklaringer
- Egnet for ungdomsskolen
- Omfattende dekkning av temaet

### Interaktive Spill

#### Signes Fargespill
**Filer**: `interaktive-spill/signes-fargespill/`

Interaktivt spill for å lære farger med talesyntese.

**Funksjoner**:
- Norsk talesyntese
- Visuell tilbakemelding
- Enkelt for små barn
- Generisk quiz-engine for gjenbruk

**Les mer**: Se `interaktive-spill/signes-fargespill/README.md` for detaljert dokumentasjon om quiz-engine systemet.

### Moro

#### Fredagsvisdom
**Fil**: `fredagsvisdom.html`

50 humoristiske visdomsord for fredagsstemning.

## 🛠 Teknisk Dokumentasjon

### Teknologier
- **HTML5**: Struktur og semantikk
- **CSS3**: Styling og animasjoner
- **JavaScript (ES6+)**: Quiz-logikk og interaktivitet
- **Web Speech API**: Talesyntese (i fargespillet)

### Designprinsipper
1. **Responsivt design**: Fungerer på mobil, nettbrett og desktop
2. **Tilgjengelighet**: Store knapper, god kontrast
3. **Umiddelbar tilbakemelding**: Brukeren får rask respons
4. **Modulær kode**: Lett å gjenbruke og utvide

### Fellesfunksjoner

Mange quizer deler disse mønstrene:

```javascript
// Stokke array tilfeldig
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Velg n tilfeldige elementer
function selectRandom(array, n) {
    return shuffleArray([...array]).slice(0, n);
}
```

## ➕ Hvordan Legge Til Nye Quizer

### Metode 1: Bruk Quiz-Engine (for interaktive spill)

1. Kopier `interaktive-spill/signes-fargespill/` som mal
2. Definer din quiz-konfigurasjon
3. Tilpass `generateQuestion()` og `renderOption()`
4. Legg til i hovedsiden

Se `interaktive-spill/signes-fargespill/README.md` for full guide.

### Metode 2: Bruk Eksisterende Quiz som Mal

#### For matematikk-quiz:
1. Kopier en quiz fra `matematikk-quizer/` (f.eks. `gangetabell-quiz/` eller `addisjonsquiz/`)
2. Endre spørsmålsgenerering i JS-filen
3. Tilpass styling etter behov

#### For kunnskaps-quiz:
1. Kopier `202506-krle.html` eller `samfunnsfag-2025.html`
2. Bytt ut `questions` array
3. Tilpass farger og tittel

### Metode 3: Lag Fra Bunnen

**Minimum struktur**:

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>Min Quiz</title>
    <style>
        /* Din CSS her */
    </style>
</head>
<body>
    <div class="quiz-container">
        <a href="index.html">&larr; Tilbake</a>
        <h1 id="question">Spørsmål</h1>
        <div id="options"></div>
        <div id="feedback"></div>
        <button id="next-btn">Neste</button>
    </div>
    <script>
        // Din quiz-logikk her
    </script>
</body>
</html>
```

### Steg-for-steg: Legg til i hovedsiden

1. Åpne `index.html`
2. Finn riktig kategori-seksjon
3. Legg til nytt kort:

```html
<a href="din-quiz/index.html" class="quiz-card math-quiz">
    <h3>Din Quiz Tittel</h3>
    <p>Kort beskrivelse</p>
</a>
```

4. Bruk riktig klasse: `math-quiz`, `language-quiz`, `social-quiz`, `fun-quiz`, eller `interactive-quiz`

## 💻 Utviklingsguide

### Kom i gang

1. **Klon eller last ned prosjektet**
2. **Åpne index.html i nettleseren**
3. **Ingen build-prosess kreves** - alt er vanilla HTML/CSS/JS

### Testing

Test i ulike nettlesere:
- Chrome (anbefalt for talesyntese)
- Firefox
- Safari
- Edge

Test på ulike enheter:
- Desktop
- Nettbrett
- Mobil

### Beste Praksis

1. **Hold JavaScript enkelt**: Unngå komplekse rammeverk
2. **Bruk semantisk HTML**: `<main>`, `<section>`, `<article>`
3. **Inline CSS for små prosjekter**: OK for enkeltsider
4. **Kommentarer på norsk**: Konsistent med brukergrensesnitt
5. **Responsive design**: Test på mobile enheter

### Kodestandard

```javascript
// Bruk beskrivende variabelnavn
const questionElement = document.getElementById('question');
const currentQuestionIndex = 0;

// Kommenter kompleks logikk
function generateDistractors(correctAnswer) {
    // Generer 3 feil svar som er nære det riktige
    // ...
}

// Funksjoner skal ha ett ansvarsområde
function displayQuestion() { /* ... */ }
function checkAnswer() { /* ... */ }
function showFeedback() { /* ... */ }
```

## 🎨 Styling Guide

### Fargepalett

```css
/* Matematikk (rød/rosa) */
--math-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

/* Språk (blå) */
--language-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);

/* Samfunnsfag (grønn) */
--social-gradient: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);

/* Moro (oransje/gul) */
--fun-gradient: linear-gradient(135deg, #fa709a 0%, #fee140 100%);

/* Interaktiv (lilla) */
--interactive-gradient: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
```

## 📝 Vedlikehold og Oppdateringer

### Vanlige oppgaver

- **Legg til nye ord** i ordklasse-quiz: `norsk-quizer/ordklasse-quiz/script.js`
- **Legg til nye spørsmål** i kunnskapsquizer: Finn `questions` array
- **Endre antall spørsmål**: Se konstanter i hver quiz-fil
- **Tilpass tilbakemeldinger**: Se `feedbackMessages` arrays

### Fremtidige forbedringer

- [ ] Backend for å lagre resultater
- [ ] Brukerkontoer og progresjonssporing
- [ ] Flere fagområder (engelsk, samfunnsfag)
- [ ] Lydeffekter og bedre animasjoner
- [ ] Adaptiv vanskelighetsgrad
- [ ] Flerspillermodus
- [ ] Flere klokkevarianter (digital klokke, 24-timers format)

## 🤝 Bidrag

Dette er et personlig prosjekt for familien, men prinsipper og kode kan fritt gjenbrukes og tilpasses.

## 📄 Lisens

Dette prosjektet er laget for utdanningsformål. Bruk gjerne kode og ideer fritt.

## 👨‍💻 Kontakt

For spørsmål eller forslag til forbedringer, kontakt prosjekteier.

---

**Sist oppdatert**: 19. januar 2026  
**Versjon**: 2.1  
**Live på**: [GitHub Pages](https://sjarleee.github.io/skole-quiz/)
