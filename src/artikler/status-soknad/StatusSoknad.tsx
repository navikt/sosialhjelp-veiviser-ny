import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import SanityArtikkel from "../SanityArtikkel";

const StatusSoknad: React.FC = () => {
    const valgtSprak = detekterSprak();

    return (
        <Oversettelser sprak={[Sprak.NORSK_BOKMAL]}>
            <SanityArtikkel slug="status-soknad" locale={valgtSprak} />
        </Oversettelser>
    );
};

export default StatusSoknad;
