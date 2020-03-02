import * as React from "react";
import StatusSoknadBokmal from "./StatusSoknadBokmal";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import StatusSoknadNynorsk from "./StatusSoknadBokmal";
import StatusSoknadEnglish from "./StatusSoknadBokmal";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";

const StatusSoknad: React.FC = () => {
    const valgtSprak: string = detekterSprak();
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {valgtSprak === Sprak.NORSK_BOKMAL && <StatusSoknadBokmal />}
            {valgtSprak === Sprak.NYNORSK && <StatusSoknadNynorsk />}
            {valgtSprak === Sprak.ENGELSK && <StatusSoknadEnglish />}
        </Oversettelser>
    );
};

export default StatusSoknad;
