# Halveringsquiz

En interaktiv quiz for å øve på halvering av tall mellom 0 og 200.

## Beskrivelse

Denne quizen hjelper elever med å øve på å finne halvparten av tall. Quizen genererer tilfeldige partall mellom 0 og 200, og spør om halvparten av tallet.

## Funksjoner

- **Tilfeldige spørsmål**: Genererer 10 unike halveringsspørsmål
- **6 svaralternativer**: Gir 6 valgmuligheter per spørsmål
- **Umiddelbar tilbakemelding**: Viser med en gang om svaret er riktig eller galt
- **Poengsum**: Viser totalt antall riktige svar og prosent
- **Motiverende tilbakemeldinger**: Gir positive tilbakemeldinger basert på resultatet
- **Responsiv design**: Fungerer på både PC, nettbrett og mobil

## Slik bruker du quizen

1. Åpne `index.html` i en nettleser
2. Les spørsmålet: "Hva er halvparten av X?"
3. Velg det riktige svaret blant de 6 alternativene
4. Klikk på "Neste Spørsmål" for å gå videre
5. Se resultatet ditt etter 10 spørsmål
6. Klikk "Spill Igjen" for å øve mer

## Pedagogisk verdi

Quizen øver på:
- Halvering av tall
- Divisjon med 2
- Tallforståelse
- Rask regning

## Teknisk informasjon

- **HTML**: Struktur og innhold
- **CSS**: Design og layout med gradient bakgrunn
- **JavaScript**: Logikk for spørsmålsgenerering og interaktivitet

## Tilpasning

Du kan enkelt tilpasse quizen ved å endre følgende i `script.js`:

```javascript
const TOTAL_QUESTIONS = 10;  // Antall spørsmål
const NUMBER_OF_OPTIONS = 6; // Antall svaralternativer
```

Du kan også endre tallområdet ved å justere denne linjen:
```javascript
const number = Math.floor(Math.random() * 101) * 2; // 0, 2, 4, ..., 200
```

## Forfatter

Skolequiz Prosjekt - Januar 2026
