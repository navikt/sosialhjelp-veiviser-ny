import React from "react";
import {Innholdstittel, Normaltekst} from "nav-frontend-typografi";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import Lenke from "nav-frontend-lenker";

const NodsituasjonNynorsk = () => (
    <Artikkel
        tittel="Når du er i ein nødssituasjon"
        illustrasjon={<Veiskilft className="illustrasjon" />}
    >
        <Innholdstittel>Når du er i ein nødssituasjon</Innholdstittel>
        <Normaltekst>
            Dersom du ikkje har moglegheit til å skaffe eigne midlar til det
            aller mest nødvendige, kan du ta kontakt med{" "}
            <Lenke href="https://www.nav.no/person/personopplysninger/#ditt-nav-kontor">
                NAV-kontoret
            </Lenke>{" "}
            i kommunen du oppheld deg.
        </Normaltekst>
        <br />
        <Normaltekst>
            Hjelp i ein nødssituasjon skal dekkje heilt nødvendige utgifter for
            ein kort periode. Døme er stønad til mat, hygieneartiklar og
            reiseutgifter. Rekningar som må bli betalt for å hindre at
            nødvendige tenester som straum eller liknande blir stengt, kan òg
            bli dekt i ein nødssituasjon.
        </Normaltekst>
        <br />
        <Normaltekst>
            Kvifor du har kome i denne situasjonen er ikkje relevant for
            søknaden.
        </Normaltekst>
        <br />
        <Normaltekst>
            NAV skal òg hjelpe deg med å finne eit{" "}
            <Lenke href="https://www.nav.no/no/Person/Flere+tema/Sosiale+tjenester/bolig/midlertidig-botilbud">
                midlertidig butilbod
            </Lenke>{" "}
            dersom du heilt akutt ikkje har ein stad å sove og oppheld deg det
            neste døgnet.
        </Normaltekst>
        <br />
        <Normaltekst>
            Du må bidra til å gi opplysningar om saka di på ein best mogleg
            måte, slik at NAV-kontoret raskt kan behandle søknaden din.
        </Normaltekst>
    </Artikkel>
);

export default NodsituasjonNynorsk;
