import "@navikt/ds-css";

import {useEffect} from "react";
import {v4 as uuid} from "uuid";

import {initAmplitude} from "../src/utils/amplitude";

function App({Component, pageProps}) {
    useEffect(() => {
        initAmplitude();
    }, []);

    return <Component {...pageProps} />;
}

export default App;
