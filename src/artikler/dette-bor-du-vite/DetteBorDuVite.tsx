import * as React from "react";
import DetteBorDuViteBokmal from "./DetteBorDuViteBokmal";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import DetteBorDuViteNynorsk from "./DetteBorDuViteNynorsk";
import DetteBorDuViteEnglish from "./DetteBorDuViteEnglish";

export const detteBorDuViteSprak = [Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK];

const DetteBorDuVite: React.FC = () => {
    const valgtSprak: string = detekterSprak();
    switch (valgtSprak) {
        case Sprak.NORSK_BOKMAL:
            return <DetteBorDuViteBokmal />;
        case Sprak.NYNORSK:
            return <DetteBorDuViteNynorsk />;
        case Sprak.ENGELSK:
            return <DetteBorDuViteEnglish />;
        default:
            return <div/>;
    }
};

export default DetteBorDuVite;
