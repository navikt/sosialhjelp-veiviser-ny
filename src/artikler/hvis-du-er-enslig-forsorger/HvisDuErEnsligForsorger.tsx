import * as React from "react";

import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import HvisDuErEnsligForsorgerBokmal from "./HvisDuErEnsligForsorgerBokmal";
import HvisDuErEnsligForsorgerNynorsk from "./HvisDuErEnsligForsorgerNynorsk";
import HvisDuErEnsligForsorgerEnglish from "./HvisDuErEnsligForsorgerEnglish";

const HvisDuErEnsligForsorger = () => {
    const valgtSprak: string = detekterSprak();
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {valgtSprak === Sprak.NORSK_BOKMAL && (
                <HvisDuErEnsligForsorgerBokmal />
            )}
            {valgtSprak === Sprak.NYNORSK && <HvisDuErEnsligForsorgerNynorsk />}
            {valgtSprak === Sprak.ENGELSK && <HvisDuErEnsligForsorgerEnglish />}
        </Oversettelser>
    );
};

export default HvisDuErEnsligForsorger;
