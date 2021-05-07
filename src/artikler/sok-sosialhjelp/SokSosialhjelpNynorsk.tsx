import * as React from "react";
import {
    Normaltekst,
    Undertittel,
    Element,
    Innholdstittel,
} from "nav-frontend-typografi";
import Artikkel from "../Artikkel";
import SokDigitaltPanel from "./komponenter/SokDigitaltPanel";
import IkkeSokDigitaltPanel from "./komponenter/IkkeSokDigitalt";
import KommuneSok from "./komponenter/kommunesok/Kommunesok";
import "./komponenter/sokSosialhjelp.less";
import {useState} from "react";
import AlertStripe from "nav-frontend-alertstriper";
import useNedetidService from "./komponenter/kommunesok/service/useNedetidService";
import {REST_STATUS} from "../../utils/restUtils";
import Lenke from "nav-frontend-lenker";
import useTilgjengeligeKommunerService, {
    antallKommuner,
} from "./komponenter/kommunesok/service/useTilgjengeligeKommunerService";
import AapneLukkeLenke from "./komponenter/aapneLukkeLenke/AapneLukkeLenke";
import {UnmountClosed} from "react-collapse";
import {
    ANTALL_KOMMUNER,
    ButtonRow,
    getDisabledClassname,
    StyledKnapp,
} from "./SokSosialhjelp";
import {Avsnitt} from "../../komponenter/avsnitt/Avsnitt";
import {InternLenke} from "../../komponenter/InternLenke";
import useKommuneNrService from "./komponenter/kommunesok/service/useKommuneNrService";

const SokSosialhjelpNynorsk: React.FC = () => {
    const [kommuneId, setKommuneId] = useState<string | undefined>(undefined);
    const [valgtKommuneNavn, setValgtKommuneNavn] = useState("");
    const nedetidService = useNedetidService();

    const [lesMer, setLesMer] = useState<boolean>(false);

    const tilgjengeligeKommunerService = useTilgjengeligeKommunerService();
    const kommuneNrService = useKommuneNrService();

    let antallTilgjengeligKommuner: string = "";
    if (tilgjengeligeKommunerService.restStatus === REST_STATUS.OK) {
        antallTilgjengeligKommuner = antallKommuner(
            tilgjengeligeKommunerService.payload.results
        );
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
                        <AlertStripe type="feil" style={{textAlign: "left"}}>
                            Du kan ikkje sende digital søknad i perioden{" "}
                            {nedetidService.payload.nedetidStartText} –{" "}
                            {nedetidService.payload.nedetidSluttText} grunna
                            teknisk vedlikehald. Ta kontakt med ditt lokale
                            NAV-kontor viss du skal søkje om økonomisk
                            sosialhjelp i denne perioden.
                        </AlertStripe>
                    )}

                {!(
                    nedetidService.restStatus === REST_STATUS.OK &&
                    nedetidService.payload.isNedetid
                ) && (
                    <>
                        <ButtonRow>
                            <a
                                href="/sosialhjelp/soknad/informasjon"
                                className={`knapp knapp--hoved ${getDisabledClassname(
                                    nedetidService
                                )}`}
                            >
                                Søk digitalt
                            </a>

                            <StyledKnapp
                                href="/sosialhjelp/innsyn"
                                className={`knapp ${getDisabledClassname(
                                    nedetidService
                                )}`}
                            >
                                Dine søknader
                            </StyledKnapp>
                        </ButtonRow>

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
                                soknadOgInnsynTilgjengeligTekst={
                                    <>
                                        Du kan søkje digitalt i{" "}
                                        {valgtKommuneNavn}. Du kan også følge{" "}
                                        <Lenke href="https://www.nav.no/sosialhjelp/innsyn">
                                            status på søknaden
                                        </Lenke>{" "}
                                        din på nav.no.
                                    </>
                                }
                                soknadTilgjengeligUtenInnsynTekst={
                                    <>
                                        Du kan søkje digitalt i{" "}
                                        {valgtKommuneNavn}. Snart kan du også
                                        følge{" "}
                                        <InternLenke href="/status-soknad?lang=nn">
                                            status på søknaden
                                        </InternLenke>{" "}
                                        din på nav.no.
                                    </>
                                }
                                soknadIkkeTilgjengeligTekst={
                                    <>
                                        Du kan dessverre ikkje søkje digitalt i{" "}
                                        {valgtKommuneNavn} enno. Du kan{" "}
                                        <Lenke href={"./sok-papir?lang=nn"}>
                                            søkje på papirskjema
                                        </Lenke>
                                        .
                                    </>
                                }
                                placeholderTekst="Skriv kommunenavn"
                                ariaLabel="Søk etter kommunenavn"
                                tilgjengeligeKommunerService={
                                    tilgjengeligeKommunerService
                                }
                                kommuneNrService={kommuneNrService}
                                onValgtKommune={(
                                    kommuneId: string | undefined
                                ) => setKommuneId(kommuneId)}
                                setValgtKommuneNavn={(kommuneNavn: string) =>
                                    setValgtKommuneNavn(kommuneNavn)
                                }
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
                    <InternLenke href="/sok-papir?lang=nn">
                        søknad på papir
                    </InternLenke>
                    .
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
