import * as React from "react";
import {LenkepanelBase} from "nav-frontend-lenkepanel/lib";
import {Systemtittel} from "nav-frontend-typografi";
import "./sokOmSosialhjelpPanel.less";
import IllustrasjonsGruppe from "../../../komponenter/bilder/IllustrasjonsGruppe";
import {useHistory} from "react-router-dom";

const SokOmSosialhjelpPanel: React.FC<{
    href: string;
    children: React.ReactNode;
}> = ({href, children}) => {
    const history = useHistory();

    const onClick = (href: string, event: any) => {
        history.push(href);
        event.preventDefault();
    };

    return (
        <LenkepanelBase
            className="start_soknad_panel"
            href={href}
            onClick={(event: any) => onClick(event, href)}
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
