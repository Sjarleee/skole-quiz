# Islam Quiz - 9. trinn

En omfattende quiz om islam tilpasset 9. trinn KRLE-pensum.

## 🎯 Oversikt

- **Antall spørsmål**: 100
- **Format**: Multiple choice (4 alternativer)
- **Tilbakemelding**: Umiddelbar med forklaringer
- **Live URL**: [https://sjarleee.github.io/skole-quiz/krle-quizer/islam-9trinn/](https://sjarleee.github.io/skole-quiz/krle-quizer/islam-9trinn/)

## 📚 Innhold

Quizen dekker 8 hovedtemaer:

### 1. Grunnleggende om Islam (20 spørsmål)
- Islams betydning og grunnprinsipper
- De fem søylene
- Hjertets og sinnets renhet
- Trosbekjennelsen (shahada)
- Islams forhold til andre religioner

### 2. Profeten Muhammed (15 spørsmål)
- Muhammeds liv i Mekka og Medina
- Den første åpenbaringen
- Hijra (utvandringen)
- Muhammeds betydning for muslimer
- Profetens eksempel

### 3. Koranen (15 spørsmål)
- Koranens struktur og språk
- Åpenbaring og nedtegnelse
- Koranen som hellig skrift
- Viktige suraer
- Koranens budskap

### 4. Hadith og Sunna (10 spørsmål)
- Hadithenes betydning
- Sunna som Muhammeds levesett
- Hadithsamlinger
- Hadith vs. Koran

### 5. De Fem Søylene (15 spørsmål)
- Shahada (trosbekjennelsen)
- Salat (bønnen)
- Zakat (almisse)
- Sawm (faste i ramadan)
- Hajj (pilegrimsreisen)

### 6. Islamsk Historie (10 spørsmål)
- Kalifenes tid
- Islams spredning
- Det osmanske riket
- Viktige hendelser

### 7. Shia og Sunni (10 spørsmål)
- Splittelsen etter Muhammeds død
- Forskjeller i tro og praksis
- Geografisk utbredelse
- Historiske konflikter

### 8. Islam i Verden i Dag (5 spørsmål)
- Antall muslimer globalt
- Islam i Norge
- Moderne utfordringer
- Religiøs mangfold

## 🎮 Funksjoner

- ✅ 100 nøye utformede spørsmål
- ✅ Umiddelbar tilbakemelding på hvert svar
- ✅ Detaljerte forklaringer ved feil svar
- ✅ Progresstracking (viser hvilken oppgave du er på)
- ✅ Sluttresultat med prosentvis score
- ✅ Mulighet til å starte på nytt
- ✅ Responsivt design for alle enheter

## 🛠 Teknisk

### Filer
- `index.html` - HTML-struktur og layout
- `islam-quiz.js` - Quiz-logikk og spørsmålsdata
- `../shared/quiz-style.css` - Felles styling for KRLE-quizer

### Struktur

```javascript
const questions = [
    {
        q: "Spørsmålstekst?",
        options: ["Alt 1", "Alt 2", "Alt 3", "Alt 4"],
        correct: 0, // Indeks for riktig svar (0-3)
        explanation: "Forklaring ved feil svar"
    }
];
```

### Quiz State Management

```javascript
let currentIndex = 0;  // Nåværende spørsmål
let score = 0;         // Antall riktige svar
```

## 📖 Pedagogisk Tilnærming

Quizen er designet for å:

1. **Dekke pensum**: Alle sentrale temaer i 9. trinn KRLE om islam
2. **Fremme forståelse**: Forklaringer hjelper med læring, ikke bare testing
3. **Bygge kunnskap progressivt**: Starter med grunnleggende, går videre til mer komplekse temaer
4. **Respektere religionen**: Nøytral og respektfull fremstilling
5. **Engasjere eleven**: Interaktiv format holder oppmerksomheten

## 🎯 Læringsmål

Etter å ha gjennomført quizen skal eleven kunne:

- Forklare islams fem søyler og deres betydning
- Beskrive Muhammeds liv og hans rolle i islam
- Gjøre rede for Koranens betydning
- Forklare forskjellen mellom sunni og shia
- Forstå islams historiske utvikling
- Kjenne til islams globale utbredelse

## 🔄 Vedlikehold

### Legge til nye spørsmål

Rediger `islam-quiz.js` og legg til i riktig temaseksjon:

```javascript
// Legg til i den relevante seksjonen
{
    q: "Ditt nye spørsmål?",
    options: ["Alternativ A", "Alternativ B", "Alternativ C", "Alternativ D"],
    correct: 0, // Indeks for riktig svar
    explanation: "Forklaring som hjelper eleven forstå"
}
```

### Endre antall spørsmål

For å endre antall spørsmål som vises, oppdater i `islam-quiz.js`:

```javascript
// Finn denne linjen og endre tallet
const selectedQuestions = shuffleArray([...questions]).slice(0, 100);
```

## 📱 Bruk

1. **Åpne quizen** i nettleseren
2. **Les spørsmålet** nøye
3. **Velg ett alternativ** av fire
4. **Få umiddelbar tilbakemelding**
   - Grønt = riktig
   - Rødt = feil (med forklaring)
5. **Klikk "Neste"** for å gå videre
6. **Se resultatet** når alle spørsmål er besvart

## 🌐 Tilgjengelighet

- Responsivt design fungerer på mobil, nettbrett og PC
- Store, klikkbare knapper
- God kontrast og lesbarhet
- Enkel navigasjon

## 📝 Lisens

Laget for undervisningsformål. Kan fritt brukes i utdanning.

---

**Opprettet**: Januar 2026  
**Språk**: Norsk (bokmål)  
**Nivå**: 9. trinn  
**Fag**: KRLE
