import * as React from "react";

import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import SanityArtikkel from "../SanityArtikkel";

const Nodsituasjon = () => {
    const valgtSprak = detekterSprak();

    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            <SanityArtikkel slug="nodsituasjon" locale={valgtSprak} />
        </Oversettelser>
    );
};

export default Nodsituasjon;
