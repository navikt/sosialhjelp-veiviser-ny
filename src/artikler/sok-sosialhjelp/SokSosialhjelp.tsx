import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import SokSosialhjelpNynorsk from "./SokSosialhjelpNynorsk";
import SokSosialhjelpBokmal from "./SokSosialhjelpBokmal";
import SokSosialhjelpEngelsk from "./SokSosialhjelpEngelsk";
import "./sokSosialhjelp.less";

export const ANTALL_KOMMUNER = 356;

const SokSosialhjelp: React.FC = () => {
    const valgtSprak: string = detekterSprak();

    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {valgtSprak === Sprak.NORSK_BOKMAL && <SokSosialhjelpBokmal />}
            {valgtSprak === Sprak.NYNORSK && <SokSosialhjelpNynorsk />}
            {valgtSprak === Sprak.ENGELSK && <SokSosialhjelpEngelsk />}
        </Oversettelser>
    );
};

export default SokSosialhjelp;
