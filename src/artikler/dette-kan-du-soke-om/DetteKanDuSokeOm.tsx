import * as React from "react";
import DetteKanDuSokeOmBokmal from "./DetteKanDuSokeOmBokmal";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import DetteKanDuSokeOmNynorsk from "./DetteKanDuSokeOmNynorsk";
import DetteKanDuSokeOmEnglish from "./DetteKanDuSokeOmEnglish";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";

const DetteKanDuSokeOm: React.FC = () => {
    const valgtSprak: string = detekterSprak();
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {valgtSprak === Sprak.NORSK_BOKMAL && <DetteKanDuSokeOmBokmal />}
            {valgtSprak === Sprak.NYNORSK && <DetteKanDuSokeOmNynorsk />}
            {valgtSprak === Sprak.ENGELSK && <DetteKanDuSokeOmEnglish />}
        </Oversettelser>
    );
};

export default DetteKanDuSokeOm;
