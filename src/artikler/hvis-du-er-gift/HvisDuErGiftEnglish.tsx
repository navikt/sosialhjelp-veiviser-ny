import * as React from "react";
import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import {andreMuligheterBrodsmulestiEngelsk} from "../andre-muligheter/AndreMuligheter";

const HvisDuErGiftEnglish = () => (
    <Artikkel
        tittel="If you are married"
        illustrasjon={<Veiskilft className="illustrasjon" />}
        foreldreside={andreMuligheterBrodsmulestiEngelsk}
    >
        <Innholdstittel>If you are married</Innholdstittel>
        <Normaltekst>
            If you are married, you and your spouse have a mutual obligation to
            provide for each other. That means we will consider your collective
            financial situation when we assess your need for financial
            assistance.
        </Normaltekst>
        <br />
        <Normaltekst>
            If your spouse does not provide for you, even if he or she has an
            income, your individual financial situation may be taken into
            account in the assessment of your needs for financial assistance for
            a limited time. Examples of circumstances where this would apply
            include
        </Normaltekst>
        <div className="typo-normal">
            <ul>
                <li>if you are staying in a women’s crisis shelter</li>
                <li>if you are living in hiding from an abusive spouse</li>
                <li>if you are trying to get away from a forced marriage</li>
                <li>if your spouse is serving time in prison</li>
            </ul>
        </div>
        <Undertittel>Spousal support</Undertittel>
        <br />
        <Normaltekst>
            If a married couple separate or become divorced, one spouse may,
            under certain circumstances, claim spousal support from the other
            spouse. This would, for example, include situations where he or she
            has a reduced ability to provide for him- or herself as a result of
            the marriage or caring for the children. Read more about{" "}
            <Lenke href="https://www.nav.no/en/Home/Benefits+and+services/Relatert+informasjon/spousal-support">
                spousal support
            </Lenke>
            .
        </Normaltekst>
    </Artikkel>
);

export default HvisDuErGiftEnglish;
