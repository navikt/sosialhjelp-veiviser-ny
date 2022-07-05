## Veiviser økonomisk sosialhjelp

## Repoet er arkivert

Innholdet i veiviseren er flyttet til Enonic CMS, så dette repoet er arkivert.

## Komme i gang

For å kjøre lokalt:

```
  npm install
  npm run dev
```

Default ENV-variabler for appen ligger i `.env`. Ved behov kan ENV-variabler overstyres lokalt ved å lage en egen `.env.local`.

### Github package registry

Vi bruker Github sitt package registry for npm pakker, siden flere av Nav sine pakker kun blir publisert her.

For å kunne kjøre `npm install` lokalt må du logge inn mot Github package registry:

-   Lag/forny access token med repo og read:packages rettigheter i github ( under developer settings). husk enable sso
-   Login på npm med `npm login --scope=@navikt --registry=https://npm.pkg.github.com` og benytt github brukernavn, epost og tokenet du nettopp genererte

## Manuell deploy

Ved bruk av [cli](https://github.com/navikt/sosialhjelp-ci):

-   `deploy labs-gcp`
-   `deploy dev-gcp`
-   `deploy dev-sbs`
-   `deploy dev-sbs-intern`
-   `deploy prod`

## Bygg og deploy

Koden bygges automatisk ved push til branch på Github. Se `.github/workflows/build.yml` for detaljer.

Bygg deployes til miljø via Github Actions eller eget CLI `https://github.com/navikt/sosialhjelp-ci`.

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

Interne henvendelser kan sendes på Slack i kanalen #digisos .
