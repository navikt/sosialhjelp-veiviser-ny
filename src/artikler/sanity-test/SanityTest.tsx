import * as React from "react";
import SanityTestBokmal from "./SanityTestBokmal";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import SprakvelgerContext, {
    Oversettelser,
} from "../../komponenter/oversettelser/Oversettelser";

const SanityTest: React.FC = () => {
    const valgtSprak = detekterSprak();
    const sprakContext = React.useContext(SprakvelgerContext);
    return (
        <Oversettelser sprak={[Sprak.NORSK_BOKMAL]}>
            {valgtSprak === Sprak.NORSK_BOKMAL && <SanityTestBokmal />}
        </Oversettelser>
    );
};

export default SanityTest;
