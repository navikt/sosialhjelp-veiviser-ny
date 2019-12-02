import * as React from "react";
import "./kommunesok.less";
import NavAutocomplete, {Suggestion} from "./navAutocomplete/NavAutcomplete";
import {useState} from "react";

const KommuneSok: React.FC = () => {

    const [currentSuggestion, setCurrentSuggestion] = useState<Suggestion | null>(null);

    const suggestions: Suggestion[] = [
        {
            key: "1",
            value: "Oslo"
        },
        {
            key: "2",
            value: "Oppdal"
        },
        {
            key: "3",
            value: "Orkdal"
        }
    ];

    const onReset = () => {
        console.log("onReset");
    };

    const onSelect = (suggestion: Suggestion) => {
        console.log("onSelect: " + JSON.stringify(suggestion, null, 8));
    };

    const visFeilmelding: boolean = false;
    return (
        <div className="kommunesok">
            Kommunesøk skal være her.
            <NavAutocomplete
                placeholder="Skriv kommunenavn"
                suggestions={suggestions}
                ariaLabel="Søk etter kommunenavn"
                id="kommunesok"
                onSelect={(suggestion: Suggestion) => onSelect(suggestion)}
                onReset={() => onReset()}
                feil={(visFeilmelding && currentSuggestion === null) ?
                    "nySoknadModal.feil_tom_kommunenavn" : undefined
                }
            />
        </div>
    )
};

export default KommuneSok;
