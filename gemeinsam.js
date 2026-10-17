/* Gemeinsame Helfer für alle Seiten: Speicher, Sprachen, Ela spricht, Vorlesen, Sterne, Sterne-Regen. */
const store = {
  get(k){ try { return localStorage.getItem(k); } catch(e){ return null; } },
  set(k,v){ try { localStorage.setItem(k,v); } catch(e){} },
  del(k){ try { localStorage.removeItem(k); } catch(e){} }
};
const zufall = arr => arr[Math.floor(Math.random() * arr.length)];
let kettenNr = 0;   // laufende Sprech-Kette (elaKette), wird von speak/elaSagt beendet

/* ===== Sprachen =====
   Neue Sprache: in SPRACHEN eintragen und in TEXTE einen Block mit allen Schlüsseln ergänzen. */
// Zwei Sprachen-Ebenen:
//  MENU = Menü (Überschriften, Kacheln, Knöpfe) – umschaltbar EN/DE/TR, gespeichert in "ela-sprache".
//  LANG = Inhalt (Buchstaben, Wörter, Bilder, Elas Sätze und Stimme) – immer Englisch, weil Ela Englisch spricht.
const SPRACHEN = { en: { name: "English", stimme: "en-US" }, de: { name: "Deutsch", stimme: "de-DE" }, tr: { name: "Türkçe", stimme: "tr-TR" } };
const LANG = "en";
let MENU = store.get("ela-sprache") || "en";
if (!SPRACHEN[MENU]) MENU = "en";

const TEXTE = {
  en: {
    start: "Home", stars: "Your stars", language: "Language", soon: "Soon!",
    home_title: "Hi! What do you want to do today?", home_hello: "Hi, I'm Ela! Let's draw and learn together!",
    home_stars: "Hi! You already have {n} stars!", home_soon: "{x} is coming soon! I can't wait!",
    f_safe: "No ads · No tracking · No sign-up – just drawing and learning!", f_parents: "For parents",
    intro_go: "Let's go!", intro_skip: "Skip", kitty: "Kitty", meow: "Meow! I'm Ela's kitty.",
    hw_hello: "Happy Halloween! Let's draw something spooky-cute together!", hw_meow: "Meow! Look at my witch hat!", watch: "Watch Ela", close: "Close", m_tapela: "Tap me! I have something to tell you!",
    t_malbuch: "Coloring Book", t_malbuch_s: "Color in the pictures", t_abc: "ABC", t_abc_s: "Learn and guess letters",
    t_farben: "Colors", t_farben_s: "Learn and find colors", t_zahlen: "Numbers", t_zahlen_s: "Learn to count",
    t_memory: "Memory", t_memory_s: "Find the pairs",
    t_schreiben: "Tracing", t_schreiben_s: "Trace letters with your finger", n_tab_count: "Count", n_tab_trace: "Trace", tr_again: "Again", tr_next: "Next", tr_pen: "Crayon color", tr_rainbow: "Rainbow",
    tr_start: "Put your finger on the green dot and follow the arrows!", tr_big: "Let's trace a big {L}! Start at the green dot.", tr_small: "Now a small {l}!", tr_num: "Let's trace the number {n}!",
    n_q: "How many can you count?", n_tap: "Tap each picture and count with me!", n_which: "Now tap the right number!", n_count: "Count with me",
    n_right: "{n} {x}! Great counting!", n_again: "Almost! Let's count together!", n_together: "Let's count together!", n_how: "How many {x}?",
    m_alle: "All pictures", t_sticker: "My Stickers", t_sticker_s: "Collect stickers with your stars", st_hint: "Every 5 stars you get a new sticker!", st_new: "A new sticker!", t_tueren: "Magic Doors", t_tueren_s: "Who is hiding?", d_find: "Who is hiding? Find the {w}!", d_wrong: "{L} is for {w}! Try another door.", d_right: "You found the {w}!", d_again: "Let's play again!",
    bye: "Bye-bye", bye_text: "Bye-bye, Magic World! See you next time!", mem_abc: "ABC", mem_pics: "Pictures", mem_hw: "Halloween", mem_new: "New game", mem_moves: "Moves: {n}",
    mem_hint_abc: "Find the letter and its picture! B goes with Bear.", mem_hint_pics: "Find two pictures that are the same!", mem_done: "You found all the pairs in {n} moves! 3 stars for you!",
    color: "Color", tool: "Tool", fill: "Fill", paint: "Paint", undo: "Undo", neu: "New", sure: "Sure?", save: "Save picture",
    eraser: "White (eraser)", thin: "Thin brush", medium: "Medium brush", thick: "Thick brush",
    m_start: "Pick a color and tap the picture!", m_fill: "Tap an area to make it colorful!", m_paint: "Now you can paint freely!",
    m_star: "A star for you, because you color so nicely!", m_lets: "Let's color the {w}!", m_new: "A fresh new picture for you!",
    m_saved: "Your picture is saved. Great job!", m_soon: "{x} pictures are coming soon!",
    print: "Print", m_print: "Print it out and color it with your crayons!",
    m_yt: "Drawing video", m_yt_s: "for parents", e_frage: "For parents: what is {a} × {b}?", e_falsch: "Not quite – please try again.", e_info: "Opens Ela's step-by-step drawing video on YouTube in a new window.", e_open: "Open YouTube",
    explore: "Explore", play: "Play", bl_tab: "Bubbles", hear: "Hear again", hear_q: "Hear question",
    a_tap: "Tap a letter!", a_is: "{L} is for {w}!", a_nopic: "{L} is for {w}! I'm still drawing the picture.",
    a_q1: "Which letter does this start with?", a_q2: "Which picture starts with {L}?", a_q3: "Find the letter {L}!", a_play: "Let's guess! You get a star for every right answer.",
    f_tap: "Tap a color!", f_this: "This is {c}!", f_q: "Tap on {c}!", f_play: "Find the right color! You get a star for every right answer.",
    lob: ["Super!", "Wow, great job!", "That's magical!", "Keep going!", "So pretty!", "You're a pro!", "Amazing!", "Yes! Well done!"],
    nochmal: ["Almost! Try again.", "Hmm, look again carefully.", "Not quite – you can do it!"]
  },
  de: {
    start: "Start", stars: "Deine Sterne", language: "Sprache", soon: "Bald!",
    home_title: "Hallo! Was möchtest du heute machen?", home_hello: "Hallo, ich bin Ela! Komm, wir malen und lernen zusammen!",
    home_stars: "Hallo! Du hast schon {n} Sterne gesammelt!", home_soon: "{x} kommt bald! Ich freu mich schon!",
    f_safe: "Keine Werbung · Kein Tracking · Keine Anmeldung – einfach malen und lernen!", f_parents: "Für Eltern",
    intro_go: "Los geht's!", intro_skip: "Überspringen", kitty: "Kätzchen", meow: "Miau! Ich bin Elas Kätzchen.",
    hw_hello: "Fröhliches Halloween! Komm, wir malen was Gruselig-Süßes!", hw_meow: "Miau! Schau mal, mein Hexenhut!", watch: "Ela anschauen", close: "Schließen", m_tapela: "Tipp auf mich! Ich will dir was sagen!",
    t_malbuch: "Malbuch", t_malbuch_s: "Bilder bunt ausmalen", t_abc: "ABC", t_abc_s: "Buchstaben lernen und raten",
    t_farben: "Farben", t_farben_s: "Farben lernen und finden", t_zahlen: "Zahlen", t_zahlen_s: "Zählen lernen",
    t_memory: "Memory", t_memory_s: "Finde die Paare",
    t_schreiben: "Nachspuren", t_schreiben_s: "Buchstaben mit dem Finger nachspuren", n_tab_count: "Zählen", n_tab_trace: "Nachspuren", tr_again: "Nochmal", tr_next: "Weiter", tr_pen: "Stiftfarbe", tr_rainbow: "Regenbogen",
    tr_start: "Leg deinen Finger auf den grünen Punkt und folge den Pfeilen!", tr_big: "Spur ein großes {L} nach! Fang am grünen Punkt an.", tr_small: "Jetzt ein kleines {l}!", tr_num: "Spur die Zahl {n} nach!",
    n_q: "Wie viele kannst du zählen?", n_tap: "Tipp jedes Bild an und zähl mit mir!", n_which: "Jetzt tipp auf die richtige Zahl!", n_count: "Zähl mit mir",
    n_right: "{n} {x}! Toll gezählt!", n_again: "Fast! Komm, wir zählen zusammen!", n_together: "Komm, wir zählen zusammen!", n_how: "Wie viele {x}?",
    m_alle: "Alle Bilder", t_sticker: "Meine Sticker", t_sticker_s: "Sammle Sticker mit deinen Sternen", st_hint: "Für 5 Sterne gibt es einen neuen Sticker!", st_new: "Ein neuer Sticker!", t_tueren: "Zaubertüren", t_tueren_s: "Wer versteckt sich?", d_find: "Wer versteckt sich? Finde: {w}!", d_wrong: "{L} wie {w}! Probier eine andere Tür.", d_right: "Gefunden: {w}!", d_again: "Komm, wir spielen nochmal!",
    bye: "Tschüss", bye_text: "Tschüss, Zauberwelt! Bis zum nächsten Mal!", mem_abc: "ABC", mem_pics: "Bilder", mem_hw: "Halloween", mem_new: "Neues Spiel", mem_moves: "Züge: {n}",
    mem_hint_abc: "Finde den Buchstaben und sein Bild! B gehört zu Bear.", mem_hint_pics: "Finde zwei gleiche Bilder!", mem_done: "Du hast alle Paare in {n} Zügen gefunden! 3 Sterne für dich!",
    color: "Farbe", tool: "Werkzeug", fill: "Füllen", paint: "Malen", undo: "Zurück", neu: "Neu", sure: "Sicher?", save: "Bild speichern",
    eraser: "Weiß (Radiergummi)", thin: "Dünner Pinsel", medium: "Mittlerer Pinsel", thick: "Dicker Pinsel",
    m_start: "Such dir eine Farbe aus und tipp ins Bild!", m_fill: "Tipp in eine Fläche, dann wird sie bunt!", m_paint: "Jetzt kannst du frei malen!",
    m_star: "Ein Stern für dich, weil du so fleißig malst!", m_lets: "Lass uns {w} ausmalen!", m_new: "Ein neues leeres Bild für dich!",
    m_saved: "Dein Bild ist gespeichert. Toll gemacht!", m_soon: "{x}-Bilder kommen bald!",
    print: "Ausdrucken", m_print: "Druck es aus und mal es mit deinen Stiften an!",
    m_yt: "Mal-Video", m_yt_s: "für Eltern", e_frage: "Für Eltern: Wie viel ist {a} × {b}?", e_falsch: "Nicht ganz – bitte nochmal.", e_info: "Öffnet Elas Mal-Video Schritt für Schritt auf YouTube in einem neuen Fenster.", e_open: "YouTube öffnen",
    explore: "Entdecken", play: "Spielen", bl_tab: "Blasen", hear: "Nochmal hören", hear_q: "Frage hören",
    a_tap: "Tipp auf einen Buchstaben!", a_is: "{L} wie {w}!", a_nopic: "{L} wie {w}! Das Bild male ich noch.",
    a_q1: "Mit welchem Buchstaben beginnt das?", a_q2: "Welches Bild beginnt mit {L}?", a_q3: "Finde den Buchstaben {L}!", a_play: "Rate mal! Für jede richtige Antwort bekommst du einen Stern.",
    f_tap: "Tipp auf eine Farbe!", f_this: "Das ist {c}!", f_q: "Tipp auf {c}!", f_play: "Finde die richtige Farbe! Für jede richtige Antwort gibt es einen Stern.",
    lob: ["Super!", "Wow, toll gemacht!", "Das ist magisch!", "Weiter so!", "Hui, wie schön!", "Du bist ein Profi!", "Zauberhaft!", "Richtig! Bravo!"],
    nochmal: ["Fast! Versuch's nochmal.", "Hmm, schau nochmal genau hin.", "Nicht ganz – du schaffst das!"]
  },
  tr: {
    start: "Ana sayfa", stars: "Yıldızların", language: "Dil", soon: "Yakında!",
    home_title: "Merhaba! Bugün ne yapmak istersin?", home_hello: "Merhaba, ben Ela! Hadi birlikte boyayalım ve öğrenelim!",
    home_stars: "Merhaba! Şimdiden {n} yıldızın var!", home_soon: "{x} yakında geliyor! Çok heyecanlıyım!",
    f_safe: "Reklam yok · Takip yok · Kayıt yok – sadece çiz ve öğren!", f_parents: "Ebeveynler için",
    intro_go: "Hadi başlayalım!", intro_skip: "Geç", kitty: "Kedicik", meow: "Miyav! Ben Ela'nın kedisiyim.",
    hw_hello: "Mutlu Cadılar Bayramı! Hadi birlikte ürkütücü-tatlı bir şey çizelim!", hw_meow: "Miyav! Cadı şapkama bak!", watch: "Ela'yı izle", close: "Kapat", m_tapela: "Bana dokun! Sana bir şey söyleyeceğim!",
    t_malbuch: "Boyama Kitabı", t_malbuch_s: "Resimleri renklendir", t_abc: "ABC", t_abc_s: "Harfleri öğren ve tahmin et",
    t_farben: "Renkler", t_farben_s: "Renkleri öğren ve bul", t_zahlen: "Sayılar", t_zahlen_s: "Saymayı öğren",
    t_memory: "Hafıza", t_memory_s: "Eşleri bul",
    t_schreiben: "İz Sürme", t_schreiben_s: "Harflerin üzerinden parmağınla geç", n_tab_count: "Sayma", n_tab_trace: "İz sürme", tr_again: "Tekrar", tr_next: "Sonraki", tr_pen: "Kalem rengi", tr_rainbow: "Gökkuşağı",
    tr_start: "Parmağını yeşil noktaya koy ve okları takip et!", tr_big: "Büyük {L} harfini çizelim! Yeşil noktadan başla.", tr_small: "Şimdi küçük {l}!", tr_num: "{n} sayısını çizelim!",
    n_q: "Kaç tane sayabilirsin?", n_tap: "Her resme dokun ve benimle say!", n_which: "Şimdi doğru sayıya dokun!", n_count: "Benimle say",
    n_right: "{n} {x}! Harika saydın!", n_again: "Neredeyse! Hadi birlikte sayalım!", n_together: "Hadi birlikte sayalım!", n_how: "Kaç {x} var?",
    m_alle: "Tüm resimler", t_sticker: "Çıkartmalarım", t_sticker_s: "Yıldızlarınla çıkartma topla", st_hint: "Her 5 yıldızda yeni bir çıkartma!", st_new: "Yeni bir çıkartma!", t_tueren: "Sihirli Kapılar", t_tueren_s: "Kim saklanıyor?", d_find: "Kim saklanıyor? Bul: {w}!", d_wrong: "{L}: {w}! Başka bir kapı dene.", d_right: "Buldun: {w}!", d_again: "Hadi tekrar oynayalım!",
    bye: "Hoşça kal", bye_text: "Hoşça kal, Sihirli Dünya! Bir dahaki sefere görüşürüz!", mem_abc: "ABC", mem_pics: "Resimler", mem_hw: "Cadılar Bayramı", mem_new: "Yeni oyun", mem_moves: "Hamle: {n}",
    mem_hint_abc: "Harfi ve resmini bul! B, Bear ile gider.", mem_hint_pics: "Aynı iki resmi bul!", mem_done: "Tüm eşleri {n} hamlede buldun! Sana 3 yıldız!",
    color: "Renk", tool: "Araç", fill: "Doldur", paint: "Boya", undo: "Geri al", neu: "Yeni", sure: "Emin misin?", save: "Resmi kaydet",
    eraser: "Beyaz (silgi)", thin: "İnce fırça", medium: "Orta fırça", thick: "Kalın fırça",
    m_start: "Bir renk seç ve resme dokun!", m_fill: "Bir alana dokun, renkli olsun!", m_paint: "Şimdi serbestçe boyayabilirsin!",
    m_star: "Bu yıldız senin, çok güzel boyuyorsun!", m_lets: "Hadi {w} boyayalım!", m_new: "Senin için yepyeni bir resim!",
    m_saved: "Resmin kaydedildi. Harika!", m_soon: "{x} resimleri yakında geliyor!",
    print: "Yazdır", m_print: "Yazdır ve boya kalemlerinle boya!",
    m_yt: "Çizim videosu", m_yt_s: "ebeveynler için", e_frage: "Ebeveynler için: {a} × {b} kaç eder?", e_falsch: "Tam değil – lütfen tekrar deneyin.", e_info: "Ela'nın adım adım çizim videosunu YouTube'da yeni bir pencerede açar.", e_open: "YouTube'u aç",
    explore: "Keşfet", play: "Oyna", bl_tab: "Baloncuklar", hear: "Tekrar dinle", hear_q: "Soruyu dinle",
    a_tap: "Bir harfe dokun!", a_is: "{L}: {w}!", a_nopic: "{L}: {w}! Resmi hâlâ çiziyorum.",
    a_q1: "Bu hangi harfle başlıyor?", a_q2: "Hangi resim {L} ile başlıyor?", a_q3: "{L} harfini bul!", a_play: "Hadi tahmin et! Her doğru cevaba bir yıldız.",
    f_tap: "Bir renge dokun!", f_this: "Bu {c}!", f_q: "{c} renge dokun!", f_play: "Doğru rengi bul! Her doğru cevaba bir yıldız.",
    lob: ["Süper!", "Vay, harika!", "Sihirli gibi!", "Devam et!", "Çok güzel!", "Sen bir ustasın!", "Muhteşem!", "Evet! Aferin!"],
    nochmal: ["Az kaldı! Tekrar dene.", "Hmm, bir daha dikkatli bak.", "Tam değil – yapabilirsin!"]
  }
};
function t(key, vars = {}){
  const s = (TEXTE[LANG] && TEXTE[LANG][key] !== undefined) ? TEXTE[LANG][key] : TEXTE.en[key];
  if (typeof s !== "string") return s;
  const out = s.replace(/\{(\w+)\}/g, (_, k) => vars[k] !== undefined ? vars[k] : "");
  return out.charAt(0).toLocaleUpperCase(LANG) + out.slice(1);   // Satz beginnt immer groß
}
/* Übersetzter Name aus einem {en, de, tr}-Objekt */
const tx = obj => (obj && (obj[LANG] || obj.en)) || "";
/* Menü-Texte in der gewählten Menü-Sprache (Überschriften, Kacheln, Knöpfe) */
function tm(key, vars = {}){
  const s = (TEXTE[MENU] && TEXTE[MENU][key] !== undefined) ? TEXTE[MENU][key] : TEXTE.en[key];
  if (typeof s !== "string") return t(key, vars);
  const out = s.replace(/\{(\w+)\}/g, (_, k) => vars[k] !== undefined ? vars[k] : "");
  return out.charAt(0).toLocaleUpperCase(MENU) + out.slice(1);
}
const txm = obj => (obj && (obj[MENU] || obj.en)) || "";
function lob(){ return zufall(t("lob")); }
function nochmal(){ return zufall(t("nochmal")); }

/* Texte im HTML übersetzen: data-t="schlüssel" (Inhalt), data-t-label="schlüssel" (aria-label/title) */
function uebersetzen(root = document){
  document.documentElement.lang = LANG;
  // Was Ela sagt (Sprechblase) und die Spielfragen bleiben Englisch; alles andere ist Menü → Menü-Sprache
  const inhalt = el => el.closest(".bubble, .q, .ela");
  root.querySelectorAll("[data-t]").forEach(el => el.textContent = inhalt(el) ? t(el.dataset.t) : tm(el.dataset.t));
  root.querySelectorAll("[data-t-label]").forEach(el => { const s = inhalt(el) ? t(el.dataset.tLabel) : tm(el.dataset.tLabel); el.setAttribute("aria-label", s); el.title = s; });
}

/* Sprachauswahl in der Kopfzeile: <div class="lang" id="lang"></div> */
function sprachAuswahl(){
  const box = document.getElementById("lang"); if (!box) return;
  if (Object.keys(SPRACHEN).length < 2) { box.hidden = true; return; }   // nur eine Sprache → kein Umschalter
  box.setAttribute("aria-label", tm("language"));
  Object.keys(SPRACHEN).forEach(code => {
    const b = document.createElement("button"); b.type = "button"; b.textContent = code.toUpperCase();
    b.title = SPRACHEN[code].name; b.setAttribute("aria-pressed", code === MENU);
    b.onclick = () => { store.set("ela-sprache", code); location.reload(); };
    box.appendChild(b);
  });
}

function say(text){
  const b = document.getElementById("bubble"); if (!b) return;
  b.textContent = text; b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop");
}

/* Ela ist ein Mädchen: möglichst eine Frauen-/Mädchenstimme des Geräts nehmen (Namen der üblichen Stimmen auf
   iPhone, Android, Windows, Mac). Gibt es keine, nimmt sie irgendeine Stimme der Sprache. */
const FRAUEN = /female|frau|woman|girl|samantha|karen|victoria|moira|tessa|fiona|serena|allison|ava|susan|zira|aria|jenny|michelle|sonia|libby|natasha|hazel|anna|petra|helena|katja|hedda|marlene|vicki|amala|yelda|emel|filiz|seda|google us english|google uk english female/i;
const MAENNER = /male|mann|man\b|daniel|alex|fred|david|mark|guy|ryan|thomas|tom|aaron|arthur|stefan|markus|conrad|yannick|tolga|ahmet/i;
function frauenStimme(lang){
  const kurz = lang.slice(0, 2).toLowerCase();
  const alle = speechSynthesis.getVoices().filter(v => v.lang && v.lang.replace("_", "-").toLowerCase().startsWith(kurz));
  const genau = alle.filter(v => v.lang.replace("_", "-").toLowerCase() === lang.toLowerCase());
  for (const liste of [genau, alle]) {
    const f = liste.find(v => FRAUEN.test(v.name) && !/\bmale\b/i.test(v.name.replace(/female/i, "")));
    if (f) return f;
  }
  return alle.find(v => !MAENNER.test(v.name)) || alle[0] || null;
}
try { speechSynthesis.getVoices(); speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices(); } catch(e){}

/* Läuft gerade ein Ela-Kreis-Video, wird es beendet (jede neue Ansage hat Vorrang) */
function kreisStopp(){ const v = document.querySelector("video.ela-kreis"); if (v && v.zurueck) v.zurueck(); }

/* Vorlesen mit der Stimme des Geräts. Ohne lang = aktuelle Sprache. */
function speak(text, lang){
  kettenNr++; kreisStopp();
  lang = lang || SPRACHEN[LANG].stimme;
  try {
    if (elaTon) elaTon.pause();
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang; u.rate = 0.85; u.pitch = 1.15;
    const v = frauenStimme(lang);
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  } catch(e){}
}

/* Elas echte Stimme (MP3s im Ordner stimme/, siehe STIMMEN in daten.js).
   Spielt die Dateien nacheinander ab. Klappt die erste nicht, liest stattdessen die Geräte-Stimme "ersatz" vor.
   "danach" (optional) liest die Geräte-Stimme vor, wenn alle Dateien fertig sind. */
let elaTon = null;
/* Mehrere Sätze nacheinander: jeder Teil { datei, text } – mit Elas Aufnahme, fehlt sie, liest die Geräte-Stimme "text" vor.
   So passt es schon jetzt und wird automatisch Elas Stimme, sobald die Aufnahme in STIMMEN eingetragen ist. */
function elaKette(teile, lang = "en-US"){
  const nr = ++kettenNr; kreisStopp();
  try { if ("speechSynthesis" in window) speechSynthesis.cancel(); } catch(e){}
  if (elaTon) elaTon.pause();
  let i = 0;
  const weiter = () => {
    if (nr !== kettenNr || i >= teile.length) return;
    const { datei, text } = teile[i++];
    const vorlesen = () => {
      try {
        if (!text || !("speechSynthesis" in window)) return setTimeout(weiter, 300);
        const u = new SpeechSynthesisUtterance(text);
        u.lang = lang; u.rate = 0.85; u.pitch = 1.15;
        const v = frauenStimme(lang); if (v) u.voice = v;
        u.onend = () => setTimeout(weiter, 250);
        speechSynthesis.speak(u);
      } catch(e){}
    };
    if (!datei) return vorlesen();
    const a = new Audio(datei); elaTon = a;
    a.onended = () => setTimeout(weiter, 300);
    a.onerror = vorlesen;
    const p = a.play(); if (p && p.catch) p.catch(vorlesen);
  };
  weiter();
}
function elaSagt(dateien, ersatz, danach, lang = "en-US"){
  kettenNr++; kreisStopp();
  try { if ("speechSynthesis" in window) speechSynthesis.cancel(); } catch(e){}
  if (elaTon) elaTon.pause();
  let i = 0;
  const weiter = () => {
    if (i >= dateien.length) { if (danach) speak(danach, lang); return; }
    const erste = i === 0, a = new Audio(dateien[i++]); elaTon = a;
    const fehler = () => { if (erste && ersatz) speak(ersatz, lang); };
    a.onended = () => setTimeout(weiter, 300);
    a.onerror = fehler;
    const p = a.play(); if (p && p.catch) p.catch(fehler);
  };
  weiter();
}

/* Ela-Video in einem Fenster mit Ton abspielen (Videos in videos/, siehe ELA_VIDEOS in daten.js).
   Schließt sich am Ende von selbst. Klappt das Abspielen nicht, liest die Geräte-Stimme "ersatz" vor. */
function elaVideo(src, ersatz){
  kreisStopp();
  try { if ("speechSynthesis" in window) speechSynthesis.cancel(); } catch(e){}
  if (elaTon) elaTon.pause();
  const alt = document.querySelector(".ela-video"); if (alt) alt.remove();
  const box = document.createElement("div"); box.className = "ela-video";
  box.innerHTML = `<div class="fenster"><video playsinline poster="${src.replace(/\.mp4$/, ".jpg")}"></video><button class="zu" type="button">✕</button></div>`;
  const v = box.querySelector("video"), zu = () => { v.pause(); box.remove(); };
  box.querySelector(".zu").setAttribute("aria-label", t("close"));
  box.querySelector(".zu").onclick = zu;
  box.onclick = e => { if (e.target === box) zu(); };
  v.onended = zu;
  const fehler = () => { zu(); if (ersatz) speak(ersatz, "en-US"); };
  v.onerror = fehler;
  v.src = src; document.body.appendChild(box);
  const p = v.play(); if (p && p.catch) p.catch(fehler);
}

/* Ela spricht im runden Kreis (statt im großen Video-Fenster): das runde Ela-Bild wird kurz zum Video
   und ist danach wieder das Bild. Antippen beendet. Klappt das Abspielen nicht, liest die Geräte-Stimme "ersatz" vor. */
function elaKreisVideo(img, src, ersatz){
  if (!img) return elaVideo(src, ersatz);
  try { if ("speechSynthesis" in window) speechSynthesis.cancel(); } catch(e){}
  if (elaTon) elaTon.pause();
  const alt = document.querySelector("video.ela-kreis"); if (alt) alt.zurueck();
  const r = img.getBoundingClientRect(), v = document.createElement("video");
  v.className = "ela-kreis"; v.playsInline = true; v.setAttribute("playsinline", ""); v.poster = src.replace(/\.mp4$/, ".jpg");
  v.style.width = v.style.height = Math.round(r.width) + "px";
  let fertig = false;
  v.zurueck = () => { if (fertig) return; fertig = true; v.pause(); v.replaceWith(img); };
  v.onended = v.zurueck; v.onclick = v.zurueck;
  v.onerror = () => { v.zurueck(); if (ersatz) speak(ersatz, "en-US"); };
  img.replaceWith(v); v.src = src;
  const p = v.play(); if (p && p.catch) p.catch(v.onerror);
}

/* Eltern-Sperre vor YouTube: Rechenaufgabe (zweistellig × einstellig), die kleine Kinder noch nicht lösen.
   Richtig → YouTube öffnet sich in einem neuen Fenster (nie eingebettet, nichts von Google auf unserer Seite).
   Es werden nur Links zu youtube.com / youtu.be geöffnet. Texte in der Menü-Sprache (für Eltern). */
function elternSperre(url){
  if (!/^https:\/\/(www\.)?(youtube\.com|youtu\.be)\//.test(url)) return;
  const alt = document.querySelector(".eltern"); if (alt) alt.remove();
  const a = 11 + Math.floor(Math.random() * 8), b = 3 + Math.floor(Math.random() * 6);
  const box = document.createElement("div"); box.className = "eltern";
  box.innerHTML = `<div class="karte" role="dialog" aria-modal="true">
      <button class="zu" type="button">✕</button>
      <p class="titel">🎬 ${tm("m_yt")}</p>
      <p class="info"></p>
      <label class="frage" for="e-antwort"></label>
      <div class="zeile"><input id="e-antwort" inputmode="numeric" autocomplete="off"><button class="btn ok" type="button">OK</button></div>
      <p class="falsch" hidden></p>
      <a class="btn offen" hidden target="_blank" rel="noopener noreferrer"></a>
    </div>`;
  box.querySelector(".info").textContent = tm("e_info");
  box.querySelector(".frage").textContent = tm("e_frage", { a, b });
  box.querySelector(".falsch").textContent = tm("e_falsch");
  const offen = box.querySelector(".offen"); offen.href = url; offen.textContent = "▶ " + tm("e_open");
  const zu = () => box.remove();
  box.querySelector(".zu").setAttribute("aria-label", tm("close"));
  box.querySelector(".zu").onclick = zu; offen.addEventListener("click", () => setTimeout(zu, 300));
  box.onclick = e => { if (e.target === box) zu(); };
  const eingabe = box.querySelector("input");
  const pruefen = () => {
    const ok = parseInt(eingabe.value, 10) === a * b;
    box.querySelector(".falsch").hidden = ok;
    if (!ok) return;
    box.querySelector(".zeile").hidden = true; box.querySelector(".frage").hidden = true;
    offen.hidden = false; offen.click();   // öffnet sofort; bleibt sichtbar, falls der Browser das Fenster blockiert
  };
  box.querySelector(".ok").onclick = pruefen;
  eingabe.addEventListener("keydown", e => { if (e.key === "Enter") pruefen(); });
  document.body.appendChild(box); eingabe.focus();
}

/* Bild von Ela antippbar machen: spielt die Videos der Reihe nach (leere Liste = nichts) */
function elaTippen(img, videos){
  if (!img || !videos || !videos.length) return;
  let nr = 0;
  img.classList.add("tippbar"); img.title = "▶";
  img.onclick = () => elaVideo(videos[nr++ % videos.length]);
}

/* Sterne sammeln (gilt für alle Spiele) */
function sterne(){ return parseInt(store.get("ela-sterne") || "0", 10) || 0; }
function zeigeSterne(){ const el = document.getElementById("stars-n"); if (el) el.textContent = sterne(); }
function sternDazu(n = 1){
  const vorher = sterne(), jetzt = vorher + n;
  store.set("ela-sterne", String(jetzt)); zeigeSterne();
  // Alle 5 Sterne ein neuer Sticker: kurz groß zeigen (ohne Text – die Kinder können noch nicht lesen)
  if (typeof STICKER !== "undefined" && Math.floor(jetzt / STICKER_ALLE) > Math.floor(vorher / STICKER_ALLE)) {
    const nr = Math.floor(jetzt / STICKER_ALLE) - 1;
    if (STICKER[nr]) setTimeout(() => stickerNeu(STICKER[nr]), 1200);
  }
}
/* Neuer Sticker: fliegt groß herein, dreht sich, fliegt dann zum Sternchen-Feld oben rechts */
function stickerNeu(bild){
  const box = document.createElement("div"); box.className = "sticker-neu";
  box.innerHTML = `<img src="${bild}" alt="">`;
  const zu = () => { box.classList.add("weg"); setTimeout(() => box.remove(), 600); };
  box.onclick = zu; document.body.appendChild(box);
  sternRegen(); setTimeout(zu, 2600);
}

function sternRegen(){
  const box = document.createElement("div"); box.className = "confetti";
  const farben = ["#fbbd23","#f7882f","#e8459b","#8b5cf6","#4cbb5c","#3d8ef0"];
  for (let i = 0; i < 22; i++) {
    const s = document.createElement("i");
    s.style.left = Math.random() * 100 + "vw";
    s.style.animationDelay = Math.random() * .5 + "s";
    s.innerHTML = `<svg viewBox="0 0 24 24"><path fill="${zufall(farben)}" d="M12 1l2.6 7.4L22 12l-7.4 2.6L12 23l-2.6-8.4L1 12l8.4-3.6z"/></svg>`;
    box.appendChild(s);
  }
  document.body.appendChild(box); setTimeout(() => box.remove(), 2200);
}

/* Im Oktober ist Ela überall die Hexe: runde Ela-Bilder austauschen */
const HALLOWEEN = new Date().getMonth() === 9;
if (HALLOWEEN) document.documentElement.classList.add("halloween");
function elaImOktober(){
  if (!HALLOWEEN) return;
  document.querySelectorAll('img[src$="ela-rund.png"]').forEach(img => img.src = "bilder/ela-hexe-rund.jpg");
}

/* Schon beim Laden: Texte übersetzen, Sprachauswahl und Sterne anzeigen.
   (Die Seiten binden dieses Skript am Ende von <body> ein, das DOM ist also schon da.) */
uebersetzen(); sprachAuswahl(); zeigeSterne(); elaImOktober();
/* Das Sternchen-Feld oben rechts führt zum Sticker-Album */
document.querySelectorAll(".stars").forEach(el => {
  if (location.pathname.endsWith("sticker.html")) return;
  el.classList.add("tippbar"); el.setAttribute("role", "link");
  el.onclick = () => { location.href = "sticker.html"; };
});
