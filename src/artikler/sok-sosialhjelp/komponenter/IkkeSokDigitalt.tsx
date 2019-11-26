import * as React from "react";
import Veilederpanel from "nav-frontend-veilederpanel";
import BrevHender from "../../../komponenter/bilder/BrevHender";

const IkkeSokDigitaltPanel: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <Veilederpanel
            type={"plakat"}
            kompakt={true}
            fargetema="suksess"
            svg={<BrevHender/>}
        >
                <span className="ikke_digitalt_sok_panel">
                    {children}
                </span>
        </Veilederpanel>
    )
};

export default IkkeSokDigitaltPanel;
