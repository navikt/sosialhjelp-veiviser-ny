import * as React from "react";
import NavAutocomplete, {Suggestion} from "./navAutocomplete/NavAutcomplete";
import {useState} from "react";
import useKommuneNrService from "./service/useKommuneNrService";
import {REST_STATUS} from "../../../../utils/restUtils";
import useTilgjengeligeKommunerService, {
    finnTilgjengeligKommune,
} from "./service/useTilgjengeligeKommunerService";
import "./kommunesok.less";
import {Normaltekst} from "nav-frontend-typografi";

interface Props {
    ledetekst: string;
    soknadTilgjengeligTekst: string;
    soknadIkkeTilgjengeligTekst?: string;
    soknadIkkeTilgjengelig?: React.ReactNode;
    placeholderTekst: string;
    ariaLabel: string;
    onValgtKommune: (kommuneId: string | undefined) => void;
}

const KommuneSok: React.FC<Props> = ({
                                         ledetekst,
                                         soknadTilgjengeligTekst,
                                         soknadIkkeTilgjengeligTekst,
                                         soknadIkkeTilgjengelig,
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
            <Normaltekst>
                <b>
                    {ledetekst}
                </b>
            </Normaltekst>
            <br/>
            <NavAutocomplete
                placeholder={placeholderTekst}
                suggestions={suggestions}
                ariaLabel={ariaLabel}
                id="kommunesok"
                onSelect={(suggestion: Suggestion) => onSelect(suggestion)}
                onReset={() => onReset()}
            />
            {currentSuggestion && soknadTilgjengelig && (
                <div style={{textAlign: "left", paddingTop: "1rem"}}>
                    <div className="kommunesok_tilbakemelding ">
                        <Normaltekst>
                            {soknadTilgjengeligTekst}{" "}
                            {currentSuggestion.value}
                        </Normaltekst>
                    </div>
                </div>
            )}
            {!soknadTilgjengelig && currentSuggestion && (
                <div style={{textAlign: "left", paddingTop: "1rem"}}>
                    <div className="kommunesok_tilbakemelding " style={{paddingTop: "0.5rem", marginBottom: "0"}}>
                        <Normaltekst>
                            {currentSuggestion.value}{" "}
                            {soknadIkkeTilgjengeligTekst && soknadIkkeTilgjengeligTekst}
                            {soknadIkkeTilgjengelig && soknadIkkeTilgjengelig}
                        </Normaltekst>
                    </div>
                </div>
            )}

        </div>
    );
};

export default KommuneSok;
