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
import useTilgjengeligeKommunerService from "./komponenter/kommunesok/service/useTilgjengeligeKommunerService";
import AapneLukkeLenke from "./komponenter/aapneLukkeLenke/AapneLukkeLenke";
import {UnmountClosed} from "react-collapse";
import {ANTALL_KOMMUNER} from "./SokSosialhjelp";
import {Avsnitt} from "../../komponenter/avsnitt/Avsnitt";

const SokSosialhjelpEngelsk: React.FC = () => {
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
        <Artikkel tittel="Apply for financial assistance">
            <Innholdstittel>Apply for financial assistance</Innholdstittel>

            <Avsnitt>
                You must apply to the NAV office in the municipality where you
                live. A growing number of municipalities support digital
                applications online at nav.no. You can still use the
                municipality's own paper form if you are not going to apply
                digitally.
            </Avsnitt>

            <SokDigitaltPanel>
                <Undertittel className="sok_digitalt_overskrift">
                    Apply digitally
                </Undertittel>

                <Hovedknapp
                    style={{marginTop: "1.5rem", marginBottom: "2rem"}}
                    onClick={(event: any) => sokDigital(event)}
                >
                    Apply digitally
                </Hovedknapp>

                <Avsnitt>
                    All municipalities should be able to receive digital
                    applications shortly.{" "}
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
                </Avsnitt>

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
                                You cannot send digital application during{" "}
                                {nedetidService.payload.nedetidStartTextEn} –{" "}
                                {nedetidService.payload.nedetidSluttTextEn} due
                                to technical maintenance. Contact your local NAV
                                office if you want to apply for social
                                assistance during this period.
                            </AlertStripe>
                        </div>
                    )}

                {!(
                    nedetidService.restStatus === REST_STATUS.OK &&
                    nedetidService.payload.isNedetid
                ) && (
                    <>
                        <UnmountClosed isOpened={lesMer}>
                            <KommuneSok
                                ledetekst="Check if you can apply digitally in your municipality"
                                soknadTilgjengeligTekst="You can apply digitally in "
                                soknadIkkeTilgjengelig={
                                    <span>
                                        is unfortunately not yet able to accept
                                        digital applications. You can apply
                                        using the{" "}
                                        <Lenke href={"./sok-papir?lang=en"}>
                                            municipality's own paper form
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
                        </UnmountClosed>

                        <Normaltekst>
                            <AapneLukkeLenke
                                aapneTekst="Check if your municipality support digital applications"
                                lukkeTekst="Close"
                                aapen={lesMer}
                                onClick={() => setLesMer(!lesMer)}
                            />
                        </Normaltekst>
                    </>
                )}
            </SokDigitaltPanel>

            <IkkeSokDigitaltPanel>
                <Undertittel>
                    If you are not going to apply digitally
                </Undertittel>

                <Avsnitt>
                    You can use the{" "}
                    <Lenke href={"./sok-papir?lang=en"}>
                        municipality's own paper form
                    </Lenke>{" "}
                    if you are not going to apply digitally.
                </Avsnitt>

                <Element>
                    Why can't all municipalities accept digital applications?
                </Element>
                <Avsnitt>
                    A growing number of municipalities support digital
                    applications, but it is up to each municipality to decide
                    when and if they are going to support this. Contact your
                    municipality for more details of their plans.
                </Avsnitt>
            </IkkeSokDigitaltPanel>
        </Artikkel>
    );
};

export default SokSosialhjelpEngelsk;
