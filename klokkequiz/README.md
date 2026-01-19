# Klokkequiz

En interaktiv quiz for å øve på å lese analog klokke og si tiden på norsk.

## Beskrivelse

Denne quizen hjelper elever med å lære å lese analog klokke. Quizen viser en urskive med visere, og eleven skal klikke på ord i riktig rekkefølge for å si hva klokka er.

## Funksjoner

- **Analog klokke**: Viser en fullverdig urskive med time- og minuttviser
- **Interaktive ordbokser**: Eleven klikker på ord i riktig rekkefølge
- **Norske tidsuttrykk**: Støtter alle vanlige måter å si tiden på:
  - Hele timer: "klokka to", "klokka åtte"
  - Kvarter: "kvart over tre", "kvart på fem"
  - Halve: "halv seks", "halv ni"
  - Femminutters: "fem over to", "ti på fire"
  - Med halv: "fem på halv seks", "fem over halv tre"
- **10 spørsmål**: Øver på forskjellige tider
- **Umiddelbar tilbakemelding**: Viser riktig svar hvis feil
- **Distraktorer**: Inkluderer feil ord for å gjøre det mer utfordrende
- **Responsiv design**: Fungerer på PC, nettbrett og mobil

## Slik bruker du quizen

1. Åpne `index.html` i en nettleser
2. Se på klokka og finn ut hva tiden er
3. Klikk på ord i riktig rekkefølge for å bygge tidsuttrykket
4. Klikk "Sjekk svar" for å se om du har rett
5. Bruk "Tøm" hvis du vil starte på nytt
6. Klikk "Neste Spørsmål" for å gå videre
7. Se resultatet ditt etter 10 spørsmål

## Pedagogisk verdi

Quizen øver på:
- Å lese analog klokke
- Norske tidsuttrykk
- Forståelse av time- og minuttviser
- Språklig presisjon ("over", "på", "halv")
- Koblingen mellom visuell representasjon og ord

## Tider som støttes

Quizen bruker følgende minutter:
- **0**: "klokka [time]"
- **5**: "fem over [time]"
- **10**: "ti over [time]"
- **15**: "kvart over [time]"
- **20**: "tjue over [time]"
- **25**: "fem på halv [neste time]"
- **30**: "halv [neste time]"
- **35**: "fem over halv [neste time]"
- **40**: "tjue på [neste time]"
- **45**: "kvart på [neste time]"
- **50**: "ti på [neste time]"
- **55**: "fem på [neste time]"

## Teknisk informasjon

- **HTML**: Struktur med SVG for analog klokke
- **CSS**: Design med gradient bakgrunn og animasjoner
- **JavaScript**: Logikk for klokkegenerering, ordvalg og validering
- **SVG**: Vektorgrafikk for urskive, visere og streker

## Tilpasning

Du kan enkelt tilpasse quizen ved å endre følgende i `script.js`:

```javascript
const TOTAL_QUESTIONS = 10;  // Antall spørsmål
```

For å legge til flere tidsuttrykk, utvid `generateTimeDescription()` funksjonen.

## Fremtidige forbedringer

Mulige utvidelser:
- Digital klokke-modus
- Vanskelighetsgrad (kun kvarter, alle tider, etc.)
- Lyduttalelse av tiden
- Tegne visere selv (omvendt quiz)
- 24-timers format

## Forfatter

Skolequiz Prosjekt - Januar 2026
