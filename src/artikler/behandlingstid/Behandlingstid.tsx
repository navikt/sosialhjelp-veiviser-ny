import * as React from "react";
import BehandlingstidBokmal from "./BehandlingstidBokmal";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import BehandlingstidNynorsk from "./BehandlingstidBokmal";
import BehandlingstidEnglish from "./BehandlingstidBokmal";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";

const Behandlingstid: React.FC = () => {
    const valgtSprak: string = detekterSprak();
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {valgtSprak === Sprak.NORSK_BOKMAL && <BehandlingstidBokmal />}
            {valgtSprak === Sprak.NYNORSK && <BehandlingstidNynorsk />}
            {valgtSprak === Sprak.ENGELSK && <BehandlingstidEnglish />}
        </Oversettelser>
    );
};

export default Behandlingstid;
