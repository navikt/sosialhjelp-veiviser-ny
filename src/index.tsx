import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import * as React from "react";
import {render} from "react-dom";
import * as Sentry from "@sentry/browser";
import {v4 as uuid} from "uuid";

import "./index.less";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {history} from "./utils/navigasjon";

import {erProd, erQ} from "./utils/restUtils";

if (erProd()) {
    Sentry.init({
        dsn: "https://8c95ef33f4ec40abbd167d021f997637@sentry.gc.nav.no/52",
    });
} else if (erQ()) {
    Sentry.init({
        dsn: "https://92f71d949aac44bbbef3792447677d7c@sentry.gc.nav.no/16",
    });
}
Sentry.setUser({ip_address: "", id: uuid()});

function App() {
    return <div id="app" className="app"></div>;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
