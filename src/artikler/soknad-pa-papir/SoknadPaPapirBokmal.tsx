import * as React from "react";
import {Innholdstittel, Normaltekst, Undertittel} from "nav-frontend-typografi";
import Ekspanderbartpanel from "nav-frontend-ekspanderbartpanel";
import Lenke from "nav-frontend-lenker";
import Artikkel from "../Artikkel";
import IllustrasjonBygningPerson from "../../komponenter/bilder/IllustrasjonBygningPerson";
import "../artikkel.less";

const SoknadPaPapirBokmal: React.FC = () => {
    return (
        <Artikkel
            tittel="Hvor finner du søknadsskjema på papir"
            illustrasjon={
                <IllustrasjonBygningPerson className="illustrasjon" />
            }
        >
            <Innholdstittel>
                Hvor finner du søknadsskjema på papir
            </Innholdstittel>
            <Normaltekst>
                Dessverre finnes det ikke et felles papirskjema for økonomisk
                sosialhjelp. Hver kommune har et eget søknadskjema som du kan
                benytte hvis du ikke kan søke digitalt.
            </Normaltekst>

            <Undertittel>Last ned papirskjema på nett</Undertittel>

            <Normaltekst>
                Du finner ikke papirskjema på NAV.no, men mange kommuner har
                søknadskjema sitt tilgjengelig på sine nettsider. Du finner
                kommunens nettside på:
            </Normaltekst>
            <br />
            <Normaltekst>
                www.[din kommune].kommune.no
                <br />
                f.eks. www.oslo.kommune.no
            </Normaltekst>

            <Undertittel>Hent papirskjema på ditt NAV-kontor</Undertittel>

            <Normaltekst>
                Hvis du ikke finner søknadsskjema på kommunen din sine
                nettsider, kan du hente papirskjema på NAV-kontoret ditt.
            </Normaltekst>
            <br />
            <Normaltekst>
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
            </Normaltekst>

            <Undertittel>Når du skal levere søknaden</Undertittel>
            <Normaltekst>
                Du kan levere søknaden på{" "}
                <Lenke
                    href={
                        "https://www.nav.no/person/personopplysninger/#ditt-nav-kontor"
                    }
                >
                    ditt NAV-kontor
                </Lenke>{" "}
                eller sende den i posten.
            </Normaltekst>

            <Undertittel>Hvis du trenger hjelp</Undertittel>
            <Normaltekst>
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
            </Normaltekst>
        </Artikkel>
    );
};

export default SoknadPaPapirBokmal;
