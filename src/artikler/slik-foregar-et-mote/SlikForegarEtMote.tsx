import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import SlikForegatEtMoteBokmal from "./SlikForegatEtMoteBokmal";
import SlikForegatEtMoteNynorsk from "./SlikForegatEtMoteNynorsk";
import SlikForegatEtMoteEngelsk from "./SlikForegatEtMoteEngelsk";

const SlikForegatEtMote: React.FC = () => {
    const valgtSprak: string = detekterSprak();
    return (
        <Oversettelser sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}>
            {valgtSprak === Sprak.NORSK_BOKMAL && <SlikForegatEtMoteBokmal/>}
            {valgtSprak === Sprak.NYNORSK && <SlikForegatEtMoteNynorsk/>}
            {valgtSprak === Sprak.ENGELSK && <SlikForegatEtMoteEngelsk/>}
        </Oversettelser>
    )
};

export default SlikForegatEtMote;
