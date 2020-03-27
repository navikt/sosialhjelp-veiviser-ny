import * as React from "react";
import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";
import Artikkel from "../Artikkel";

const KoronaBokmal = () => (
    <Artikkel tittel="Koronavirus - flere kan ha rett til økonomisk sosialhjelp">
        <Innholdstittel>
            Koronavirus - flere kan ha rett til økonomisk sosialhjelp
        </Innholdstittel>
        <Normaltekst>
            Pandemisituasjonen kan medføre at flere personer kan ha rett til
            økonomisk sosialhjelp.
        </Normaltekst>
        <br />
        <Normaltekst>
            Hvis du ikke har andre muligheter til å forsørge deg selv som for
            eksempel gjennom jobb, andre inntekter eller egne midler, kan du ha
            rett til økonomisk sosialhjelp.
        </Normaltekst>
        <br />
        <Normaltekst>
            Alle har rett til å{" "}
            <Lenke href="./slik-soker-du">søke om økonomisk sosialhjelp</Lenke>{" "}
            og få en individuell vurdering av søknaden sin. Stengte barnehager
            og skoler, råd om å holde seg hjemme og begrensinger i bruk av
            kollektivtransport, kan føre til nye behov og økte utgifter for den
            enkelte. Ved søknad om økonomisk sosialhjelp, vil NAV-kontoret
            vurdere om du har ekstrautgifter som vi bør ta hensyn til. Vi legger
            særlig vekt på barn og unges behov.
        </Normaltekst>

        <Undertittel>
            Hva med vilkår om aktivitet?
        </Undertittel>

        <Normaltekst>
            Det skal ikke bli stilt vilkår og krav til deg som du ikke har mulighet til å følge opp på
            grunn av koronaviruset.
        </Normaltekst>
        <br/>
        <Normaltekst>
            Hvis du mottar økonomisk sosialhjelp og det allerede er stilt vilkår om aktivitet, så skal
            ikke manglende gjennomført aktivitet føre til reduksjon av stønad eller andre konsekvenser for deg.
        </Normaltekst>
        <br/>
        



        <Undertittel>
            Selvstendig næringsdrivende, frilanser eller permittert?
        </Undertittel>

        <Normaltekst>
            Hvis du er selvstendig næringsdrivende eller frilanser, kan du finne
            informasjon om dine rettigheter i forbindelse med koronaviruset
            under{" "}
            <Lenke href="https://www.nav.no/no/person/innhold-til-person-forside/nyttig-a-vite/sporsmal-og-svar-i-forbindelse-med-koronaviruset/selvstendig-naeringsdrivende-hva-gjelder-i-min-situasjon">
                Selvstendig næringsdrivende - hva gjelder i min situasjon
            </Lenke>
            .
        </Normaltekst>
        <br />
        <Normaltekst>
            Har du blitt permittert, så kan du lese{" "}
            <Lenke href="https://www.nav.no/arbeid/dagpenger/permittert">
                Er du permittert som følge av koronaviruset?
            </Lenke>
        </Normaltekst>

        <Undertittel>Koronavirus - informasjon fra NAV</Undertittel>

        <Normaltekst>
            Du finner oppdatert informasjon i forbindelse med koronaviruset og
            hvordan du kommer i kontakt med oss nå under{" "}
            <Lenke href="https://www.nav.no/no/person/innhold-til-person-forside/nyttig-a-vite/koronavirus--informasjon-fra-nav">
                Koronaviruset - informasjon fra NAV
            </Lenke>
            .
        </Normaltekst>
    </Artikkel>
);

export default KoronaBokmal;
