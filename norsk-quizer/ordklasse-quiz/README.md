# Ordklasse Quiz

En interaktiv quiz for å øve på ordklasser i norsk.

## Beskrivelse

Denne quizen hjelper elever med å lære forskjellen mellom adjektiv, verb og substantiv. Quizen velger 10 tilfeldige ord fra en ordbank på 150+ ord.

## Funksjoner

- **10 tilfeldige spørsmål**: Velges fra en stor ordbank
- **Tre ordklasser**: Adjektiv, Verb og Substantiv
- **Umiddelbar tilbakemelding**: Viser om svaret er riktig eller galt
- **Fargekodet feedback**: Grønt for riktig, rødt for feil
- **Poengsum**: Viser antall riktige svar og motiverende tilbakemelding
- **Responsiv design**: Fungerer på PC, nettbrett og mobil

## Slik bruker du quizen

1. Åpne `index.html` i en nettleser
2. Les ordet som vises
3. Velg riktig ordklasse: Adjektiv, Verb eller Substantiv
4. Se om du hadde rett
5. Klikk "Neste Ord" for å fortsette
6. Se resultatet ditt etter 10 ord
7. Klikk "Spill Igjen" for å øve mer

## Pedagogisk verdi

Quizen øver på:
- Gjenkjenne ordklasser
- Skille mellom adjektiv, verb og substantiv
- Norsk grammatikk
- Ordforståelse

## Ordklasser

**Substantiv** - Navn på ting, personer, steder:
- hus, katt, lærer, Norge

**Verb** - Handlingsord:
- løper, tenker, spiser, danser

**Adjektiv** - Beskrivende ord:
- grønn, stor, rask, vakker

## Teknisk informasjon

- **HTML**: Struktur og innhold
- **CSS**: Moderne design med blå gradient
- **JavaScript**: Logikk for ordvalg og validering
- **Ordbank**: 150+ norske ord

## Tilpasning

Du kan enkelt tilpasse quizen ved å endre følgende i `script.js`:

```javascript
const totalQuizQuestions = 10;  // Antall spørsmål per runde
```

For å legge til flere ord, utvid `allQuestions` array:
```javascript
{ word: "dittord", type: "Substantiv|Verb|Adjektiv" }
```

## Forfatter

Skolequiz Prosjekt - Januar 2026
