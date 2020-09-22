import * as React from "react";
import {Innholdstittel, Undertittel} from "nav-frontend-typografi";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import {Avsnitt} from "../../komponenter/avsnitt/Avsnitt";

const KravTilDegBokmal: React.FC = () => (
    <Artikkel
        tittel="Krav om aktivitet"
        illustrasjon={<Veiskilft className="illustrasjon" />}
    >
        <Innholdstittel>Krav om aktivitet</Innholdstittel>
        <Avsnitt>
            NAV kan stille vilkår om at du skal redusere utgifter, øke inntekter
            og delta i aktiviteter når du mottar økonomisk sosialhjelp.
        </Avsnitt>

        <Avsnitt>Målet er at du skal kunne forsørge deg selv.</Avsnitt>

        <Avsnitt>NAV kan også stille vilkår om at du</Avsnitt>
        <div className="typo-normal">
            <ul>
                <li>møter til veiledningssamtaler</li>
                <li>søker på relevante jobber</li>
                <li>deltar på arbeidsrettede kurs og tiltak</li>
                <li>
                    deltar i arbeidstrening eller annen arbeidsrettet aktivitet
                </li>
                <li>deltar i utdannings- og opplæringstiltak</li>
            </ul>
        </div>
        <Undertittel>For deg under 30</Undertittel>
        <Avsnitt>
            Hvis du er under 30 år, vil NAV stille krav om at du deltar i
            aktivitet når du mottar økonomisk sosialhjelp. Målet er å hjelpe deg
            til å komme i arbeid eller utdanning slik at du kan forsørge deg
            selv med egen inntekt.
        </Avsnitt>
        <Undertittel>Hvis du ikke oppfyller vilkårene</Undertittel>
        <Avsnitt>
            Hvis du ikke oppfyller vilkårene som du har avtalt med NAV, kan det
            få konsekvenser for stønaden din.
        </Avsnitt>
    </Artikkel>
);

export default KravTilDegBokmal;
