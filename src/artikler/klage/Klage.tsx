import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";

import KlageBokmal from "./KlageBokmal";
import KlageNynorsk from "./KlageNynorsk";
import KlageEnglish from "./KlageEnglish";

const Klage: React.FC = () => {
    const valgtSprak: string = detekterSprak();
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {valgtSprak === Sprak.NORSK_BOKMAL && <KlageBokmal />}
            {valgtSprak === Sprak.NYNORSK && <KlageNynorsk />}
            {valgtSprak === Sprak.ENGELSK && <KlageEnglish />}
        </Oversettelser>
    );
};

export default Klage;
