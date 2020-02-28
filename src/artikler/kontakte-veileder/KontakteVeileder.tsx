import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import KontakteVeilederBokmal from "./KontakteVeilederBokmal";
import KontakteVeilederNynorsk from "./KontakteVeilederBokmal";
import KontakteVeilederEngelsk from "./KontakteVeilederBokmal";

const KontaktVeileder: React.FC = () => {
    const valgtSprak: string = detekterSprak();
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {valgtSprak === Sprak.NORSK_BOKMAL && <KontakteVeilederBokmal />}
            {valgtSprak === Sprak.NYNORSK && <KontakteVeilederNynorsk />}
            {valgtSprak === Sprak.ENGELSK && <KontakteVeilederEngelsk />}
        </Oversettelser>
    );
};

export default KontaktVeileder;
