// =====================================================================
//  HIER SCHREIBST DU DEINE TEXTE REIN
// =====================================================================
//
//  Für jeden Tag gibt es einen Eintrag mit:
//    titel: kurze Überschrift (darf auch leer bleiben: titel: "")
//    text:  dein Gedicht oder deine Nachricht
//    bild:  (optional) Dateiname eines Bildes im Ordner "bilder",
//           z. B. bild: "bilder/tag1.jpg"
//
//  Wichtig:
//  - Den Text zwischen den `Backticks` schreiben. Zeilenumbrüche werden
//    genau so angezeigt, wie du sie tippst – perfekt für Gedichte.
//  - Das Zeichen ` selbst darf im Text nicht vorkommen.
//
// =====================================================================

const KALENDER = {
  // Überschrift oben auf der Seite
  ueberschrift: "Dein Adventskalender",

  // Kleine Zeile darunter, z. B. "Für Anna, von Natalia" – oder leer lassen
  untertitel: "Jeden Tag ein Türchen",

  // In welchem Jahr gelten die Türchen? Ab dem 1. Dezember dieses Jahres
  // geht jeden Tag ein neues auf. Danach bleiben alle offen.
  jahr: 2026,

  tage: {
    1: {
      titel: "Willkommen im Advent",
      text: `Hier kommt dein Gedicht für den 1. Dezember hin.
Jede neue Zeile
wird auch als neue Zeile angezeigt.`,
    },
    2:  { titel: "", text: `Text für den 2. Dezember` },
    3:  { titel: "", text: `Text für den 3. Dezember` },
    4:  { titel: "", text: `Text für den 4. Dezember` },
    5:  { titel: "", text: `Text für den 5. Dezember` },
    6:  { titel: "Nikolaus", text: `Text für den 6. Dezember` },
    7:  { titel: "", text: `Text für den 7. Dezember` },
    8:  { titel: "", text: `Text für den 8. Dezember` },
    9:  { titel: "", text: `Text für den 9. Dezember` },
    10: { titel: "", text: `Text für den 10. Dezember` },
    11: { titel: "", text: `Text für den 11. Dezember` },
    12: { titel: "", text: `Text für den 12. Dezember` },
    13: { titel: "", text: `Text für den 13. Dezember` },
    14: { titel: "", text: `Text für den 14. Dezember` },
    15: { titel: "", text: `Text für den 15. Dezember` },
    16: { titel: "", text: `Text für den 16. Dezember` },
    17: { titel: "", text: `Text für den 17. Dezember` },
    18: { titel: "", text: `Text für den 18. Dezember` },
    19: { titel: "", text: `Text für den 19. Dezember` },
    20: { titel: "", text: `Text für den 20. Dezember` },
    21: { titel: "", text: `Text für den 21. Dezember` },
    22: { titel: "", text: `Text für den 22. Dezember` },
    23: { titel: "", text: `Text für den 23. Dezember` },
    24: { titel: "Frohe Weihnachten", text: `Text für Heiligabend` },
  },
};
