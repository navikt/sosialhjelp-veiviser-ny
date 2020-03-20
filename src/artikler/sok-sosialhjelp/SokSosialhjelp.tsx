import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import SokSosialhjelpNynorsk from "./SokSosialhjelpNynorsk";
import SokSosialhjelpBokmalKrise from "./SokSosialhjelpBokmalKrise";
import SokSosialhjelpEngelskKrise from "./SokSosialhjelpEngelskKrise";
import "./sokSosialhjelp.less";

const SokSosialhjelp: React.FC = () => {
    const valgtSprak: string = detekterSprak();
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {valgtSprak === Sprak.NORSK_BOKMAL && <SokSosialhjelpBokmalKrise />}
            {valgtSprak === Sprak.NYNORSK && <SokSosialhjelpNynorsk />}
            {valgtSprak === Sprak.ENGELSK && <SokSosialhjelpEngelskKrise />}
        </Oversettelser>
    );
};

export default SokSosialhjelp;
