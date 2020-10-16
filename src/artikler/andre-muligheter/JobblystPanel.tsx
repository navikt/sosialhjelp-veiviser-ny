import * as React from "react";
import {Innholdstittel, Normaltekst} from "nav-frontend-typografi";
import Lenkepanel from "nav-frontend-lenkepanel/lib";
import "./komponenter/jobblyst_panel.less";

export const JobblystBokmalPanel = () => {
    return (
        <Lenkepanel
            href="https://www.facebook.com/navjobblyst/"
            tittelProps="normaltekst"
            border={false}
            className="jobblyst_panel"
        >
            <div className="jobblyst_panel__content">
                <Innholdstittel tag="h2">Jobblyst</Innholdstittel>
                <Normaltekst>
                    Råd og veiledning for deg som er ung og har spørsmål
                </Normaltekst>
            </div>
            <img
                className="jobblyst_panel__image"
                src="img/JobblystS.png"
                alt=""
            />
        </Lenkepanel>
    );
};

export const JobblystNynorskPanel = () => (
    <Lenkepanel
        href="https://www.facebook.com/navjobblyst/"
        tittelProps="normaltekst"
        border={false}
        className="jobblyst_panel"
    >
        <div className="jobblyst_panel__content">
            <Innholdstittel tag="h2">Jobblyst</Innholdstittel>
            <Normaltekst>
                Råd og rettleiing for deg som er ung og har spørsmål
            </Normaltekst>
        </div>
        <img className="jobblyst_panel__image" src="img/JobblystS.png" alt="" />
    </Lenkepanel>
);

export const JobblystEnglishPanel = () => (
    <Lenkepanel
        href="https://www.facebook.com/navjobblyst/"
        tittelProps="normaltekst"
        border={false}
        className="jobblyst_panel"
    >
        <div className="jobblyst_panel__content">
            <Innholdstittel tag="h2">Jobblyst</Innholdstittel>
            <Normaltekst>Advice and guidance for young people</Normaltekst>
        </div>
        <img className="jobblyst_panel__image" src="img/JobblystS.png" alt="" />
    </Lenkepanel>
);
