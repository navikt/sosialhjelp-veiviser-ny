import * as React from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";

import GiBeskjedBokmal from "./GiBeskjedBokmal";
import GiBeskjedNynorsk from "./GiBeskjedNynorsk";
import GiBeskjedEnglish from "./GiBeskjedEnglish";

const GiBeskjed: React.FC = () => {
    const valgtSprak: string = detekterSprak();
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {valgtSprak === Sprak.NORSK_BOKMAL && <GiBeskjedBokmal />}
            {valgtSprak === Sprak.NYNORSK && <GiBeskjedNynorsk />}
            {valgtSprak === Sprak.ENGELSK && <GiBeskjedEnglish />}
        </Oversettelser>
    );
};

export default GiBeskjed;
