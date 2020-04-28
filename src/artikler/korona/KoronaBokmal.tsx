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
            Pandemisituasjonen kan føre til at flere personer kan ha rett til
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

        <Undertittel>Har du økonomiske bekymringer?</Undertittel>
        <Normaltekst>
            I denne korte filmen får du som har økonomiske bekymringer og{" "}
            midlertidige betalingsproblemer nyttige råd og tips.
        </Normaltekst>

        <br />
        <div style={{padding: "56.25% 0 0 0", position: "relative"}}>
            <iframe
                title={"Økonomiske bekymringer"}
                src="https://player.vimeo.com/video/400233584"
                style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    border: "0",
                }}
                allow="autoplay; fullscreen"
                allowFullScreen
            />
        </div>

        <Undertittel>Hva med vilkår om aktivitet?</Undertittel>

        <Normaltekst>
            Det skal ikke bli stilt vilkår og krav til deg som du ikke har
            mulighet til å følge opp på grunn av koronaviruset og hensynet til
            smittevern.
        </Normaltekst>
        <br />
        <Normaltekst>
            Hvis du mottar økonomisk sosialhjelp og det allerede er stilt vilkår
            om aktivitet, så skal ikke manglende gjennomført aktivitet føre til
            reduksjon av stønad eller andre konsekvenser for deg.
        </Normaltekst>
        <br />
        <Normaltekst>
            Selv om det ikke stilles vilkår om aktivitet, så skal NAV-kontoret
            likevel gi deg råd og veiledning. Oppfølgingen kan skje digitalt
            eller over telefon.
        </Normaltekst>

        <Undertittel>Selvstendig næringsdrivende eller permittert?</Undertittel>

        <Normaltekst>
            Myndighetene har vedtatt nye ordninger for inntektssikring. Hvis
            du har mistet inntekt som følge av koronapandemien bør du sjekke
            hvilke rettigheter du har. For deg som søker om dagpenger, så er
            det også mulig å søke om forskudd på dagpengene. Les om
            {" "}
            <Lenke href="https://www.nav.no/person/koronaveiviser/">
                Koronaviruset - hva gjelder i min situasjon?
            </Lenke>
            {" "}
        </Normaltekst>
        <br />
        <Normaltekst>
            Hvis du ikke har andre muligheter til å forsørge deg selv, kan du ha
            rett til økonomisk sosialhjelp.
        </Normaltekst>

        <Undertittel>Koronaviruset- hva gjelder i din situasjon?</Undertittel>

        <Normaltekst>
            Du finner oppdatert informasjon i forbindelse med koronaviruset og
            hvordan du kommer i kontakt med oss nå under{" "}
            <Lenke href="https://www.nav.no/person/koronaveiviser/">
                Koronaviruset - hva gjelder i min situasjon?
            </Lenke>
        </Normaltekst>
    </Artikkel>
);

export default KoronaBokmal;
