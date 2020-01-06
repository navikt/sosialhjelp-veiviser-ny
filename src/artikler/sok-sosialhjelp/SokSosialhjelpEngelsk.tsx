import * as React from "react";
import {
    Normaltekst,
    Undertittel,
    Element,
    Innholdstittel,
} from "nav-frontend-typografi";
import Artikkel from "../Artikkel";
import {Hovedknapp} from "nav-frontend-knapper";
import Lesmerpanel from "nav-frontend-lesmerpanel";
import SokDigitaltPanel from "./komponenter/SokDigitaltPanel";
import IkkeSokDigitaltPanel from "./komponenter/IkkeSokDigitalt";
import KommuneSok from "./komponenter/kommunesok/Kommunesok";
import "./komponenter/sokSosialhjelp.less";
import {useState} from "react";
import {gaaTilDigitalSoknad} from "../../utils/navigasjon";
import {REST_STATUS} from "../../utils/restUtils";
import useNedetidService from "./komponenter/kommunesok/service/useNedetidService";
import AlertStripe from "nav-frontend-alertstriper";

const SokSosialhjelpEngelsk: React.FC = () => {
    const [kommuneId, setKommuneId] = useState<string | undefined>(undefined);
    const nedetidService = useNedetidService();

    const sokDigital = (event: any) => {
        gaaTilDigitalSoknad(kommuneId);
        event.preventDefault();
    };

    return (
        <Artikkel tittel="Apply for financial assistance">
            <Innholdstittel>Apply for financial assistance</Innholdstittel>

            <Normaltekst>
                You must apply to the NAV office in the municipality where you
                live. A growing number of municipalities support digital
                applications online at nav.no. You can still use the
                municipality's own paper form if you are not going to apply
                digitally.
            </Normaltekst>

            <br />

            <SokDigitaltPanel>
                <Undertittel className="sok_digitalt_overskrift">
                    Apply digitally
                </Undertittel>

                {/* Midlertidig driftsmelding mens adressesøk gir problemer i Stavanger */}
                <div>
                    <AlertStripe type="info" style={{textAlign: "left"}}>
                        Some users will see an error message indicating that there
                        is something wrong with their address. We are currently working on a fix.
                    </AlertStripe>
                </div>

                {nedetidService.restStatus === REST_STATUS.OK && nedetidService.payload.isNedetid && (
                    <div>
                        <div style={{paddingBottom: "1rem"}}>
                            <Hovedknapp disabled={true}>
                                Gå til søknad
                            </Hovedknapp>
                        </div>
                        <AlertStripe type="feil" style={{textAlign: "left"}}>
                            You cannot send digital application during {nedetidService.payload.nedetidStartTextEn} – {nedetidService.payload.nedetidSluttTextEn} due to technical maintenance.
                            Contact your local NAV office if you want to apply for social assistance during this period.
                        </AlertStripe>
                    </div>
                )}

                {!(nedetidService.restStatus === REST_STATUS.OK && nedetidService.payload.isNedetid) && (
                <Lesmerpanel
                    border={false}
                    apneTekst="Check if your municipality support digital applications"
                    lukkTekst="Close"
                    intro={
                        <div style={{paddingBottom: "1rem"}}>
                            <Hovedknapp
                                onClick={(event: any) => sokDigital(event)}
                            >
                                Apply digitally
                            </Hovedknapp>
                        </div>
                    }
                >
                    <KommuneSok
                        ledetekst="Check if you can apply digitally in your municipality"
                        soknadTilgjengeligTekst="You can apply digitally in "
                        soknadIkkeTilgjengeligTekst="is unfortunately not able to accept digital applications. You can apply using the municipality's own paper form."
                        placeholderTekst="Enter municipality name"
                        ariaLabel="Search for municipality"
                        onValgtKommune={(kommuneId: string|undefined) =>
                            setKommuneId(kommuneId)
                        }
                    />
                </Lesmerpanel>
                )}
            </SokDigitaltPanel>

            <br />
            <br />

            <IkkeSokDigitaltPanel>
                <Undertittel>
                    If you are not going to apply digitally
                </Undertittel>

                <Lesmerpanel
                    intro={
                        <Normaltekst>
                            You can use the municipality's own paper form if you
                            are not going to apply digitally.
                        </Normaltekst>
                    }
                    border={false}
                    apneTekst="Read more"
                    lukkTekst="Close"
                >
                    <Element>
                        Where can you find the municipality's paper form?
                    </Element>
                    <Normaltekst>
                        You can find paper forms at all NAV offices. Many
                        municipalities also have a paper form that can be
                        downloaded on their website.
                    </Normaltekst>
                    <br />
                    <Element>
                        Why can't all municipalities accept digital
                        applications?
                    </Element>
                    <Normaltekst>
                        A growing number of municipalities support digital
                        applications, but it is up to each municipality to
                        decide when and if they are going to support this.
                        Contact your municipality for more details of their
                        plans.
                    </Normaltekst>
                </Lesmerpanel>
            </IkkeSokDigitaltPanel>
        </Artikkel>
    );
};

export default SokSosialhjelpEngelsk;
