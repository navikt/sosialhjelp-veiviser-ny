import {erDev} from "./restUtils";
import {createBrowserHistory} from "history";
import React from "react";

/**
 * Resolves basename in a pathname independent way
 */
const getAbsoluteBasename = () => {
    // @ts-ignore
    // return erDev() ? "sosialhjelp/innsyn" : window.location.pathname.replace(/^\/(([^/]+\/)?sosialhjelp\/innsyn).+$/, "$1");
    return erDev()
        ? "sosialhjelp"
        : window.location.pathname.replace(
              /^\/(([^/]+\/)?sosialhjelp).+$/,
              "$1"
          );
};

const history = createBrowserHistory({
    basename: "/sosialhjelp", // getAbsoluteBasename()
});

const onClickLink = (event: any, sti: string) => {
    history.push(sti);
    event.preventDefault();
};

const gaaTilDigitalSoknad = (kommuneId?: string): void => {
    const query = kommuneId !== undefined ? "?kommuneId=" + kommuneId : "";
    let soknadUrl: string = "/sosialhjelp/soknad/informasjon" + query;
    if (window.location.origin.indexOf("digisos.labs.nais.io") >= 0) {
        soknadUrl =
            "https://digisos.labs.nais.io/sosialhjelp/soknad/mock-login";
    } else if (window.location.origin.indexOf(".labs.nais.io") >= 0) {
        soknadUrl =
            "https://sosialhjelp-soknad.labs.nais.io/sosialhjelp/soknad/mock-login";
    }
    window.location.href = soknadUrl;
};

export {getAbsoluteBasename, history, gaaTilDigitalSoknad, onClickLink};
