import * as React from "react";
import {
    Normaltekst,
    Undertittel,
    Element,
    Innholdstittel,
} from "nav-frontend-typografi";
import Artikkel from "../Artikkel";
import {Hovedknapp} from "nav-frontend-knapper";
import Lesmerpanel from "nav-frontend-lesmerpanel";
import SokDigitaltPanel from "./komponenter/SokDigitaltPanel";
import IkkeSokDigitaltPanel from "./komponenter/IkkeSokDigitalt";
import KommuneSok from "./komponenter/kommunesok/Kommunesok";
import "./komponenter/sokSosialhjelp.less";
import {useState} from "react";
import {gaaTilDigitalSoknad} from "../../utils/navigasjon";
import {REST_STATUS} from "../../utils/restUtils";
import useNedetidService from "./komponenter/kommunesok/service/useNedetidService";
import AlertStripe from "nav-frontend-alertstriper";
import Lenke from "nav-frontend-lenker";

const SokSosialhjelpBokmal: React.FC = () => {
    const [kommuneId, setKommuneId] = useState<string | undefined>(undefined);
    const nedetidService = useNedetidService();

    const sokDigital = (event: any) => {
        gaaTilDigitalSoknad(kommuneId);
        event.preventDefault();
    };

    return (
        <Artikkel tittel="Søk om økonomisk sosialhjelp">
            <Innholdstittel>Søk om økonomisk sosialhjelp</Innholdstittel>

            <Normaltekst>
                Du skal søke til NAV-kontoret der du bor. Stadig flere kommuner
                kan ta i mot digitale søknader. Hvis du ikke skal søke digitalt,
                kan du søke med kommunens papirskjema.
            </Normaltekst>

            <br />

            <SokDigitaltPanel>
                <Undertittel className="sok_digitalt_overskrift">
                    Søk digitalt
                </Undertittel>

                {nedetidService.restStatus === REST_STATUS.OK &&
                    nedetidService.payload.isNedetid && (
                        <div>
                            <div style={{paddingBottom: "1rem"}}>
                                <Hovedknapp disabled={true}>
                                    Gå til søknad
                                </Hovedknapp>
                            </div>
                            <AlertStripe
                                type="feil"
                                style={{textAlign: "left"}}
                            >
                                Du kan ikke sende digital søknad i perioden{" "}
                                {nedetidService.payload.nedetidStartText} –{" "}
                                {nedetidService.payload.nedetidSluttText}{" "}
                                grunnet teknisk vedlikehold. Ta kontakt med ditt
                                lokale NAV-kontor hvis du skal søke om økonomisk
                                sosialhjelp i denne perioden.
                            </AlertStripe>
                        </div>
                    )}

                {!(
                    nedetidService.restStatus === REST_STATUS.OK &&
                    nedetidService.payload.isNedetid
                ) && (
                    <Lesmerpanel
                        border={false}
                        apneTekst="Sjekk om du kan søke digitalt i din kommune"
                        intro={
                            <div style={{paddingBottom: "1rem"}}>
                                <Hovedknapp
                                    onClick={(event: any) => sokDigital(event)}
                                >
                                    Gå til søknad
                                </Hovedknapp>
                            </div>
                        }
                    >
                        <KommuneSok
                            ledetekst="Sjekk om du kan søke digitalt i din kommune"
                            soknadTilgjengeligTekst="Du kan søke digitalt i"
                            soknadIkkeTilgjengeligTekst="kan dessverre ikke ta i mot digitale søknader ennå. Du kan søke på papirskjema."
                            placeholderTekst="Skriv kommunenavn"
                            ariaLabel="Søk etter kommunenavn"
                            onValgtKommune={(kommuneId: string | undefined) =>
                                setKommuneId(kommuneId)
                            }
                        />
                    </Lesmerpanel>
                )}
            </SokDigitaltPanel>

            <br />
            <br />

            <IkkeSokDigitaltPanel>
                <Undertittel>Hvis du ikke skal søke digitalt</Undertittel>
                <br />
                <Normaltekst>
                    Hvis du ikke skal søke digitalt, kan du levere{" "}
                    <Lenke href={"./soknad-pa-papir?lang=nb"}>
                        søknad på papir
                    </Lenke>
                    .
                </Normaltekst>

                <br />
                <Element>
                    Hvorfor kan ikke alle kommuner ta imot digital søknad?
                </Element>
                <Normaltekst>
                    Stadig flere kommuner kan ta i mot digitale søknader. Hver
                    enkelt kommune bestemmer selv om de skal ta i bruk digital
                    søknad, og eventuelt når det skal skje. Ta kontakt med
                    kommunen din hvis du vil ha svar på om og når du kan søke
                    digitalt i din kommune.
                </Normaltekst>
            </IkkeSokDigitaltPanel>
        </Artikkel>
    );
};

export default SokSosialhjelpBokmal;
