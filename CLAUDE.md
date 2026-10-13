# Ela's Magic World – Malbuch

Kinder-Mal-App (6–10 Jahre) für den YouTube-Kanal "Ela's Magic World – Draw · Learn · Play".
Das Malbuch hat **Themen** (Halloween, Weihnachten, Tiere, Süßes, Meer …). Kinder wählen ein Thema, ein Bild, eine Farbe und tippen in eine Fläche, die sich füllt. Zusätzlich gibt es einen Pinsel.

## Aufbau
- `index.html` – die komplette App (HTML, CSS, JavaScript in einer Datei, keine Build-Tools).
- `bilder/<thema-id>/` – Ausmalbilder pro Thema als PNG (z. B. `bilder/halloween/P-Pumpkin.png`).
- `bilder/` – außerdem `logo.png`, `ela-hexe.png`, `ela-rund.png` (Ela = Maskottchen).
- Läuft als statische Seite auf GitHub Pages.

## Neues Bild hinzufügen
1. PNG in `bilder/<thema-id>/` legen, Name `BUCHSTABE-Wort.png` (z. B. `bilder/halloween/Z-Zombie.png`).
   Bild vorher zuschneiden (wenig weißer Rand), längste Seite ca. 1000 px, reines Schwarz auf Weiß,
   ohne Herzen/Deko, alle Linien geschlossen (sonst läuft die Füllung aus).
2. In `index.html` im Array `THEMEN` beim passenden Thema unter `bilder` eine Zeile ergänzen:
   `{ L: "Z", wort: "Zombie", de: "Zombie", datei: "bilder/halloween/Z-Zombie.png" }`. Alphabetisch einsortieren.

## Neues Thema hinzufügen
- In `THEMEN` einen Block ergänzen: `{ id: "ostern", name: "Ostern", farbe: "#ffc928", bilder: [ ... ] }`
  und den Ordner `bilder/ostern/` anlegen.
- Ein Thema mit leerer `bilder`-Liste erscheint als „Bald!“ und kann noch nicht geöffnet werden.
- Vorhandene Platzhalter: weihnachten, tiere, suesses, meer – einfach Bilder eintragen, dann ist das Thema aktiv.

## Technik (bitte beibehalten)
- Farbebene (`colorCv`) liegt unten, die Linienzeichnung wird mit `multiply` darübergelegt → Linien bleiben immer schwarz.
- Füllen = Flood Fill über die Linienmaske (`wall`, Pixel mit Helligkeit < 170 sind Wände), danach 3 px unter die Linien wachsen lassen.
- Fortschritt pro Bild wird in `localStorage` gespeichert (`ela-bild-<thema-id>-<Buchstabe>`), zuletzt benutztes Thema in `ela-thema`, Zugriffe immer in try/catch.
- Mobil zuerst denken: Bedienung mit Finger, große Knöpfe, kein horizontales Scrollen.

## Stil
- Hell und bunt: Regenbogen wie im Logo; jedes Thema hat eine eigene Farbe (`farbe`).
- Schriften: "Baloo 2" (Überschriften), "Nunito" (Text).
- Sprache der Oberfläche: Deutsch, einfache Wörter für Kinder. Wörter der Bilder auf Englisch (ABC), deutsch klein daneben.
- Ausmalbilder: Kawaii, dicke runde Linien, magische Augen (weißer Kreis + kleiner Glitzerstern), Wimpern, KEINE Bäckchen.
- Ela lobt die Kinder in der Sprechblase (`LOB`-Liste) – freundlich, nie gruselig.
