import * as React from "react";

import "./SprakvelgerForside.less";
import SprakvelgerContext from "../../../komponenter/oversettelser/Oversettelser";
import {Sprak} from "../../../utils/sprakUtils";
import SprakVelger from "../../../komponenter/sprakVelger/SprakVelger";

export const SprakvelgerForside = () => {
    const context = React.useContext(SprakvelgerContext);
    const sprak: Sprak[] = context.sprak;

    return (
        <div className="sprakvelger-forside">
            {sprak.length > 1 && <SprakVelger sprak={sprak} />}
        </div>
    );
};
