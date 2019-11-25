import * as React from "react";
import NyArtikkel from "./NyArtikkel";
import TestBokmal from "./TestBokmal";
import TestEngelsk from "./TestEngelsk";

const TestSprakValg: React.FC = () => {

    return (
        <NyArtikkel
            oversettelser={{
                norsk: TestBokmal,
                engelsk: TestEngelsk
            }}
        />
    )
};

export default TestSprakValg;
