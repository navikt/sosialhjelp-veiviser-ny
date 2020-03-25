import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import SokSosialhjelpBokmalKrise from "./SokSosialhjelpBokmalKrise";
import SokSosialhjelpEngelskKrise from "./SokSosialhjelpEngelskKrise";
import SokSosialhjelpNynorskKrise from "./SokSosialhjelpNynorskKrise";
import SokSosialhjelpNynorsk from "./SokSosialhjelpNynorsk";
import SokSosialhjelpBokmal from "./SokSosialhjelpBokmal";
import SokSosialhjelpEngelsk from "./SokSosialhjelpEngelsk";
import "./sokSosialhjelp.less";

const SokSosialhjelp: React.FC = () => {
    const valgtSprak: string = detekterSprak();

    const KRISE = false;

    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {!KRISE && (
                <>
                    {valgtSprak === Sprak.NORSK_BOKMAL && (
                        <SokSosialhjelpBokmal />
                    )}
                    {valgtSprak === Sprak.NYNORSK && <SokSosialhjelpNynorsk />}
                    {valgtSprak === Sprak.ENGELSK && <SokSosialhjelpEngelsk />}
                </>
            )}
            {KRISE && (
                <>
                    {valgtSprak === Sprak.NORSK_BOKMAL && (
                        <SokSosialhjelpBokmalKrise />
                    )}
                    {valgtSprak === Sprak.NYNORSK && (
                        <SokSosialhjelpNynorskKrise />
                    )}
                    {valgtSprak === Sprak.ENGELSK && (
                        <SokSosialhjelpEngelskKrise />
                    )}
                </>
            )}
        </Oversettelser>
    );
};

export default SokSosialhjelp;
