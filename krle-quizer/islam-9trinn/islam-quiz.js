/**
 * ISLAM QUIZ - 9. TRINN
 * 
 * En omfattende multiple choice quiz om Islam med 100 spørsmål.
 * Dekker emner som:
 * - Profeten Muhammed og hans liv
 * - De fem søylene
 * - Koranen og hadith
 * - Islamsk tro og praksis
 * - Islamsk historie
 * - Shia og sunni
 * - Islam i verden i dag
 * 
 * @version 1.0
 * @date 2026-01-06
 */

const questions = [
    // DEL 1: GRUNNLEGGENDE (Spørsmål 1-20)
    { 
        q: "Hva betyr ordet 'islam'?", 
        options: ["Fred", "Underkastelse", "Tro", "Bønn"],
        correct: 1,
        explanation: "Islam betyr 'underkastelse' eller 'overgivelse' til Gud."
    },
    { 
        q: "Hva heter den hellige boken i islam?", 
        options: ["Bibelen", "Koranen", "Torá", "Vedaene"],
        correct: 1,
        explanation: "Koranen er den hellige boken i islam, og muslimer tror den er Guds ord."
    },
    { 
        q: "Hva heter en person som følger islam?", 
        options: ["Kristen", "Muslim", "Jøde", "Hindu"],
        correct: 1,
        explanation: "En person som følger islam kalles muslim."
    },
    { 
        q: "Hva heter Gud på arabisk?", 
        options: ["Jahve", "Allah", "Brahma", "Jehova"],
        correct: 1,
        explanation: "Allah er det arabiske ordet for Gud."
    },
    { 
        q: "I hvilket land ble islam grunnlagt?", 
        options: ["Irak", "Egypt", "Saudi-Arabia", "Iran"],
        correct: 2,
        explanation: "Islam ble grunnlagt på den arabiske halvøy, i det som i dag er Saudi-Arabia."
    },
    { 
        q: "I hvilket århundre ble islam grunnlagt?", 
        options: ["500-tallet", "600-tallet", "700-tallet", "800-tallet"],
        correct: 1,
        explanation: "Islam ble grunnlagt på 600-tallet e.Kr."
    },
    { 
        q: "Hvor mange muslimer er det omtrent i verden?", 
        options: ["500 millioner", "1 milliard", "2 milliarder", "3 milliarder"],
        correct: 2,
        explanation: "Det er omtrent 2 milliarder muslimer i verden, noe som gjør islam til verdens nest største religion."
    },
    { 
        q: "Hva er de fem søylene?", 
        options: ["Fem profeter", "Fem moskeer", "Fem religiøse plikter", "Fem bønner"],
        correct: 2,
        explanation: "De fem søylene er fem religiøse plikter som alle muslimer skal følge."
    },
    { 
        q: "Hva er den første av de fem søylene?", 
        options: ["Bønn", "Trosbekjennelsen", "Faste", "Pilegrimsreise"],
        correct: 1,
        explanation: "Trosbekjennelsen (shahada) er den første av de fem søylene."
    },
    { 
        q: "Hva heter moskeen i islam?", 
        options: ["Synagoge", "Kirke", "Moské", "Tempel"],
        correct: 2,
        explanation: "Muslimenes bedehus kalles moské."
    },
    { 
        q: "Hva er qibla?", 
        options: ["En bønn", "Retningen muslimer ber mot", "En profet", "En hellig dag"],
        correct: 1,
        explanation: "Qibla er retningen muslimer vender seg mot når de ber - mot Mekka."
    },
    { 
        q: "Hvor mange ganger om dagen skal muslimer be?", 
        options: ["3", "5", "7", "10"],
        correct: 1,
        explanation: "Muslimer skal be fem ganger om dagen."
    },
    { 
        q: "Hva heter den hellige måneden med fasting?", 
        options: ["Hajj", "Eid", "Ramadan", "Jumu'ah"],
        correct: 2,
        explanation: "Ramadan er den hellige måneden der muslimer faster fra soloppgang til solnedgang."
    },
    { 
        q: "Hva kalles pilegrimsreisen til Mekka?", 
        options: ["Hajj", "Umrah", "Salat", "Zakat"],
        correct: 0,
        explanation: "Hajj er pilegrimsreisen til Mekka som alle muslimer skal gjøre minst én gang hvis de kan."
    },
    { 
        q: "Hva er zakat?", 
        options: ["Bønn", "Faste", "Almisse til fattige", "Pilegrimsreise"],
        correct: 2,
        explanation: "Zakat er almisse eller veldedighet til fattige, en av de fem søylene."
    },
    { 
        q: "Hva heter islamsk lov?", 
        options: ["Torah", "Sharia", "Halakha", "Dharma"],
        correct: 1,
        explanation: "Sharia er islamsk lov basert på Koranen og Muhammeds eksempel."
    },
    { 
        q: "Hva betyr 'halal'?", 
        options: ["Forbudt", "Tillatt", "Hellig", "Uren"],
        correct: 1,
        explanation: "Halal betyr 'tillatt' eller 'lovlig' i islam."
    },
    { 
        q: "Hva betyr 'haram'?", 
        options: ["Forbudt", "Tillatt", "Hellig", "Anbefalt"],
        correct: 0,
        explanation: "Haram betyr 'forbudt' eller 'ulovlig' i islam."
    },
    { 
        q: "Hvilken mat er haram for muslimer?", 
        options: ["Kylling", "Fisk", "Svinekjøtt", "Lam"],
        correct: 2,
        explanation: "Svinekjøtt er haram (forbudt) for muslimer å spise."
    },
    { 
        q: "Hva er en imam?", 
        options: ["En profet", "En religiøs leder", "En engel", "En hellig bok"],
        correct: 1,
        explanation: "En imam er en religiøs leder som ofte leder bønnen i moskéen."
    },

    // DEL 2: PROFETEN MUHAMMED (Spørsmål 21-35)
    { 
        q: "Hva heter profeten som grunnla islam?", 
        options: ["Moses", "Jesus", "Muhammed", "Abraham"],
        correct: 2,
        explanation: "Muhammed er profeten som grunnla islam."
    },
    { 
        q: "I hvilken by ble Muhammed født?", 
        options: ["Medina", "Mekka", "Jerusalem", "Damaskus"],
        correct: 1,
        explanation: "Muhammed ble født i Mekka rundt år 570."
    },
    { 
        q: "Hvor gammel var Muhammed da han fikk sin første åpenbaring?", 
        options: ["25 år", "30 år", "40 år", "50 år"],
        correct: 2,
        explanation: "Muhammed var omtrent 40 år gammel da han fikk sin første åpenbaring."
    },
    { 
        q: "Hvor fikk Muhammed sin første åpenbaring?", 
        options: ["I moskéen", "I ørkenen", "I en hule", "I sitt hjem"],
        correct: 2,
        explanation: "Muhammed fikk sin første åpenbaring i Hira-hulen utenfor Mekka."
    },
    { 
        q: "Hvem brakte budskapet fra Gud til Muhammed?", 
        options: ["Engelen Gabriel", "Engelen Mikael", "Jesus", "Moses"],
        correct: 0,
        explanation: "Engelen Gabriel (Jibril på arabisk) brakte Guds budskap til Muhammed."
    },
    { 
        q: "Hva het Muhammeds første kone?", 
        options: ["Fatima", "Aisha", "Khadija", "Hafsa"],
        correct: 2,
        explanation: "Khadija var Muhammeds første kone og støttet ham fra begynnelsen."
    },
    { 
        q: "Hvorfor måtte Muhammed flykte fra Mekka?", 
        options: ["På grunn av krig", "Han ble forfulgt for sin tro", "På grunn av sykdom", "For å handle"],
        correct: 1,
        explanation: "Muhammed ble forfulgt av motstandere i Mekka og måtte flykte til Medina."
    },
    { 
        q: "Hva heter Muhammeds flukt fra Mekka til Medina?", 
        options: ["Hajj", "Hijra", "Jihad", "Umrah"],
        correct: 1,
        explanation: "Hijra er navnet på Muhammeds flukt fra Mekka til Medina i år 622."
    },
    { 
        q: "Hvilket år regnes som år 1 i islamsk kalender?", 
        options: ["Muhammeds fødsel", "Første åpenbaring", "Hijra", "Muhammeds død"],
        correct: 2,
        explanation: "Hijra (flukten til Medina) i år 622 regnes som år 1 i islamsk kalender."
    },
    { 
        q: "I hvilken by døde Muhammed?", 
        options: ["Mekka", "Medina", "Jerusalem", "Kairo"],
        correct: 1,
        explanation: "Muhammed døde i Medina i år 632."
    },
    { 
        q: "Hvor gammel var Muhammed da han døde?", 
        options: ["52 år", "62 år", "72 år", "82 år"],
        correct: 1,
        explanation: "Muhammed var omtrent 62 år gammel da han døde."
    },
    { 
        q: "Hva var Muhammeds yrke før han ble profet?", 
        options: ["Fisker", "Kjøpmann", "Bonde", "Soldat"],
        correct: 1,
        explanation: "Muhammed jobbet som kjøpmann før han ble profet."
    },
    { 
        q: "Hvem var Muhammeds nærmeste følgesvenn?", 
        options: ["Ali", "Abu Bakr", "Umar", "Uthman"],
        correct: 1,
        explanation: "Abu Bakr var Muhammeds nærmeste venn og ble den første kalifen."
    },
    { 
        q: "Hva het Muhammeds datter?", 
        options: ["Aisha", "Fatima", "Khadija", "Zainab"],
        correct: 1,
        explanation: "Fatima var Muhammeds datter, gift med Ali."
    },
    { 
        q: "Hvordan beskriver muslimer Muhammed?", 
        options: ["Som Gud", "Som Guds sønn", "Som den siste profet", "Som en engel"],
        correct: 2,
        explanation: "Muslimer ser på Muhammed som den siste og største av profetene, men ikke som Gud."
    },

    // DEL 3: KORANEN (Spørsmål 36-50)
    { 
        q: "På hvilket språk ble Koranen åpenbart?", 
        options: ["Hebraisk", "Arabisk", "Persisk", "Tyrkisk"],
        correct: 1,
        explanation: "Koranen ble åpenbart på arabisk, og arabisk regnes som det hellige språket."
    },
    { 
        q: "Over hvor lang tid ble Koranen åpenbart?", 
        options: ["1 år", "5 år", "23 år", "40 år"],
        correct: 2,
        explanation: "Koranen ble åpenbart over en periode på 23 år."
    },
    { 
        q: "Hva betyr 'Koranen'?", 
        options: ["Den hellige", "Det åpenbarte", "Opplesningen", "Profetien"],
        correct: 2,
        explanation: "Koranen betyr 'opplesningen' eller 'resitasjonen'."
    },
    { 
        q: "Hvor mange kapitler (suraer) har Koranen?", 
        options: ["66", "99", "114", "150"],
        correct: 2,
        explanation: "Koranen har 114 kapitler som kalles suraer."
    },
    { 
        q: "Hva kalles kapitlene i Koranen?", 
        options: ["Vers", "Suraer", "Ayat", "Hadith"],
        correct: 1,
        explanation: "Kapitlene i Koranen kalles suraer."
    },
    { 
        q: "Hva kalles versene i Koranen?", 
        options: ["Suraer", "Ayat", "Hadith", "Sunna"],
        correct: 1,
        explanation: "Versene i Koranen kalles ayat."
    },
    { 
        q: "Hvem er Koranen ifølge islamsk tro?", 
        options: ["Muhammeds ord", "Guds direkte ord", "Englens ord", "Historiske fortellinger"],
        correct: 1,
        explanation: "Muslimer tror at Koranen er Guds direkte ord, åpenbart gjennom Muhammed."
    },
    { 
        q: "Hvorfor lærer mange muslimer Koranen utenat?", 
        options: ["Det er påkrevd", "For å bli imam", "Som en ærefull handling", "Alle disse"],
        correct: 3,
        explanation: "Å lære Koranen utenat er svært ærerikt, og mange gjør det som en del av sin tro."
    },
    { 
        q: "Hva må man gjøre før man berører Koranen?", 
        options: ["Faste", "Be", "Vaske seg rituelt", "Ingenting spesielt"],
        correct: 2,
        explanation: "Man skal være rituelt ren og ofte vaske seg før man berører Koranen."
    },
    { 
        q: "Hvilket bibelske personer nevnes i Koranen?", 
        options: ["Adam", "Moses", "Jesus", "Alle disse"],
        correct: 3,
        explanation: "Koranen nevner mange profeter fra Bibelen, inkludert Adam, Moses og Jesus."
    },
    { 
        q: "Hvordan ser muslimer på Jesus?", 
        options: ["Som Guds sønn", "Som en profet", "Som Gud", "Som en vanlig person"],
        correct: 1,
        explanation: "Muslimer ser på Jesus (Isa) som en viktig profet, men ikke som Guds sønn."
    },
    { 
        q: "Hvilken profet nevnes oftest i Koranen?", 
        options: ["Muhammed", "Moses", "Abraham", "Jesus"],
        correct: 1,
        explanation: "Moses (Musa) nevnes oftest i Koranen, over 100 ganger."
    },
    { 
        q: "Hva lærer Koranen om andre religioner?", 
        options: ["De er falske", "Jøder og kristne er 'bokens folk'", "De skal bekjempes", "De ignoreres"],
        correct: 1,
        explanation: "Koranen anerkjenner jøder og kristne som 'bokens folk' som tror på samme Gud."
    },
    { 
        q: "Hva er den lengste suraen i Koranen?", 
        options: ["Surah Al-Fatiha", "Surah Al-Baqarah", "Surah Al-Ikhlas", "Surah An-Nas"],
        correct: 1,
        explanation: "Surah Al-Baqarah (kua) er den lengste suraen med 286 vers."
    },
    { 
        q: "Hvilken surah åpner Koranen?", 
        options: ["Al-Baqarah", "Al-Fatiha", "Al-Ikhlas", "An-Nas"],
        correct: 1,
        explanation: "Al-Fatiha (åpningen) er den første suraen og leses i hver bønn."
    },

    // DEL 4: HADITH OG SUNNA (Spørsmål 51-60)
    { 
        q: "Hva er hadith?", 
        options: ["Vers fra Koranen", "Muhammeds ord og handlinger", "Islamsk lov", "Bønner"],
        correct: 1,
        explanation: "Hadith er beretninger om profeten Muhammeds ord og handlinger."
    },
    { 
        q: "Hva er sunna?", 
        options: ["En gren av islam", "Muhammeds eksempel", "En hellig bok", "En moské"],
        correct: 1,
        explanation: "Sunna er profeten Muhammeds eksempel og levemåte som muslimer skal følge."
    },
    { 
        q: "Hvorfor er hadith viktig?", 
        options: ["De forklarer Koranen", "De viser hvordan leve islamsk", "De gir veiledning", "Alle disse"],
        correct: 3,
        explanation: "Hadith er viktig fordi de forklarer Koranen og viser hvordan man skal praktisere islam."
    },
    { 
        q: "Hvem samlet inn hadithene?", 
        options: ["Muhammed selv", "Muslimske lærde", "Kalifene", "Englene"],
        correct: 1,
        explanation: "Muslimske lærde samlet og verifiserte hadithene i århundrene etter Muhammeds død."
    },
    { 
        q: "Hva er Sahih Bukhari?", 
        options: ["En moské", "En samling hadith", "En kalif", "En by"],
        correct: 1,
        explanation: "Sahih Bukhari er en av de mest anerkjente samlingene av autentiske hadither."
    },
    { 
        q: "Hvorfor verifiserte lærde hadithene?", 
        options: ["For å sikre autentisitet", "For moro skyld", "Det var påkrevd", "For å tjene penger"],
        correct: 0,
        explanation: "Lærde verifiserte hadithene nøye for å sikre at de virkelig stammet fra Muhammed."
    },
    { 
        q: "Hva står høyest: Koranen eller hadith?", 
        options: ["Hadith", "Koranen", "De er like", "Ingen av dem"],
        correct: 1,
        explanation: "Koranen står høyest som Guds direkte ord, mens hadith er sekundær."
    },
    { 
        q: "Hvordan brukes hadith i praksis?", 
        options: ["Som veiledning i dagliglivet", "I juridiske spørsmål", "For å forstå Koranen", "Alle disse"],
        correct: 3,
        explanation: "Hadith brukes på mange måter - som veiledning, i juss og for å forstå Koranen."
    },
    { 
        q: "Hva er en 'sahih' hadith?", 
        options: ["En falsk hadith", "En autentisk hadith", "En tvilsom hadith", "En moderne hadith"],
        correct: 1,
        explanation: "Sahih betyr 'autentisk' og brukes om hadither som anses som pålitelige."
    },
    { 
        q: "Hva lærer hadithene om?", 
        options: ["Bønn og renhet", "Familie og samfunn", "Moral og etikk", "Alle disse"],
        correct: 3,
        explanation: "Hadithene dekker alle livets områder fra bønn til familie og etikk."
    },

    // DEL 5: DE FEM SØYLENE (Spørsmål 61-75)
    { 
        q: "Hva er den første søylen?", 
        options: ["Salat", "Shahada", "Zakat", "Sawm"],
        correct: 1,
        explanation: "Shahada (trosbekjennelsen) er den første søylen."
    },
    { 
        q: "Hva sier man i shahada?", 
        options: ["Det er ingen gud bortsett fra Allah", "Muhammed er Guds sendebud", "Begge deler", "Ingen av delene"],
        correct: 2,
        explanation: "Shahada sier: 'Det er ingen gud bortsett fra Allah, og Muhammed er hans sendebud'."
    },
    { 
        q: "Hva er salat?", 
        options: ["Faste", "De fem daglige bønnene", "Pilegrimsreise", "Almisse"],
        correct: 1,
        explanation: "Salat er de fem daglige bønnene som muslimer skal be."
    },
    { 
        q: "Når bes den første bønnen?", 
        options: ["Ved soloppgang", "Før soloppgang", "Ved middag", "Ved solnedgang"],
        correct: 1,
        explanation: "Den første bønnen (fajr) bes før soloppgang."
    },
    { 
        q: "Hva må man gjøre før bønn?", 
        options: ["Faste", "Wudu (rituell vask)", "Lese Koranen", "Gi almisse"],
        correct: 1,
        explanation: "Man må utføre wudu (rituell vasking) før man ber."
    },
    { 
        q: "Hva heter fredagsbønnen?", 
        options: ["Jumu'ah", "Fajr", "Zuhr", "Asr"],
        correct: 0,
        explanation: "Fredagsbønnen kalles Jumu'ah og er en spesiell fellesbønn."
    },
    { 
        q: "Hva er zakat?", 
        options: ["Bønn", "Almisse (2,5% av formue)", "Faste", "Pilegrimsreise"],
        correct: 1,
        explanation: "Zakat er almisse - muslimer skal gi 2,5% av sin formue til fattige."
    },
    { 
        q: "Når faster muslimer under ramadan?", 
        options: ["Hele døgnet", "Fra soloppgang til solnedgang", "Bare om natten", "Hver tredje dag"],
        correct: 1,
        explanation: "Under ramadan faster muslimer fra soloppgang til solnedgang."
    },
    { 
        q: "Hva er tillatt under fasting?", 
        options: ["Drikke vann", "Spise", "Røyke", "Ingenting"],
        correct: 3,
        explanation: "Under fasten skal man verken spise, drikke eller røyke."
    },
    { 
        q: "Hvem er fritatt fra faste?", 
        options: ["Syke og gravide", "Barn", "Eldre", "Alle disse"],
        correct: 3,
        explanation: "Syke, gravide, barn, eldre og reisende er fritatt fra fasten."
    },
    { 
        q: "Hva heter festen etter ramadan?", 
        options: ["Eid al-Fitr", "Eid al-Adha", "Mawlid", "Ashura"],
        correct: 0,
        explanation: "Eid al-Fitr er festen som feires etter ramadan."
    },
    { 
        q: "Hvor skal muslimer reise på hajj?", 
        options: ["Medina", "Mekka", "Jerusalem", "Kairo"],
        correct: 1,
        explanation: "Hajj er pilegrimsreisen til Mekka."
    },
    { 
        q: "I hvilken måned utføres hajj?", 
        options: ["Ramadan", "Shawwal", "Dhul-Hijjah", "Muharram"],
        correct: 2,
        explanation: "Hajj utføres i den islamske måneden Dhul-Hijjah."
    },
    { 
        q: "Hva er Kabaen?", 
        options: ["En moské", "Den hellige svarte steinen", "Det hellige hus i Mekka", "En profet"],
        correct: 2,
        explanation: "Kabaen er det hellige hus i Mekka som muslimer går rundt under hajj."
    },
    { 
        q: "Hvor mange ganger går man rundt Kabaen under hajj?", 
        options: ["3 ganger", "5 ganger", "7 ganger", "9 ganger"],
        correct: 2,
        explanation: "Under hajj går man rundt Kabaen syv ganger."
    },

    // DEL 6: ISLAMSK HISTORIE (Spørsmål 76-85)
    { 
        q: "Hvem ble den første kalifen etter Muhammed?", 
        options: ["Ali", "Abu Bakr", "Umar", "Uthman"],
        correct: 1,
        explanation: "Abu Bakr ble den første kalifen (leder) etter Muhammeds død."
    },
    { 
        q: "Hva er en kalif?", 
        options: ["En profet", "En religiøs og politisk leder", "En engel", "En moské"],
        correct: 1,
        explanation: "En kalif er en religiøs og politisk leder av det islamske samfunnet."
    },
    { 
        q: "Hvor raskt spredte islam seg?", 
        options: ["Svært sakte", "Ganske raskt", "Ekstremt raskt", "Spredte seg ikke"],
        correct: 2,
        explanation: "Islam spredte seg ekstremt raskt - innen 100 år strakte riket fra Spania til India."
    },
    { 
        q: "Hvilket land erobret ikke muslimene?", 
        options: ["Persia", "Egypt", "Spania", "India hele"],
        correct: 3,
        explanation: "Muslimene erobret deler av India, men ikke hele landet."
    },
    { 
        q: "Hvor lenge styrte muslimene i Spania?", 
        options: ["100 år", "300 år", "800 år", "1000 år"],
        correct: 2,
        explanation: "Muslimene styrte deler av Spania i omtrent 800 år (711-1492)."
    },
    { 
        q: "Hva var den islamske gullalder?", 
        options: ["En periode med krig", "En periode med store fremskritt i vitenskap", "En periode med faste", "En periode med pilegrimsreiser"],
        correct: 1,
        explanation: "Den islamske gullalderen var en periode (750-1250) med store fremskritt i vitenskap og kultur."
    },
    { 
        q: "Hvilke fag utviklet seg under den islamske gullalderen?", 
        options: ["Matematikk", "Medisin", "Astronomi", "Alle disse"],
        correct: 3,
        explanation: "Muslimske lærde gjorde store fremskritt i matematikk, medisin, astronomi og mange andre fag."
    },
    { 
        q: "Hva er algebra?", 
        options: ["Et arabisk ord", "Oppfunnet av muslimske matematikere", "Begge deler", "Ingen av delene"],
        correct: 2,
        explanation: "Algebra kommer fra arabisk og ble utviklet av muslimske matematikere."
    },
    { 
        q: "Hvilket rike var det største islamske riket?", 
        options: ["Det osmanske riket", "Mogulriket", "Safavideriketsriket", "Umayyadekalifattet"],
        correct: 0,
        explanation: "Det osmanske riket var det største og lengstlevende islamske riket (1299-1922)."
    },
    { 
        q: "Når falt det osmanske riket?", 
        options: ["1800", "1900", "1922", "1945"],
        correct: 2,
        explanation: "Det osmanske riket falt i 1922 etter første verdenskrig."
    },

    // DEL 7: SHIA OG SUNNI (Spørsmål 86-95)
    { 
        q: "Hva er de to hovedgrenene i islam?", 
        options: ["Sunni og shia", "Orthodox og reform", "Konservativ og liberal", "Salafi og sufi"],
        correct: 0,
        explanation: "De to hovedgrenene i islam er sunni og shia."
    },
    { 
        q: "Omtrent hvor stor andel av muslimer er sunni?", 
        options: ["50%", "70%", "85%", "95%"],
        correct: 2,
        explanation: "Omtrent 85-90% av alle muslimer er sunni."
    },
    { 
        q: "Hva er hovedforskjellen mellom sunni og shia?", 
        options: ["Ulike profeter", "Ulike hellige bøker", "Uenighet om ledelse etter Muhammed", "Ulike bønner"],
        correct: 2,
        explanation: "Hovedforskjellen er uenighet om hvem som skulle lede islam etter Muhammed."
    },
    { 
        q: "Hvem mente shia skulle være kalif etter Muhammed?", 
        options: ["Abu Bakr", "Umar", "Ali", "Uthman"],
        correct: 2,
        explanation: "Shia mente Ali (Muhammeds fetter og svigersønn) skulle være kalif."
    },
    { 
        q: "Hva betyr 'shia'?", 
        options: ["Leder", "Parti eller tilhenger", "Hellig", "Profet"],
        correct: 1,
        explanation: "Shia betyr 'parti' eller 'tilhenger' - opprinnelig Alis tilhengere."
    },
    { 
        q: "Hva betyr 'sunni'?", 
        options: ["De som følger sunna", "De som følger kalifen", "De hellige", "Profetens folk"],
        correct: 0,
        explanation: "Sunni betyr 'de som følger sunna' (Muhammeds eksempel)."
    },
    { 
        q: "I hvilke land er shia i flertall?", 
        options: ["Saudi-Arabia", "Egypt", "Iran og Irak", "Tyrkia"],
        correct: 2,
        explanation: "Shia-muslimer er i flertall i Iran, Irak, Aserbajdsjan og Bahrain."
    },
    { 
        q: "Hva er en mullah?", 
        options: ["En shia-imam", "En sunni-imam", "En moské", "En bønn"],
        correct: 0,
        explanation: "En mullah er en shia-religiøs leder og lærer."
    },
    { 
        q: "Hva er Ashura?", 
        options: ["En høytid", "En dag shia sørger over Husayns død", "En moské", "En bønn"],
        correct: 1,
        explanation: "Ashura er en dag da shia-muslimer sørger over martyrdøden til Husayn (Alis sønn)."
    },
    { 
        q: "Er sunni og shia fiender?", 
        options: ["Ja, alltid", "Nei, de kan leve fredelig sammen", "Bare noen ganger", "Det varierer"],
        correct: 3,
        explanation: "Forholdet varierer - mange steder lever sunni og shia fredelig sammen, andre steder er det konflikt."
    },

    // DEL 8: ISLAM I VERDEN I DAG (Spørsmål 96-100)
    { 
        q: "I hvilket verdensdel bor flest muslimer?", 
        options: ["Midtøsten", "Asia", "Afrika", "Europa"],
        correct: 1,
        explanation: "Asia har flest muslimer, med Indonesia som det landet med flest muslimer i verden."
    },
    { 
        q: "Hvilket land har flest muslimer?", 
        options: ["Saudi-Arabia", "Egypt", "Iran", "Indonesia"],
        correct: 3,
        explanation: "Indonesia har flest muslimer i verden med over 230 millioner."
    },
    { 
        q: "Omtrent hvor mange muslimer bor i Norge?", 
        options: ["50 000", "100 000", "200 000", "500 000"],
        correct: 2,
        explanation: "Det bor omtrent 200 000-250 000 muslimer i Norge."
    },
    { 
        q: "Hva er islamofobi?", 
        options: ["Frykt for islam", "Hat mot muslimer", "Fordommer mot islam", "Alle disse"],
        correct: 3,
        explanation: "Islamofobi er frykt, hat og fordommer mot islam og muslimer."
    },
    { 
        q: "Hva er jihad?", 
        options: ["Hellig krig", "Indre kamp for å være god muslim", "Begge deler", "Terror"],
        correct: 2,
        explanation: "Jihad betyr 'kamp' eller 'innsats' - både indre kamp for tro og ytre forsvar. Det betyr ikke terror."
    }
];

// Quiz-logikk (samme som hinduismen-quizen)
const quizAreaEl = document.getElementById('quiz-area');
const resultAreaEl = document.getElementById('result-area');
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsContainerEl = document.getElementById('options-container');
const feedbackAreaEl = document.getElementById('feedback-area');
const submitBtnEl = document.getElementById('submit-btn');
const nextBtnEl = document.getElementById('next-btn');
const scoreTextEl = document.getElementById('score-text');
const restartBtnEl = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];
let selectedAnswer = null;

const correctFeedbackMessages = [
    "Mashallah! Helt riktig!",
    "Utmerket! Du har god kunnskap!",
    "Perfekt svar! Kjempebra!",
    "Akkurat det! Flott jobbet!",
    "Riktig! Du mestrer dette!",
    "Strålende! Fortsett sånn!",
    "Spot on! Helt korrekt!",
    "Fantastisk! Du er flink!",
    "Bravo! Riktig svar!",
    "Yes! Du kan dette!",
    "Imponerende! Helt riktig!",
    "Bingo! Korrekt!",
    "Topp! Riktig svar!",
    "Supert! Du har kontroll!",
    "Excellent! Helt rett!"
];

const incorrectFeedbackMessages = [
    "Ikke helt riktig, men fortsett å lære!",
    "Næh, men ikke gi opp!",
    "Dessverre feil, men prøv igjen!",
    "Ikke denne gangen, men du lærer!",
    "Oops, men neste gang går det bedre!",
    "Bom, men fortsett å øve!",
    "Ikke riktig, men du er på rett vei!",
    "Feil svar, men ikke mist motet!"
];

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    shuffledQuestions = shuffleArray(questions);
    quizAreaEl.classList.remove('hidden');
    resultAreaEl.classList.add('hidden');
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        showResults();
        return;
    }

    const question = shuffledQuestions[currentQuestionIndex];
    questionNumberEl.textContent = `Spørsmål ${currentQuestionIndex + 1} av ${shuffledQuestions.length}`;
    questionTextEl.textContent = question.q;
    
    optionsContainerEl.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainerEl.appendChild(button);
    });

    selectedAnswer = null;
    submitBtnEl.disabled = true;
    feedbackAreaEl.classList.add('hidden');
    nextBtnEl.classList.add('hidden');
}

function selectAnswer(index) {
    selectedAnswer = index;
    submitBtnEl.disabled = false;
    
    const buttons = optionsContainerEl.querySelectorAll('button');
    buttons.forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === index) btn.classList.add('selected');
    });
}

function submitAnswer() {
    if (selectedAnswer === null) return;

    const question = shuffledQuestions[currentQuestionIndex];
    const buttons = optionsContainerEl.querySelectorAll('button');
    const correct = question.correct;

    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === correct) {
            btn.classList.add('correct');
        } else if (i === selectedAnswer) {
            btn.classList.add('incorrect');
        }
    });

    feedbackAreaEl.classList.remove('hidden');
    
    if (selectedAnswer === correct) {
        score++;
        const randomMsg = correctFeedbackMessages[Math.floor(Math.random() * correctFeedbackMessages.length)];
        feedbackAreaEl.textContent = randomMsg;
        feedbackAreaEl.className = 'feedback correct';
    } else {
        const randomMsg = incorrectFeedbackMessages[Math.floor(Math.random() * incorrectFeedbackMessages.length)];
        feedbackAreaEl.innerHTML = `${randomMsg}<br><strong>Forklaring:</strong> ${question.explanation}`;
        feedbackAreaEl.className = 'feedback incorrect';
    }

    submitBtnEl.classList.add('hidden');
    nextBtnEl.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
    submitBtnEl.classList.remove('hidden');
}

function showResults() {
    quizAreaEl.classList.add('hidden');
    resultAreaEl.classList.remove('hidden');
    
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    let message = "";
    
    if (percentage >= 90) {
        message = "Utmerket! Du har svært god kunnskap om islam!";
    } else if (percentage >= 75) {
        message = "Meget bra! Du kan mye om islam!";
    } else if (percentage >= 60) {
        message = "Bra jobbet! Du har god grunnkunnskap!";
    } else if (percentage >= 50) {
        message = "Greit! Men det er rom for forbedring!";
    } else {
        message = "Fortsett å lære! Prøv gjerne igjen!";
    }
    
    scoreTextEl.innerHTML = `
        Du fikk ${score} av ${shuffledQuestions.length} riktige<br>
        (${percentage}%)<br><br>
        ${message}
    `;
}

submitBtnEl.addEventListener('click', submitAnswer);
nextBtnEl.addEventListener('click', nextQuestion);
restartBtnEl.addEventListener('click', startQuiz);

// Start quiz
startQuiz();
