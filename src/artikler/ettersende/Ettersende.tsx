import * as React from "react";
import EttersendeBokmal from "./EttersendeBokmal";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";

import SprakvelgerContext, {
    Oversettelser,
} from "../../komponenter/oversettelser/Oversettelser";

const Ettersende: React.FC = () => {
    const valgtSprak = detekterSprak();
    const sprakContext = React.useContext(SprakvelgerContext);
    return (
        <Oversettelser sprak={[Sprak.NORSK_BOKMAL]}>
            {valgtSprak === Sprak.NORSK_BOKMAL && <EttersendeBokmal />}
            {!sprakContext.sprak.includes(valgtSprak) && <EttersendeBokmal />}
        </Oversettelser>
    );
};

export default Ettersende;
