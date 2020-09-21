import * as React from "react";
import {Innholdstittel, Undertittel} from "nav-frontend-typografi";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import {Avsnitt} from "../../komponenter/avsnitt/Avsnitt";

const KravTilDegNynorsk: React.FC = () => (
    <Artikkel
        tittel="Meld fra om endringer"
        illustrasjon={<Veiskilft className="illustrasjon" />}
    >
        <Innholdstittel>Krav om aktivitet</Innholdstittel>
        <Avsnitt>
            NAV kan stille vilkår om at du skal redusere utgifter, auke
            inntekter og delta i aktivitetar når du får økonomisk sosialhjelp.
        </Avsnitt>

        <Avsnitt>Målet er at du skal kunne forsørgje deg sjølv.</Avsnitt>

        <Avsnitt>NAV kan òg stille vilkår om at du</Avsnitt>
        <div className="typo-normal">
            <ul>
                <li>møter til rettleiingssamtalar</li>
                <li>søkjer på relevante jobbar</li>
                <li>deltek på arbeidsretta kurs og tiltak</li>
                <li>
                    deltek i arbeidstrening eller annan arbeidsretta aktivitet
                </li>
                <li>deltek i utdannings- og opplæringstiltak</li>
            </ul>
        </div>
        <Undertittel>For deg under 30</Undertittel>
        <Avsnitt>
            Dersom du er under 30 år, vil NAV stille krav om at du deltek i
            aktivitet når du får økonomisk sosialhjelp. Målet er å hjelpe deg
            til å komme i arbeid eller utdanning slik at du kan forsørgje deg
            sjølv med eigen inntekt.
        </Avsnitt>
        <Undertittel>Der du ikkje oppfyller vilkåra</Undertittel>
        <Avsnitt>
            Dersom du ikkje oppfyller vilkåra som du har avtalt med NAV, kan det
            få konsekvensar for stønaden din.
        </Avsnitt>
    </Artikkel>
);

export default KravTilDegNynorsk;
