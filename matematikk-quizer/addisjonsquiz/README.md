# Addisjonsquiz

En interaktiv quiz for å øve på addisjon med fokus på å finne manglende addend.

## 📋 Oversikt

Denne quizen tester elevens evne til å løse addisjonsproblemer på formen:

```
a + ? = sum
```

Der eleven skal finne det manglende tallet (?).

## 📁 Filer

```
addisjonsquiz/
├── index.html           # Quiz-siden
├── addisjon-quiz.js     # Quiz-logikk
└── README.md            # Denne filen
```

**Merk**: Denne quizen bruker CSS fra `../gangetabell-quiz/style.css`

## 🎮 Funksjoner

### Spørsmålsformat

Alle spørsmål følger mønsteret:
```
23 + ? = 45
```

Svaret ville være: **22**

### Egenskaper

- **Sum-område**: 0-100 (alle summer er mellom 0 og 100)
- **Antall spørsmål**: 10 per runde
- **Svaralternativer**: 6 per spørsmål
- **Tilfeldig generering**: Nye spørsmål hver gang

### Vanskelighetsgrad

Vanskelighetsgraden varierer automatisk siden:
- Små summer (0-20) gir enkle spørsmål
- Store summer (80-100) gir vanskeligere spørsmål
- Første addend (a) kan være hva som helst fra 0 til summen

## 🛠 Teknisk Dokumentasjon

### Spørsmålsgenerering

```javascript
// 1. Velg tilfeldig sum
const sumResult = Math.floor(Math.random() * 101); // 0-100

// 2. Velg første addend
const num1 = Math.floor(Math.random() * (sumResult + 1));

// 3. Beregn manglende addend (riktig svar)
const correctAnswer = sumResult - num1;

// 4. Lag spørsmålet
const questionText = `${num1} + ? = ${sumResult}`;
```

### Svaralternativer

- 1 riktig svar (beregnet fra sum - num1)
- 5 tilfeldige feil svar (også mellom 0-100)
- Alle alternativer stokkes tilfeldig

### Viktige Funksjoner

#### `generateSingleQuestion()`
Genererer ett enkelt addisjonsspørsmål med:
- Tilfeldig sum (0-100)
- Tilfeldig første addend
- Beregnet riktig svar
- 6 svaralternativer

#### `generateAllQuestions()`
Genererer alle 10 spørsmål for quizen.

#### `displayQuestion()`
Viser gjeldende spørsmål med svaralternativer.

#### `selectAnswer(selectedOption, correctAnswer)`
Sjekker svaret og gir tilbakemelding.

## 🎨 Tilpasning

### Endre Antall Spørsmål

I [addisjon-quiz.js](addisjon-quiz.js#L31):
```javascript
const TOTAL_QUESTIONS = 10; // Endre dette tallet
```

### Endre Antall Alternativer

I [addisjon-quiz.js](addisjon-quiz.js#L34):
```javascript
const NUMBER_OF_OPTIONS = 6; // Endre dette tallet
```

### Endre Sum-området

For å endre fra 0-100 til f.eks. 0-50:

I [addisjon-quiz.js](addisjon-quiz.js):
```javascript
// Finn denne linjen:
const sumResult = Math.floor(Math.random() * 101);

// Endre til:
const sumResult = Math.floor(Math.random() * 51); // 0-50
```

Husk også å endre svaralternativene tilsvarende:
```javascript
// Finn denne linjen:
const randomOption = Math.floor(Math.random() * 101);

// Endre til:
const randomOption = Math.floor(Math.random() * 51); // 0-50
```

### Legg Til Personlige Tilbakemeldinger

For å legge til mer varierte tilbakemeldinger, endre i [addisjon-quiz.js](addisjon-quiz.js):

```javascript
function selectAnswer(selectedOption, correctAnswer) {
    enableOptionButtons(false);
    if (selectedOption === correctAnswer) {
        // Legg til array med meldinger
        const correctMessages = [
            'Riktig!',
            'Kjempebra!',
            'Perfekt!',
            'Du er flink!'
        ];
        const randomMessage = correctMessages[Math.floor(Math.random() * correctMessages.length)];
        feedbackElement.textContent = randomMessage;
        feedbackElement.className = 'feedback correct';
        score++;
    } else {
        feedbackElement.textContent = `Feil. Riktig svar var ${correctAnswer}.`;
        feedbackElement.className = 'feedback incorrect';
    }
    nextButton.style.display = 'block';
}
```

## 📊 Dataflyt

```
1. Start quiz
   ↓
2. Generer 10 spørsmål
   ↓
3. For hvert spørsmål:
   a. Velg tilfeldig sum (0-100)
   b. Velg tilfeldig første addend
   c. Beregn manglende addend (riktig svar)
   d. Generer 5 feil alternativer
   e. Stokk alle alternativer
   ↓
4. Vis spørsmål
   ↓
5. Bruker velger svar
   ↓
6. Sjekk svar og gi tilbakemelding
   ↓
7. Gjenta 4-6 til alle spørsmål er besvart
   ↓
8. Vis resultat
```

## 🎓 Pedagogisk Verdi

Denne typen quiz hjelper elever med å:

1. **Forstå addisjon som en reversibel operasjon**
   - Hjelper med å se sammenhengen mellom addisjon og subtraksjon
   
2. **Utvikle mental aritmetikk**
   - Øver på å tenke: "Hva må legges til 23 for å få 45?"
   
3. **Bygge tallforståelse**
   - Ser på tall som deler av en helhet
   
4. **Forberede for algebra**
   - Introduserer ideen om ukjente verdier

## 📝 Tips for Bruk

### For Yngre Elever
- Start med små tall (endre sum-området til 0-20)
- Reduser antall alternativer til 4

### For Eldre Elever
- Øk sum-området til 0-200 eller høyere
- Legg til tidsbegrensning
- Øk antall spørsmål

### Som Lærer/Forelder
- Bruk quizen som daglig oppvarming
- Observer hvilke typer spørsmål eleven sliter med
- Kombiner med fysiske hjelpemidler (klosser, fingre)

## 🚀 Fremtidige Forbedringer

- [ ] Vanskelighetsvalg (lett/middels/vanskelig)
- [ ] Adaptiv vanskelighetsgrad
- [ ] Flere operasjoner (subtraksjon, multiplikasjon)
- [ ] Tidsbegrensning per spørsmål
- [ ] Detaljert statistikk
- [ ] Lydeffekter

## 🤝 Bidrag

Dette er en del av Skolequiz-prosjektet. Se hovedREADME for mer informasjon.

---

**Sist oppdatert**: Januar 2026
