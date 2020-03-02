import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import SoknadPaPapirBokmal from "./SoknadPaPapirBokmal";
import SoknadPaPapirNynorsk from "./SoknadPaPapirBokmal";
import SoknadPaPapirEngelsk from "./SoknadPaPapirEnglish";

const SoknadPaPapir: React.FC = () => {
    const valgtSprak: string = detekterSprak();
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {valgtSprak === Sprak.NORSK_BOKMAL && <SoknadPaPapirBokmal />}
            {valgtSprak === Sprak.NYNORSK && <SoknadPaPapirNynorsk />}
            {valgtSprak === Sprak.ENGELSK && <SoknadPaPapirEngelsk />}
        </Oversettelser>
    );
};

export default SoknadPaPapir;
