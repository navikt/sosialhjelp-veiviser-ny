import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";

import KoronaBokmal from "./KoronaBokmal";

const Korona = () => {
    const valgtSprak: string = detekterSprak();
    return (
        <Oversettelser sprak={[Sprak.NORSK_BOKMAL]}>
            {valgtSprak === Sprak.NORSK_BOKMAL && <KoronaBokmal />}
        </Oversettelser>
    );
};

export default Korona;
