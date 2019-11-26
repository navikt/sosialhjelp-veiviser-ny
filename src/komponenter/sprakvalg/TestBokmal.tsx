import * as React from "react";
import {useContext, useEffect} from "react";
import SprakvelgerContext from "./SprakvelgerContext";

const TestBokmal: React.FC = () => {

    const context = useContext(SprakvelgerContext);

    useEffect(() => {
        context.leggTilSprak("nb");
    } );

    return (
        <div>
            <h3>Bokmålsartikkel</h3>
            <p>Norsk norsk norsk</p>
            <pre>Context: {JSON.stringify(context, null, 8)}</pre>
        </div>
    )
};

export default TestBokmal;
