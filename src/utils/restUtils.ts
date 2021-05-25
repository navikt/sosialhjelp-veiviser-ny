export function erProd(): boolean {
    if (typeof window === "undefined") {
        return true;
    }
    const url = window.location.href;
    return url.indexOf("www.nav.no") >= 0;
}
