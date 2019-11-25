export enum Sprak {
    NORSK_BOKMAL = "nb",
    NYNORSK = "nn",
    ENGELSK = "en",
    SAMISK = "se"
}

export const detekterSprak = () => {
    const search: string = window.location.search;
    let valgtSprak = Sprak.NORSK_BOKMAL;
    if (search.match(/lang=en/)) {
        valgtSprak = Sprak.ENGELSK;
    } else if (search.match(/lang=nn/)) {
        valgtSprak = Sprak.NYNORSK;
    } else if (search.match(/lang=se/)) {
        valgtSprak = Sprak.NYNORSK;
    } else if (search.match(/lang=nb/)) {
        valgtSprak = Sprak.NORSK_BOKMAL;
    }
    return valgtSprak;
};
