# Ela's Magic World – Kinder-App

Lern- und Mal-App für Kinder (6–10 Jahre) zum YouTube-Kanal "Ela's Magic World – Draw · Learn · Play".
Statische Website auf GitHub Pages, keine Build-Tools, kein Framework.

## Seiten
- `index.html` – Startseite: zuerst Intro-Video (`bilder/intro.mp4` + Standbild `intro.jpg`, stumm; „Let's go!“ = mit Ton;
  einmal pro Besuch über `sessionStorage` `ela-intro`). Dann Elas Zimmer (`bilder/zimmer.jpg`) mit Logo, Ela (begrüßt) und
  Elas Kätzchen (`bilder/katze.jpg`, sagt „Meow!“), darunter große Kacheln zu den Bereichen (Zahlen = „Soon!“).
- `malbuch.html` – Malbuch mit **Themen** (Halloween aktiv; Christmas, Animals, Sweets, Ocean als „Soon!“).
  Bild wählen, Farbe wählen, in eine Fläche tippen → füllt sich. Zusätzlich Pinsel, Undo, Neu, Speichern.
  „Print“ (Knopf mit dem Halloween-Drucker `bilder/drucker.png` aus den Videos) druckt das leere Bild als A4-Blatt
  im Stil der „Free Coloring Page“-PDFs: hohler Buchstabe, Bild, „P is for Pumpkin“, „My name: ___“, Logo + youtube.com/@ElasMagicPhonics.
  Das Blatt (`#druckblatt`) entsteht automatisch für jedes Bild – für neue Bilder kein eigenes PDF nötig.
- `abc.html` – ABC: „Explore“ (Buchstabe antippen → Ela liest „B is for Bat“ vor) und „Play“ (Bild → Buchstabe raten oder Buchstabe → Bild finden).
- `farben.html` – Farben: „Explore“ (Farbe antippen → wird vorgelesen) und „Play“ („Tap on blue!“).

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
- `elaSagt([dateien], ersatz, danach)` in `gemeinsam.js` spielt sie nacheinander; klappt es nicht, liest die Geräte-Stimme `ersatz` vor.
- Wo keine Aufnahme eingetragen ist, liest automatisch die Geräte-Stimme (`speak`) vor.
- Neue Aufnahme: MP3 nach `stimme/` (Name wie `What-starts-with-G.mp3`), in `STIMMEN` eintragen. Wörter in `ABC_WOERTER` müssen zur Aufnahme passen.

## Neues Malbuch-Bild
1. PNG in `bilder/<thema-id>/` legen, Name `BUCHSTABE-Wort.png` (z. B. `bilder/halloween/Z-Zombie.png`).
   Zugeschnitten, längste Seite ca. 1000 px, reines Schwarz auf Weiß, ohne Herzen/Deko, alle Linien geschlossen.
2. In `daten.js` beim Thema unter `bilder` ergänzen:
   `{ L: "Z", wort: { en: "Zombie", de: "Zombie", tr: "Zombi" }, datei: "bilder/halloween/Z-Zombie.png" }` (alphabetisch).
   Das Bild erscheint dann automatisch auch im ABC und im ABC-Spiel.

## Neues Thema
- In `THEMEN` ergänzen: `{ id: "ostern", name: { en: "Easter", de: "Ostern", tr: "Paskalya" }, farbe: "#fbbd23", bilder: [ ... ] }`, Ordner `bilder/ostern/` anlegen.
- Leere `bilder`-Liste = „Soon!“. Optional `ela: "bilder/…png"` für ein eigenes Ela-Bild in diesem Thema (Halloween: Hexen-Ela).

## Malbuch-Technik (bitte beibehalten)
- Farbebene (`colorCv`) unten, Linienzeichnung mit `multiply` darüber → Linien bleiben schwarz.
- Füllen = Flood Fill über die Linienmaske (`wall`, Helligkeit < 170 = Wand), danach 3 px unter die Linien wachsen.
- Fortschritt pro Bild in `ela-bild-<thema-id>-<Buchstabe>`, Sterne in `ela-sterne` (für alle Spiele gemeinsam).

## Stil
- Farben aus dem Logo: Pink (`--pink`) + Regenbogen (Rot, Orange, Gelb, Grün, Blau, Lila), heller rosa Hintergrund.
  Halloween-Farben nur im Halloween-Thema, nicht für die ganze App.
- Maskottchen: Ela mit Schürze (`bilder/ela-rund.png`); Hexen-Ela (`bilder/ela-hexe.png`) nur bei Halloween.
- Schriften: "Baloo 2" (Überschriften), "Nunito" (Text). Große Knöpfe für Finger, kein horizontales Scrollen.
- Ausmalbilder: Kawaii, dicke runde Linien, magische Augen (weißer Kreis + kleiner Glitzerstern), Wimpern, KEINE Bäckchen.
- Ela lobt freundlich, nie gruselig. Falsche Antworten nur sanft („Almost! Try again.“), nie bestrafen.
