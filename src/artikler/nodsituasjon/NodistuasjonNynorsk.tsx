import React from "react";
import {Innholdstittel} from "nav-frontend-typografi";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import Lenke from "nav-frontend-lenker";
import {Avsnitt} from "../../komponenter/avsnitt/Avsnitt";
import {InternLenke} from "../../komponenter/InternLenke";

const NodsituasjonNynorsk = () => (
    <Artikkel
        tittel="Når du er i ein nødssituasjon"
        illustrasjon={<Veiskilft className="illustrasjon" />}
    >
        <Innholdstittel>Når du er i ein nødssituasjon</Innholdstittel>
        <Avsnitt>
            Dersom du ikkje har moglegheit til å skaffe eigne midlar til det
            aller mest nødvendige, kan du{" "}
            <InternLenke href="/slik-soker-du?lang=nn">
                søkje om økonomisk sosialhjelp
            </InternLenke>{" "}
            i kommunen du oppheld deg. Sjekk om du kan{" "}
            <InternLenke href="/slik-soker-du?lang=nn">
                søkje digitalt
            </InternLenke>{" "}
            i din kommune.
        </Avsnitt>
        <Avsnitt>
            Du må vere tilgjengeleg på telefon etter at du har sendt inn
            søknaden. Ofte vil nokon frå NAV-kontoret kontakte deg for å kunne
            vurdere situasjonen din. Dersom du treng å snakke med nokon kan du
            òg{" "}
            <Lenke href="https://www.nav.no/no/nav-og-samfunn/kontakt-nav/kontakt-nav-pa-telefon2">
                kontakte oss på telefon
            </Lenke>
            .
        </Avsnitt>
        <Avsnitt>
            Hjelp i ein nødssituasjon skal dekkje heilt nødvendige utgifter for
            ein kort periode. Døme er stønad til mat, hygieneartiklar og
            reiseutgifter. Rekningar som må bli betalt for å hindre at
            nødvendige tenester som straum eller liknande blir stengt, kan òg
            bli dekt i ein nødssituasjon.
        </Avsnitt>
        <Avsnitt>
            Kvifor du har kome i denne situasjonen er ikkje relevant for
            søknaden.
        </Avsnitt>
        <Avsnitt>
            NAV skal òg hjelpe deg med å finne eit{" "}
            <Lenke href="https://www.nav.no/no/Person/Flere+tema/Sosiale+tjenester/bolig/midlertidig-botilbud">
                midlertidig butilbod
            </Lenke>{" "}
            dersom du heilt akutt ikkje har ein stad å sove og oppheld deg det
            neste døgnet. Du bruker søknadsskjema for{" "}
            <InternLenke href="/slik-soker-du?lang=nn">
                økonomisk sosialhjelp
            </InternLenke>
            . Sjekk om du kan{" "}
            <InternLenke href="/slik-soker-du?lang=nn">
                søkje digitalt
            </InternLenke>{" "}
            i din kommune. Du kan òg{" "}
            <Lenke href="https://www.nav.no/no/nav-og-samfunn/kontakt-nav/kontakt-nav-pa-telefon2">
                kontakte oss på telefon
            </Lenke>
            .
        </Avsnitt>
        <Avsnitt>
            Du må bidra til å gi opplysningar om saka di på ein best mogleg
            måte, slik at NAV-kontoret raskt kan behandle søknaden din.
        </Avsnitt>
    </Artikkel>
);

export default NodsituasjonNynorsk;
