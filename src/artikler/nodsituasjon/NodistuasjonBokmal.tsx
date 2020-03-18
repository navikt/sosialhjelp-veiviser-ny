import React from "react";
import {Innholdstittel, Normaltekst} from "nav-frontend-typografi";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import Lenke from "nav-frontend-lenker";

const NodsituasjonBokmal = () => (
    <Artikkel
        tittel="Dette gjør du i en nødssituasjon"
        illustrasjon={<Veiskilft className="illustrasjon" />}
    >
        <Innholdstittel>Hva gjør du i en nødsituasjon?</Innholdstittel>
        <Normaltekst>
            Hvis du ikke har mulighet til å skaffe egne midler til det aller
            nødvendigste, kan du{" "}
            <Lenke href="./slik-soker-du">søke om økonomisk sosialhjelp</Lenke>{" "}
            i den kommunen du oppholder deg i. Sjekk om du kan{" "}
            <Lenke href="./slik-soker-du">søke digitalt</Lenke> i din kommune.
        </Normaltekst>
        <br />
        <Normaltekst>
            Du må du være tilgjengelig på telefon etter at du har sendt inn
            søknaden. Ofte vil noen fra NAV-kontoret kontakte deg for å kunne
            vurdere situasjonen din. Hvis du trenger å snakke med noen kan du
            også{" "}
            <Lenke href="https://www.nav.no/no/nav-og-samfunn/kontakt-nav/kontakt-nav-pa-telefon2">
                kontakte oss på telefon
            </Lenke>
            .
        </Normaltekst>
        <br />
        <Normaltekst>
            Hjelp i en nødssituasjon skal dekke helt nødvendige utgifter for en
            kort periode. Eksempler er stønad til mat, hygieneartikler og
            reiseutgifter. Regninger som må betales for å hindre at nødvendige
            tjenester som strøm eller lignende blir stengt, kan også bli dekket
            i en nødssituasjon.
        </Normaltekst>
        <br />
        <Normaltekst>
            Hvorfor du har kommet i denne situasjonen er uten betydning.
        </Normaltekst>
        <br />
        <Normaltekst>
            Du kan også søke om hjelp til å finne et{" "}
            <Lenke href="https://www.nav.no/no/Person/Flere+tema/Sosiale+tjenester/bolig/midlertidig-botilbud">
                midlertidig botilbud
            </Lenke>{" "}
            hvis du helt akutt ikke har et sted å sove og oppholde deg det neste
            døgnet. Du bruker søknadsskjema for{" "}
            <Lenke href="./slik-soker-du">økonomisk sosialhjelp</Lenke>. Sjekk
            om du kan <Lenke href="./slik-soker-du">søke digitalt</Lenke> i din
            kommune. Du kan også{" "}
            <Lenke href="https://www.nav.no/no/nav-og-samfunn/kontakt-nav/kontakt-nav-pa-telefon2">
                kontakte oss på telefon
            </Lenke>
            .
        </Normaltekst>
        <br />
        <Normaltekst>
            Du må bidra til å gi opplysninger om saken din på en best mulig
            måte, slik at NAV-kontoret raskt kan behandle søknaden din.
        </Normaltekst>
    </Artikkel>
);

export default NodsituasjonBokmal;
