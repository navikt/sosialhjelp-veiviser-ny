import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import AndreMuligheterBokmal from "./AndreMuligheterBokmal";
import AndreMuligheterEnglish from "./AndreMuligheterEnglish";
import AndreMuligheterNynorsk from "./AndreMuligheterNynorsk";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";

const andreMuligheterUrlPath = `/andre-muligheter`;

export const andreMuligheterBrodsmulestiBokmal = {
    title: "Andre muligheter",
    slug: andreMuligheterUrlPath,
};

export const andreMuligheterBrodsmulestiNynorsk = {
    title: "Andre moglegheiter",
    slug: andreMuligheterUrlPath,
};

export const andreMuligheterBrodsmulestiEngelsk = {
    title: "Other possibilities",
    slug: andreMuligheterUrlPath,
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
