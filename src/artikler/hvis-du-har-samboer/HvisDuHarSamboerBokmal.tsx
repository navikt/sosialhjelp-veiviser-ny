import * as React from "react";
import {Innholdstittel, Normaltekst} from "nav-frontend-typografi";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import {andreMuligheterBrodsmulestiBokmal} from "../andre-muligheter/AndreMuligheter";

const HvisDuHarSamboerBokmal = () => (
    <Artikkel
        tittel="Hvis du er samboer"
        illustrasjon={<Veiskilft className="illustrasjon" />}
        foreldreside={andreMuligheterBrodsmulestiBokmal}
    >
        <Innholdstittel>Hvis du er samboer</Innholdstittel>
        <Normaltekst>
            Samboere har ikke gjensidig plikt til å forsørge hverandre. Med
            mindre dere har barn betyr det at økonomien i utgangspunktet ikke
            blir vurdert samlet når vi beregner økonomisk sosialhjelp.
        </Normaltekst>
        <br />
        <Normaltekst>
            Foreldre i et samboerforhold med felles barn har plikt til å
            forsørge barna etter økonomisk evne. Dette betyr at dere normalt
            ikke kan søke om økonomisk sosialhjelp til å forsørge felles barn
            hvis en av dere har tilstrekkelige inntekter til å forsørge barna
            alene. I familier med særkullsbarn kan situasjonen være slik at
            deler av familien blir vurdert for seg.
        </Normaltekst>
        <br />
        <Normaltekst>
            Hvis du ikke bor sammen med egne barn, skal utgifter til samvær
            inngå i livsoppholdet. Stønad til samvær blir vurdert ut fra
            samværets omfang.
        </Normaltekst>
    </Artikkel>
);

export default HvisDuHarSamboerBokmal;
