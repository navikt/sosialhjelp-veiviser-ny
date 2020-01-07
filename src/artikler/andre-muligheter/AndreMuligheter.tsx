import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import AndreMuligheterBokmal from "./AndreMuligheterBokmal";
import AndreMuligheterEnglish from "./AndreMuligheterEnglish";
import AndreMuligheterNynorsk from "./AndreMuligheterNynorsk";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import {BrodsmulestiForeldreside} from "../../komponenter/brodsmulesti/Brodsmulesti";

const andreMuligheterUrlPath = "/andre-muligheter";

export const andreMuligheterBrodsmulestiBokmal: BrodsmulestiForeldreside = {
    tittel: "Andre muligheter",
    path: andreMuligheterUrlPath,
};

export const andreMuligheterBrodsmulestiNynorsk: BrodsmulestiForeldreside = {
    tittel: "Andre moglegheiter",
    path: andreMuligheterUrlPath + "?lang=nn",
};

export const andreMuligheterBrodsmulestiEngelsk: BrodsmulestiForeldreside = {
    tittel: "Other possibilities",
    path: andreMuligheterUrlPath + "?lang=en",
};

const AndreMuligheter: React.FC = () => {
    const valgtSprak: string = detekterSprak();
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {valgtSprak === Sprak.NORSK_BOKMAL && <AndreMuligheterBokmal />}
            {valgtSprak === Sprak.NYNORSK && <AndreMuligheterNynorsk />}
            {valgtSprak === Sprak.ENGELSK && <AndreMuligheterEnglish />}
        </Oversettelser>
    );
};

export default AndreMuligheter;
