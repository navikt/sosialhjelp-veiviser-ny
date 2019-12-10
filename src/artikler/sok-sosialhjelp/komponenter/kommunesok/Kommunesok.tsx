import * as React from "react";
import NavAutocomplete, {Suggestion} from "./navAutocomplete/NavAutcomplete";
import {useState} from "react";
import useKommuneNrService from "./service/useKommuneNrService";
import {REST_STATUS} from "../../../../utils/restUtils";
import useTilgjengeligeKommunerService, {
    finnTilgjengeligKommune
} from "./service/useTilgjengeligeKommunerService";
import "./kommunesok.less";
import AdvarselIkon from "../../../../komponenter/bilder/AdvarselIkon";
import {Normaltekst} from "nav-frontend-typografi";
import CheckOkIcon from "../../../../komponenter/bilder/CheckOkIcon";

interface Props {
    onValgtKommune: (kommuneId: string) => void;
}

const KommuneSok: React.FC<Props> = ({onValgtKommune}) => {

    const [currentSuggestion, setCurrentSuggestion] = useState<Suggestion | null>(null);
    const [soknadTilgjengelig, setSoknadTilgjengelig] = useState<boolean>(false);
    const kommunerService = useKommuneNrService();
    const tilgjengeligeKommunerService = useTilgjengeligeKommunerService();

    const onReset = () => {
        setCurrentSuggestion(null);
        setSoknadTilgjengelig(false);
    };

    const onSelect = (suggestion: Suggestion) => {
        // console.log("onSelect: " + JSON.stringify(suggestion, null, 8));
        onReset();
        if (tilgjengeligeKommunerService.restStatus === REST_STATUS.OK) {
            let kommuneErTilgjengelig: boolean = finnTilgjengeligKommune(tilgjengeligeKommunerService.payload.results, suggestion.key);
            setSoknadTilgjengelig(kommuneErTilgjengelig);
            if(kommuneErTilgjengelig) {
                onValgtKommune(suggestion.key);
            }
        }
        setCurrentSuggestion(suggestion);
    };

    const suggestions: Suggestion[] = kommunerService.restStatus === REST_STATUS.OK ? kommunerService.payload.results : [];

    return (
        <div className="kommunesok">
            Sjekk om du kan søke digitalt i din kommune

            <br/>
            <br/>

            {currentSuggestion && (
                <div style={{textAlign: "left"}}>
                    {soknadTilgjengelig && (
                        <div className="kommunesok_tilbakemelding">
                            <CheckOkIcon/>
                            <Normaltekst>
                                Du kan søke digitalt i {currentSuggestion.value}
                            </Normaltekst>
                        </div>
                    )}
                    {!soknadTilgjengelig && (
                        <div className="kommunesok_tilbakemelding">
                            <AdvarselIkon />
                            <Normaltekst>
                                {currentSuggestion.value} kan dessverre ikke ta i mot digitale søknader ennå. Du kan søke på papirskjema.
                            </Normaltekst>
                        </div>
                    )}
                </div>
            )}
            <NavAutocomplete
                placeholder="Skriv kommunenavn"
                suggestions={suggestions}
                ariaLabel="Søk etter kommunenavn"
                id="kommunesok"
                onSelect={(suggestion: Suggestion) => onSelect(suggestion)}
                onReset={() => onReset()}

            />
        </div>
    )
};

export default KommuneSok;
