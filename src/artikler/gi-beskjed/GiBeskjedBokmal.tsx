import * as React from "react";
import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";

import Artikkel from "../Artikkel";
import Veiskilft from "../../komponenter/bilder/Veiskilt";

const GiBeskjedBokmal: React.FC = () => (
    <Artikkel
        tittel="Meld fra om endringer"
        illustrasjon={<Veiskilft className="illustrasjon" />}
    >
        <Innholdstittel>Meld fra om endringer</Innholdstittel>
        <Normaltekst>
            Hvis du får endringer i inntekt, familiesituasjon og/eller
            jobbsituasjon, eller planlegger opphold i utlandet, kan det ha
            betydning for beløpet du får utbetalt fra NAV. I slike tilfeller må
            du derfor straks melde fra til NAV. Er du gift eller registrert
            partner, må du også melde fra hvis det skjer endringer i situasjonen
            til ektefellen/partneren din.
        </Normaltekst>
        <br />
        <Undertittel>
            Dette er eksempler på situasjoner som kan påvirke utbetalingen din:
        </Undertittel>
        <Normaltekst>
            <ul>
                <li>
                    du begynner å tjene mer eller mindre enn du tidligere har
                    oppgitt til NAV.
                </li>
                <li>
                    du får utbetalt penger i form av utbytte på aksjer, fond,
                    salg av eiendom/eiendeler eller annet.
                </li>
                <li>
                    det skjer endringer i sivilstatusen din, som inngåelse og
                    opphør av ekteskap, partnerskap og samboerforhold, eller
                    partner/ektefelle/samboer dør.
                </li>
                <li>
                    familiesituasjonen din endrer seg ved at du får barn, et
                    barn flytter eller forsørgelse opphører.
                </li>
                <li>du planlegger et opphold i eller flytting til utlandet</li>
                <li>du skal flytte ut av kommunen</li>
            </ul>
        </Normaltekst>
        <Normaltekst>
            Hvis du er usikker på om endringen vil virke inn på utbetalingen
            din, kan du lese mer i vedtaksbrevet du har fått fra oss. Du kan
            også ta kontakt med oss på{" "}
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

export default GiBeskjedBokmal;
