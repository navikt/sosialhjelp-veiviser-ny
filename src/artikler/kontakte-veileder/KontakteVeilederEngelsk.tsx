import * as React from "react";
import {Innholdstittel, Normaltekst} from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";
import Artikkel from "../Artikkel";
import "../artikkel.less";

const KontakteVeilederEngelsk: React.FC = () => {
    return (
        <Artikkel tittel="Hvordan kontakter du veilederen din?">
            <Innholdstittel>
                Hvordan kontakter du veilederen din?
            </Innholdstittel>
            <Normaltekst>
                Hvis du trenger å snakke med noen om situasjonen din
                eller saken din, kan du
                {" "}
                <Lenke
                    href={
                        "https://www.nav.no/no/nav-og-samfunn/kontakt-nav/kontakt-nav-pa-telefon2"
                    }>
                    kontakte oss på telefon
                </Lenke>
                {" "}
                eller møte opp på NAV-kontoret der du bor for å avtale
                et møte. Les mer om
                {" "}
                <Lenke
                    href={
                        "https://www.nav.no/sosialhjelp/slik-foregar-et-mote"
                    }>
                    hvordan et møte foregår med oss.
                </Lenke>
            </Normaltekst>
            <br />
        </Artikkel>
    );
};

export default KontakteVeilederEngelsk;
