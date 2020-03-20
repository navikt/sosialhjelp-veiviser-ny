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
import {NedChevron, OppChevron} from "nav-frontend-chevron";

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

    const [lesMer, setLesMer] = useState<boolean>(true);

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
                    Det er gjort midlertidige endringer av den digitale søknaden
                    som følge av koronaviruset:
                </Normaltekst>
                <ul className="punktliste_med_luft">
                    <li>
                        <Normaltekst>
                            Søknaden skal også brukes av frilansere og selvstendig næringsdrivende
                            som søknad om midlertidig inntektssikring frem til
                            ny løsning er på plass hos NAV.
                        </Normaltekst>
                    </li>
                    <li>
                        <Normaltekst>
                            Alle kommuner skal innen kort tid ha digital søknad
                            tilgjengelig. Foreløpig er 321 av 426 kommuner
                            tilgjengelig.
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
                            <a
                                href=".?sjekk_kommune=true"
                                className="lenke"
                                onClick={event => {
                                    setLesMer(!lesMer);
                                    event.preventDefault();
                                }}
                            >
                                {!lesMer && (
                                    <>
                                        Check if your municipality support digital applications
                                        <NedChevron />
                                    </>
                                )}
                                {lesMer && (
                                    <>
                                        Close <OppChevron />
                                    </>
                                )}
                            </a>
                        </Normaltekst>
                    </li>
                </ul>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    padding: "1rem",
                }}
            >
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
