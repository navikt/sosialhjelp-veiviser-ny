import React from "react";
import {Innholdstittel, Normaltekst} from "nav-frontend-typografi";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import Lenke from "nav-frontend-lenker";

const NodsituasjonEnglish = () => (
    <Artikkel
        tittel="When you are in an emergency"
        illustrasjon={<Veiskilft className="illustrasjon" />}
    >
        <Innholdstittel>When you are in an emergency</Innholdstittel>
        <Normaltekst>
            If you are unable to find the means to pay for essentials, you can
            apply for{" "}
            <Lenke href="./slik-soker-du?lang=en">financial assistance</Lenke> .
            Check if you can{" "}
            <Lenke href="./slik-soker-du?lang=en">apply digitally</Lenke> in
            your municipality.
        </Normaltekst>
        <br />
        <Normaltekst>
            You should be available by phone after submitting your application.
            Someone from the NAV office will contact you to assess your
            situation. If you need to talk to someone you can also{" "}
            <Lenke href="https://www.nav.no/en/home/about-nav/contact-us">
                contact us by phone
            </Lenke>
            .
        </Normaltekst>
        <br />
        <Normaltekst>
            Emergency financial assistance covers bare essential expenses for a
            short period. Examples include food, hygiene items and travel
            expenses. Bills that must be paid to prevent necessary services such
            as electricity from being cut off may also be covered in an
            emergency.
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
            24 hours. You can apply for this through through the{" "}
            <Lenke href="./slik-soker-du?lang=en">financial assistance</Lenke>
            form, check if you can{" "}
            <Lenke href="./slik-soker-du?lang=en">apply digitally</Lenke> in
            your municipality. You can also{" "}
            <Lenke href="https://www.nav.no/en/home/about-nav/contact-us">
                get in contact with us by telephone
            </Lenke>
            .
        </Normaltekst>
        <br />
        <Normaltekst>
            NAV will be able to process your application more efficiently if you
            provide the best possible information about your situation.
        </Normaltekst>
    </Artikkel>
);

export default NodsituasjonEnglish;
