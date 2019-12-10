import * as React from "react";
import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import {andreMuligheterBrodsmulestiBokmal} from "../andre-muligheter/AndreMuligheter";

const HvisDuErGiftBokmal = () => (
    <Artikkel
        tittel="Hvis du er gift"
        illustrasjon={<Veiskilft className="illustrasjon" />}
        foreldreside={andreMuligheterBrodsmulestiBokmal}
    >
        <Innholdstittel>Hvis du er gift</Innholdstittel>
        <Normaltekst>
            Hvis du er gift har du og ektefelle din gjensidig plikt til å
            forsørge hverandre. Det betyr at vi vurderer deres samlede økonomi
            når vi beregner økonomisk sosialhjelp.
        </Normaltekst>
        <br />
        <Normaltekst>
            Hvis du som ektefelle ikke blir forsørget av den du er gift med,
            selv om ektefellen din har inntekter, kan din selvstendige
            økonomiske situasjon bli lagt til grunn for å beregne økonomisk
            sosialhjelp i en periode. Eksempler hvor dette kan være aktuelt er
            hvis
        </Normaltekst>
        <div className="typo-normal">
            <ul>
                <li>du oppholder deg på et krisesenter</li>
                <li>du lever i skjul fra en voldelig ektefelle</li>
                <li>du prøver å komme deg bort fra et tvangsekteskap</li>
                <li>ektefellen din soner i fengsel</li>
            </ul>
        </div>
        <Undertittel>Ektefellebidrag</Undertittel>
        <br />
        <Normaltekst>
            Hvis et ektepar flytter fra hverandre, blir separert eller skilt,
            kan den ene parten i enkelte tilfeller kreve underholdsbidrag fra
            den andre. For eksempel hvis hans/hennes mulighet til å forsørge seg
            selv er svekket som en følge av ekteskapet eller omsorg for barna.
            Les mer om{" "}
            <Lenke href="https://www.nav.no/no/Person/Familie/Barne+og+ektefellebidrag/Relatert+informasjon/ektefellebidrag">
                ektefellebidrag
            </Lenke>
            .
        </Normaltekst>
    </Artikkel>
);

export default HvisDuErGiftBokmal;
