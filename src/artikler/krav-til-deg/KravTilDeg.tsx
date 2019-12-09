import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";

import KravTilDegBokmal from "./KravTilDegBokmal";
import KravTilDegNynorsk from "./KravTilDegNynorsk";
import KravTilDegEnglish from "./KravTilDegEnglish";

const Klage: React.FC = () => {
    const valgtSprak: string = detekterSprak();
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {valgtSprak === Sprak.NORSK_BOKMAL && <KravTilDegBokmal />}
            {valgtSprak === Sprak.NYNORSK && <KravTilDegNynorsk />}
            {valgtSprak === Sprak.ENGELSK && <KravTilDegEnglish />}
        </Oversettelser>
    );
};

export default Klage;
