import * as React from "react";
import Veilederpanel from "nav-frontend-veilederpanel";
import Tastatur from "../../../komponenter/bilder/Tastatur";

const SokDigitaltPanel: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <Veilederpanel
            type={"plakat"}
            kompakt={true}
            svg={<Tastatur/>}
            fargetema="suksess"
        >
                <span className="sok_sosialhjelp_panel">
                    {children}
                </span>
        </Veilederpanel>
    )
};

export default SokDigitaltPanel;
