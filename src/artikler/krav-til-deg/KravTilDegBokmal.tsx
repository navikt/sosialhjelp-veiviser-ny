import * as React from "react";
import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";

const KravTilDegBokmal: React.FC = () => (
    <Artikkel
        tittel="Krav om aktivitet"
        illustrasjon={<Veiskilft className="illustrasjon" />}
    >
        <Innholdstittel>Krav om aktivitet</Innholdstittel>
        <Normaltekst>
            NAV kan stille vilkår om at du skal redusere utgifter, øke inntekter
            og delta i aktiviteter når du mottar økonomisk sosialhjelp.
        </Normaltekst>
        <br />
        <Normaltekst>Målet er at du skal kunne forsørge deg selv.</Normaltekst>
        <br />
        <Normaltekst>NAV kan også stille vilkår om at du</Normaltekst>
        <Normaltekst>
            <ul>
                <li>møter til veiledningssamtaler</li>
                <li>søker på relevante jobber</li>
                <li>deltar på arbeidsrettede kurs og tiltak</li>
                <li>
                    deltar i arbeidstrening eller annen arbeidsrettet aktivitet
                </li>
                <li>deltar i utdannings- og opplæringstiltak</li>
            </ul>
        </Normaltekst>
        <Undertittel>For deg under 30</Undertittel>
        <Normaltekst>
            Hvis du er under 30 år, vil NAV stille krav om at du deltar i
            aktivitet når du mottar økonomisk sosialhjelp. Målet er å hjelpe deg
            til å komme i arbeid eller utdanning slik at du kan forsørge deg
            selv med egen inntekt.
        </Normaltekst>
        <Undertittel>Hvis du ikke oppfyller vilkårene</Undertittel>
        <Normaltekst>
            Hvis du ikke oppfyller vilkårene som du har avtalt med NAV, kan det
            få konsekvenser for stønaden din.
        </Normaltekst>
    </Artikkel>
);

export default KravTilDegBokmal;
