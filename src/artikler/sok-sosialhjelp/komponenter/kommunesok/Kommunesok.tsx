import * as React from "react";
import "./kommunesok.less";
import NavAutocomplete, {Suggestion} from "./navAutocomplete/NavAutcomplete";
import {useState} from "react";
import useKommuneNrService from "./service/useKommuneNrService";
import {REST_STATUS} from "../../../../utils/restUtils";
import useTilgjengeligeKommunerService, {
    finnTilgjengeligKommune
} from "./service/useTilgjengeligeKommunerService";

const KommuneSok: React.FC = () => {

    const [currentSuggestion, setCurrentSuggestion] = useState<Suggestion | null>(null);
    const [soknadTilgjengelig, setSoknadTilgjengelig] = useState<boolean>(false);
    const [visFeilmelding, setVisFeilmelding] = useState<boolean | undefined>(false);
    const kommunerService = useKommuneNrService();
    const tilgjengeligeKommunerService = useTilgjengeligeKommunerService();

    const onReset = () => {
        setCurrentSuggestion(null);
        setVisFeilmelding(false);
        setSoknadTilgjengelig(false);
    };

    const onSelect = (suggestion: Suggestion) => {
        // console.log("onSelect: " + JSON.stringify(suggestion, null, 8));
        onReset();
        if (tilgjengeligeKommunerService.restStatus === REST_STATUS.OK) {
            let kommuneErTilgjengelig: boolean = finnTilgjengeligKommune(tilgjengeligeKommunerService.payload.results, suggestion.key);
            setSoknadTilgjengelig(kommuneErTilgjengelig);
        }
        setCurrentSuggestion(suggestion);
    };

    return (
        <div className="kommunesok">
            Kommunesøk skal være her.

            <br/>
            <pre>
                soknadTilgjengelig: {soknadTilgjengelig ? "true" : "false"}
                <br/>
                visFeilmelding: {visFeilmelding ? "true" : "false"}
            </pre>

            {kommunerService.restStatus === REST_STATUS.OK && (
                <NavAutocomplete
                    placeholder="Skriv kommunenavn"
                    suggestions={kommunerService.payload.results}
                    ariaLabel="Søk etter kommunenavn"
                    id="kommunesok"
                    onSelect={(suggestion: Suggestion) => onSelect(suggestion)}
                    onReset={() => onReset()}
                    feil={(visFeilmelding && currentSuggestion === null) ?
                        "Du må skrive inn navnet på kommunen din før du kan gå videre" : undefined
                    }
                />
            )}
        </div>
    )
};

export default KommuneSok;
