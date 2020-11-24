import * as React from "react";
import {LenkepanelBase} from "nav-frontend-lenkepanel/lib";
import {Systemtittel} from "nav-frontend-typografi";
import "./sokOmSosialhjelpPanel.less";
import IllustrasjonsGruppe from "../../../komponenter/bilder/IllustrasjonsGruppe";
import {NavLink} from "react-router-dom";

const SokOmSosialhjelpPanel: React.FC<{
    href: string;
    children: React.ReactNode;
}> = ({href, children}) => {
    return (
        <LenkepanelBase
            linkCreator={(props) => (
                <NavLink
                    className="start_soknad_panel lenkepanel"
                    to={props.href ?? ""}
                >
                    {props.children}
                </NavLink>
            )}
            href={href}
        >
            <div className="sokMobilIllustrasjon" />

            {/*SVG har feil: <MobilSirkel />*/}
            <Systemtittel>{children}</Systemtittel>
            <div className="illustrasjonsGruppe">
                <IllustrasjonsGruppe />
            </div>
        </LenkepanelBase>
    );
};

export default SokOmSosialhjelpPanel;
