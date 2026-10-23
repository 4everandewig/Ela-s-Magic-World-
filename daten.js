/* Gemeinsame Daten für Malbuch, ABC und Farben.
   Neues Thema: einen Block in THEMEN ergänzen und die PNGs in den Ordner bilder/<id>/ legen.
   Ein Thema ohne Bilder wird im Malbuch als "Soon!" angezeigt.
   Optional: ela = eigenes Ela-Bild für dieses Thema (z. B. Hexen-Ela bei Halloween), sonst die normale Ela.
   Namen und Wörter immer in allen Sprachen angeben: en (Hauptsprache), de, tr.
   Optional youtube = Link zu Elas Mal-Video auf YouTube (Knopf im Malbuch, nur nach der Eltern-Sperre, öffnet ein neues Fenster – nie einbetten). */
const THEMEN = [
  { id: "halloween", name: { en: "Halloween", de: "Halloween", tr: "Cadılar Bayramı" }, farbe: "#f7882f", ela: "bilder/ela-hexe.png", bilder: [
    { L: "B", wort: { en: "Bat",          de: "Fledermaus",   tr: "Yarasa" },         datei: "bilder/halloween/B-Bat.png", bunt: "bilder/halloween/bunt/B-Bat.jpg", youtube: "https://youtu.be/mmuDUIkiYyM" },
    { L: "C", wort: { en: "Cat",          de: "Katze",        tr: "Kedi" },           datei: "bilder/halloween/C-Cat.png" },
    { L: "D", wort: { en: "Devil",        de: "Teufelchen",   tr: "Küçük şeytan" },   datei: "bilder/halloween/D-Devil.png" },
    { L: "F", wort: { en: "Frankenstein", de: "Frankenstein", tr: "Frankenstein" },   datei: "bilder/halloween/F-Frankenstein.png", bunt: "bilder/halloween/bunt/F-Frankenstein.jpg" },
    { L: "G", wort: { en: "Ghost",        de: "Gespenst",     tr: "Hayalet" },        datei: "bilder/halloween/G-Ghost.png", bunt: "bilder/halloween/bunt/G-Ghost.jpg", youtube: "https://youtu.be/Sid_0bXqW5c" },
    { L: "H", wort: { en: "Hat",          de: "Hexenhut",     tr: "Cadı şapkası" },   datei: "bilder/halloween/H-Hat.png", bunt: "bilder/halloween/bunt/H-Hat.jpg", youtube: "https://youtu.be/L-7tGbILTAo" },
    { L: "I", wort: { en: "Ice cream",    de: "Eis",          tr: "Dondurma" },       datei: "bilder/halloween/I-Ice-cream.png" },
    { L: "L", wort: { en: "Lollipop",     de: "Lutscher",     tr: "Lolipop" },        datei: "bilder/halloween/L-Lollipop.png" },
    { L: "M", wort: { en: "Mummy",        de: "Mumie",        tr: "Mumya" },          datei: "bilder/halloween/M-Mummy.png" },
    { L: "N", wort: { en: "Night",        de: "Nacht",        tr: "Gece" },           datei: "bilder/halloween/N-Night.png" },
    { L: "O", wort: { en: "Owl",          de: "Eule",         tr: "Baykuş" },         datei: "bilder/halloween/O-Owl.png" },
    { L: "P", wort: { en: "Pumpkin",      de: "Kürbis",       tr: "Balkabağı" },      datei: "bilder/halloween/P-Pumpkin.png", bunt: "bilder/halloween/bunt/P-Pumpkin.jpg", youtube: "https://youtu.be/UYOjYvgAhgQ" },
    { L: "S", wort: { en: "Spider",       de: "Spinne",       tr: "Örümcek" },        datei: "bilder/halloween/S-Spider.png" },
    { L: "T", wort: { en: "Treat",        de: "Süßigkeiten",  tr: "Şeker" },          datei: "bilder/halloween/T-Treat.png" },
    { L: "V", wort: { en: "Vampire",      de: "Vampir",       tr: "Vampir" },         datei: "bilder/halloween/V-Vampire.png" },
    { L: "W", wort: { en: "Witch",        de: "Hexe",         tr: "Cadı" },           datei: "bilder/halloween/W-Witch.png", bunt: "bilder/halloween/bunt/W-Witch.jpg", youtube: "https://youtu.be/E6_JVBKAcE0" },
    { L: "Y", wort: { en: "Yeti",         de: "Yeti",         tr: "Yeti" },           datei: "bilder/halloween/Y-Yeti.png" },
  ]},
  { id: "weihnachten", name: { en: "Christmas", de: "Weihnachten", tr: "Yılbaşı" },   farbe: "#f05252", icon: "🎄", bilder: [] },
  { id: "tiere",       name: { en: "Animals",   de: "Tiere",       tr: "Hayvanlar" }, farbe: "#4cbb5c", icon: "🐾", bilder: [] },
  { id: "suesses",     name: { en: "Sweets",    de: "Süßes",       tr: "Tatlılar" },  farbe: "#e8459b", icon: "🍭", bilder: [] },
  { id: "meer",        name: { en: "Ocean",     de: "Meer",        tr: "Deniz" },     farbe: "#3d8ef0", icon: "🐠", bilder: [] },
];

/* Englisches ABC wie in Elas ABC-Videos: ein Hauptwort pro Buchstabe (en) mit Übersetzung (de, tr),
   optional foto = 3D-Bild aus den Videos (bilder/abc/). Optional malbild = schwarz-weißes Ausmalbild fürs Nachspur-Blatt zum Ausdrucken (bilder/abc/malen/). Dazu kommen automatisch alle Ausmalbilder
   mit diesem Buchstaben aus THEMEN (z. B. B: Bear + Bat). Siehe karten(L). */
const ABC_WOERTER = {
  A:{en:"Apple",de:"Apfel",tr:"Elma",foto:"bilder/abc/A-Apple.jpg",malbild:"bilder/abc/malen/A-Apple.png"}, B:{en:"Bear",de:"Bär",tr:"Ayı",foto:"bilder/abc/B-Bear.jpg"},
  C:{en:"Cat",de:"Katze",tr:"Kedi",foto:"bilder/abc/C-Cat.jpg"}, D:{en:"Dog",de:"Hund",tr:"Köpek",foto:"bilder/abc/D-Dog.jpg"},
  E:{en:"Elephant",de:"Elefant",tr:"Fil",foto:"bilder/abc/E-Elephant.jpg"}, F:{en:"Frog",de:"Frosch",tr:"Kurbağa",foto:"bilder/abc/F-Frog.jpg"},
  G:{en:"Giraffe",de:"Giraffe",tr:"Zürafa",foto:"bilder/abc/G-Giraffe.jpg"}, H:{en:"Horse",de:"Pferd",tr:"At",foto:"bilder/abc/H-Horse.jpg"},
  I:{en:"Ice cream",de:"Eis",tr:"Dondurma",foto:"bilder/abc/I-Ice-cream.jpg"}, J:{en:"Jellyfish",de:"Qualle",tr:"Denizanası",foto:"bilder/abc/J-Jellyfish.jpg"},
  K:{en:"Kite",de:"Drachen",tr:"Uçurtma",foto:"bilder/abc/K-Kite.jpg"}, L:{en:"Lamb",de:"Lamm",tr:"Kuzu",foto:"bilder/abc/L-Lamb.jpg"},
  M:{en:"Monkey",de:"Affe",tr:"Maymun",foto:"bilder/abc/M-Monkey.jpg"}, N:{en:"Nest",de:"Nest",tr:"Yuva",foto:"bilder/abc/N-Nest.jpg"}, O:{en:"Owl",de:"Eule",tr:"Baykuş",foto:"bilder/abc/O-Owl.jpg"},
  P:{en:"Penguin",de:"Pinguin",tr:"Penguen",foto:"bilder/abc/P-Penguin.jpg"}, Q:{en:"Queen",de:"Königin",tr:"Kraliçe",foto:"bilder/abc/Q-Queen.jpg"}, R:{en:"Rainbow",de:"Regenbogen",tr:"Gökkuşağı",foto:"bilder/abc/R-Rainbow.jpg"},
  S:{en:"Star",de:"Stern",tr:"Yıldız",foto:"bilder/abc/S-Star.jpg"}, T:{en:"Treat",de:"Süßigkeit",tr:"Şeker"}, U:{en:"Unicorn",de:"Einhorn",tr:"Tek boynuzlu at"},
  V:{en:"Vampire",de:"Vampir",tr:"Vampir"}, W:{en:"Witch",de:"Hexe",tr:"Cadı"}, X:{en:"X-ray",de:"Röntgenbild",tr:"Röntgen"},
  Y:{en:"Yummy",de:"Lecker",tr:"Lezzetli"}, Z:{en:"Zombie",de:"Zombie",tr:"Zombi"}
};
/* Elas echte Stimme (MP3s in stimme/). Wo nichts eingetragen ist, liest die Geräte-Stimme vor.
   abc       = "K is for Kite"           (ABC entdecken + richtige Antwort)
   wort      = nur das Wort, "Kite"      (mit abc: "K is for Kite!" – "Can you say it with me?" – "Kite!")
   buchstabe = nur der Buchstabe, "G"     (Buchstaben-Karten im Memory; im ABC, wenn es kein abc gibt)
   finde     = "Find the letter G"       (ABC-Spiel: Buchstaben finden)
   denken / weiter = "Think, think, think" (falsche Antwort) / "Let's try the next one!" (vor der nächsten Frage)
   frage     = "What starts with G?"     (ABC-Spiel: Buchstabe zeigen → Bild finden)
   lob       = Lob bei richtigen Antworten (zufällig)
   Neue Aufnahme: MP3 nach stimme/ legen (Name wie die vorhandenen) und hier eintragen. */
const STIMMEN = {
  abc:       { A: "stimme/A-is-for-Apple.mp3", B: "stimme/B-is-for-Bear.mp3", C: "stimme/C-is-for-Cat.mp3", F: "stimme/F-is-for-Frog.mp3", D: "stimme/D-is-for-Dog.mp3", E: "stimme/E-is-for-Elephant.mp3",
               G: "stimme/G-is-for-Giraffe.mp3", H: "stimme/H-is-for-Horse.mp3", I: "stimme/I-is-for-Ice-cream.mp3",
               J: "stimme/J-is-for-Jellyfish.mp3", K: "stimme/K-is-for-Kite.mp3", L: "stimme/L-is-for-Lamb.mp3",
               M: "stimme/M-is-for-Monkey.mp3", N: "stimme/N-is-for-Nest.mp3", O: "stimme/O-is-for-Owl.mp3", P: "stimme/P-is-for-Penguin.mp3", Q: "stimme/Q-is-for-Queen.mp3", R: "stimme/R-is-for-Rainbow.mp3", S: "stimme/S-is-for-Star.mp3" },
  wort:      { A: "stimme/Apple.mp3", B: "stimme/Bear.mp3", C: "stimme/Cat.mp3", F: "stimme/Frog.mp3", D: "stimme/Dog.mp3", E: "stimme/Elephant.mp3",
               G: "stimme/Giraffe.mp3", H: "stimme/Horse.mp3", I: "stimme/Ice-cream.mp3",
               J: "stimme/Jellyfish.mp3", K: "stimme/Kite.mp3", L: "stimme/Lamb.mp3",
               M: "stimme/Monkey.mp3", N: "stimme/Nest.mp3", O: "stimme/Owl.mp3", P: "stimme/Penguin.mp3", Q: "stimme/Queen.mp3", R: "stimme/Rainbow.mp3", S: "stimme/Star.mp3" },
  buchstabe: { A: "stimme/A.mp3", B: "stimme/B.mp3", C: "stimme/C.mp3", D: "stimme/D.mp3", E: "stimme/E.mp3", F: "stimme/F.mp3",
               G: "stimme/G.mp3", H: "stimme/H.mp3", I: "stimme/I.mp3", J: "stimme/J.mp3", K: "stimme/K.mp3", L: "stimme/L.mp3" },
  frage:     { A: "stimme/What-starts-with-A.mp3", B: "stimme/What-starts-with-B.mp3", C: "stimme/What-starts-with-C.mp3", F: "stimme/What-starts-with-F.mp3", D: "stimme/What-starts-with-D.mp3", E: "stimme/What-starts-with-E.mp3",
               G: "stimme/What-starts-with-G.mp3", H: "stimme/What-starts-with-H.mp3", I: "stimme/What-starts-with-I.mp3",
               J: "stimme/What-starts-with-J.mp3", K: "stimme/What-starts-with-K.mp3", L: "stimme/What-starts-with-L.mp3",
               M: "stimme/What-starts-with-M.mp3", N: "stimme/What-starts-with-N.mp3", O: "stimme/What-starts-with-O.mp3", P: "stimme/What-starts-with-P.mp3",
               Q: "stimme/What-starts-with-Q.mp3", R: "stimme/What-starts-with-R.mp3", S: "stimme/What-starts-with-S.mp3" },
  finde:     { A: "stimme/Find-the-letter-A.mp3", B: "stimme/Find-the-letter-B.mp3", C: "stimme/Find-the-letter-C.mp3",
               D: "stimme/Find-the-letter-D.mp3", E: "stimme/Find-the-letter-E.mp3", F: "stimme/Find-the-letter-F.mp3",
               G: "stimme/Find-the-letter-G.mp3", H: "stimme/Find-the-letter-H.mp3", I: "stimme/Find-the-letter-I.mp3",
               J: "stimme/Find-the-letter-J.mp3", K: "stimme/Find-the-letter-K.mp3", L: "stimme/Find-the-letter-L.mp3",
               M: "stimme/Find-the-letter-M.mp3", N: "stimme/Find-the-letter-N.mp3", O: "stimme/Find-the-letter-O.mp3" },
  farbe:     { red: "stimme/Red.mp3", orange: "stimme/Orange.mp3", yellow: "stimme/Yellow.mp3", green: "stimme/Green.mp3",
               blue: "stimme/Blue.mp3", purple: "stimme/Purple.mp3" },
  zahl:      ["", "stimme/One.mp3", "stimme/Two.mp3", "stimme/Three.mp3", "stimme/Four.mp3", "stimme/Five.mp3",
              "stimme/Six.mp3", "stimme/Seven.mp3", "stimme/Eight.mp3", "stimme/Nine.mp3", "stimme/Ten.mp3"],
  tueren:    { finde: "stimme/Find-the-star.mp3", stern: "stimme/A-star.mp3", wer: "stimme/Who-is-hiding.mp3",
               hase: "stimme/Oh-its-a-bunny.mp3", hase2: "stimme/A-bunny.mp3", hopp: "stimme/Hop-like-a-bunny.mp3",
               psst: "stimme/Shhh-what-is-it.mp3", mal: "stimme/Lets-find-out.mp3", blau: "stimme/The-blue-one.mp3", schau: "stimme/Wait-look.mp3",
               andere: "stimme/Try-another-door.mp3", gefunden: "stimme/You-found-it.mp3", oeffne: "stimme/Open-a-door.mp3",
               // "Find the Bear!" … (noch aufzunehmen: T4 für G, H, I)
               tier: { A: "stimme/Find-the-Apple.mp3", B: "stimme/Find-the-Bear.mp3", C: "stimme/Find-the-Cat.mp3",
                       D: "stimme/Find-the-Dog.mp3", E: "stimme/Find-the-Elephant.mp3", F: "stimme/Find-the-Frog.mp3",
                       J: "stimme/Find-the-Jellyfish.mp3", K: "stimme/Find-the-Kite.mp3", L: "stimme/Find-the-Lamb.mp3", S: "stimme/Find-the-star.mp3" } },
  // "How many apples?" – Schlüssel wie DINGE in zahlen.html
  wieviele: { apples: "stimme/How-many-apples.mp3", icecreams: "stimme/How-many-ice-creams.mp3", kites: "stimme/How-many-kites.mp3",
              stars: "stimme/How-many-stars.mp3", ducks: "stimme/How-many-ducks.mp3" },
  zusammen: "stimme/Lets-count-together.mp3",   // Zahlen: falsche Zahl → "Let's count together!", dann zählt Ela mit
  tschuess:  ["stimme/Bye-bye-magic-world.mp3", "stimme/See-you-next-time.mp3"],
  yay: "stimme/Yay.mp3",
  raten: "stimme/Can-you-guess.mp3",
  welches: "stimme/Which-picture-starts-with-this-letter.mp3",   // ABC-Spiel, wenn es kein "What starts with X?" gibt
  tschuess2: ["stimme/Bye-bye-see-you-soon.mp3"],
  mitsprechen: "stimme/Can-you-say-it-with-me.mp3",
  denken: "stimme/Think-think-think.mp3",
  weiter: "stimme/Lets-try-the-next-one.mp3",
  spuren: "",   // Nachspuren: "Let's trace!" vor dem Buchstaben (noch aufzunehmen: stimme/Lets-trace.mp3)
  lob: ["stimme/Yes.mp3", "stimme/Yes-2.mp3", "stimme/You-did-it.mp3", "stimme/You-got-it.mp3", "stimme/Great-job-1.mp3",
        "stimme/Great-job-2.mp3", "stimme/Great-job-3.mp3", "stimme/Great-job-4.mp3", "stimme/Great-job-kids.mp3",
        "stimme/Great-job.mp3", "stimme/Yes-you-got-it.mp3", "stimme/Wow-superstar.mp3", "stimme/You-are-so-smart.mp3",
        "stimme/Wow-you-are-so-smart.mp3"]
};
/* Alle Karten zu einem Buchstaben: erst das ABC-Wort (mit Foto), dann die Ausmalbilder (bunt, wenn vorhanden). Jede Karte: { wort, bild } */
function karten(L){
  const w = ABC_WOERTER[L], out = [];
  if (w.foto) out.push({ wort: w, bild: w.foto });
  // Gibt es Elas bunt ausgemaltes Bild, zeigen ABC und Nachspuren das bunte statt des schwarz-weißen Ausmalbilds
  for (const t of THEMEN) for (const b of t.bilder) if (b.L === L) out.push({ wort: b.wort, bild: b.bunt || b.datei });
  if (!out.length) out.push({ wort: w, bild: null });
  return out;
}
/* Elas Videos (in videos/, 640 px breit, mit Ton; Standbild = gleicher Name .jpg).
   abc:  ersetzt im ABC das Vorlesen, Schlüssel = englisches Wort der Karte ("P is for Pumpkin")
   bild: Knopf "Watch Ela" im Malbuch beim Ausmalbild "<thema-id>-<Buchstabe>" (mehrere = der Reihe nach)
   thema: Video, wenn man im Malbuch auf Ela tippt (pro Thema)
   seite: Videos, wenn man im ABC / bei den Farben auf Ela tippt (der Reihe nach)
   gespeichert: Video nach "Save picture" im Malbuch (pro Thema)
   zuschauen: kleines Ela-Fenster oben rechts an der Malfläche nach der 4. Fläche, einmal pro Bild (pro Thema)
   spuren: Nachspuren, Ela malt den Buchstaben in die Luft (im Kreis); beim Nachspuren spielt außerdem abc[Wort] im Kreis, wenn der kleine Buchstabe fertig ist */
const ELA_VIDEOS = {
  abc:  { Pumpkin: "videos/P-is-for-Pumpkin.mp4", Hat: "videos/H-is-for-Hat.mp4", Bat: "videos/B-is-for-Bat.mp4", Witch: "videos/W-is-for-Witch.mp4", Frankenstein: "videos/F-Hello-Frankenstein.mp4", Ghost: "videos/G-is-for-Ghost.mp4",
          Monkey: "videos/M-is-for-Monkey.mp4", Nest: "videos/N-is-for-Nest.mp4", Owl: "videos/O-is-for-Owl.mp4", Penguin: "videos/P-is-for-Penguin.mp4", Queen: "videos/Q-is-for-Queen.mp4", Star: "videos/S-is-for-Star.mp4" },
  bild: { "halloween-P": ["videos/P-is-for-Pumpkin.mp4", "videos/P-Wave-to-the-Pumpkin.mp4", "videos/P-Ela-and-Pumpkin.mp4"],
          "halloween-H": ["videos/H-is-for-Hat.mp4", "videos/H-Witch-hat-like-mine.mp4", "videos/H-Hat-is-smiling.mp4"],
          "halloween-B": ["videos/B-is-for-Bat.mp4", "videos/B-Cute-little-bat.mp4"],
          "halloween-F": ["videos/F-Hello-Frankenstein.mp4", "videos/F-is-for-Frankenstein.mp4", "videos/F-He-is-so-happy.mp4", "videos/F-Green-drawing.mp4", "videos/F-Draw-together.mp4"],
          "halloween-G": ["videos/G-is-for-Ghost.mp4", "videos/G-Oh-look-little-ghost.mp4", "videos/G-Hello-little-ghost.mp4", "videos/G-Say-boo-with-me.mp4", "videos/G-Witch-says-boo.mp4"],
          "halloween-W": ["videos/W-is-for-Witch.mp4", "videos/W-Little-witch-like-me.mp4", "videos/W-Pumpkin-and-bats.mp4", "videos/W-Abracadabra.mp4"] },
  thema: { halloween: "videos/Color-with-me.mp4" },
  spuren: { W: ["videos/W-Today-we-learn.mp4", "videos/W-Tracing.mp4"] },   // mehrere = nacheinander: "Today we learn the letter W!", dann malt Ela das W in die Luft   // Nachspuren: Ela malt den Buchstaben in die Luft, wenn er gewählt wird (im Kreis)
  seite: { abc:    ["videos/Think-think-think.mp4", "videos/What-is-it.mp4", "videos/Something-is-happening.mp4", "videos/Peekaboo.mp4"],
           farben: ["videos/Which-color-is-next.mp4", "videos/Say-the-colours.mp4"] },
  gespeichert: { halloween: "videos/Its-alive.mp4" },
  zuschauen: { halloween: "videos/Look-how-spooky.mp4" }
};
function bildFuer(L){ for (const t of THEMEN) { const b = t.bilder.find(b => b.L === L); if (b) return b; } return null; }

/* Farben zum Lernen (Farben-Spiel) */
const LERNFARBEN = [
  { hex: "#f05252", name: { en: "red",    de: "Rot",     tr: "kırmızı" } },
  { hex: "#f7882f", name: { en: "orange", de: "Orange",  tr: "turuncu" } },
  { hex: "#fbbd23", name: { en: "yellow", de: "Gelb",    tr: "sarı" } },
  { hex: "#4cbb5c", name: { en: "green",  de: "Grün",    tr: "yeşil" } },
  { hex: "#3d8ef0", name: { en: "blue",   de: "Blau",    tr: "mavi" } },
  { hex: "#8b5cf6", name: { en: "purple", de: "Lila",    tr: "mor" } },
  { hex: "#ff7fbf", name: { en: "pink",   de: "Rosa",    tr: "pembe" } },
  { hex: "#9a5b33", name: { en: "brown",  de: "Braun",   tr: "kahverengi" } },
  { hex: "#2f2638", name: { en: "black",  de: "Schwarz", tr: "siyah" } },
  { hex: "#ffffff", name: { en: "white",  de: "Weiß",    tr: "beyaz" } },
  { hex: "#9aa0a6", name: { en: "gray",   de: "Grau",    tr: "gri" } },
];

/* Sticker-Album: alle STICKER_ALLE Sterne gibt es einen neuen Sticker (Reihenfolge = Liste).
   Zuerst die Sternen-Sticker mit Gesicht (bilder/sterne/, durchsichtig → noch nicht gesammelt als graue Silhouette);
   die seltenen (Rainbow, Star King) kommen zuletzt. Danach Elas bunte Halloween-Bilder, die 3D-Tiere aus dem ABC, die Ente.
   Neue Bilder hängen sich automatisch an. */
const STICKER_ALLE = 5;
const STERN_STICKER = ["sunny", "rosie", "minty", "skye", "cool", "party", "artist", "smarty", "dreamy", "spooky", "rainbow", "king"];
const STICKER = [...new Set([   // Set: der Stern bei S ist zugleich ein Sternen-Sticker → nicht doppelt
  ...STERN_STICKER.map(n => "bilder/sterne/" + n + ".webp"),
  ...THEMEN.flatMap(th => th.bilder.filter(b => b.bunt).map(b => b.bunt)),
  ...Object.keys(ABC_WOERTER).filter(L => ABC_WOERTER[L].foto).map(L => ABC_WOERTER[L].foto),
  "bilder/zahlen/ente.jpg",
])];
