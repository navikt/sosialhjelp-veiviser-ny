import * as React from "react";

import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import HvisDuHarSamboerBokmal from "./HvisDuHarSamboerBokmal";
import HvisDuHarSamboerNynorsk from "./HvisDuHarSamboerNynorsk";
import HvisDuHarSamboerEnglish from "./HvisDuHarSamboerEnglish";

const HvisDuHarSamboer = () => {
    const valgtSprak: string = detekterSprak();
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {valgtSprak === Sprak.NORSK_BOKMAL && <HvisDuHarSamboerBokmal />}
            {valgtSprak === Sprak.NYNORSK && <HvisDuHarSamboerNynorsk />}
            {valgtSprak === Sprak.ENGELSK && <HvisDuHarSamboerEnglish />}
        </Oversettelser>
    );
};

export default HvisDuHarSamboer;
