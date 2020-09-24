import React from "react";
import {Innholdstittel} from "nav-frontend-typografi";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";
import Lenke from "nav-frontend-lenker";
import {Avsnitt} from "../../komponenter/avsnitt/Avsnitt";
import {InternLenke} from "../../komponenter/InternLenke";

const NodsituasjonEnglish = () => (
    <Artikkel
        tittel="When you are in an emergency"
        illustrasjon={<Veiskilft className="illustrasjon" />}
    >
        <Innholdstittel>When you are in an emergency</Innholdstittel>
        <Avsnitt>
            If you are unable to find the means to pay for essentials, you can
            apply for{" "}
            <InternLenke href="/slik-soker-du?lang=en">
                financial assistance
            </InternLenke>{" "}
            . Check if you can{" "}
            <InternLenke href="/slik-soker-du?lang=en">
                apply digitally
            </InternLenke>{" "}
            in your municipality.
        </Avsnitt>
        <Avsnitt>
            You should be available by phone after submitting your application.
            Someone from the NAV office will contact you to assess your
            situation. If you need to talk to someone you can also{" "}
            <Lenke href="https://www.nav.no/en/home/about-nav/contact-us">
                contact us by phone
            </Lenke>
            .
        </Avsnitt>
        <Avsnitt>
            Emergency financial assistance covers bare essential expenses for a
            short period. Examples include food, hygiene items and travel
            expenses. Bills that must be paid to prevent necessary services such
            as electricity from being cut off may also be covered in an
            emergency.
        </Avsnitt>
        <Avsnitt>
            It does not matter why you have ended up in this situation.
        </Avsnitt>
        <Avsnitt>
            NAV will help you find{" "}
            <Lenke href="https://www.nav.no/en/home/relatert-informasjon/temporary-accommodation-emergency">
                temporary accommodation
            </Lenke>{" "}
            if you have an acute need for a place to sleep and stay for the next
            24 hours. You can apply for this through through the{" "}
            <InternLenke href="/slik-soker-du?lang=en">
                financial assistance
            </InternLenke>
            form, check if you can{" "}
            <InternLenke href="/slik-soker-du?lang=en">
                apply digitally
            </InternLenke>{" "}
            in your municipality. You can also{" "}
            <Lenke href="https://www.nav.no/en/home/about-nav/contact-us">
                contact us by phone
            </Lenke>
            .
        </Avsnitt>
        <Avsnitt>
            NAV will be able to process your application more efficiently if you
            provide the best possible information about your situation.
        </Avsnitt>
    </Artikkel>
);

export default NodsituasjonEnglish;
