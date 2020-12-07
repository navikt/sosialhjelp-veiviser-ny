import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import SprakvelgerContext, {
    Oversettelser,
} from "../../komponenter/oversettelser/Oversettelser";
import SoknadPaPapirBokmal from "./SoknadPaPapirBokmal";
import SoknadPaPapirEngelsk from "./SoknadPaPapirEnglish";

const SoknadPaPapir: React.FC = () => {
    const valgtSprak = detekterSprak();
    const sprakContext = React.useContext(SprakvelgerContext);
    return (
        <Oversettelser sprak={[Sprak.NORSK_BOKMAL, Sprak.ENGELSK]}>
            {valgtSprak === Sprak.NORSK_BOKMAL && <SoknadPaPapirBokmal />}
            {valgtSprak === Sprak.ENGELSK && <SoknadPaPapirEngelsk />}
            {!sprakContext.sprak.includes(valgtSprak) && (
                <SoknadPaPapirBokmal />
            )}
        </Oversettelser>
    );
};

export default SoknadPaPapir;
