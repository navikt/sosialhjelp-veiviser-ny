import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";

import SanityArtikkel from "../SanityArtikkel";

const SoknadPaPapir: React.FC = () => {
    const valgtSprak = detekterSprak();
    return (
        <Oversettelser sprak={[Sprak.NORSK_BOKMAL, Sprak.ENGELSK]}>
            <SanityArtikkel slug="soknad-pa-papir" locale={valgtSprak} />
        </Oversettelser>
    );
};

export default SoknadPaPapir;
