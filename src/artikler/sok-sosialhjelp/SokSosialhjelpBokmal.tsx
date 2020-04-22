import * as React from "react";
import {
    Normaltekst,
    Undertittel,
    Element,
    Innholdstittel,
} from "nav-frontend-typografi";
import Artikkel from "../Artikkel";
import {Hovedknapp} from "nav-frontend-knapper";
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
import {UnmountClosed} from "react-collapse";
import AapneLukkeLenke from "./komponenter/aapneLukkeLenke/AapneLukkeLenke";
import useTilgjengeligeKommunerService from "./komponenter/kommunesok/service/useTilgjengeligeKommunerService";
import HjelpeVideo from "./komponenter/hjelpevideo/HjelpeVideo";
import {ANTALL_KOMMUNER} from "./SokSosialhjelp";

const SokSosialhjelpBokmal: React.FC = () => {
    const [kommuneId, setKommuneId] = useState<string | undefined>(undefined);
    const nedetidService = useNedetidService();

    const sokDigital = (event: any) => {
        gaaTilDigitalSoknad(kommuneId);
        event.preventDefault();
    };

    const [lesMer, setLesMer] = useState<boolean>(false);

    const tilgjengeligeKommunerService = useTilgjengeligeKommunerService();

    let antallTilgjengeligKommuner: string = "";
    if (tilgjengeligeKommunerService.restStatus === REST_STATUS.OK) {
        antallTilgjengeligKommuner = tilgjengeligeKommunerService.payload.results.length.toString();
    }

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

                <Hovedknapp
                    style={{marginTop: "1.5rem", marginBottom: "2rem"}}
                    disabled={
                        nedetidService.restStatus === REST_STATUS.OK &&
                        nedetidService.payload.isNedetid
                    }
                    onClick={(event: any) => sokDigital(event)}
                >
                    Søk digitalt
                </Hovedknapp>

                <Normaltekst>
                    Digital søknad om økonomisk sosialhjelp skal innen kort tid
                    være tilgjengelig for hele landet.{" "}
                    {tilgjengeligeKommunerService.restStatus ===
                        REST_STATUS.OK && (
                        <>
                            Foreløpig kan{" "}
                            <b>
                                {antallTilgjengeligKommuner} av{" "}
                                {ANTALL_KOMMUNER} kommuner
                            </b>{" "}
                            ta imot digital søknad.
                        </>
                    )}
                </Normaltekst>
                <br />
                {!(
                    nedetidService.restStatus === REST_STATUS.OK &&
                    nedetidService.payload.isNedetid
                ) && (
                    <>
                        <UnmountClosed isOpened={lesMer}>
                            <div className="kommunesok_midlertidig">
                                <KommuneSok
                                    ledetekst="Sjekk om du kan søke digitalt i din kommune"
                                    soknadTilgjengeligTekst="Du kan søke digitalt i"
                                    soknadIkkeTilgjengelig={
                                        <span>
                                            kan dessverre ikke ta i mot digitale
                                            søknader ennå. Du kan{" "}
                                            <Lenke href={"./sok-papir?lang=nb"}>
                                                søke på papirskjema
                                            </Lenke>
                                            .
                                        </span>
                                    }
                                    placeholderTekst="Skriv kommunenavn"
                                    ariaLabel="Søk etter kommunenavn"
                                    onValgtKommune={(
                                        kommuneId: string | undefined
                                    ) => setKommuneId(kommuneId)}
                                />
                            </div>
                        </UnmountClosed>

                        <Normaltekst>
                            <AapneLukkeLenke
                                aapneTekst="Sjekk om du kan søke digitalt i din kommune"
                                lukkeTekst="Lukk"
                                aapen={lesMer}
                                onClick={() => setLesMer(!lesMer)}
                            />
                        </Normaltekst>
                    </>
                )}
            </SokDigitaltPanel>

            <br />
            <br />

            <IkkeSokDigitaltPanel>
                <Undertittel>Hvis du ikke skal søke digitalt</Undertittel>
                <br />
                <Normaltekst>
                    Hvis du ikke skal søke digitalt, kan du levere{" "}
                    <Lenke href={"./sok-papir?lang=nb"}>søknad på papir</Lenke>.
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
            <br />
            <h3>Kom i gang med digital søknad</h3>
            <HjelpeVideo tittel="Kom i gang" />
        </Artikkel>
    );
};

export default SokSosialhjelpBokmal;
