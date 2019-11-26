import * as React from "react";
import {useContext} from "react";
import SprakvelgerContext from "./SprakvelgerContext";
import {useEffect} from "react";

const TestEngelsk: React.FC = () => {

    const context = useContext(SprakvelgerContext);

    useEffect(() => {
        context.leggTilSprak("en");
    }, [context]);

    return (
        <div>
            <h3>English article</h3>
            <p>English English English</p>
            <pre>Context: {JSON.stringify(context, null, 8)}</pre>
        </div>
    )
};

export default TestEngelsk;
