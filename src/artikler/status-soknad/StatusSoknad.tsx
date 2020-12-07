import * as React from "react";
import StatusSoknadBokmal from "./StatusSoknadBokmal";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import SprakvelgerContext, {
    Oversettelser,
} from "../../komponenter/oversettelser/Oversettelser";

const StatusSoknad: React.FC = () => {
    const valgtSprak = detekterSprak();
    const sprakContext = React.useContext(SprakvelgerContext);

    return (
        <Oversettelser sprak={[Sprak.NORSK_BOKMAL]}>
            {valgtSprak === Sprak.NORSK_BOKMAL && <StatusSoknadBokmal />}
            {!sprakContext.sprak.includes(valgtSprak) && <StatusSoknadBokmal />}
        </Oversettelser>
    );
};

export default StatusSoknad;
