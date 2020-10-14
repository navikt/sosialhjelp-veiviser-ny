import * as React from "react";
import NavAutocomplete, {Suggestion} from "./navAutocomplete/NavAutcomplete";
import {useState} from "react";
import {KommuneNummere} from "./service/useKommuneNrService";
import {REST_STATUS} from "../../../../utils/restUtils";
import {
    finnTilgjengeligKommune,
    TilgjengeligeKommuner,
} from "./service/useTilgjengeligeKommunerService";
import "./kommunesok.less";
import {Normaltekst} from "nav-frontend-typografi";
import NavFrontendSpinner from "nav-frontend-spinner";
import {ServiceHookTypes} from "./service/ServiceHookTypes";

interface Props {
    ledetekst: string;
    soknadOgInnsynTilgjengeligTekst: React.ReactNode;
    soknadTilgjengeligUtenInnsynTekst: React.ReactNode;
    soknadIkkeTilgjengeligTekst: React.ReactNode;
    placeholderTekst: string;
    ariaLabel: string;
    tilgjengeligeKommunerService: ServiceHookTypes<TilgjengeligeKommuner>;
    kommuneNrService: ServiceHookTypes<KommuneNummere>;
    onValgtKommune: (kommuneId: string | undefined) => void;
    setValgtKommuneNavn: (kommuneNavn: string) => void;
}

const KommuneSok: React.FC<Props> = ({
    ledetekst,
    soknadOgInnsynTilgjengeligTekst,
    soknadTilgjengeligUtenInnsynTekst,
    soknadIkkeTilgjengeligTekst,
    placeholderTekst,
    ariaLabel,
    tilgjengeligeKommunerService,
    kommuneNrService,
    onValgtKommune,
    setValgtKommuneNavn,
}) => {
    const [
        currentSuggestion,
        setCurrentSuggestion,
    ] = useState<Suggestion | null>(null);
    const [kommuneHarSoknad, setKommuneHarSoknad] = useState(false);
    const [kommuneHarInnsyn, setKommuneHarInnsyn] = useState(false);

    const onReset = () => {
        setCurrentSuggestion(null);
        setKommuneHarSoknad(false);
        setKommuneHarInnsyn(false);
    };

    const onSelect = (suggestion: Suggestion) => {
        onReset();
        if (tilgjengeligeKommunerService.restStatus === REST_STATUS.OK) {
            const tilgjengeligKommune = finnTilgjengeligKommune(
                tilgjengeligeKommunerService.payload.results,
                suggestion.key
            );
            const kommuneErTilgjengelig: boolean =
                tilgjengeligKommune !== undefined &&
                tilgjengeligKommune.kanMottaSoknader;
            setKommuneHarSoknad(kommuneErTilgjengelig);
            setKommuneHarInnsyn(
                tilgjengeligKommune !== undefined &&
                    tilgjengeligKommune.kanOppdatereStatus
            );
            if (kommuneErTilgjengelig) {
                onValgtKommune(suggestion.key);
                console.log("currentSuggestion", suggestion.value);
            } else {
                onValgtKommune(undefined);
            }
        }
        setValgtKommuneNavn(suggestion.value);
        setCurrentSuggestion(suggestion);
    };

    const suggestions: Suggestion[] =
        kommuneNrService.restStatus === REST_STATUS.OK
            ? kommuneNrService.payload.results
            : [];

    return (
        <div className="kommunesok">
            <Normaltekst>
                <b>{ledetekst}</b>
            </Normaltekst>
            <br />
            {kommuneNrService.restStatus === REST_STATUS.OK &&
            tilgjengeligeKommunerService.restStatus === REST_STATUS.OK ? (
                <NavAutocomplete
                    placeholder={placeholderTekst}
                    suggestions={suggestions}
                    ariaLabel={ariaLabel}
                    id="kommunesok"
                    onSelect={(suggestion: Suggestion) => onSelect(suggestion)}
                    onReset={() => onReset()}
                />
            ) : (
                <NavFrontendSpinner />
            )}
            {currentSuggestion && kommuneHarSoknad && kommuneHarInnsyn && (
                <div style={{textAlign: "left", paddingTop: "1rem"}}>
                    <div className="kommunesok_tilbakemelding ">
                        <Normaltekst>
                            {soknadOgInnsynTilgjengeligTekst}
                        </Normaltekst>
                    </div>
                </div>
            )}
            {currentSuggestion && kommuneHarSoknad && !kommuneHarInnsyn && (
                <div style={{textAlign: "left", paddingTop: "1rem"}}>
                    <div className="kommunesok_tilbakemelding ">
                        <Normaltekst>
                            {soknadTilgjengeligUtenInnsynTekst}
                        </Normaltekst>
                    </div>
                </div>
            )}
            {!kommuneHarSoknad && currentSuggestion && (
                <div style={{textAlign: "left", paddingTop: "1rem"}}>
                    <div
                        className="kommunesok_tilbakemelding "
                        style={{paddingTop: "0.5rem", marginBottom: "0"}}
                    >
                        <Normaltekst>
                            {soknadIkkeTilgjengeligTekst &&
                                soknadIkkeTilgjengeligTekst}
                        </Normaltekst>
                    </div>
                </div>
            )}
        </div>
    );
};

export default KommuneSok;
