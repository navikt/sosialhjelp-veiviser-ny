import * as React from "react";
import {useEffect, useState} from "react";
import NySprakvelger from "./NySprakvelger";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {history} from "../../utils/navigasjon";

const NyArtikkel: React.FC<{ oversettelser: { [key: string]: React.FC; } }> = ({oversettelser}) => {

    const [sprak, setSprak] = useState("");

    useEffect(() => {
        const forhandsvalgtSprak = detekterSprak();
        if (forhandsvalgtSprak) {
            setSprak(forhandsvalgtSprak);
        }
    }, [sprak]);

    const velgSprak = (sprak: string) => {
        setSprak(sprak);
        history.push({search: "?lang=" + sprak});
    };

    const findAvailableTranslations = () => {
        let availableLanguages: Sprak[] = [];
        Object.keys(oversettelser).forEach((key: string) => {
            if (key.match(/^no.*/)) {
                availableLanguages.push(Sprak.NORSK_BOKMAL);
            } else if (key.match(/^en.*/)) {
                availableLanguages.push(Sprak.ENGELSK);
            } else if (key.match(/^ny|^nn.*/)) {
                availableLanguages.push(Sprak.NORSK_BOKMAL);
            }
        });
        return availableLanguages;
    };
    //
    // const findTranslatedReactComponent = () => {
    //     Object.keys(oversettelser).forEach((key: string) => {
    //         if (key.match(/^no.*/) && sprak === Sprak.NORSK_BOKMAL.toString()) {
    //             return oversettelser[key];
    //         } else if (key.match(/^en.*/) && sprak === Sprak.ENGELSK.toString()) {
    //             return oversettelser[key];
    //         } else if (key.match(/^ny|^nn.*/) && sprak === Sprak.NYNORSK.toString()) {
    //             return oversettelser[key];
    //         }
    //     });
    //     return () => {return <div>Translation not found</div>}; // </div>oversettelser[Object.keys(oversettelser)[0]];
    // };

    // const Oversettelse: React.FC = findTranslatedReactComponent(); // oversettelser["norsk"];

    return (
        <div style={{padding: "2rem", border: "4px dotted orange"}}>
            <h3>Artikkel</h3>
            <NySprakvelger
                selectedLanguage={sprak}
                availableLanguages={findAvailableTranslations()}
                onChangeLanguage={(sprak) => velgSprak(sprak)}
            />
            <br/>
            <br/>
            Spike:
            {Object.keys(oversettelser).map((key: string) => {
                return (<span key={key}>{oversettelser[key]}</span>);
                // {key.match(/^no.*/) && sprak === Sprak.NORSK_BOKMAL.toString() && (
                //     <span>{oversettelser[key]}</span>
                // )}
            })}

        </div>
    )
};

export default NyArtikkel;
