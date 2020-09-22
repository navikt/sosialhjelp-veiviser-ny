import * as React from "react";
import {Innholdstittel, Undertittel} from "nav-frontend-typografi";
import Lenke from "nav-frontend-lenker";
import Artikkel from "../Artikkel";
import "../artikkel.less";
import {Avsnitt} from "../../komponenter/avsnitt/Avsnitt";

const SoknadPaPapirBokmal: React.FC = () => {
    return (
        <Artikkel tittel="Hvor finner du søknadsskjema på papir">
            <Innholdstittel>
                Hvor finner du søknadsskjema på papir
            </Innholdstittel>
            <Avsnitt>
                Dessverre finnes det ikke et felles papirskjema for økonomisk
                sosialhjelp. Hver kommune har et eget søknadskjema som du kan
                benytte hvis du ikke kan søke digitalt.
            </Avsnitt>

            <Undertittel>Last ned papirskjema på nett</Undertittel>

            <Avsnitt>
                Du finner ikke papirskjema på NAV.no, men mange kommuner har
                søknadskjema sitt tilgjengelig på sine nettsider. Du finner
                kommunens nettside på:
            </Avsnitt>
            <Avsnitt>
                www.[din kommune].kommune.no
                <br />
                f.eks. www.oslo.kommune.no
            </Avsnitt>

            <Undertittel>Hent papirskjema på ditt NAV-kontor</Undertittel>

            <Avsnitt>
                Hvis du ikke finner søknadsskjema på kommunen din sine
                nettsider, kan du hente papirskjema på NAV-kontoret ditt.
            </Avsnitt>
            <Avsnitt>
                Du finner adresse og telefonnummer til ditt nærmeste kontor
                under finn{" "}
                <Lenke
                    href={
                        "https://www.nav.no/person/personopplysninger/#ditt-nav-kontor"
                    }
                >
                    ditt NAV-kontor
                </Lenke>
                .
            </Avsnitt>

            <Undertittel>Når du skal levere søknaden</Undertittel>
            <Avsnitt>
                Du kan levere søknaden på{" "}
                <Lenke
                    href={
                        "https://www.nav.no/person/personopplysninger/#ditt-nav-kontor"
                    }
                >
                    ditt NAV-kontor
                </Lenke>{" "}
                eller sende den i posten.
            </Avsnitt>

            <Undertittel>Hvis du trenger hjelp</Undertittel>
            <Avsnitt>
                Ta kontakt med{" "}
                <Lenke
                    href={
                        "https://www.nav.no/person/personopplysninger/#ditt-nav-kontor"
                    }
                >
                    ditt NAV-kontor
                </Lenke>{" "}
                hvis du trenger hjelp til å finne søknadsskjema eller fylle ut
                søknaden.
            </Avsnitt>
        </Artikkel>
    );
};

export default SoknadPaPapirBokmal;
