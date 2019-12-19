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
import AlertStripe from "nav-frontend-alertstriper";
import useNedetidService from "./komponenter/kommunesok/service/useNedetidService";
import {REST_STATUS} from "../../utils/restUtils";

const SokSosialhjelpNynorsk: React.FC = () => {
    const [kommuneId, setKommuneId] = useState<string | undefined>(undefined);
    const nedetidService = useNedetidService();

    const sokDigital = (event: any) => {
        gaaTilDigitalSoknad(kommuneId);
        event.preventDefault();
    };

    return (
        <Artikkel tittel="Søk om økonomisk sosialhjelp">
            <Innholdstittel>Søk om økonomisk sosialhjelp</Innholdstittel>

            <Normaltekst>
                Du skal søkje til NAV-kontoret der du bur. Stadig fleire
                kommunar kan ta imot digitale søknader. Dersom du ikkje skal
                søkje digitalt, kan du søkje med kommunen sitt papirskjema.
            </Normaltekst>

            <br />

            <SokDigitaltPanel>
                <Undertittel className="sok_digitalt_overskrift">
                    Søk digitalt
                </Undertittel>

                {nedetidService.restStatus === REST_STATUS.OK && nedetidService.payload.isNedetid && (
                    <div>
                        <div style={{paddingBottom: "1rem"}}>
                            <Hovedknapp disabled={true}>
                                Gå til søknad
                            </Hovedknapp>
                        </div>
                        <AlertStripe type="feil" style={{textAlign: "left"}}>
                            Du kan ikkje sende digital søknad i perioden
                            {nedetidService.payload.nedetidStartText} – {nedetidService.payload.nedetidSluttText}
                            grunna teknisk vedlikehald.
                            Ta kontakt med ditt lokale NAV-kontor viss du skal søkje om økonomisk sosialhjelp i denne perioden.
                        </AlertStripe>
                    </div>
                )}

                {!(nedetidService.restStatus === REST_STATUS.OK && nedetidService.payload.isNedetid) && (
                <Lesmerpanel
                    border={false}
                    apneTekst="Sjekk om du kan søkje digitalt i din kommune."
                    intro={
                        <div style={{paddingBottom: "1rem"}}>
                            <Hovedknapp
                                onClick={(event: any) => sokDigital(event)}
                            >
                                Gå til søknad
                            </Hovedknapp>
                        </div>
                    }
                >
                    <KommuneSok
                        ledetekst="Sjekk om du kan søkje digitalt i din kommune"
                        soknadTilgjengeligTekst="Du kan søkje digitalt i"
                        soknadIkkeTilgjengeligTekst="kan dessverre ikkje ta i mot digitale søknader ennå. Du kan søkje på papirskjema."
                        placeholderTekst="Skriv kommunenavn"
                        ariaLabel="Søk etter kommunenavn"
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
                <Undertittel>Dersom du ikkje skal søkje digitalt</Undertittel>

                <Lesmerpanel
                    intro={
                        <Normaltekst>
                            Dersom du ikkje skal søkje digitalt, kan du søkje
                            med kommunen sitt papirskjema.
                        </Normaltekst>
                    }
                    border={false}
                    apneTekst="Les meir"
                >
                    <Element>Kvar finn eg kommunen sitt papirskjemaet?</Element>
                    <Normaltekst>
                        Du finn papirskjema på alle NAV-kontor. Mange kommunar
                        har også eit papirskjemaet som kan lastas ned på
                        kommunen si nettside.
                    </Normaltekst>
                    <br />
                    <Element>
                        Kvifor kan ikkje alle kommunar ta imot digital søknad?
                    </Element>
                    <Normaltekst>
                        Stadig fleire kommunar kan ta imot digitale søknader.
                        Kvar enkelt kommune kan sjølv bestemme om dei vil ta i
                        bruk digital søknad, og eventuelt når det skal skje. Ta
                        kontakt med kommunen din dersom du vil ha svar på om og
                        når du kan søkje digitalt i din kommune.
                    </Normaltekst>
                </Lesmerpanel>
            </IkkeSokDigitaltPanel>
        </Artikkel>
    );
};

export default SokSosialhjelpNynorsk;
