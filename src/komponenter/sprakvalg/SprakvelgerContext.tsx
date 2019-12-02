import React, {useEffect, useState} from "react";

const SprakvelgerContext = React.createContext(
    {
        sprak: {"nb": false, "en": false},
        leggTilSprak: (nyttSprak: string) => {
        }
    });

export const SprakvelgerProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [synligeSprak, setSynligeSprak] = useState({"nb": false, "en": false});
    const [valgtSprak, setValgtSpråk] = useState("se");

    const leggTilSprak = (sprak: string) => {
        console.log("Legger til sprak: " + sprak);
        const oppdaterteSprak = JSON.parse(JSON.stringify(synligeSprak));
        oppdaterteSprak[sprak] = true;
        setSynligeSprak(oppdaterteSprak);
    };

    return (
        <SprakvelgerContext.Provider
            value={{
                sprak: synligeSprak,
                leggTilSprak: (nyttSprak: string) => leggTilSprak(nyttSprak)
            }}
        >
            {children}
        </SprakvelgerContext.Provider>);
};

export const SprakvelgerConsumer = SprakvelgerContext.Consumer;

export default SprakvelgerContext;
