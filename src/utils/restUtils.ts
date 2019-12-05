
export function erDev(): boolean {
    const url = window.location.href;
    return (url.indexOf("localhost:3000") > 0);
}

export function erHeroku(): boolean {
    const url = window.location.origin;
    return (url.indexOf("heroku") > 0) || (url.indexOf("digisos-test") > 0);
}

export function erCodesandbox(): boolean {
    return window.location.hostname.match(/codesandbox\.io/) !== null;
}

export enum REST_STATUS {
    OK = "OK",
    FEILET = "FEILET",
    PENDING = "PENDING",
    INITIALISERT = "INITIALISERT",
    UNAUTHORIZED = "UNAUTHORIZED"
}

export enum RequestMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}


