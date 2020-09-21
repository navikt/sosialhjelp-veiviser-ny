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
import AlertStripe from "nav-frontend-alertstriper";
import useNedetidService from "./komponenter/kommunesok/service/useNedetidService";
import {REST_STATUS} from "../../utils/restUtils";
import Lenke from "nav-frontend-lenker";
import useTilgjengeligeKommunerService from "./komponenter/kommunesok/service/useTilgjengeligeKommunerService";
import AapneLukkeLenke from "./komponenter/aapneLukkeLenke/AapneLukkeLenke";
import {UnmountClosed} from "react-collapse";
import {ANTALL_KOMMUNER} from "./SokSosialhjelp";
import {Avsnitt} from "../../komponenter/avsnitt/Avsnitt";

const SokSosialhjelpNynorsk: React.FC = () => {
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

            <Avsnitt>
                Du skal søkje til NAV-kontoret der du bur. Stadig fleire
                kommunar kan ta imot digitale søknader. Dersom du ikkje skal
                søkje digitalt, kan du søkje med kommunen sitt papirskjema.
            </Avsnitt>

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
                                Du kan ikkje sende digital søknad i perioden{" "}
                                {nedetidService.payload.nedetidStartText} –{" "}
                                {nedetidService.payload.nedetidSluttText} grunna
                                teknisk vedlikehald. Ta kontakt med ditt lokale
                                NAV-kontor viss du skal søkje om økonomisk
                                sosialhjelp i denne perioden.
                            </AlertStripe>
                        </div>
                    )}

                {!(
                    nedetidService.restStatus === REST_STATUS.OK &&
                    nedetidService.payload.isNedetid
                ) && (
                    <>
                        <Hovedknapp
                            style={{marginTop: "1.5rem", marginBottom: "2rem"}}
                            onClick={(event: any) => sokDigital(event)}
                        >
                            Søk digitalt
                        </Hovedknapp>

                        <Avsnitt>
                            Digital søknad om økonomisk sosialhjelp vil snart
                            vere tilgjengeleg for heile landet.{" "}
                            {tilgjengeligeKommunerService.restStatus ===
                                REST_STATUS.OK && (
                                <>
                                    Førebels kan{" "}
                                    <b>
                                        {antallTilgjengeligKommuner} av{" "}
                                        {ANTALL_KOMMUNER} kommunar
                                    </b>{" "}
                                    ta imot digital søknad.
                                </>
                            )}
                        </Avsnitt>

                        <UnmountClosed isOpened={lesMer}>
                            <KommuneSok
                                ledetekst="Sjekk om du kan søkje digitalt i din kommune"
                                soknadTilgjengeligTekst="Du kan søkje digitalt i"
                                soknadIkkeTilgjengelig={
                                    <span>
                                        kan dessverre ikkje ta i mot digitale
                                        søknader enno. Du kan{" "}
                                        <Lenke href={"./sok-papir?lang=nn"}>
                                            søkje på papirskjema
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

            <IkkeSokDigitaltPanel>
                <Undertittel>Dersom du ikkje skal søkje digitalt</Undertittel>

                <Avsnitt>
                    Dersom du ikkje skal søkje digitalt, kan du levere{" "}
                    <Lenke href={"./sok-papir?lang=nn"}>søknad på papir</Lenke>.
                </Avsnitt>

                <Element>
                    Kvifor kan ikkje alle kommunar ta imot digital søknad?
                </Element>
                <Avsnitt>
                    Stadig fleire kommunar kan ta imot digitale søknader. Kvar
                    enkelt kommune kan sjølv bestemme om dei vil ta i bruk
                    digital søknad, og eventuelt når det skal skje. Ta kontakt
                    med kommunen din dersom du vil ha svar på om og når du kan
                    søkje digitalt i din kommune.
                </Avsnitt>
            </IkkeSokDigitaltPanel>
        </Artikkel>
    );
};

export default SokSosialhjelpNynorsk;
