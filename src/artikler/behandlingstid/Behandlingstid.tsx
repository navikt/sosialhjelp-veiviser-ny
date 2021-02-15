import * as React from "react";
import BehandlingstidBokmal from "./BehandlingstidBokmal";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import SprakvelgerContext, {
    Oversettelser,
} from "../../komponenter/oversettelser/Oversettelser";

const Behandlingstid: React.FC = () => {
    const valgtSprak = detekterSprak();
    const sprakContext = React.useContext(SprakvelgerContext);
    return (
        <Oversettelser sprak={[Sprak.NORSK_BOKMAL]}>
            {valgtSprak === Sprak.NORSK_BOKMAL && <BehandlingstidBokmal />}
            {!sprakContext.sprak.includes(valgtSprak) && (
                <BehandlingstidBokmal />
            )}
        </Oversettelser>
    );
};

export default Behandlingstid;
