## Veiviser økonomisk sosialhjelp

## Komme i gang

For å kjøre lokalt:

```
  npm install
  npm start
```

## Bygge nextjs app

Nextjs-versjon av veiviseren er fortsatt under utvikling, og skal på sikt ta over for create-react-app versjonen av veiviser.

For å kjøre nextjs versjon av veiviseren lokalt:

```
  npm install
  npm run dev
```

Default ENV-variabler for appen ligger i `.env`. Ved behov kan ENV-variabler overstyres lokalt ved å lage en egen `.env.local`.

## Manuell deploy

Ved bruk av [cli](https://github.com/navikt/sosialhjelp-ci):

-   `deploy labs-gcp`
-   `deploy dev-gcp`
-   `deploy dev-sbs`
-   `deploy dev-sbs-intern`
-   `deploy prod`

## Bygg og deploy

Koden bygges automatisk ved push til branch på Github. Se `.github/workflows/build.yml` for detaljer.

Bygg deployes til miljø via eget CLI `https://github.com/navikt/sosialhjelp-ci`. For deploy til q-miljø kan egen Github Action brukes.

### Dekoratør lokalt og i miljø

Ved utvikling lokalt (`npm start`) er det oppsettet i `public/index.html` som brukes.

Ved deploy til miljø har vi behov for å injecte env-variabler for blant annet URL til dekoratør. Disse injectes med express, og vi har en egen `public/index_express.html` for dette. Ved bygg på github action vil innholdet i `public/index.html` erstattes med innholdet i `build/index_express.html`.

## Kodekvalitet

Dette prosjektet bruker formatering av kode med prettier. Det er lagt inn automatisk formatering av kode med en pre-commit hook.
Detaljer rundt dette ligger i `package.json`. Konfigurasjon av prettier ligger i `.prettierrc.js`.

Dersom du i tillegg ønsker å sette opp formatering av kode i IntelliJ slik at koden blir formatert før du committer kan det gjøres slik:

-   Installer Prettier plugin i IntelliJ
-   Trykk ⌥⇧⌘P for å formatere kode
-   Optional: Sette opp filewatcher og automatisk formatering. Se her `https://prettier.io/docs/en/webstorm.html#running-prettier-on-save-using-file-watcher`
-   Obs: Dersom du committer fra IntelliJ må du også krysse av for å kjøre commit-hooks

---

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på GitHub

## For NAV-ansatte

Interne henvendelser kan sendes på Slack i kanalen #digisos
