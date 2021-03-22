import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import AndreMuligheterSanity from "./AndreMuligheterSanity";
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
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            <AndreMuligheterSanity />
        </Oversettelser>
    );
};

export default AndreMuligheter;
