import * as React from "react";
import BehandlingstidBokmal from "./BehandlingstidBokmal";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import BehandlingstidNynrsk from "./BehandlingstidBokmal";
import BehandlingstidEnglish from "./BehandlingstidBokmal";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";

const Ettersende: React.FC = () => {
    const valgtSprak: string = detekterSprak();
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {valgtSprak === Sprak.NORSK_BOKMAL && <BehandlingstidBokmal />}
            {valgtSprak === Sprak.NYNORSK && <BehandlingstidNynrsk />}
            {valgtSprak === Sprak.ENGELSK && <BehandlingstidEnglish />}
        </Oversettelser>
    );
};

export default Ettersende;
