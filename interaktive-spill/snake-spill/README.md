# Snake et Beast 🐍

Et klassisk Snake-spill hvor du styrer en slange som spiser epler og vokser. Unngå å treffe veggene eller deg selv!

## Beskrivelse

"Snake et Beast" er en moderne versjon av det klassiske Snake-spillet. Spill slangen rundt på brettet, spis epler for å vokse og få poeng, men pass på - jo lenger du blir, jo vanskeligere blir det!

## Funksjoner

- 🎮 **Klassisk Snake-gameplay** - Enkel og vanedannende
- 🍎 **Spis epler** - Hver eple gir 10 poeng og gjør slangen lengre
- ⚡ **Økende vanskelighetsgrad** - Spillet blir raskere for hvert eple
- 🏆 **High score system** - Lagres lokalt i nettleseren
- 🎨 **Moderne design** - Pen grafikk med animasjoner
- 📱 **Touch-kontroll** - Sveip for å styre på mobil/nettbrett
- ⌨️ **Keyboard-kontroll** - Piltaster på PC
- 👀 **Animerte øyne** - Slangen ser i retningen den beveger seg

## Slik spiller du

### PC/Mac
Bruk piltastene på tastaturet:
- **↑** - Flytt opp
- **↓** - Flytt ned
- **←** - Flytt venstre
- **→** - Flytt høyre

### Mobil/Nettbrett
Sveip i ønsket retning:
- Sveip opp for å bevege seg oppover
- Sveip ned for å bevege seg nedover
- Sveip venstre for å bevege seg mot venstre
- Sveip høyre for å bevege seg mot høyre

### Regler
1. Spis epler (🍎) for å få poeng og vokse
2. Unngå å treffe veggene
3. Unngå å treffe din egen kropp
4. Jo lenger du overlever, jo raskere blir spillet

## Poeng

- Hvert eple gir **10 poeng**
- Spillet øker hastigheten etter hvert eple
- High score lagres automatisk i nettleseren din

## Teknisk informasjon

### Teknologier
- **HTML5 Canvas** - For grafikk og rendering
- **CSS3** - Moderne styling med gradienter
- **JavaScript (ES6+)** - Spillogikk og kontroller
- **LocalStorage** - For å lagre high score

### Spillmekanikk
- **Grid-basert system**: 20x20 rutenett
- **Startfart**: 150ms per oppdatering
- **Hastighetsøkning**: 5ms raskere per eple
- **Maksimal hastighet**: 50ms per oppdatering

### Kode-struktur
```javascript
// Hovedkomponenter:
- init()           // Initialiserer spillet
- startGame()      // Starter nytt spill
- update()         // Oppdaterer spilltilstand
- draw()           // Tegner grafikk
- handleKeyPress() // Håndterer input
- gameOver()       // Avslutter spillet
```

## Tilpasning

Du kan enkelt tilpasse spillet ved å endre konstanter i `script.js`:

```javascript
const GRID_SIZE = 20;           // Størrelse på hver rute (pixels)
const GRID_WIDTH = 20;          // Antall ruter i bredden
const GRID_HEIGHT = 20;         // Antall ruter i høyden
const INITIAL_SPEED = 150;      // Startfart (ms)
const SPEED_INCREASE = 5;       // Hastighetsøkning per eple
const MIN_SPEED = 50;           // Maksimal hastighet (ms)
```

### Eksempler på tilpasninger

**Større brett:**
```javascript
const GRID_WIDTH = 30;
const GRID_HEIGHT = 30;
```

**Tregere spill:**
```javascript
const INITIAL_SPEED = 200;
const SPEED_INCREASE = 3;
```

**Mer utfordrende:**
```javascript
const INITIAL_SPEED = 100;
const SPEED_INCREASE = 10;
const MIN_SPEED = 30;
```

## Fremtidige forbedringer

Mulige utvidelser:
- [ ] Nivåer med økende vanskelighetsgrad
- [ ] Power-ups (treig ned tid, dobbel poeng, etc.)
- [ ] Hindringer på brettet
- [ ] Flerspiller-modus
- [ ] Lydeffekter og bakgrunnsmusikk
- [ ] Flere temaer/skins
- [ ] Online leaderboard
- [ ] Pausefunksjon

## Pedagogisk verdi

Dette spillet hjelper med:
- 👁️ **Øye-hånd koordinasjon** - Rask reaksjon og presisjon
- 🧠 **Strategisk tenkning** - Planlegging av rute
- ⚡ **Reaksjonsevne** - Raskt beslutningstaking
- 🎯 **Konsentrasjon** - Fokus over tid
- 🏆 **Målsetting** - Slå egen high score

## Tips og triks

1. **Planlegg fremover** - Tenk flere trekk frem
2. **Hold sentrum** - Lettere å manøvrere
3. **Ikke bli for grådig** - Prioriter sikkerhet over poeng
4. **Bruk kantene** - Følg veggene i begynnelsen
5. **Øv på timing** - Lær spillets hastighet

## Forfatter

Skolequiz Prosjekt - Januar 2026

## Inspirasjon

Inspirert av det klassiske Snake-spillet fra Nokia-telefonene på 90-tallet, men med moderne grafikk og funksjonalitet.
