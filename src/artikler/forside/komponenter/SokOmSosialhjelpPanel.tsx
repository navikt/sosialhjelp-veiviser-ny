import * as React from "react";
import {LenkepanelBase} from "nav-frontend-lenkepanel/lib";
import {onClickLink} from "../../../utils/navigasjon";
import {Systemtittel} from "nav-frontend-typografi";
import "./sokOmSosialhjelpPanel.less";
import MobilSirkel from "../../../komponenter/bilder/MobilSirkel";
import IllustrasjonsGruppe from "../../../komponenter/bilder/IllustrasjonsGruppe";

const SokOmSosialhjelpPanel: React.FC<{href: string, children: React.ReactNode}> = ({href, children}) => {

    return (
        <LenkepanelBase
            className="start_soknad_panel"
            href={href}
            onClick={(event: any) => onClickLink(event, href)}
        >
            <MobilSirkel />
            <Systemtittel>
                {children}
            </Systemtittel>
            <div className="illustrasjonsGruppe">
                <IllustrasjonsGruppe/>
            </div>
        </LenkepanelBase>
    )
};

export default SokOmSosialhjelpPanel;
