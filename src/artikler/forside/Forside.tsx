import * as React from "react";

import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import {ForsideBokmal} from "./ForsideBokmal";
//import {ForsideNynorsk} from "./ForsideNynorsk";
//import {ForsideEnglish} from "./ForsideEnglish";

const Forside = () => {
    const valgtSprak: string = detekterSprak();
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {valgtSprak === Sprak.NORSK_BOKMAL && <ForsideBokmal />}
            {valgtSprak === Sprak.NYNORSK && <ForsideBokmal />}
            {valgtSprak === Sprak.ENGELSK && <ForsideBokmal />}
        </Oversettelser>
    );
};

export default Forside;
