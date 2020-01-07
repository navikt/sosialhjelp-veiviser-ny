import * as React from "react";
import {Innholdstittel, Normaltekst} from "nav-frontend-typografi";
import Lenkepanel from "nav-frontend-lenkepanel/lib";
import "./komponenter/jobblyst_panel.less";

export const JobblystBokmalPanel = () => {
    return (
        <Lenkepanel
            href="https://tjenester.nav.no/veiledearbeidssoker/"
            tittelProps="normaltekst"
            border={false}
            className="jobblyst_panel"
        >
            <Innholdstittel>Jobblyst på Facebook</Innholdstittel>
            <Normaltekst>
                Råd og veiledning for deg som er ung og har spørsmål
            </Normaltekst>
        </Lenkepanel>
    );
};

export const JobblystNynorskPanel = () => (
    <Lenkepanel
        href="https://tjenester.nav.no/veiledearbeidssoker/"
        tittelProps="normaltekst"
        border={false}
        className="jobblyst_panel"
    >
        <Innholdstittel>Jobblyst på Facebook</Innholdstittel>
        <Normaltekst>
            Råd og rettleiing for deg som er ung og har spørsmål
        </Normaltekst>
    </Lenkepanel>
);

export const JobblystEnglishPanel = () => (
    <Lenkepanel
        href="https://tjenester.nav.no/veiledearbeidssoker/"
        tittelProps="normaltekst"
        border={false}
        className="jobblyst_panel"
    >
        <Innholdstittel>"Jobblyst" on Facebook</Innholdstittel>
        <Normaltekst>Advice and guidance for young people</Normaltekst>
    </Lenkepanel>
);
