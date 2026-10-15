# Ela's Magic World – Kinder-App

Lern- und Mal-App für Kinder (6–10 Jahre) zum YouTube-Kanal "Ela's Magic World – Draw · Learn · Play".
Statische Website auf GitHub Pages, keine Build-Tools, kein Framework.

## Seiten
- `index.html` – Startseite: zuerst Intro-Video (`bilder/intro.mp4` + Standbild `intro.jpg`, stumm; „Let's go!“ = mit Ton;
  einmal pro Besuch über `sessionStorage` `ela-intro`). Dann Elas Zimmer (`bilder/zimmer.jpg`) mit Logo und Ela (begrüßt),
  KEIN sprechendes Kätzchen im Kreis mehr (auf Wunsch entfernt), darunter große Kacheln zu den Bereichen (Zahlen vorerst ausgeblendet).
  Unten Fußzeile mit Versionsnummer (`v20`) – bei jeder sichtbaren Änderung hochzählen, damit man im Browser erkennt, ob die neue Version da ist.
- `malbuch.html` – Malbuch mit **Themen** (Halloween aktiv; Christmas, Animals, Sweets, Ocean sind vorbereitet, aber ausgeblendet, bis sie Bilder haben).
  Bild wählen, Farbe wählen, in eine Fläche tippen → füllt sich. Zusätzlich Pinsel, Undo, Neu, Speichern.
  „Print“ (Knopf mit dem Halloween-Drucker `bilder/drucker.png` aus den Videos) druckt das leere Bild als A4-Blatt
  im Stil der „Free Coloring Page“-PDFs: hohler Buchstabe, Bild, „P is for Pumpkin“, „My name: ___“, Logo + youtube.com/@ElasMagicPhonics.
  Das Blatt (`#druckblatt`) entsteht automatisch für jedes Bild – für neue Bilder kein eigenes PDF nötig.
- `abc.html` – ABC: „Explore“ (Buchstabe antippen → Ela liest „B is for Bat“ vor) und „Play“ (Bild → Buchstabe raten oder Buchstabe → Bild finden).
- `farben.html` – Farben: „Explore“ (Farbe antippen → wird vorgelesen) und „Play“ („Tap on blue!“).
- `memory.html` – Memory mit 12 Karten (6 Paare) aus den 3D-ABC-Bildern (`ABC_WOERTER[L].foto`). Modus „ABC“: Buchstabe ↔ Bild
  („Bb“ ↔ Bear), Modus „Pictures“: zwei gleiche Bilder. Umdrehen liest Wort/Buchstabe englisch vor, Paar = Elas Lob + „B is for Bear“,
  alle Paare = 3 Sterne. Neue Tierbilder mit `foto` erscheinen automatisch im Memory.
- `info.html` – „For parents“: wer macht die Seite + Kontakt-E-Mail, Datenschutz (EN/DE/TR), YouTube-Link hinter Elternsperre
  (Rechenaufgabe). Verlinkt in der Fußzeile der Startseite. Betreiberin lebt in der Türkei, Projekt nicht kommerziell.
  Datenschutz-Versprechen: keine Werbung, kein Tracking, keine Cookies, keine Anmeldung, nichts von Dritten nachladen.
  → Keine externen Dienste einbauen (kein Google Fonts, kein YouTube-Embed, keine Analytics). Schriften liegen lokal in `schriften/`.
- `zahlen.html` – Numbers: 2–5 gleiche Dinge (`DINGE`: Äpfel, Eis, Drachen, Enten `bilder/zahlen/ente.jpg`, Sterne) antippen und mit Ela zählen („One, two …“, `STIMMEN.zahl`),
  „How many apples?“ (`STIMMEN.wieviele[id]`), dann die Zahl wählen. Falsche Zahl → Ela zählt sanft mit.
- `tueren.html` – Magic Doors (aus „Ela & Papa“ Ep. 1): rote, gelbe, blaue Tür als freigestellte 3D-Bilder (`bilder/tueren/tuer-*.webp`, dahinter Licht in Türform per CSS-Maske), hinter jeder ein ABC-Tier.
  „Who is hiding? Find the Bear!“ (gesuchtes Tier klein oben), falsche Tür → „G is for Giraffe! Try another door.“ (`STIMMEN.tueren.tier`, `.andere`), richtig → „You found it!“ (`.gefunden`) + „B is for Bear“, Ela antippen → „Open a door!“ (`.oeffne`).
  Startseite: Knopf „Bye-bye“ (`STIMMEN.tschuess`).

## Gemeinsame Dateien
- `gemeinsam.css` – Farben, Kopfzeile, Ela + Sprechblase, Knöpfe, Tabs, Sterne-Regen.
- `gemeinsam.js` – `store` (localStorage in try/catch), **Sprachen** (`TEXTE`, `t()`, `tx()`), `say()` (Ela-Sprechblase),
  `speak()` (Vorlesen über die Browser-Stimme), Sterne (`sternDazu`, `sternRegen`), `lob()`, `nochmal()`.
- `daten.js` – `THEMEN` mit Bildern, `ABC_WOERTER`, `LERNFARBEN`, `bildFuer(L)`.
- Jede Seite bindet am Ende von `<body>` zuerst `gemeinsam.js`, dann `daten.js`, dann ihr eigenes Skript ein.

## Sprachen
- Standard: **Englisch**. Außerdem Deutsch und Türkisch. Umschalter „EN DE TR“ in der Kopfzeile (`<div class="lang" id="lang">`), gespeichert in `ela-sprache`.
- Feste Texte im HTML: `data-t="schlüssel"` bzw. `data-t-label="schlüssel"`. Texte im Skript: `t("schlüssel", {var})`.
- Neue Texte immer in **allen** Sprachblöcken von `TEXTE` ergänzen. Namen/Wörter in Daten als `{ en, de, tr }`.
- Neue Sprache: in `SPRACHEN` (Name + Stimme, z. B. `fr-FR`) und `TEXTE` ergänzen, Daten um den Code erweitern.
- Das ABC ist immer ein **englisches** ABC („B is for Bat“, englisch vorgelesen); die Übersetzung steht klein darunter.

## Elas echte Stimme
- Aufnahmen von Ela (englisch) liegen als MP3 in `stimme/`, eingetragen in `STIMMEN` (`daten.js`):
  `abc` („K is for Kite“), `wort` („Kite“), `buchstabe` („Letter G“), `frage` („What starts with G?“), `mitsprechen`, `lob` („Yes!“, „You did it!“).
- Geräte-Stimme: `frauenStimme()` sucht eine Frauen-/Mädchenstimme (Ela ist ein Mädchen), sonst irgendeine der Sprache.
- `elaSagt([dateien], ersatz, danach)` in `gemeinsam.js` spielt sie nacheinander; klappt es nicht, liest die Geräte-Stimme `ersatz` vor.
- `elaKette([{datei, text}, …])`: Sätze nacheinander, jeder mit eigener Ersatz-Stimme – fehlt eine Aufnahme (`datei` leer), liest die Geräte-Stimme nur diesen Teil.
- Wo keine Aufnahme eingetragen ist, liest automatisch die Geräte-Stimme (`speak`) vor.
- Neue Aufnahme: MP3 nach `stimme/` (Name wie `What-starts-with-G.mp3`), in `STIMMEN` eintragen. Wörter in `ABC_WOERTER` müssen zur Aufnahme passen.

## Elas Videos
- Kurze Clips (8 s) mit Ela, die spricht, in `videos/` (640 px breit, H.264 + AAC, ca. 200 KB; Standbild = gleicher Name `.jpg`).
  Neues Video: `ffmpeg -i in.mp4 -vf scale=640:-2 -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p -c:a aac -b:a 80k -movflags +faststart videos/X.mp4`
  und `ffmpeg -ss 1 -i videos/X.mp4 -frames:v 1 -q:v 5 videos/X.jpg`.
- Eintragen in `ELA_VIDEOS` (`daten.js`): `abc` (Schlüssel = englisches Wort, ersetzt im ABC das Vorlesen: „P is for Pumpkin“),
  `bild` (Schlüssel `<thema-id>-<Buchstabe>`, Knopf „Watch Ela“ im Malbuch, mehrere der Reihe nach).
- Abspielen über `elaVideo(src, ersatz)` in `gemeinsam.js` (Fenster mit ✕, schließt am Ende selbst).
- Im Oktober tauscht `elaImOktober()` (gemeinsam.js) auf allen Seiten `ela-rund.png` gegen `ela-hexe-rund.jpg`.
- **Oktober (Halloween):** Startseite mit Hexen-Ela als Video im Kreis (`bilder/ela-hexe-schaut.mp4` stumm, beim Antippen `ela-hexe-hallo.mp4`),
  Halloween-Zimmer als Hintergrund (`bilder/zimmer-halloween.jpg`),
  Intro siehe unten (sonst `bilder/intro.mp4`).
- Malbuch: Tippen auf Ela spielt `ELA_VIDEOS.thema[<thema-id>]` (Halloween: „Do you want to color with me?“).
- ABC / Farben: Tippen auf Ela spielt `ELA_VIDEOS.seite.abc` / `.farben` der Reihe nach (`elaTippen()` in `gemeinsam.js`).
- Nach „Save picture“: `ELA_VIDEOS.gespeichert[<thema-id>]` (Halloween: „It's alive! It's blinking!“).
- Malbuch: nach der 4. Fläche erscheint Ela klein oben rechts an der Malfläche (`ELA_VIDEOS.zuschauen`, Halloween: „Look how spooky!“,
  sie blickt im Video nach unten rechts aufs Bild), einmal pro Bild, Antippen schließt.
- Oktober-Intro = nur das Logo im Halloween-Zimmer (`intro-halloween.mp4`). `introListe` kann mehrere Videos nacheinander spielen.

## Neues Malbuch-Bild
1. PNG in `bilder/<thema-id>/` legen, Name `BUCHSTABE-Wort.png` (z. B. `bilder/halloween/Z-Zombie.png`).
   Zugeschnitten, längste Seite ca. 1000 px, reines Schwarz auf Weiß, ohne Herzen/Deko, alle Linien geschlossen.
2. In `daten.js` beim Thema unter `bilder` ergänzen:
   `{ L: "Z", wort: { en: "Zombie", de: "Zombie", tr: "Zombi" }, datei: "bilder/halloween/Z-Zombie.png" }` (alphabetisch).
   Das Bild erscheint dann automatisch auch im ABC und im ABC-Spiel.

## Neues Thema
- In `THEMEN` ergänzen: `{ id: "ostern", name: { en: "Easter", de: "Ostern", tr: "Paskalya" }, farbe: "#fbbd23", bilder: [ ... ] }`, Ordner `bilder/ostern/` anlegen.
- Leere `bilder`-Liste = Thema wird nicht angezeigt. Optional `ela: "bilder/…png"` für ein eigenes Ela-Bild in diesem Thema (Halloween: Hexen-Ela).

## Malbuch-Technik (bitte beibehalten)
- Farbebene (`colorCv`) unten, Linienzeichnung mit `multiply` darüber → Linien bleiben schwarz.
- Füllen = Flood Fill über die Linienmaske (`wall`, Helligkeit < 170 = Wand), danach 3 px unter die Linien wachsen.
- Fortschritt pro Bild in `ela-bild-<thema-id>-<Buchstabe>`, Sterne in `ela-sterne` (für alle Spiele gemeinsam).

## Stil
- Look wie in den Videos: Hintergrund aller Seiten = Elas Zimmer (`body::before` in gemeinsam.css, Oktober: `html.halloween` → Halloween-Zimmer),
  im Malbuch liegt das Bild als Blatt Papier auf Elas cremeweißem Maltisch (`.frame`).
- Farben aus dem Logo: Pink (`--pink`) + Regenbogen (Rot, Orange, Gelb, Grün, Blau, Lila), heller rosa Hintergrund.
  Halloween-Farben nur im Halloween-Thema, nicht für die ganze App.
- Maskottchen: Ela mit Schürze (`bilder/ela-rund.png`); Hexen-Ela (`bilder/ela-hexe.png`) nur bei Halloween.
  Den Regenbogen-Pinsel mit Gesicht NICHT mehr verwenden (auf Wunsch entfernt).
  der Halloween-Drucker (`bilder/drucker.png`, „Print“-Knopf). ABC-Bilder im 3D-Stil der Videos: `bilder/abc/<L>-<Word>.jpg` (600×600), das ganze Tier mit etwas Rand (nichts abgeschnitten).
  Quelle z. B. die Shorts „Can you guess the letter?“: Bild aus Sekunde 0.3, `crop=680:700:200:540,pad=760:760:40:30:color=0xf8f8f8,scale=600:600`.
- Keine Fotos von echten Kindern auf der Webseite (nur die gezeichnete Ela).
- Schriften: "Baloo 2" (Überschriften), "Nunito" (Text). Große Knöpfe für Finger, kein horizontales Scrollen.
- Ausmalbilder: Kawaii, dicke runde Linien, magische Augen (weißer Kreis + kleiner Glitzerstern), Wimpern, KEINE Bäckchen.
- Ela lobt freundlich, nie gruselig. Falsche Antworten nur sanft („Almost! Try again.“), nie bestrafen.
