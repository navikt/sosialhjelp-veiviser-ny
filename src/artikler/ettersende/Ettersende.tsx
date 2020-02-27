import * as React from "react";
import EttersendeBokmal from "./EttersendeBokmal";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import EttersendeNynorsk from "./EttersendeBokmal";
import EttersendeEnglish from "./EttersendeBokmal";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";

const Ettersende: React.FC = () => {
    const valgtSprak: string = detekterSprak();
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {valgtSprak === Sprak.NORSK_BOKMAL && <EttersendeBokmal />}
            {valgtSprak === Sprak.NYNORSK && <EttersendeNynorsk />}
            {valgtSprak === Sprak.ENGELSK && <EttersendeEnglish />}
        </Oversettelser>
    );
};

export default Ettersende;
