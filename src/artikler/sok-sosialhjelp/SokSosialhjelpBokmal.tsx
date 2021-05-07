import * as React from "react";
import {
    Normaltekst,
    Undertittel,
    Element,
    Innholdstittel,
} from "nav-frontend-typografi";
import Artikkel from "../Artikkel";
import {Hovedknapp, Knapp} from "nav-frontend-knapper";
import SokDigitaltPanel from "./komponenter/SokDigitaltPanel";
import IkkeSokDigitaltPanel from "./komponenter/IkkeSokDigitalt";
import KommuneSok from "./komponenter/kommunesok/Kommunesok";
import "./komponenter/sokSosialhjelp.less";
import {useState} from "react";
import {REST_STATUS} from "../../utils/restUtils";
import useNedetidService from "./komponenter/kommunesok/service/useNedetidService";
import AlertStripe from "nav-frontend-alertstriper";
import Lenke from "nav-frontend-lenker";
import {UnmountClosed} from "react-collapse";
import AapneLukkeLenke from "./komponenter/aapneLukkeLenke/AapneLukkeLenke";
import useTilgjengeligeKommunerService, {
    antallKommuner,
} from "./komponenter/kommunesok/service/useTilgjengeligeKommunerService";
import HjelpeVideo from "./komponenter/hjelpevideo/HjelpeVideo";
import {
    ANTALL_KOMMUNER,
    ButtonRow,
    getDisabledClassname,
    StyledKnapp,
} from "./SokSosialhjelp";
import {Avsnitt} from "../../komponenter/avsnitt/Avsnitt";
import {InternLenke} from "../../komponenter/InternLenke";
import useKommuneNrService from "./komponenter/kommunesok/service/useKommuneNrService";

const SokSosialhjelpBokmal: React.FC = () => {
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
                Du skal søke til NAV-kontoret der du bor. Stadig flere kommuner
                kan ta i mot digitale søknader. Hvis du ikke skal søke digitalt,
                kan du søke med kommunens papirskjema.
            </Avsnitt>

            <SokDigitaltPanel>
                <Undertittel className="sok_digitalt_overskrift">
                    Søk digitalt
                </Undertittel>

                {nedetidService.restStatus === REST_STATUS.OK &&
                    nedetidService.payload.isNedetid && (
                        <AlertStripe type="feil" style={{textAlign: "left"}}>
                            Du kan ikke sende digital søknad i perioden{" "}
                            {nedetidService.payload.nedetidStartText} –{" "}
                            {nedetidService.payload.nedetidSluttText} grunnet
                            teknisk vedlikehold. Ta kontakt med ditt lokale
                            NAV-kontor hvis du skal søke om økonomisk
                            sosialhjelp i denne perioden.
                        </AlertStripe>
                    )}

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
                </Avsnitt>
                {!(
                    nedetidService.restStatus === REST_STATUS.OK &&
                    nedetidService.payload.isNedetid
                ) && (
                    <>
                        <UnmountClosed isOpened={lesMer}>
                            <KommuneSok
                                ledetekst="Sjekk om du kan søke digitalt i din kommune"
                                soknadOgInnsynTilgjengeligTekst={
                                    <>
                                        Du kan søke digitalt i{" "}
                                        {valgtKommuneNavn}. Du kan også følge{" "}
                                        <Lenke href="https://www.nav.no/sosialhjelp/innsyn">
                                            statusen på søknaden
                                        </Lenke>{" "}
                                        din på nav.no.
                                    </>
                                }
                                soknadTilgjengeligUtenInnsynTekst={
                                    <>
                                        Du kan søke digitalt i{" "}
                                        {valgtKommuneNavn}. Snart kan du også
                                        følge{" "}
                                        <InternLenke href="./status-soknad?lang=nb">
                                            status på søknaden
                                        </InternLenke>{" "}
                                        din på nav.no.
                                    </>
                                }
                                soknadIkkeTilgjengeligTekst={
                                    <>
                                        Du kan dessverre ikke søke digitalt i{" "}
                                        {valgtKommuneNavn} ennå. Du kan{" "}
                                        <Lenke href={"./sok-papir?lang=nb"}>
                                            søke på papirskjema
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
                <Undertittel>Hvis du ikke skal søke digitalt</Undertittel>

                <Avsnitt>
                    Hvis du ikke skal søke digitalt, kan du levere{" "}
                    <InternLenke href="/sok-papir?lang=nb">
                        søknad på papir
                    </InternLenke>
                    .
                </Avsnitt>

                <Element>
                    Hvorfor kan ikke alle kommuner ta imot digital søknad?
                </Element>
                <Avsnitt>
                    Stadig flere kommuner kan ta i mot digitale søknader. Hver
                    enkelt kommune bestemmer selv om de skal ta i bruk digital
                    søknad, og eventuelt når det skal skje. Ta kontakt med
                    kommunen din hvis du vil ha svar på om og når du kan søke
                    digitalt i din kommune.
                </Avsnitt>
            </IkkeSokDigitaltPanel>

            <Undertittel>Kom i gang med digital søknad</Undertittel>
            <HjelpeVideo tittel="Kom i gang" />
        </Artikkel>
    );
};

export default SokSosialhjelpBokmal;
