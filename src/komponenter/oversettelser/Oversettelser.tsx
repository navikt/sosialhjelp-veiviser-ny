import * as React from "react";
import {Sprak} from "../../utils/sprakUtils";

const SprakvelgerContext = React.createContext(
    {
        sprak: [Sprak.NORSK_BOKMAL]
    }
);

export const Oversettelser: React.FC<{ children: React.ReactNode, sprak: Sprak[] }> = ({children, sprak}) => {
    return (
        <SprakvelgerContext.Provider value={{sprak: sprak}}>
            {children}
        </SprakvelgerContext.Provider>);
};

export default SprakvelgerContext;
