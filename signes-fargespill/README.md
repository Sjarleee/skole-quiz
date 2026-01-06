# Quiz Engine - Dokumentasjon

## Oversikt

Dette er et fleksibelt quiz-system som gjør det enkelt å lage interaktive læringsspill med talesyntese og visuell tilbakemelding.

## Filstruktur

```
signes-fargespill/
├── quiz-engine.js    # Kjernefunksjonalitet for quiz-systemet
├── style.css         # Standard CSS-styling
├── index.html        # Fargequiz (eksempel)
└── README.md         # Denne filen
```

## Hvordan lage en ny quiz

### 1. Opprett en konfigurasjon

En quiz-konfigurasjon er et JavaScript-objekt med følgende struktur:

```javascript
const minQuizConfig = {
    // Array med alle svaralternativer
    options: [
        { id: 'alternativ1', navn: 'Navn 1', /* andre egenskaper */ },
        { id: 'alternativ2', navn: 'Navn 2', /* andre egenskaper */ },
        // ...
    ],
    
    // Antall alternativer som vises per runde (valgfritt, standard: 3)
    numOptions: 3,
    
    // Funksjon som genererer spørsmålstekst
    generateQuestion: (target) => {
        return `Spørsmål om ${target.navn}?`;
    },
    
    // Funksjon som lager HTML-element for et alternativ
    renderOption: (option) => {
        const element = document.createElement('div');
        element.textContent = option.navn;
        element.classList.add('mine-alternativ');
        return element;
    },
    
    // Valgfritt: Egendefinert markering av feil svar
    markWrongAnswer: (element) => {
        element.style.backgroundColor = 'red';
        setTimeout(() => {
            element.style.backgroundColor = '';
        }, 800);
    }
};
```

### 2. Opprett en HTML-fil

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <title>Min Quiz</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="game-container">
        <a href="../index.html" class="home-link">&larr; Tilbake</a>
        <h1 id="question">Laster...</h1>
        <div class="options-container" id="options-container"></div>
        <div id="feedback"></div>
        <button id="next-button">Neste!</button>
    </div>

    <script src="quiz-engine.js"></script>
    <script>
        // Din quiz-konfigurasjon her
        const minQuizConfig = { /* ... */ };
        
        // Start quizen
        startQuiz(minQuizConfig);
    </script>
</body>
</html>
```

### 3. Tilpass CSS (valgfritt)

Du kan legge til egendefinert CSS i `style.css` eller opprette en egen CSS-fil:

```css
.mine-alternativ {
    padding: 20px;
    background-color: lightblue;
    cursor: pointer;
}

.mine-alternativ:hover {
    background-color: blue;
}
```

## Eksempler på quiz-typer

### Fargequiz (allerede implementert)

Viser fargede sirkler og ber brukeren velge riktig farge.

### Andre ideer for quizer

1. **Dyrelyd-quiz**: Viser bilder av dyr, spiller en lyd
2. **Tallquiz**: Vis tall, spør "Hvilket tall er 5?"
3. **Formquiz**: Viser geometriske former
4. **Bokstavquiz**: Lærer bokstaver og lyder
5. **Ordbildequiz**: Bilde og ord-matching

## API-referanse

### `startQuiz(config)`

Initialiserer og starter en quiz.

**Parametere:**
- `config.options` (Array, påkrevd): Alle svaralternativer
- `config.generateQuestion` (Function, påkrevd): Genererer spørsmålstekst
- `config.renderOption` (Function, påkrevd): Lager HTML for alternativ
- `config.numOptions` (Number, valgfritt): Antall alternativer per runde
- `config.feedbackMessages` (Object, valgfritt): Tilbakemeldinger
- `config.audioEnabled` (Boolean, valgfritt): Om lyd skal brukes
- `config.markWrongAnswer` (Function, valgfritt): Egendefinert feilmarkering

### HTML-elementer som må finnes

- `#question`: Element for spørsmålstekst
- `#options-container`: Container for svaralternativer
- `#feedback`: Element for tilbakemeldinger
- `#next-button`: Knapp for neste runde

## Nyttige funksjoner i quiz-engine.js

- `shuffleArray(array)`: Stokker en array tilfeldig
- `randomChoice(array)`: Velger et tilfeldig element
- `speak(text, lang, callback)`: Uttaler tekst med talesyntese

## Tips for beste resultat

1. **Hver quiz-type i egen mappe**: Gjør det enkelt å organisere
2. **Gjenbruk style.css**: Eller lag en spesifikk CSS-fil
3. **Test talesyntese**: Fungerer best i Chrome/Edge
4. **Responsiv design**: Tenk på mobil-visning
5. **Klare instruksjoner**: Spørsmålene skal være enkle å forstå

## Feilsøking

**Problem**: Ingen lyd
- Sjekk at nettleseren støtter Web Speech API
- Prøv Chrome eller Edge
- Sjekk at volumet ikke er av

**Problem**: Quiz starter ikke
- Sjekk konsollen for feilmeldinger
- Sørg for at alle påkrevde DOM-elementer finnes
- Verifiser at quiz-engine.js lastes før konfigurasjon

**Problem**: Feil lenker
- Sjekk relative stier i HTML
- Sørg for at filstrukturen er korrekt
