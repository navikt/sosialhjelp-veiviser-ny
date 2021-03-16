import * as React from "react";

import {Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import {ForsideSanity} from "./ForsideSanity";

const Forside = () => {
    return (
        <Oversettelser
            sprak={[Sprak.NORSK_BOKMAL, Sprak.NYNORSK, Sprak.ENGELSK]}
        >
            <ForsideSanity />
        </Oversettelser>
    );
};

export default Forside;
