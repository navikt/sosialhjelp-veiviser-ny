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
                Har du spørsmål i forbindelse med søknaden eller saken din om økonomisk sosialhjelp,
                så kan du bruke{" "}
                <Lenke href={"https://tjenester.nav.no/mininnboks/sporsmal/skriv/OKSOS"}>skriv til oss</Lenke>
                {" "}
                og velge området sosiale tjenester. Meldingen vil bli sendt til NAV-kontoret{" "}
                der du er folkeregistrert. Hvis du oppholder deg i en annen kommune enn der du er{" "}
                folkeregistrert, ber vi deg{" "}
                <Lenke
                    href={
                        "https://www.nav.no/no/nav-og-samfunn/kontakt-nav/kontakt-nav-pa-telefon2"
                    }
                >
                    kontakte oss på telefon
                </Lenke>.
            </Normaltekst>
            <br/>
            <Normaltekst>
                Hvis du trenger å snakke med noen om situasjonen din eller saken din,  kan du melde behovet
                for kontakt i{" "}
                <Lenke href={"https://tjenester.nav.no/mininnboks/sporsmal/skriv/OKSOS"}>skriv til oss</Lenke>.
                Da kontakter vi deg på telefon. Du kan også{" "}
                <Lenke
                    href={
                        "https://www.nav.no/no/nav-og-samfunn/kontakt-nav/kontakt-nav-pa-telefon2"
                    }
                >
                    kontakte oss på telefon
                </Lenke>{" "}
                for å avtale et møte. Du kan lese mer om{" "}
                <Lenke href="./slik-foregar-et-mote?lang=nb">
                    hvordan et møte foregår med oss
                </Lenke>.
            </Normaltekst>
        </Artikkel>
    );
};

export default KontakteVeilederBokmal;
