import * as React from "react";
import NyArtikkel from "./NyArtikkel";
import TestBokmal from "./TestBokmal";
import TestEngelsk from "./TestEngelsk";
import SprakvelgerContext, {SprakvelgerProvider} from "./SprakvelgerContext";
import {useContext} from "react";

const TestSprakValg: React.FC = () => {

    const context = useContext(SprakvelgerContext);

    return (
        <div style={{border: "4px dotted orange"}}>
            <h2>Språkvelger</h2>
            <SprakvelgerProvider>
                <h3>Språkvelger</h3>
                <pre>Context: {JSON.stringify(context, null, 8)}</pre>
                <TestBokmal/>
                <TestEngelsk/>
            </SprakvelgerProvider>
        </div>
    )
};

export default TestSprakValg;
