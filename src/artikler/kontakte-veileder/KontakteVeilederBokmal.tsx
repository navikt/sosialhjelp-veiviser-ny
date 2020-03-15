import * as React from "react";
import {Innholdstittel, Normaltekst} from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";
import Artikkel from "../Artikkel";
import "../artikkel.less";

const KontakteVeilederBokmal: React.FC = () => {
    return (
        <Artikkel tittel="Hvordan kontakter du veilederen din?">
            <Innholdstittel>
                Hvordan kontakter du veilederen din?
            </Innholdstittel>
            <Normaltekst>
                Hvis du trenger å snakke med noen om situasjonen din eller saken
                din, kan du{" "}
                <Lenke
                    href={
                        "https://www.nav.no/no/nav-og-samfunn/kontakt-nav/kontakt-oss_2/kontakt-nav-pa-telefon2"
                    }
                >
                    kontakte oss på telefon
                </Lenke>{" "}
                for å avtale et møte. Du kan lese mer om{" "}
                <Lenke href="./slik-foregar-et-mote?lang=nb">
                    hvordan et møte foregår med oss
                </Lenke>
                .
            </Normaltekst>
        </Artikkel>
    );
};

export default KontakteVeilederBokmal;
