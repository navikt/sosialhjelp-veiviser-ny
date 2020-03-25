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

const AdvarselNedetid: React.FC<{ nedetidService: any }> = ({ nedetidService}) => {
    return <>
        <AlertStripeFeil>
            You cannot send digital application during{" "}
            {nedetidService.payload.nedetidStartTextEn} –{" "}
            {nedetidService.payload.nedetidSluttTextEn} due
            to technical maintenance. Contact your local NAV
            office if you want to apply for social
            assistance during this period.
        </AlertStripeFeil>
        <br/>
    </>;
};

const SokSosialhjelpEngelskKrise: React.FC = () => {
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
            <Innholdstittel>
                Apply digitally
            </Innholdstittel>

            {nedetidService.restStatus === REST_STATUS.OK &&
                nedetidService.payload.isNedetid && (
                    <AdvarselNedetid nedetidService={nedetidService}/>
                )}

            <div>
                <Normaltekst>
                    The digital application has been temporarily updated in a response
                    to the Corona virus:
                </Normaltekst>
                <ul className="punktliste_med_luft">
                    <li>
                        <Normaltekst>
                            All municipalities will enable digital applications shortly.{" "}
                            {tilgjengeligeKommunerService.restStatus === REST_STATUS.OK && (
                                <>
                                    At the moment <b>{antallTilgjengeligKommuner}{" "}
                                    out of 426 municipalities</b> can receive applications digitally.
                                </>
                            )}
                        </Normaltekst>
                        <UnmountClosed isOpened={lesMer}>
                            <div className="kommunesok_midlertidig">
                                <KommuneSok
                                    ledetekst="Check if you can apply digitally in your municipality"
                                    soknadTilgjengeligTekst="You can apply digitally in "
                                    soknadIkkeTilgjengelig={
                                        <span>
                                            is unfortunately not able to accept digital applications.
                                            You can apply using the municipality's own
                                            {" "}
                                            <Lenke href={"./sok-papir?lang=nb"}>
                                                paper form
                                            </Lenke>
                                            .
                                        </span>
                                    }
                                    placeholderTekst="Enter municipality name"
                                    ariaLabel="Search for municipality"
                                    onValgtKommune={(
                                        kommuneId: string | undefined
                                    ) => setKommuneId(kommuneId)}
                                />
                            </div>
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
                            People who are freelancers or self-employed can now temporarily apply while
                            the new solution from NAV is being ready.
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

export default SokSosialhjelpEngelskKrise;
