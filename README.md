# Adventskalender

24 Türchen, jeden Tag im Dezember geht genau eins auf. Dahinter steht ein Gedicht oder eine kleine Nachricht.

## Texte eintragen

Alles steht in **`inhalte.js`**. Für jeden Tag:

```js
1: {
  titel: "Überschrift",
  text: `Dein Gedicht,
Zeile für Zeile.`,
  bild: "bilder/tag1.jpg",   // optional
},
```

- Der Text steht zwischen den Backticks `` ` ``. Zeilenumbrüche werden genau so angezeigt.
- Bilder in einen Ordner `bilder/` legen und mit `bild: "bilder/dateiname.jpg"` einbinden.
- `jahr` legt fest, in welchem Dezember die Türchen aufgehen.

## Vorschau

Hänge `?vorschau` an die Adresse (z. B. `…/adventskalender/?vorschau`), dann sind alle Türchen freigeschaltet – zum Prüfen deiner Texte. Was du in der Vorschau öffnest, zählt nicht für den echten Kalender.

## Lokal starten

```bash
python3 -m http.server 8000
```

## Veröffentlichen

GitHub → Settings → Pages → „Deploy from a branch“ → `main` / `(root)`.
