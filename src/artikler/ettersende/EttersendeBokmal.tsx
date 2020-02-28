import * as React from "react";
import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";
import Artikkel from "../Artikkel";
import "../artikkel.less";

const EttersendeBokmal: React.FC = () => {
    return (
        <Artikkel tittel="Hvordan ettersender du dokumentasjon">
            <Innholdstittel>
                Hvordan ettersender du dokumentasjon
            </Innholdstittel>

            <Undertittel>Hvis du har søkt digitalt</Undertittel>
            <Normaltekst>
                Du kan ettersende dokumenter digitalt. Det gjør du ved å:
            </Normaltekst>
            <div className="typo-normal">
                <ul>
                    <li>
                        Gå til listen over{" "}
                        <Lenke href={"./innsyn/"}>
                            dine sosialhjelpssøknade
                        </Lenke>
                    </li>
                    <li>
                        Finn søknaden du ønsker å ettersende dokumenter til{" "}
                    </li>
                    <li>Last opp dokumentene du skal ettersende </li>
                </ul>
            </div>
            <Normaltekst>
                Pass på at du ettersender til den riktige søknaden.
            </Normaltekst>

            <Undertittel>Hvis du har søkt på papir</Undertittel>

            <Normaltekst>
                Har du søkt på papir, må du levere dokumentasjonen til{" "}
                <Lenke
                    href={
                        "https://www.nav.no/person/personopplysninger/#ditt-nav-kontor"
                    }
                >
                    ditt NAV-kontor
                </Lenke>
                . Du kan også sende det i posten.
            </Normaltekst>
        </Artikkel>
    );
};

export default EttersendeBokmal;
