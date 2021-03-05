import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import SanityArtikkel from "../SanityArtikkel";

const Ettersende: React.FC = () => {
    const valgtSprak = detekterSprak();
    return (
        <Oversettelser sprak={[Sprak.NORSK_BOKMAL]}>
            <SanityArtikkel slug="ettersende" locale={valgtSprak} />
        </Oversettelser>
    );
};

export default Ettersende;
