import * as React from "react";
import {render} from "react-dom";
import DetteBorDuVite from "./artikler/dette-bor-du-vite/DetteBorDuVite";
import "./styles.css";
import "./index.less";
import {Router, Route, Switch, Redirect} from "react-router";
import DetteKanDuSokeOm from "./artikler/dette-kan-du-soke-om/DetteKanDuSokeOm";
import AndreMuligheter from "./artikler/andre-muligheter/AndreMuligheter";
import {history} from "./utils/navigasjon";
import Forside from "./artikler/forside/Forside";
import SokSosialhjelp from "./artikler/sok-sosialhjelp/SokSosialhjelp";
import Nodsituasjon from "./artikler/nodsituasjon/Nodsituasjon";
import HvisDuErEnsligForsorger from "./artikler/hvis-du-er-enslig-forsorger/HvisDuErEnsligForsorger";
import HvisDuHarBarn from "./artikler/hvis-du-har-barn/HvisDuHarBarn";
import HvisDuHarSamboer from "./artikler/hvis-du-har-samboer/HvisDuHarSamboer";
import HvisDuErGift from "./artikler/hvis-du-er-gift/HvisDuErGift";

function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Forside} />
                <Route
                    exact
                    path="/dette-bor-du-vite"
                    component={DetteBorDuVite}
                />
                <Route
                    exact
                    path="/andre-mulighter"
                    component={AndreMuligheter}
                />
                <Route
                    exact
                    path="/dette-kan-du-soke-om"
                    component={DetteKanDuSokeOm}
                />
                <Route
                    exact
                    path="/sok-sosialhjelp"
                    component={SokSosialhjelp}
                />
                <Route exact path="/slik-soker-du" component={SokSosialhjelp} />
                {/* Et alias */}
                <Route exact path="/nodsituasjon" component={Nodsituasjon} />
                <Route
                    exact
                    path="/hvis-du-er-enslig-forsorger"
                    component={HvisDuErEnsligForsorger}
                />
                <Route
                    exact
                    path="/hvis-du-har-barn"
                    component={HvisDuHarBarn}
                />
                <Route
                    exact
                    path="/hvis-du-har-samboer"
                    component={HvisDuHarSamboer}
                />
                <Route exact path="/hvis-du-er-gift" component={HvisDuErGift} />

                {/* Redirects */}
                <Route exact path="/artikkel/514891">
                    <Redirect to="/nodsituasjon" />
                </Route>
                <Route exact path="/artikkel/514877">
                    <Redirect to="/hvis-du-er-enslig-forsorger" />
                </Route>
                <Route exact path="/artikkel/514874">
                    <Redirect to="/hvis-du-har-barn" />
                </Route>
                <Route exact path="/artikkel/514879">
                    <Redirect to="/hvis-du-har-samboer" />
                </Route>
                <Route exact path="/artikkel/514878">
                    <Redirect to="/hvis-du-er-gift" />
                </Route>
            </Switch>
            <br />
            <br />
        </Router>
    );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
