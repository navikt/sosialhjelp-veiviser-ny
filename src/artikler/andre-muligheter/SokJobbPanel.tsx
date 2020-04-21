import * as React from "react";
import Lenkepanel from "nav-frontend-lenkepanel/lib";
import {Innholdstittel, Normaltekst} from "nav-frontend-typografi";
import "./komponenter/sok_jobb_panel.less";

const SokJobbPanel: React.FC = () => {
    return (
        <Lenkepanel
            href="https://tjenester.nav.no/veiledearbeidssoker/?sprak=nb"
            tittelProps="normaltekst"
            border={false}
            className="sok_jobb_panel"
        >
            <Innholdstittel>Finn og søk jobb</Innholdstittel>
            <Normaltekst>
                Det du trenger for å komme i gang med å søke jobber
            </Normaltekst>
        </Lenkepanel>
    );
};

export default SokJobbPanel;
