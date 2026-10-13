# Ela's Magic World – Halloween Malbuch

Kinder-Mal-App (6–10 Jahre) für den YouTube-Kanal "Ela's Magic World – Draw · Learn · Play".
Kinder wählen ein Bild, eine Farbe und tippen in eine Fläche, die sich füllt. Zusätzlich gibt es einen Pinsel.

## Aufbau
- `index.html` – die komplette App (HTML, CSS, JavaScript in einer Datei, keine Build-Tools).
- `bilder/` – Ausmalbilder als PNG plus `logo.png`, `ela-hexe.png`, `ela-rund.png` (Ela = Maskottchen).
- Läuft als statische Seite auf GitHub Pages.

## Neues Bild hinzufügen
1. PNG in `bilder/` legen, Name `BUCHSTABE-Wort.png` (z. B. `Z-Zombie.png`).
   Bild vorher zuschneiden (wenig weißer Rand), längste Seite ca. 1000 px, reines Schwarz auf Weiß,
   ohne Herzen/Deko, alle Linien geschlossen (sonst läuft die Füllung aus).
2. In `index.html` im Array `BILDER` eine Zeile ergänzen: `{ L: "Z", wort: "Zombie", de: "Zombie", datei: "bilder/Z-Zombie.png" }`.
   Alphabetisch einsortieren.

## Technik (bitte beibehalten)
- Farbebene (`colorCv`) liegt unten, die Linienzeichnung wird mit `multiply` darübergelegt → Linien bleiben immer schwarz.
- Füllen = Flood Fill über die Linienmaske (`wall`, Pixel mit Helligkeit < 170 sind Wände), danach 3 px unter die Linien wachsen lassen.
- Fortschritt pro Bild wird in `localStorage` gespeichert (`ela-bild-<Buchstabe>`), Zugriffe immer in try/catch.
- Mobil zuerst denken: Bedienung mit Finger, große Knöpfe, kein horizontales Scrollen.

## Stil
- Hell und bunt: Regenbogen wie im Logo, Halloween-Farben (Orange, Lila, Grün, Pink, Gelb).
- Schriften: "Baloo 2" (Überschriften), "Nunito" (Text).
- Sprache der Oberfläche: Deutsch, einfache Wörter für Kinder. Wörter der Bilder auf Englisch (ABC), deutsch klein daneben.
- Ausmalbilder: Kawaii, dicke runde Linien, magische Augen (weißer Kreis + kleiner Glitzerstern), Wimpern, KEINE Bäckchen.
- Ela lobt die Kinder in der Sprechblase (`LOB`-Liste) – freundlich, nie gruselig.
