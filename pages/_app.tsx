import "nav-frontend-lenker-style";
import "nav-frontend-knapper-style";

import {useEffect} from "react";
import * as Sentry from "@sentry/browser";
import {v4 as uuid} from "uuid";

import {initAmplitude} from "../src/utils/amplitude";

function App({Component, pageProps}) {
    useEffect(() => {
        initAmplitude();
        if (
            window?.location?.href.startsWith("https://www.nav.no/sosialhjelp")
        ) {
            Sentry.init({
                dsn:
                    "https://8c95ef33f4ec40abbd167d021f997637@sentry.gc.nav.no/52",
            });
            Sentry.setUser({ip_address: "", id: uuid()});
        }
    }, []);

    return <Component {...pageProps} />;
}

export default App;
