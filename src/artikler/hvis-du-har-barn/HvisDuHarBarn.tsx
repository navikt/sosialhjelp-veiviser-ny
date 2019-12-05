import * as React from "react";

import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import HvisDuHarBarnBokmal from "./HvisDuHarBarnBokmal";
import HvisDuHarBarnNynorsk from "./HvisDuHarBarnNynorsk";
import HvisDuHarBarnEnglish from "./HvisDuHarBarnEnglish";

const HvisDuHarBarn = () => {
    const valgtSprak: string = detekterSprak();
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {valgtSprak === Sprak.NORSK_BOKMAL && <HvisDuHarBarnBokmal />}
            {valgtSprak === Sprak.NYNORSK && <HvisDuHarBarnNynorsk />}
            {valgtSprak === Sprak.ENGELSK && <HvisDuHarBarnEnglish />}
        </Oversettelser>
    );
};

export default HvisDuHarBarn;
