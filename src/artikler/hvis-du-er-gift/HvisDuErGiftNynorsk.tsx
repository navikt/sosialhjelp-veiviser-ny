import * as React from "react";
import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import {andreMuligheterBrodsmulestiNynorsk} from "../andre-muligheter/AndreMuligheter";

const HvisDuErGiftNynorsk = () => (
    <Artikkel
        tittel="Dersom du er gift"
        illustrasjon={<Veiskilft className="illustrasjon" />}
        foreldreside={andreMuligheterBrodsmulestiNynorsk}
    >
        <Innholdstittel>Dersom du er gift</Innholdstittel>
        <Normaltekst>
            Dersom du er gift har du og ektefellen din gjensidig plikt til å
            forsørgje kvarandre. Det betyr at vi vurderer dykkar samla økonomi
            når vi utreknar økonomisk sosialhjelp.
        </Normaltekst>
        <br />
        <Normaltekst>
            Dersom du som ektefelle ikkje blir forsørgja av den du er gift med,
            sjølv om ektefellen din har inntekter, kan din sjølvstendige
            økonomiske situasjon bli lagt til grunn for å utrekne økonomisk
            sosialhjelp i ein periode. Døme kor dette kan vere aktuelt er dersom
        </Normaltekst>
        <div className="typo-normal">
            <ul>
                <li>du oppheld deg på eit krisesenter</li>
                <li>du lev i skjul frå ein voldeleg ektefelle</li>
                <li>du prøver å komme deg bort frå eit tvangsekteskap</li>
                <li>ektefellen din sonar i fengsel</li>
            </ul>
        </div>
        <Undertittel>Ektefellebidrag</Undertittel>
        <br />
        <Normaltekst>
            Om eit ektepar flyttar frå kvarandre, blir separert eller skild, kan
            den eine parten i enkelte tilfellet krevje underhaldsbidrag frå den
            andre. Til dømes dersom hans/hennes moglegheit til å forsørgje seg
            sjølv er svekka som følgje av ekteskapet eller omsorg for barna. Les
            meir om{" "}
            <Lenke href="https://www.nav.no/no/Person/Familie/Barne+og+ektefellebidrag/Relatert+informasjon/ektefellebidrag">
                ektefellebidrag
            </Lenke>
            .
        </Normaltekst>
    </Artikkel>
);

export default HvisDuErGiftNynorsk;
