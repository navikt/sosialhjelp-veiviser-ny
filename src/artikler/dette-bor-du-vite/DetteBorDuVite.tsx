import * as React from "react";
import DetteBorDuViteBokmal from "./DetteBorDuViteBokmal";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import DetteBorDuViteNynorsk from "./DetteBorDuViteNynorsk";
import DetteBorDuViteEnglish from "./DetteBorDuViteEnglish";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";

const DetteBorDuVite: React.FC = () => {
    const valgtSprak: string = detekterSprak();
    return (
        <Oversettelser sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}>
            {valgtSprak === Sprak.NORSK_BOKMAL && <DetteBorDuViteBokmal/>}
            {valgtSprak === Sprak.NYNORSK && <DetteBorDuViteNynorsk/>}
            {valgtSprak === Sprak.ENGELSK && <DetteBorDuViteEnglish/>}
        </Oversettelser>
    );
};

export default DetteBorDuVite;
