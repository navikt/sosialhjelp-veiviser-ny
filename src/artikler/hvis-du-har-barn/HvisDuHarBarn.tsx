import * as React from "react";

import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import SanityArtikkel from "../SanityArtikkel";

const HvisDuHarBarn = () => {
    const valgtSprak = detekterSprak();
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            <SanityArtikkel slug="hvis-du-har-barn" locale={valgtSprak} />
        </Oversettelser>
    );
};

export default HvisDuHarBarn;
