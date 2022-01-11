import "@navikt/ds-css";

import {useEffect} from "react";

import {initAmplitude} from "../src/utils/amplitude";

function App({Component, pageProps}) {
    useEffect(() => {
        initAmplitude();
    }, []);

    return <Component {...pageProps} />;
}

export default App;
