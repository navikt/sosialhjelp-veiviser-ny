import * as React from "react";

import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import SanityArtikkel from "../SanityArtikkel";

const HvisDuErGift = () => {
    const valgtSprak = detekterSprak();
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            <SanityArtikkel slug="hvis-du-er-gift" locale={valgtSprak} />
        </Oversettelser>
    );
};

export default HvisDuErGift;
