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
    basename: getAbsoluteBasename()
});

const onClickLink = (event: any, sti: string) => {
    history.push(sti);
    event.preventDefault();
};

export {
    getAbsoluteBasename,
    history,
    onClickLink
}
