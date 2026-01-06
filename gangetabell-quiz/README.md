# Gangetabell Quiz

En interaktiv quiz for å øve på gangetabellen med ulike vanskelighetsgrader.

## 📋 Oversikt

Denne quizen genererer tilfeldige gangestykker og tester elevens kunnskap med flervalgsspørsmål. Quizen støtter tre vanskelighetsgrader:

- **1-5**: For nybegynnere (med visuell representasjon ●●●)
- **1-10**: Standard gangetabell
- **1-20**: Avansert versjon

## 📁 Filer

```
gangetabell-quiz/
├── index.html          # 1-20 gangetabell (vanskeligst)
├── index-1-10.html     # 1-10 gangetabell (standard)
├── index-1-5.html      # 1-5 gangetabell (nybegynner)
├── script.js           # Quiz-logikk (deles av alle versjoner)
├── style.css           # Styling
└── README.md           # Denne filen
```

## 🎮 Funksjoner

### Intelligente Distraktorer
Feil svaralternativer er ikke helt tilfeldige, men genereres intelligent:
- 50% er nære det riktige svaret (+/- noen)
- 25% er fra nabotabellen (f.eks. 3×4 i stedet for 4×4)
- 25% er fra nabokolonne (f.eks. 4×3 i stedet for 4×4)

### Personaliserte Tilbakemeldinger
- Over 30 ulike positive meldinger ved riktig svar
- Over 30 ulike oppmuntrende meldinger ved feil svar
- Tilpasset for Othilie med personlige referanser

### Visuell Representasjon (1-5 tabell)
For nybegynnere vises gangestykker også visuelt:
```
3 × 2 vises som:
●●● × ●●
```

### Progresstracking
- Viser "Spørsmål X av Y"
- Poengtelling underveis
- Detaljert resultatvisning på slutten

## 🛠 Teknisk Dokumentasjon

### Arkitektur

```javascript
// Konfigurasjon settes i HTML via data-attributt
<body data-max-table="10">

// Script.js leser denne og tilpasser:
- Antall spørsmål
- Visuell representasjon (kun 1-5)
- Titteltekst
```

### Hvordan Lage Ny Vanskelighetsgrad

1. **Kopier en eksisterende HTML-fil**
```bash
cp index-1-10.html index-1-15.html
```

2. **Endre data-max-table attributt**
```html
<body data-max-table="15">
```

3. **Endre tittelen**
```html
<h1>Gangetabell Quiz (1-15)</h1>
<title>Gangetabell Quiz (1-15)</title>
```

4. **Legg til i hovedsiden** (index.html i roten)

### Spørsmålsgenerering

```javascript
// For hver kombinasjon i x j (der i og j ≤ MAX_TABLE_NUMBER):
// 1. Beregn riktig svar
const correctAnswer = i * j;

// 2. Generer 3 distraktorer (feil svar)
// 3. Stokk alle 4 alternativene
// 4. Lagre spørsmål med tekst, alternativer og riktig svar
```

### Viktige Funksjoner

#### `generateAllPossibleQuestions()`
Genererer alle mulige spørsmål basert på MAX_TABLE_NUMBER. For 1-10 tabellen gir dette 100 spørsmål (10×10).

#### `selectRandomQuestions()`
Velger tilfeldig N spørsmål (standard 20) fra alle mulige.

#### `displayQuestion()`
Viser gjeldende spørsmål med 4 svaralternativer.

#### `handleNextButtonClick()`
Håndterer tre moduseringseffekter:
1. "Sjekk Svar" → Sjekker og gir tilbakemelding
2. "Neste Spørsmål" → Går videre
3. "Se Resultater" → Avslutter quizen

## 🎨 Tilpasning

### Endre Antall Spørsmål

I [script.js](script.js#L34):
```javascript
const DEFAULT_NUM_QUESTIONS_TO_ASK = 20; // Endre dette tallet
```

### Legge Til Nye Tilbakemeldinger

I [script.js](script.js#L45):
```javascript
let correctFeedbackMessages = [
    "Din nye positive melding her!",
    // ... flere meldinger
];
```

### Tilpasse Styling

I [style.css](style.css):
```css
/* Endre farger */
.correct {
    background-color: #d4edda; /* Grønn for riktig */
}

.incorrect {
    background-color: #f8d7da; /* Rød for feil */
}

/* Endre knappstørrelse */
.option-btn {
    padding: 15px 20px;
    font-size: 1.2em;
}
```

## 📊 Dataflyt

```
1. DOMContentLoaded
   ↓
2. Les MAX_TABLE_NUMBER fra HTML
   ↓
3. generateAllPossibleQuestions()
   ↓
4. selectRandomQuestions()
   ↓
5. displayQuestion()
   ↓
6. Bruker velger svar → handleOptionClick()
   ↓
7. Bruker klikker "Sjekk" → handleNextButtonClick()
   ↓
8. Vis tilbakemelding (riktig/feil)
   ↓
9. Gjenta 5-8 til alle spørsmål er besvart
   ↓
10. showResults()
```

## 🐛 Kjente Begrensninger

- For små tabeller (1-2) kan det være vanskelig å generere 4 unike alternativer
- Distraktorer kan noen ganger være åpenbart feil
- Ingen adaptiv vanskelighetsgrad (kommer i fremtidige versjoner)

## 🚀 Fremtidige Forbedringer

- [ ] Adaptiv vanskelighetsgrad basert på ytelse
- [ ] Tidsbegrensning per spørsmål (valgfritt)
- [ ] Keyboard-navigasjon (1-4 taster for svar)
- [ ] Lydeffekter ved riktig/feil svar
- [ ] Detaljert statistikk (hvilke tabeller eleven sliter med)
- [ ] Lagre progresjon i localStorage

## 📝 Tips for Lærere/Foreldre

1. **Start med 1-5 tabellen** for yngre barn
2. **Bruk den visuelle representasjonen** for å forklare konseptet
3. **Oppmuntre til å fullføre** hele quizen (20 spørsmål)
4. **Fokuser på forbedring** heller enn perfeksjon
5. **Gjenta ofte** - repetisjon er nøkkelen til å lære gangetabellen

## 🤝 Bidrag

Dette er en del av Skolequiz-prosjektet. Se hovedREADME for mer informasjon.

---

**Sist oppdatert**: Januar 2026
