/* Gemeinsame Daten für Malbuch, ABC und Farben.
   Neues Thema: einen Block in THEMEN ergänzen und die PNGs in den Ordner bilder/<id>/ legen.
   Ein Thema ohne Bilder wird im Malbuch als "Soon!" angezeigt.
   Optional: ela = eigenes Ela-Bild für dieses Thema (z. B. Hexen-Ela bei Halloween), sonst die normale Ela.
   Namen und Wörter immer in allen Sprachen angeben: en (Hauptsprache), de, tr. */
const THEMEN = [
  { id: "halloween", name: { en: "Halloween", de: "Halloween", tr: "Cadılar Bayramı" }, farbe: "#f7882f", ela: "bilder/ela-hexe.png", bilder: [
    { L: "B", wort: { en: "Bat",          de: "Fledermaus",   tr: "Yarasa" },         datei: "bilder/halloween/B-Bat.png" },
    { L: "F", wort: { en: "Frankenstein", de: "Frankenstein", tr: "Frankenstein" },   datei: "bilder/halloween/F-Frankenstein.png" },
    { L: "G", wort: { en: "Ghost",        de: "Gespenst",     tr: "Hayalet" },        datei: "bilder/halloween/G-Ghost.png" },
    { L: "H", wort: { en: "Hat",          de: "Hexenhut",     tr: "Cadı şapkası" },   datei: "bilder/halloween/H-Hat.png" },
    { L: "P", wort: { en: "Pumpkin",      de: "Kürbis",       tr: "Balkabağı" },      datei: "bilder/halloween/P-Pumpkin.png" },
    { L: "S", wort: { en: "Spider",       de: "Spinne",       tr: "Örümcek" },        datei: "bilder/halloween/S-Spider.png" },
    { L: "V", wort: { en: "Vampire",      de: "Vampir",       tr: "Vampir" },         datei: "bilder/halloween/V-Vampire.png" },
    { L: "W", wort: { en: "Witch",        de: "Hexe",         tr: "Cadı" },           datei: "bilder/halloween/W-Witch.png" },
  ]},
  { id: "weihnachten", name: { en: "Christmas", de: "Weihnachten", tr: "Yılbaşı" },   farbe: "#f05252", icon: "🎄", bilder: [] },
  { id: "tiere",       name: { en: "Animals",   de: "Tiere",       tr: "Hayvanlar" }, farbe: "#4cbb5c", icon: "🐾", bilder: [] },
  { id: "suesses",     name: { en: "Sweets",    de: "Süßes",       tr: "Tatlılar" },  farbe: "#e8459b", icon: "🍭", bilder: [] },
  { id: "meer",        name: { en: "Ocean",     de: "Meer",        tr: "Deniz" },     farbe: "#3d8ef0", icon: "🐠", bilder: [] },
];

/* Englisches ABC wie in Elas ABC-Videos: ein Hauptwort pro Buchstabe (en) mit Übersetzung (de, tr),
   optional foto = 3D-Bild aus den Videos (bilder/abc/). Dazu kommen automatisch alle Ausmalbilder
   mit diesem Buchstaben aus THEMEN (z. B. B: Bear + Bat). Siehe karten(L). */
const ABC_WOERTER = {
  A:{en:"Apple",de:"Apfel",tr:"Elma",foto:"bilder/abc/A-Apple.jpg"}, B:{en:"Bear",de:"Bär",tr:"Ayı",foto:"bilder/abc/B-Bear.jpg"},
  C:{en:"Cat",de:"Katze",tr:"Kedi",foto:"bilder/abc/C-Cat.jpg"}, D:{en:"Dog",de:"Hund",tr:"Köpek",foto:"bilder/abc/D-Dog.jpg"},
  E:{en:"Elephant",de:"Elefant",tr:"Fil",foto:"bilder/abc/E-Elephant.jpg"}, F:{en:"Frog",de:"Frosch",tr:"Kurbağa",foto:"bilder/abc/F-Frog.jpg"},
  G:{en:"Giraffe",de:"Giraffe",tr:"Zürafa",foto:"bilder/abc/G-Giraffe.jpg"}, H:{en:"Horse",de:"Pferd",tr:"At",foto:"bilder/abc/H-Horse.jpg"},
  I:{en:"Ice cream",de:"Eis",tr:"Dondurma",foto:"bilder/abc/I-Ice-cream.jpg"}, J:{en:"Jellyfish",de:"Qualle",tr:"Denizanası",foto:"bilder/abc/J-Jellyfish.jpg"},
  K:{en:"Kite",de:"Drachen",tr:"Uçurtma",foto:"bilder/abc/K-Kite.jpg"}, L:{en:"Lamb",de:"Lamm",tr:"Kuzu",foto:"bilder/abc/L-Lamb.jpg"},
  M:{en:"Mummy",de:"Mumie",tr:"Mumya"}, N:{en:"Night",de:"Nacht",tr:"Gece"}, O:{en:"Owl",de:"Eule",tr:"Baykuş"},
  P:{en:"Pumpkin",de:"Kürbis",tr:"Balkabağı"}, Q:{en:"Queen",de:"Königin",tr:"Kraliçe"}, R:{en:"Raven",de:"Rabe",tr:"Kuzgun"},
  S:{en:"Spider",de:"Spinne",tr:"Örümcek"}, T:{en:"Treat",de:"Süßigkeit",tr:"Şeker"}, U:{en:"Unicorn",de:"Einhorn",tr:"Tek boynuzlu at"},
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
               J: "stimme/J-is-for-Jellyfish.mp3", K: "stimme/K-is-for-Kite.mp3", L: "stimme/L-is-for-Lamb.mp3" },
  wort:      { A: "stimme/Apple.mp3", B: "stimme/Bear.mp3", C: "stimme/Cat.mp3", F: "stimme/Frog.mp3", D: "stimme/Dog.mp3", E: "stimme/Elephant.mp3",
               G: "stimme/Giraffe.mp3", H: "stimme/Horse.mp3", I: "stimme/Ice-cream.mp3",
               J: "stimme/Jellyfish.mp3", K: "stimme/Kite.mp3", L: "stimme/Lamb.mp3" },
  buchstabe: { A: "stimme/A.mp3", B: "stimme/B.mp3", C: "stimme/C.mp3", D: "stimme/D.mp3", E: "stimme/E.mp3", F: "stimme/F.mp3",
               G: "stimme/G.mp3", H: "stimme/H.mp3", I: "stimme/I.mp3", J: "stimme/J.mp3", K: "stimme/K.mp3", L: "stimme/L.mp3" },
  frage:     { A: "stimme/What-starts-with-A.mp3", B: "stimme/What-starts-with-B.mp3", C: "stimme/What-starts-with-C.mp3", F: "stimme/What-starts-with-F.mp3", D: "stimme/What-starts-with-D.mp3", E: "stimme/What-starts-with-E.mp3",
               G: "stimme/What-starts-with-G.mp3", H: "stimme/What-starts-with-H.mp3", I: "stimme/What-starts-with-I.mp3",
               J: "stimme/What-starts-with-J.mp3", K: "stimme/What-starts-with-K.mp3", L: "stimme/What-starts-with-L.mp3" },
  finde:     { A: "stimme/Find-the-letter-A.mp3", B: "stimme/Find-the-letter-B.mp3", C: "stimme/Find-the-letter-C.mp3",
               D: "stimme/Find-the-letter-D.mp3", E: "stimme/Find-the-letter-E.mp3", F: "stimme/Find-the-letter-F.mp3",
               G: "stimme/Find-the-letter-G.mp3", H: "stimme/Find-the-letter-H.mp3", I: "stimme/Find-the-letter-I.mp3",
               J: "stimme/Find-the-letter-J.mp3", K: "stimme/Find-the-letter-K.mp3", L: "stimme/Find-the-letter-L.mp3" },
  farbe:     { red: "stimme/Red.mp3", orange: "stimme/Orange.mp3", yellow: "stimme/Yellow.mp3", green: "stimme/Green.mp3",
               blue: "stimme/Blue.mp3", purple: "stimme/Purple.mp3" },
  zahl:      ["", "stimme/One.mp3", "stimme/Two.mp3", "stimme/Three.mp3", "stimme/Four.mp3", "stimme/Five.mp3"],
  tueren:    { finde: "stimme/Find-the-star.mp3", stern: "stimme/A-star.mp3", wer: "stimme/Who-is-hiding.mp3",
               hase: "stimme/Oh-its-a-bunny.mp3", hase2: "stimme/A-bunny.mp3", hopp: "stimme/Hop-like-a-bunny.mp3",
               psst: "stimme/Shhh-what-is-it.mp3", mal: "stimme/Lets-find-out.mp3", blau: "stimme/The-blue-one.mp3", schau: "stimme/Wait-look.mp3",
               andere: "stimme/Try-another-door.mp3", gefunden: "stimme/You-found-it.mp3", oeffne: "stimme/Open-a-door.mp3",
               // "Find the Bear!" … (noch aufzunehmen: T4–T5 für G–L)
               tier: { A: "stimme/Find-the-Apple.mp3", B: "stimme/Find-the-Bear.mp3", C: "stimme/Find-the-Cat.mp3",
                       D: "stimme/Find-the-Dog.mp3", E: "stimme/Find-the-Elephant.mp3", F: "stimme/Find-the-Frog.mp3" } },
  // noch aufzunehmen (Liste Z1–Z2): "How many apples?" usw., Schlüssel wie DINGE in zahlen.html
  wieviele: {},
  tschuess:  ["stimme/Bye-bye-magic-world.mp3", "stimme/See-you-next-time.mp3"],
  yay: "stimme/Yay.mp3",
  raten: "stimme/Can-you-guess.mp3",
  welches: "stimme/Which-picture-starts-with-this-letter.mp3",   // ABC-Spiel, wenn es kein "What starts with X?" gibt
  tschuess2: ["stimme/Bye-bye-see-you-soon.mp3"],
  mitsprechen: "stimme/Can-you-say-it-with-me.mp3",
  denken: "stimme/Think-think-think.mp3",
  weiter: "stimme/Lets-try-the-next-one.mp3",
  lob: ["stimme/Yes.mp3", "stimme/Yes-2.mp3", "stimme/You-did-it.mp3", "stimme/You-got-it.mp3", "stimme/Great-job-1.mp3",
        "stimme/Great-job-2.mp3", "stimme/Great-job-3.mp3", "stimme/Great-job-4.mp3", "stimme/Great-job-kids.mp3",
        "stimme/Great-job.mp3", "stimme/Yes-you-got-it.mp3", "stimme/Wow-superstar.mp3", "stimme/You-are-so-smart.mp3",
        "stimme/Wow-you-are-so-smart.mp3"]
};
/* Alle Karten zu einem Buchstaben: erst das ABC-Wort (mit Foto), dann die Ausmalbilder. Jede Karte: { wort, bild } */
function karten(L){
  const w = ABC_WOERTER[L], out = [];
  if (w.foto) out.push({ wort: w, bild: w.foto });
  for (const t of THEMEN) for (const b of t.bilder) if (b.L === L) out.push({ wort: b.wort, bild: b.datei });
  if (!out.length) out.push({ wort: w, bild: null });
  return out;
}
/* Elas Videos (in videos/, 640 px breit, mit Ton; Standbild = gleicher Name .jpg).
   abc:  ersetzt im ABC das Vorlesen, Schlüssel = englisches Wort der Karte ("P is for Pumpkin")
   bild: Knopf "Watch Ela" im Malbuch beim Ausmalbild "<thema-id>-<Buchstabe>" (mehrere = der Reihe nach)
   thema: Video, wenn man im Malbuch auf Ela tippt (pro Thema)
   seite: Videos, wenn man im ABC / bei den Farben auf Ela tippt (der Reihe nach)
   gespeichert: Video nach "Save picture" im Malbuch (pro Thema)
   zuschauen: kleines Ela-Fenster oben rechts an der Malfläche nach der 4. Fläche, einmal pro Bild (pro Thema) */
const ELA_VIDEOS = {
  abc:  { Pumpkin: "videos/P-is-for-Pumpkin.mp4", Hat: "videos/H-is-for-Hat.mp4" },
  bild: { "halloween-P": ["videos/P-Wave-to-the-Pumpkin.mp4", "videos/P-Ela-and-Pumpkin.mp4"],
          "halloween-H": ["videos/H-Witch-hat-like-mine.mp4", "videos/H-Hat-is-smiling.mp4"] },
  thema: { halloween: "videos/Color-with-me.mp4" },
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
