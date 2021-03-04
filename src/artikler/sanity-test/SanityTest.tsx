import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import SanityArtikkel from "../SanityArtikkel";

const SanityTest: React.FC = () => {
    const valgtSprak = detekterSprak();
    return (
        <Oversettelser sprak={[Sprak.NORSK_BOKMAL, Sprak.ENGELSK]}>
            <SanityArtikkel slug="dette-bor-du-vite" locale={valgtSprak} />
        </Oversettelser>
    );
};

export default SanityTest;
