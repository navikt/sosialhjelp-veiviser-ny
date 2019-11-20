import * as React from "react";
import {render} from "react-dom";
import DetteBorDuVite from "./artikler/dette-bor-du-vite/DetteBorDuVite";
import "./styles.css";
import "./index.less";
import {Router, Route, Switch} from "react-router";
import DetteKanDuSokeOm from "./artikler/dette-kan-du-soke-om/DetteKanDuSokeOm";
import AndreMuligheter from "./artikler/andre-muligheter/AndreMuligheter";
import {history, onClickLink} from "./utils/navigasjon";
import Forside from "./artikler/forside/Forside";

function App() {

    return (
        <Router history={history}>
            <br/>
            <br/>
            &nbsp; <a
                onClick={(event: any) => onClickLink(event, "")}
                href="/"
            >
                /
            </a> &nbsp;
            <a
                onClick={(event: any) => onClickLink(event, "dette-bor-du-vite")}
                href="dette-bor-du-vite"
            >
                /dette-bor-du-vite
            </a> &nbsp;
            <a
                onClick={(event: any) => onClickLink(event, "dette-kan-du-soke-om")}
                href="dette-bor-du-dette-kan-du-soke-om"
            >
                /dette-kan-du-soke-om
            </a> &nbsp;
            <br/>
            <Switch>
                <Route exact path="/" component={Forside}/>
                <Route exact path="/dette-bor-du-vite" component={DetteBorDuVite}/>
                <Route exact path="/andre-mulighter" component={AndreMuligheter}/>
                <Route exact path="/dette-kan-du-soke-om" component={DetteKanDuSokeOm}/>
            </Switch>
            <br/>
            <br/>
        </Router>
    );
}

const rootElement = document.getElementById("root");
render(<App/>, rootElement);
