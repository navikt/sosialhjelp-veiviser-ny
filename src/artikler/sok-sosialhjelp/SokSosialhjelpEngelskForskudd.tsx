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
import useTilgjengeligeKommunerService from "./komponenter/kommunesok/service/useTilgjengeligeKommunerService";
import AapneLukkeLenke from "./komponenter/aapneLukkeLenke/AapneLukkeLenke";
import {ANTALL_KOMMUNER} from "./SokSosialhjelp";
import useKommuneNrService from "./komponenter/kommunesok/service/useKommuneNrService";
import {InternLenke} from "../../komponenter/InternLenke";

const AdvarselNedetid: React.FC<{nedetidService: any}> = ({nedetidService}) => {
    return (
        <>
            <AlertStripeFeil>
                You cannot send digital application during{" "}
                {nedetidService.payload.nedetidStartTextEn} –{" "}
                {nedetidService.payload.nedetidSluttTextEn} due to technical
                maintenance. Contact your local NAV office if you want to apply
                for social assistance during this period.
            </AlertStripeFeil>
            <br />
        </>
    );
};

const SokSosialhjelpEngelskForskudd: React.FC = () => {
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
            <Innholdstittel>Apply digitally</Innholdstittel>

            {nedetidService.restStatus === REST_STATUS.OK &&
                nedetidService.payload.isNedetid && (
                    <AdvarselNedetid nedetidService={nedetidService} />
                )}

            <div>
                <Normaltekst>
                    The digital application has been temporarily updated in a
                    response to the Corona virus:
                </Normaltekst>
                <ul className="punktliste_med_luft">
                    <li>
                        <Normaltekst>
                            All municipalities will enable digital applications
                            shortly.{" "}
                            {tilgjengeligeKommunerService.restStatus ===
                                REST_STATUS.OK && (
                                <>
                                    At the moment{" "}
                                    <b>
                                        {antallTilgjengeligKommuner} out of{" "}
                                        {ANTALL_KOMMUNER} municipalities
                                    </b>{" "}
                                    can receive applications digitally.
                                </>
                            )}
                        </Normaltekst>
                        <UnmountClosed isOpened={lesMer}>
                            <KommuneSok
                                ledetekst="Check if you can apply digitally in your municipality"
                                soknadOgInnsynTilgjengeligTekst={
                                    <>
                                        You can apply digitally in{" "}
                                        {valgtKommuneNavn}. You can also follow
                                        the{" "}
                                        <Lenke href="https://www.nav.no/sosialhjelp/innsyn">
                                            status of your application
                                        </Lenke>{" "}
                                        online.
                                    </>
                                }
                                soknadTilgjengeligUtenInnsynTekst={
                                    <>
                                        You can apply digitally in{" "}
                                        {valgtKommuneNavn}. Soon you will also
                                        be able to follow the{" "}
                                        <InternLenke href="./status-soknad?lang=en">
                                            status of your application
                                        </InternLenke>{" "}
                                        online.
                                    </>
                                }
                                soknadIkkeTilgjengeligTekst={
                                    <>
                                        {valgtKommuneNavn} is unfortunately not
                                        yet able to accept digital applications.
                                        You can apply using the{" "}
                                        <Lenke href={"./sok-papir?lang=en"}>
                                            municipality's own paper form
                                        </Lenke>
                                        .
                                    </>
                                }
                                placeholderTekst="Enter municipality name"
                                ariaLabel="Search for municipality"
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
                                aapneTekst="Check if your municipality support digital applications"
                                lukkeTekst="Close"
                                aapen={lesMer}
                                onClick={() => setLesMer(!lesMer)}
                            />
                        </Normaltekst>
                    </li>
                    <li>
                        <Normaltekst>
                            People who are freelancers or self-employed can now
                            temporarily apply while the new solution from NAV is
                            being ready.
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
                    Apply digitally
                </Hovedknapp>
            </div>
            <br />
        </Artikkel>
    );
};

export default SokSosialhjelpEngelskForskudd;
