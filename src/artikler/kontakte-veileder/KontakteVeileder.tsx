import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import SanityArtikkel from "../SanityArtikkel";

const KontaktVeileder: React.FC = () => {
    const valgtSprak = detekterSprak();
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            <SanityArtikkel slug="kontakte-veileder" locale={valgtSprak} />
        </Oversettelser>
    );
};

export default KontaktVeileder;
