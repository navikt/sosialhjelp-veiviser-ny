import * as React from "react";
import {Innholdstittel, Undertittel} from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";
import Artikkel from "../Artikkel";
import {Avsnitt} from "../../komponenter/avsnitt/Avsnitt";

const EttersendeBokmal: React.FC = () => {
    return (
        <Artikkel tittel="Hvordan ettersender du dokumentasjon">
            <Innholdstittel>
                Hvordan ettersender du dokumentasjon
            </Innholdstittel>

            <Undertittel>Hvis du har søkt digitalt</Undertittel>
            <Avsnitt>
                Du kan ettersende dokumenter digitalt. Det gjør du ved å:
            </Avsnitt>

            <div className="typo-normal">
                <ul>
                    <li>
                        Gå til listen over{" "}
                        <Lenke href={"./innsyn/"}>
                            dine sosialhjelpssøknader
                        </Lenke>
                    </li>
                    <li>Finn søknaden du ønsker å ettersende dokumenter til</li>
                    <li>Last opp dokumentene du skal ettersende</li>
                </ul>
            </div>

            <Avsnitt>
                Pass på at du ettersender til den riktige søknaden.
            </Avsnitt>

            <Undertittel>Hvis du har søkt på papir</Undertittel>
            <Avsnitt>
                Har du søkt på papir, må du levere dokumentasjonen til{" "}
                <Lenke href={"https://www.nav.no/finnkontor"}>
                    ditt NAV-kontor
                </Lenke>
                . Du kan også sende det i posten.
            </Avsnitt>
        </Artikkel>
    );
};

export default EttersendeBokmal;
