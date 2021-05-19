import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import * as React from "react";
import {render} from "react-dom";
import * as Sentry from "@sentry/browser";
import {v4 as uuid} from "uuid";

import {Router, Route, Switch, Redirect} from "react-router-dom";

import {erProd} from "./utils/restUtils";

if (erProd()) {
    Sentry.init({
        dsn: "https://8c95ef33f4ec40abbd167d021f997637@sentry.gc.nav.no/52",
    });
}
Sentry.setUser({ip_address: "", id: uuid()});

function App() {
    return <div id="app" className="app"></div>;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
