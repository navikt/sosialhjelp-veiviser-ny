import * as React from "react";
import {Innholdstittel, Normaltekst} from "nav-frontend-typografi";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import {andreMuligheterBrodsmulestiNynorsk} from "../andre-muligheter/AndreMuligheter";

const HvisDuHarSamboerNynorsk = () => (
    <Artikkel
        tittel="Dersom du er sambuar"
        illustrasjon={<Veiskilft className="illustrasjon" />}
        foreldreside={andreMuligheterBrodsmulestiNynorsk}
    >
        <Innholdstittel>Dersom du er sambuar</Innholdstittel>
        <Normaltekst>
            Sambuarar har ikkje gjensidig plikt til å forsørgje kvarandre. Med
            mindre dei har barn betyr det at økonomien i utgangspunktet ikkje
            blir vurdert samla når vi utreknar økonomisk sosialhjelp.
        </Normaltekst>
        <br />
        <Normaltekst>
            Foreldre i eit sambuarforhold med felles barn har plikt til å
            forsørgje barna etter økonomisk evne. Dette betyr at ein normalt
            ikkje kan søkje om økonomisk sosialhjelp til å forsørgje felles
            barn, dersom ein av dykk har tilstrekkelege inntekter til å
            forsørgje barna aleine. I familiar med særkullsbarn kan situasjonen
            vere slik at deler av familien blir vurdert for seg.
        </Normaltekst>
        <br />
        <Normaltekst>
            Dersom du ikkje bur saman med eigne barn, skal utgifter til samvær
            inngå i livsoppholdet. Stønad til samvær blir vurdert ut frå
            omfanget på samværet.
        </Normaltekst>
    </Artikkel>
);

export default HvisDuHarSamboerNynorsk;
