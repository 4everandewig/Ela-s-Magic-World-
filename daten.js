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
  { id: "weihnachten", name: { en: "Christmas", de: "Weihnachten", tr: "Yılbaşı" },   farbe: "#f05252", bilder: [] },
  { id: "tiere",       name: { en: "Animals",   de: "Tiere",       tr: "Hayvanlar" }, farbe: "#4cbb5c", bilder: [] },
  { id: "suesses",     name: { en: "Sweets",    de: "Süßes",       tr: "Tatlılar" },  farbe: "#e8459b", bilder: [] },
  { id: "meer",        name: { en: "Ocean",     de: "Meer",        tr: "Deniz" },     farbe: "#3d8ef0", bilder: [] },
];

/* Englisches ABC wie in Elas ABC-Videos: ein Hauptwort pro Buchstabe (en) mit Übersetzung (de, tr),
   optional foto = 3D-Bild aus den Videos (bilder/abc/). Dazu kommen automatisch alle Ausmalbilder
   mit diesem Buchstaben aus THEMEN (z. B. B: Bear + Bat). Siehe karten(L). */
const ABC_WOERTER = {
  A:{en:"Apple",de:"Apfel",tr:"Elma",foto:"bilder/abc/A-Apple.jpg"}, B:{en:"Bear",de:"Bär",tr:"Ayı",foto:"bilder/abc/B-Bear.jpg"},
  C:{en:"Cat",de:"Katze",tr:"Kedi",foto:"bilder/katze.jpg"}, D:{en:"Dog",de:"Hund",tr:"Köpek",foto:"bilder/abc/D-Dog.jpg"},
  E:{en:"Elephant",de:"Elefant",tr:"Fil",foto:"bilder/abc/E-Elephant.jpg"}, F:{en:"Frog",de:"Frosch",tr:"Kurbağa",foto:"bilder/abc/F-Frog.jpg"},
  G:{en:"Giraffe",de:"Giraffe",tr:"Zürafa",foto:"bilder/abc/G-Giraffe.jpg"}, H:{en:"Horse",de:"Pferd",tr:"At",foto:"bilder/abc/H-Horse.jpg"},
  I:{en:"Ice cream",de:"Eis",tr:"Dondurma",foto:"bilder/abc/I-Ice-cream.jpg"}, J:{en:"Jellyfish",de:"Qualle",tr:"Denizanası"},
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
   buchstabe = "Letter G"                (ABC entdecken, wenn es kein abc gibt; danach Geräte-Stimme "G is for Ghost")
   frage     = "What starts with G?"     (ABC-Spiel: Buchstabe zeigen → Bild finden)
   lob       = Lob bei richtigen Antworten (zufällig)
   Neue Aufnahme: MP3 nach stimme/ legen (Name wie die vorhandenen) und hier eintragen. */
const STIMMEN = {
  abc:       { K: "stimme/K-is-for-Kite.mp3", L: "stimme/L-is-for-Lamb.mp3" },
  wort:      { K: "stimme/Kite.mp3",          L: "stimme/Lamb.mp3" },
  buchstabe: { G: "stimme/Letter-G.mp3",      H: "stimme/Letter-H.mp3" },
  frage:     { G: "stimme/What-starts-with-G.mp3", H: "stimme/What-starts-with-H.mp3", I: "stimme/What-starts-with-I.mp3",
               K: "stimme/What-starts-with-K.mp3", L: "stimme/What-starts-with-L.mp3" },
  mitsprechen: "stimme/Can-you-say-it-with-me.mp3",
  lob: ["stimme/Yes.mp3", "stimme/You-did-it.mp3"]
};
/* Alle Karten zu einem Buchstaben: erst das ABC-Wort (mit Foto), dann die Ausmalbilder. Jede Karte: { wort, bild } */
function karten(L){
  const w = ABC_WOERTER[L], out = [];
  if (w.foto) out.push({ wort: w, bild: w.foto });
  for (const t of THEMEN) for (const b of t.bilder) if (b.L === L) out.push({ wort: b.wort, bild: b.datei });
  if (!out.length) out.push({ wort: w, bild: null });
  return out;
}
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
