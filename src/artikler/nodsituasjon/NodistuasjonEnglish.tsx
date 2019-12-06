import React from "react";
import {Innholdstittel, Normaltekst} from "nav-frontend-typografi";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import Lenke from "nav-frontend-lenker";

const NodsituasjonEnglish = () => (
    <Artikkel
        tittel="In an emergency"
        illustrasjon={<Veiskilft className="illustrasjon" />}
    >
        <Innholdstittel>In an emergency</Innholdstittel>
        <Normaltekst>
            If you are unable to find the means to pay for essentials, please
            contact{" "}
            <Lenke href="https://www.nav.no/person/personopplysninger/#ditt-nav-kontor">
                the NAV office
            </Lenke>{" "}
            in the municipality where you live.
        </Normaltekst>
        <br />
        <Normaltekst>
            Emergency assistance is intended to cover bare essentials for a
            limited time. Examples of such essentials include food, hygiene
            articles and travel expenses. Bills that must be paid to prevent
            necessary utilities, such as electricity, etc., being cut off, may
            also be covered in an emergency.
        </Normaltekst>
        <br />
        <Normaltekst>
            It does not matter why you have ended up in this situation.
        </Normaltekst>
        <br />
        <Normaltekst>
            NAV will help you find{" "}
            <Lenke href="https://www.nav.no/en/home/relatert-informasjon/temporary-accommodation-emergency">
                temporary accommodation
            </Lenke>{" "}
            if you have an acute need for a place to sleep and stay for the next
            24 hours.
        </Normaltekst>
        <br />
        <Normaltekst>
            You have a responsibility to provide the best possible information
            about your case, so that NAV is able to process your application
            quickly.
        </Normaltekst>
    </Artikkel>
);

export default NodsituasjonEnglish;
