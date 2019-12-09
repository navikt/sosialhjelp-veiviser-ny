import * as React from "react";
import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";

const GiBeskjedNynorsk: React.FC = () => (
    <Artikkel
        tittel="Meld frå om endringar"
        illustrasjon={<Veiskilft className="illustrasjon" />}
    >
        <Innholdstittel>Meld frå om endringar</Innholdstittel>
        <Normaltekst>
            Dersom du får endringar i inntekt, familiesituasjon og/eller
            jobbsituasjon, eller planlegger opphald i utlandet, kan det ha
            betyding for beløpet du får utbetalt frå NAV. I slike tilfeller må
            du derfor straks melde frå til NAV. Er du gift eller registrert
            partner, må du også melde frå dersom det skjer endringar i
            situasjonen til ektefellen/partnaren din.
        </Normaltekst>
        <br />
        <Undertittel>
            Døme på forhold som kan ha innverknad på utbetalinga di:
        </Undertittel>
        <Normaltekst>
            <ul>
                <li>
                    du begynner å tene meir eller mindre enn du tidlegare har
                    oppgitt til NAV
                </li>
                <li>
                    du får utbetalt pengar i form av utbytte på aksjar, fond,
                    sal av eigedom, lausøyre eller anna
                </li>
                <li>
                    det skjer endringar i sivilstanden din, som inngåing eller
                    opphøyr av ekteskap/partnarskap/sambuerforhald, eller
                    ektefelle/sambuar/partnar døyr.
                </li>
                <li>
                    det skjer endringar i familiesituasjonen din ved at du får
                    barn, eit barn flyttar eller du ikkje lenger forsyter
                    barnet/barna.
                </li>
                <li>du planleggar eit opphald i eller flytting til utlandet</li>
                <li>du skal flytte ut av kommunen</li>
            </ul>
        </Normaltekst>
        <Normaltekst>
            Dersom du er usikker på om endringa har betyding for utbetalinga di,
            kan du lese meir i vedtaksbrevet du har fått frå oss. Du kan òg ta
            kontakt med oss på{" "}
            <Lenke href="https://www.nav.no/person/kontakt-oss/chat/sosialhjelp">
                chat
            </Lenke>{" "}
            eller{" "}
            <Lenke href="https://www.nav.no/no/nav-og-samfunn/kontakt-nav/kontakt-oss_2/kontakt-nav-pa-telefon2">
                telefon
            </Lenke>
            .
        </Normaltekst>
    </Artikkel>
);

export default GiBeskjedNynorsk;
