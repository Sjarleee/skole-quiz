# KRLE Quizer

Samling av multiple choice quizer for KRLE (Kristendom, Religion, Livssyn og Etikk).

## 📋 Oversikt

Denne mappen inneholder quizer om ulike religioner og trosretninger, tilpasset ulike alderstrinn.

## 🗂️ Struktur

```
krle-quizer/
├── shared/
│   └── quiz-style.css       # Felles styling for alle KRLE-quizer
│
├── hinduismen-7trinn/
│   └── index.html           # 45 spørsmål om hinduismen
│
└── islam-9trinn/
    ├── index.html           # Islam quiz hovedside
    └── islam-quiz.js        # 100 spørsmål om islam
```

## 📚 Tilgjengelige Quizer

### Hinduismen Quiz (7. trinn)
- **Antall spørsmål**: 45
- **Emner**: 
  - Grunnleggende om hinduismen
  - Guder og gudinner
  - Karma og reinkarnasjon
  - Hellige skrifter
  - Ritualer og praksiser

### Islam Quiz (9. trinn)
- **Antall spørsmål**: 100
- **Emner**:
  - Grunnleggende om islam (20 spørsmål)
  - Profeten Muhammed (15 spørsmål)
  - Koranen (15 spørsmål)
  - Hadith og sunna (10 spørsmål)
  - De fem søylene (15 spørsmål)
  - Islamsk historie (10 spørsmål)
  - Shia og sunni (10 spørsmål)
  - Islam i verden i dag (5 spørsmål)

## 🎮 Funksjoner

Alle quizer har:
- ✅ Multiple choice format
- ✅ Umiddelbar tilbakemelding
- ✅ Forklaringer ved feil svar
- ✅ Poengberegning
- ✅ Mulighet til å starte på nytt
- ✅ Responsivt design

## 🛠 Teknisk Dokumentasjon

### Felles Styling

Alle KRLE-quizer bruker samme stylesheet (`shared/quiz-style.css`) for konsistent utseende:
- Moderne, rent design
- Grønn for riktig, rød for feil
- Responsiv layout
- Tilgjengelig på mobile enheter

### Quiz-struktur

Hver quiz følger samme mønster:

```javascript
const questions = [
    {
        q: "Spørsmålstekst her?",
        options: ["Alternativ 1", "Alternativ 2", "Alternativ 3", "Alternativ 4"],
        correct: 0, // Indeks for riktig svar (0-3)
        explanation: "Forklaring hvis svar er feil"
    }
];
```

### Hvordan Legge Til Nye Spørsmål

1. Åpne relevant `*-quiz.js` fil
2. Legg til nye spørsmål i `questions` array:

```javascript
{ 
    q: "Ditt nye spørsmål?", 
    options: ["Svar 1", "Svar 2", "Svar 3", "Svar 4"],
    correct: 2, // Indeks for riktig svar (0 = første, 1 = andre, osv.)
    explanation: "Forklaring som vises ved feil svar"
}
```

## ➕ Lag En Ny KRLE-Quiz

### Steg-for-steg Guide

1. **Opprett ny mappe**
```bash
mkdir krle-quizer/din-quiz-navn
```

2. **Kopier mal-filer**
```bash
cp krle-quizer/islam-9trinn/index.html krle-quizer/din-quiz-navn/
cp krle-quizer/islam-9trinn/islam-quiz.js krle-quizer/din-quiz-navn/din-quiz.js
```

3. **Rediger HTML**
- Endre tittel
- Oppdater lenke til JS-fil

4. **Rediger JS-fil**
- Erstatt spørsmålene i `questions` array
- Tilpass tilbakemeldingsmeldinger om ønskelig

5. **Legg til i hovedsiden**
Rediger `index.html` i rotmappen og legg til nytt kort under KRLE-seksjonen.

## 📝 Tips for Spørsmålsskriving

### Gode Spørsmål

✅ **Klare og tydelige**: "Hva heter den hellige boken i islam?"
✅ **Ett riktig svar**: Unngå tvetydighet
✅ **Passende vanskelighetsgrad**: Tilpass alderstrinn
✅ **Lærerikt**: Inkluder forklaring

### Unngå

❌ **Triksete spørsmål**: Ikke prøv å lure eleven
❌ **Subjektive spørsmål**: "Hva er best?"
❌ **Altfor vanskelige ord**: Tilpass språknivå

### Alternativer (Distraktorer)

- Bruk realistiske feil svar
- Ikke gjør det for åpenbart
- Unngå "alle/ingen av de over" hvis mulig
- Variert lengde på alternativer

## 🌍 Fremtidige Quizer

Forslag til nye KRLE-quizer:

- [ ] Kristendommen (5. trinn)
- [ ] Buddhism (8. trinn)
- [ ] Jødedom (9. trinn)
- [ ] Etikk og moral (alle trinn)
- [ ] Livssyn og humanisme (9./10. trinn)
- [ ] Verdensreligioner sammenligning (10. trinn)

## 🤝 Bidrag

Dette er en del av Skolequiz-prosjektet. Se hovedREADME for mer informasjon.

---

**Sist oppdatert**: Januar 2026
**Antall quizer**: 2
**Totalt antall spørsmål**: 145
