import * as React from "react";
import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";

const GiBeskjedEnglish: React.FC = () => (
    <Artikkel
        tittel="Notify us of any changes to your situation"
        illustrasjon={<Veiskilft className="illustrasjon" />}
    >
        <Innholdstittel>
            Notify us of any changes to your situation
        </Innholdstittel>
        <Normaltekst>
            Any changes in your situation that may affect the payment you
            receive from the Norwegian Labour and Welfare Administration (NAV)
            must immediately be reported to your local NAV office. This includes
            changes in the situation of your spouse or partner if you are
            married or have a registered partnership.
        </Normaltekst>
        <br />
        <Undertittel>For example, you must notify us if:</Undertittel>
        <Normaltekst>
            <ul>
                <li>
                    you start earning more or less than you have previously told
                    us
                </li>
                <li>
                    you have received an income from shares, funds, sale of a
                    property, or sale of any other asset.
                </li>
                <li>
                    there are changes in your family situation, such as you
                    having a new child, your child moves, or your parental
                    responsibility ceases.
                </li>
                <li>
                    there are changes in your relationship status, such as
                    entering or ending a partnership, marriage, or your
                    spouse/partner dies.
                </li>
                <li>you will be staying abroad</li>
                <li>you plan to move out of the municipality</li>
            </ul>
        </Normaltekst>
        <Normaltekst>
            If you are not sure whether the change in your situation will affect
            your payments, you can find more information in the letter we have
            sent you advising you of our decision in your case. You can also
            contact us by{" "}
            <Lenke href="https://www.nav.no/person/kontakt-oss/chat/sosialhjelp">
                chat (website in Norwegian)
            </Lenke>{" "}
            or by{" "}
            <Lenke href="https://www.nav.no/en/home/about-nav/contact-us">
                phone
            </Lenke>
            .
        </Normaltekst>
    </Artikkel>
);

export default GiBeskjedEnglish;
