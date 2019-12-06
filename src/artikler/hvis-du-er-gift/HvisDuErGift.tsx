import * as React from "react";

import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import HvisDuErGiftBokmal from "./HvisDuErGiftBokmal";
import HvisDuErGiftNynorsk from "./HvisDuErGiftNynorsk";
import HvisDuErGiftEnglish from "./HvisDuErGiftEnglish";

const HvisDuErGift = () => {
    const valgtSprak: string = detekterSprak();
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {valgtSprak === Sprak.NORSK_BOKMAL && <HvisDuErGiftBokmal />}
            {valgtSprak === Sprak.NYNORSK && <HvisDuErGiftNynorsk />}
            {valgtSprak === Sprak.ENGELSK && <HvisDuErGiftEnglish />}
        </Oversettelser>
    );
};

export default HvisDuErGift;
