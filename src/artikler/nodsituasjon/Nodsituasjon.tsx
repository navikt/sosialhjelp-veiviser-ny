import * as React from "react";

import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import NodsituasjonBokmal from "./NodistuasjonBokmal";
import NodsituasjonNynorsk from "./NodistuasjonNynorsk";
import NodsituasjonEnglish from "./NodistuasjonEnglish";

const Nodsituasjon = () => {
    const valgtSprak: string = detekterSprak();

    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            {valgtSprak === Sprak.NORSK_BOKMAL && <NodsituasjonBokmal />}
            {valgtSprak === Sprak.NYNORSK && <NodsituasjonNynorsk />}
            {valgtSprak === Sprak.ENGELSK && <NodsituasjonEnglish />}
        </Oversettelser>
    );
};

export default Nodsituasjon;
