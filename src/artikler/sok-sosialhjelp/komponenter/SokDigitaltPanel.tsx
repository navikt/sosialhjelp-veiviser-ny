import * as React from "react";
import Veilederpanel from "nav-frontend-veilederpanel";
import Tastatur from "../../../komponenter/bilder/Tastatur";

const SokDigitaltPanel: React.FC<{children: React.ReactNode}> = ({
    children,
}) => {
    return (
        <div className="sok_sosialhjelp_wrapper">
            <Veilederpanel
                type={"plakat"}
                kompakt={true}
                svg={<Tastatur />}
                fargetema="suksess"
            >
                <span className="sok_sosialhjelp_panel">{children}</span>
            </Veilederpanel>
        </div>
    );
};

export default SokDigitaltPanel;
