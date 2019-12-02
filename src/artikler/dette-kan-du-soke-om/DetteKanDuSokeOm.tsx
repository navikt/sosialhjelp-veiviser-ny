import * as React from "react";
import DetteKanDuSokeOmBokmal from "./DetteKanDuSokeOmBokmal";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import DetteKanDuSokeOmNynorsk from "./DetteKanDuSokeOmNynorsk";
import DetteKanDuSokeOmEnglish from "./DetteKanDuSokeOmEnglish";

export const detteKanDuSokeOmSprak = [Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK];

const DetteKanDuSokeOm: React.FC = () => {
    const valgtSprak: string = detekterSprak();
    switch (valgtSprak) {
        case Sprak.NORSK_BOKMAL:
            return <DetteKanDuSokeOmBokmal />;
        case Sprak.NYNORSK:
            return <DetteKanDuSokeOmNynorsk/>;
        case Sprak.ENGELSK:
            return <DetteKanDuSokeOmEnglish />;
        default:
            return <div/>;
    }
};

export default DetteKanDuSokeOm;
