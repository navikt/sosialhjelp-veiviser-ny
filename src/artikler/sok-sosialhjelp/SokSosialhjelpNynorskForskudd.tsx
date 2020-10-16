import * as React from "react";
import {Normaltekst, Innholdstittel} from "nav-frontend-typografi";
import Artikkel from "../Artikkel";
import {Hovedknapp} from "nav-frontend-knapper";
import KommuneSok from "./komponenter/kommunesok/Kommunesok";
import "./komponenter/sokSosialhjelp.less";
import {useState} from "react";
import {gaaTilDigitalSoknad} from "../../utils/navigasjon";
import {REST_STATUS} from "../../utils/restUtils";
import useNedetidService from "./komponenter/kommunesok/service/useNedetidService";
import {AlertStripeFeil} from "nav-frontend-alertstriper";
import Lenke from "nav-frontend-lenker";
import {UnmountClosed} from "react-collapse";
import HjelpeVideo from "./komponenter/hjelpevideo/HjelpeVideo";
import AapneLukkeLenke from "./komponenter/aapneLukkeLenke/AapneLukkeLenke";
import useTilgjengeligeKommunerService from "./komponenter/kommunesok/service/useTilgjengeligeKommunerService";
import {ANTALL_KOMMUNER} from "./SokSosialhjelp";
import useKommuneNrService from "./komponenter/kommunesok/service/useKommuneNrService";
import {InternLenke} from "../../komponenter/InternLenke";

const AdvarselNedetid: React.FC<{nedetidService: any}> = ({nedetidService}) => {
    return (
        <>
            <AlertStripeFeil>
                Du kan ikke sende digital søknad i perioden{" "}
                {nedetidService.payload.nedetidStartText} –{" "}
                {nedetidService.payload.nedetidSluttText} grunnet teknisk
                vedlikehold. Ta kontakt med ditt lokale NAV-kontor hvis du skal
                søke om økonomisk sosialhjelp i denne perioden.
            </AlertStripeFeil>
            <br />
        </>
    );
};

const SokSosialhjelpNynorskForskudd: React.FC = () => {
    const [kommuneId, setKommuneId] = useState<string | undefined>(undefined);
    const [valgtKommuneNavn, setValgtKommuneNavn] = useState("");
    const nedetidService = useNedetidService();

    const sokDigital = (event: any) => {
        gaaTilDigitalSoknad(kommuneId);
        event.preventDefault();
    };

    const [lesMer, setLesMer] = useState<boolean>(false);

    const tilgjengeligeKommunerService = useTilgjengeligeKommunerService();
    const kommuneNrService = useKommuneNrService();

    let antallTilgjengeligKommuner: string = "";
    if (tilgjengeligeKommunerService.restStatus === REST_STATUS.OK) {
        antallTilgjengeligKommuner = tilgjengeligeKommunerService.payload.results.length.toString();
    }

    return (
        <Artikkel tittel="Søk om økonomisk sosialhjelp">
            <Innholdstittel>Søk om økonomisk sosialhjelp</Innholdstittel>

            {nedetidService.restStatus === REST_STATUS.OK &&
                nedetidService.payload.isNedetid && (
                    <AdvarselNedetid nedetidService={nedetidService} />
                )}

            <div>
                <Normaltekst>
                    Det er gjort mellombelse endringar av den digitale søknaden
                    som følgje av koronaviruset:
                </Normaltekst>
                <ul className="punktliste_med_luft">
                    <li>
                        <Normaltekst>
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
                        </Normaltekst>
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
                    </li>
                    <li>
                        <Normaltekst>
                            Søknaden kan også brukast som inntektssikring for
                            frilansarar og sjølvstendig næringsdrivande fram til
                            ny løysing er på plass hjå NAV.
                        </Normaltekst>
                    </li>
                </ul>
            </div>

            <div className="sok_sosialhjelp_hovedknapp">
                <Hovedknapp
                    disabled={
                        nedetidService.restStatus === REST_STATUS.OK &&
                        nedetidService.payload.isNedetid
                    }
                    onClick={(event: any) => sokDigital(event)}
                >
                    Søk digitalt
                </Hovedknapp>
            </div>
            <br />
            <h3>Kom i gang med digital søknad</h3>
            <HjelpeVideo tittel="Kom i gang" />
        </Artikkel>
    );
};

export default SokSosialhjelpNynorskForskudd;
