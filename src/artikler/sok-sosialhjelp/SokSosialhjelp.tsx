import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import SokSosialhjelpBokmalForskudd from "./SokSosialhjelpBokmalForskudd";
import SokSosialhjelpEngelskForskudd from "./SokSosialhjelpEngelskForskudd";
import SokSosialhjelpNynorskForskudd from "./SokSosialhjelpNynorskForskudd";
import SokSosialhjelpNynorsk from "./SokSosialhjelpNynorsk";
import SokSosialhjelpBokmal from "./SokSosialhjelpBokmal";
import SokSosialhjelpEngelsk from "./SokSosialhjelpEngelsk";
import "./sokSosialhjelp.less";

export const ANTALL_KOMMUNER = 356;

const SokSosialhjelp: React.FC = () => {
    const valgtSprak: string = detekterSprak();

    const search: string = window.location.search;
    const match: string[]|null = search.match(/coronaforskudd=false/);
    const CORONAFORSKUDD = match ? false : true;

    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {!CORONAFORSKUDD && (
                <>
                    {valgtSprak === Sprak.NORSK_BOKMAL && (
                        <SokSosialhjelpBokmal />
                    )}
                    {valgtSprak === Sprak.NYNORSK && <SokSosialhjelpNynorsk />}
                    {valgtSprak === Sprak.ENGELSK && <SokSosialhjelpEngelsk />}
                </>
            )}
            {CORONAFORSKUDD && (
                <>
                    {valgtSprak === Sprak.NORSK_BOKMAL && (
                        <SokSosialhjelpBokmalForskudd />
                    )}
                    {valgtSprak === Sprak.NYNORSK && (
                        <SokSosialhjelpNynorskForskudd />
                    )}
                    {valgtSprak === Sprak.ENGELSK && (
                        <SokSosialhjelpEngelskForskudd />
                    )}
                </>
            )}
        </Oversettelser>
    );
};

export default SokSosialhjelp;
