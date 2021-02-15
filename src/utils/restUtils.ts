export function erProd(): boolean {
    const url = window.location.href;
    return url.indexOf("www.nav.no") >= 0;
}

export function erDev(): boolean {
    const url = window.location.href;
    return url.indexOf("localhost") > 0;
}

export function erQ(): boolean {
    const url = window.location.href;
    return url.indexOf("www-q0") >= 0 || url.indexOf("www-q1") >= 0;
}

export function erCodesandbox(): boolean {
    const hostname = window.location.hostname;
    return (
        hostname.match(/codesandbox\.io/) !== null ||
        hostname.match(/\.csb\.app/) !== null
    );
}

export enum REST_STATUS {
    OK = "OK",
    FEILET = "FEILET",
    PENDING = "PENDING",
    INITIALISERT = "INITIALISERT",
    UNAUTHORIZED = "UNAUTHORIZED",
}

export enum RequestMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}
