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
            You can apply for{" "}
            <Lenke href="./slik-soker-du?lang=en">financial assistance</Lenke>{" "}
            in the municipality where you are located, if you are unable to find
            the means to pay for essentials. Check if you can{" "}
            <Lenke href="./slik-soker-du?lang=en">apply digitally</Lenke> in
            your municipality.
        </Normaltekst>
        <br />
        <Normaltekst>
            You should be available on the phone after submitting your
            application. Someone from the NAV-office might contact you to
            evaluate your situation. You can also{" "}
            <Lenke href="https://www.nav.no/en/home/about-nav/contact-us">
                get in contact with us by telephone
            </Lenke>{" "}
            if you need someone to talk to.
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
            24 hours. You can use the application form for{" "}
            <Lenke href="./slik-soker-du?lang=en">financial assistance</Lenke>.
            Check if you can{" "}
            <Lenke href="./slik-soker-du?lang=en">apply digitally</Lenke> in
            your municipality. You can also{" "}
            <Lenke href="https://www.nav.no/en/home/about-nav/contact-us">
                get in contact with us by telephone
            </Lenke>
            .
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
