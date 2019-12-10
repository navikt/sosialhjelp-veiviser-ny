import * as React from "react";
import {Innholdstittel, Normaltekst} from "nav-frontend-typografi";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import {andreMuligheterBrodsmulestiEngelsk} from "../andre-muligheter/AndreMuligheter";

const HvisDuHarSamboerEnglish = () => (
    <Artikkel
        tittel="If you are a cohabitant"
        illustrasjon={<Veiskilft className="illustrasjon" />}
        foreldreside={andreMuligheterBrodsmulestiEngelsk}
    >
        <Innholdstittel>If you are a cohabitant</Innholdstittel>
        <Normaltekst>
            Cohabitants do not have a mutual obligation to provide for each
            other. Unless you have children together, this means that your
            collective financial situation will not be taken into account when
            we assess your need for social assistance.
        </Normaltekst>
        <br />
        <Normaltekst>
            Parents who are cohabitants with joint children have an obligation
            to provide for their children within the framework of their
            financial situation. This means that you will normally not qualify
            for social assistance in providing for your joint child or children
            if one of you has sufficient income to provide for the children on
            their own. In families where one or both parents have children from
            previous relationships, parts of the family may be assessed
            separately.
        </Normaltekst>
        <br />
        <Normaltekst>
            If you do not live with your children, expenses you incur in
            connection with contact will be included in your subsistence needs.
            Assistance for contact will be assessed on the basis of the scope of
            the contact.
        </Normaltekst>
    </Artikkel>
);

export default HvisDuHarSamboerEnglish;
