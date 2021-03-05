import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import "./sokSosialhjelp.less";
import SanityArtikkel from "../SanityArtikkel";

export const ANTALL_KOMMUNER = 356;

const SokSosialhjelp: React.FC = () => {
    const valgtSprak = detekterSprak();

    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            <SanityArtikkel slug="slik-soker-du" locale={valgtSprak} />
        </Oversettelser>
    );
};

export default SokSosialhjelp;
