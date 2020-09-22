import * as React from "react";
import {Innholdstittel} from "nav-frontend-typografi";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import {andreMuligheterBrodsmulestiNynorsk} from "../andre-muligheter/AndreMuligheter";
import {Avsnitt} from "../../komponenter/avsnitt/Avsnitt";

const HvisDuHarSamboerNynorsk = () => (
    <Artikkel
        tittel="Dersom du er sambuar"
        illustrasjon={<Veiskilft className="illustrasjon" />}
        foreldreside={andreMuligheterBrodsmulestiNynorsk}
    >
        <Innholdstittel>Dersom du er sambuar</Innholdstittel>
        <Avsnitt>
            Sambuarar har ikkje gjensidig plikt til å forsørgje kvarandre. Med
            mindre dei har barn betyr det at økonomien i utgangspunktet ikkje
            blir vurdert samla når vi utreknar økonomisk sosialhjelp.
        </Avsnitt>

        <Avsnitt>
            Foreldre i eit sambuarforhold med felles barn har plikt til å
            forsørgje barna etter økonomisk evne. Dette betyr at ein normalt
            ikkje kan søkje om økonomisk sosialhjelp til å forsørgje felles
            barn, dersom ein av dykk har tilstrekkelege inntekter til å
            forsørgje barna aleine. I familiar med særkullsbarn kan situasjonen
            vere slik at deler av familien blir vurdert for seg.
        </Avsnitt>

        <Avsnitt>
            Dersom du ikkje bur saman med eigne barn, skal utgifter til samvær
            inngå i livsoppholdet. Stønad til samvær blir vurdert ut frå
            omfanget på samværet.
        </Avsnitt>
    </Artikkel>
);

export default HvisDuHarSamboerNynorsk;
