import * as React from "react";
import {Sprak} from "../../utils/sprakUtils";

interface Props {
    onChangeLanguage: (language: string) => void;
    selectedLanguage: string;
    availableLanguages: string[];
}

const NySprakvelger: React.FC<Props> = ({onChangeLanguage, selectedLanguage, availableLanguages}) => {

    const velgSprak = (event: any, sprak: string) => {
        onChangeLanguage(sprak);
        event.preventDefault();
    };

    const isAvailable = (language: Sprak): boolean => {
        return availableLanguages.find(item => item === language) !== undefined;
    };

    return (
        <div style={{padding: "0.5rem", border: "1px dotted grey"}}>
            <h3>Språkvelger</h3>
            {isAvailable(Sprak.NORSK_BOKMAL) && (
                <button onClick={(event: any) => velgSprak(event, "nb")}>Norsk</button>
            )}
            &nbsp;
            {isAvailable(Sprak.ENGELSK) && (
                <button onClick={(event: any) => velgSprak(event, "en")}>Engelsk</button>
            )}
            &nbsp;
            {isAvailable(Sprak.NYNORSK) && (
                <button onClick={(event: any) => velgSprak(event, "nn")}>Nynorsk</button>
            )}

            <br/>
            <br/>
            Valgt språk: {selectedLanguage}
            <br/>
            <br/>
        </div>
    )
};

export default NySprakvelger;
