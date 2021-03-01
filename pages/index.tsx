import React from "react";
import {Systemtittel} from "nav-frontend-typografi";
import {DecoratedApp} from "../components/DecoratedApp";

const Index = () => {
    return (
        <DecoratedApp breadcrumbs={[]} availableLanguages={[]}>
            <Systemtittel>Sosialhjelp veiviser i next</Systemtittel>
        </DecoratedApp>
    );
};

export default Index;
