import * as React from "react";
import NavAutocomplete, {Suggestion} from "./navAutocomplete/NavAutcomplete";
import {useState} from "react";
import useKommuneNrService from "./service/useKommuneNrService";
import {REST_STATUS} from "../../../../utils/restUtils";
import useTilgjengeligeKommunerService, {
    finnTilgjengeligKommune,
} from "./service/useTilgjengeligeKommunerService";
import "./kommunesok.less";
import AdvarselIkon from "../../../../komponenter/bilder/AdvarselIkon";
import {Normaltekst} from "nav-frontend-typografi";
import CheckOkIcon from "../../../../komponenter/bilder/CheckOkIcon";

interface Props {
    ledetekst: string;
    soknadTilgjengeligTekst: string;
    soknadIkkeTilgjengeligTekst: string;
    placeholderTekst: string;
    ariaLabel: string;
    onValgtKommune: (kommuneId: string|undefined) => void;
}

const KommuneSok: React.FC<Props> = ({
    ledetekst,
    soknadTilgjengeligTekst,
    soknadIkkeTilgjengeligTekst,
    placeholderTekst,
    ariaLabel,
    onValgtKommune,
}) => {
    const [
        currentSuggestion,
        setCurrentSuggestion,
    ] = useState<Suggestion | null>(null);
    const [soknadTilgjengelig, setSoknadTilgjengelig] = useState<boolean>(
        false
    );
    const kommunerService = useKommuneNrService();
    const tilgjengeligeKommunerService = useTilgjengeligeKommunerService();

    const onReset = () => {
        setCurrentSuggestion(null);
        setSoknadTilgjengelig(false);
    };

    const onSelect = (suggestion: Suggestion) => {
        onReset();
        if (tilgjengeligeKommunerService.restStatus === REST_STATUS.OK) {
            let kommuneErTilgjengelig: boolean = finnTilgjengeligKommune(
                tilgjengeligeKommunerService.payload.results,
                suggestion.key
            );
            setSoknadTilgjengelig(kommuneErTilgjengelig);
            if (kommuneErTilgjengelig) {
                onValgtKommune(suggestion.key);
            } else {
                onValgtKommune(undefined);
            }
        }
        setCurrentSuggestion(suggestion);
    };

    const suggestions: Suggestion[] =
        kommunerService.restStatus === REST_STATUS.OK
            ? kommunerService.payload.results
            : [];

    return (
        <div className="kommunesok">
            {ledetekst}
            <br />
            <br />
            {currentSuggestion && (
                <div style={{textAlign: "left"}}>
                    {soknadTilgjengelig && (
                        <div className="kommunesok_tilbakemelding ">
                            <div className="kommunesok_tilbakemelding_ikon">
                                <CheckOkIcon/>
                            </div>
                            <Normaltekst>
                                {soknadTilgjengeligTekst}{" "}
                                {currentSuggestion.value}
                            </Normaltekst>
                        </div>
                    )}
                    {!soknadTilgjengelig && (
                        <div className="kommunesok_tilbakemelding ">
                            <div className="kommunesok_tilbakemelding_ikon kommunesok_tilbakemelding_ikon_advarsel">
                                <AdvarselIkon />
                            </div>
                            <Normaltekst>
                                {currentSuggestion.value}{" "}
                                {soknadIkkeTilgjengeligTekst}
                            </Normaltekst>
                        </div>
                    )}
                </div>
            )}
            <NavAutocomplete
                placeholder={placeholderTekst}
                suggestions={suggestions}
                ariaLabel={ariaLabel}
                id="kommunesok"
                onSelect={(suggestion: Suggestion) => onSelect(suggestion)}
                onReset={() => onReset()}
            />
        </div>
    );
};

export default KommuneSok;
