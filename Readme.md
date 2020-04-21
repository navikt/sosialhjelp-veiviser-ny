## Veiviser økonomisk sosialhjelp

### Installer

For å kjøre lokalt:

```
  npm install
  npm start
```

### Deploy

Bruk NAIS deploy. Gjerne fra CircleCI.

### Redigering på codesandbox

Gå til https://codesandbox.io/s/github/navikt/sosialhjelp-veiviser-ny

Alt av filer som inneholder tekst ligger i mappen src/artikler. Det er ikke mulig å redigere less på codesandbox.

## Kodestil

Dette prosjektet bruker formatering av kode med prettier. Det er lagt inn automatisk formatering av kode med en pre-commit hook.
Detaljer rundt dette ligger i `package.json`. Konfigurasjon av prettier ligger i `.prettierrc.js`.

Dersom du i tillegg ønsker å sette opp formatering av kode i IntelliJ slik at koden blir formatert før du committer kan det gjøres slik:

-   Installer Prettier plugin i IntelliJ
-   Trykk ⌥⇧⌘P for å formatere kode
-   Optional: Sette opp filewatcher og automatisk formatering. Se her `https://prettier.io/docs/en/webstorm.html#running-prettier-on-save-using-file-watcher`
