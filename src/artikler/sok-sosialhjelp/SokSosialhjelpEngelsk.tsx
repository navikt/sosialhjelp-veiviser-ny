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
import {REST_STATUS} from "../../utils/restUtils";
import useNedetidService from "./komponenter/kommunesok/service/useNedetidService";
import AlertStripe from "nav-frontend-alertstriper";
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

const SokSosialhjelpEngelsk: React.FC = () => {
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

                <ButtonRow>
                    <a
                        href="/sosialhjelp/soknad/informasjon"
                        className={`knapp knapp--hoved ${getDisabledClassname(
                            nedetidService
                        )}`}
                    >
                        Apply digitally
                    </a>

                    <StyledKnapp
                        href="/sosialhjelp/innsyn"
                        className={`knapp ${getDisabledClassname(
                            nedetidService
                        )}`}
                    >
                        Your applications
                    </StyledKnapp>
                </ButtonRow>

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
                    </>
                )}
            </SokDigitaltPanel>

            <IkkeSokDigitaltPanel>
                <Undertittel>
                    If you are not going to apply digitally
                </Undertittel>

                <Avsnitt>
                    You can use the{" "}
                    <InternLenke href="/sok-papir?lang=en">
                        municipality's own paper form
                    </InternLenke>{" "}
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
