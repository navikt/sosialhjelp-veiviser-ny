import {erDev} from "./restUtils";
import {createBrowserHistory} from "history";

/**
 * Resolves basename in a pathname independent way
 */
const getAbsoluteBasename = () => {
    // @ts-ignore
    // return erDev() ? "sosialhjelp/innsyn" : window.location.pathname.replace(/^\/(([^/]+\/)?sosialhjelp\/innsyn).+$/, "$1");
    return erDev() ? "sosialhjelp" : window.location.pathname.replace(/^\/(([^/]+\/)?sosialhjelp).+$/, "$1");
};

const history = createBrowserHistory({
    basename: "/sosialhjelp" // getAbsoluteBasename()
});

const onClickLink = (event: any, sti: string) => {
    history.push(sti);
    event.preventDefault();
};

const gaaTilDigitalSoknad = (kommuneId?: string): void => {
    const query = kommuneId !== undefined ? "?kommuneId=" + kommuneId : "";
    let soknadUrl: string = "/sosialhjelp/soknad/informasjon" + query;
    window.location.href = soknadUrl;
};

export {
    getAbsoluteBasename,
    history,
    gaaTilDigitalSoknad,
    onClickLink
}
