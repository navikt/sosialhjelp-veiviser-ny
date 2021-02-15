import {useEffect, useState} from "react";
import {erDevMiljo, ServiceHookTypes} from "./ServiceHookTypes";
import {
    erCodesandbox,
    RequestMethod,
    REST_STATUS,
} from "../../../../../utils/restUtils";

export interface TilgjengeligeKommuner {
    results: {
        [key: string]: KommuneInfo;
    };
}

export interface KommuneInfo {
    kommunenummer: string;
    kanMottaSoknader: boolean;
    kanOppdatereStatus: boolean;
}

const useTilgjengeligeKommunerService = (): ServiceHookTypes<
    TilgjengeligeKommuner
> => {
    const [result, setResult] = useState<
        ServiceHookTypes<TilgjengeligeKommuner>
    >({
        restStatus: REST_STATUS.PENDING,
    });

    let url = "/sosialhjelp/soknad-api/informasjon/kommuneinfo";

    if (erDevMiljo()) {
        // Kjør mot lokal proxyserver:
        // url = "http://localhost:8080/https://www.nav.no/sosialhjelp/soknad-api/informasjon/tilgjengelige_kommuner";

        if (window.location.origin.indexOf("-gcp.dev.nav.no") >= 0) {
            url = "https://sosialhjelp-soknad-api-gcp.dev.nav.no" + url;
        } else if (
            window.location.origin.indexOf("digisos.labs.nais.io") >= 0
        ) {
            url = "https://digisos.labs.nais.io" + url;
        } else if (window.location.origin.indexOf(".labs.nais.io") >= 0) {
            url = "https://sosialhjelp-soknad-api.labs.nais.io" + url;
        } else if (window.location.origin.indexOf("localhost") >= 0) {
            url = "http://localhost:8181" + url;
        } else {
            // Heroku:
            url =
                "https://cors-anywhere.herokuapp.com/https://www.nav.no/sosialhjelp/soknad-api/informasjon/kommuneinfo";
        }

        // Nytt endepunkt med status om kommune er midlertidig nede:
        //    url = "/https://www.nav.no/sosialhjelp/innsyn-api/api/v1/innsyn/kommune";
        // Gammelt endepunkt med bare kommunenummer:
        //   url = "https://www.nav.no/sosialhjelp/soknad-api/informasjon/tilgjengelige_kommuner";
    }

    if (erCodesandbox()) {
        // Public
        url =
            "https://cors-anywhere.herokuapp.com/https://www.nav.no/sosialhjelp/soknad-api/informasjon/kommuneinfo";
    }

    useEffect(() => {
        let headers = new Headers({
            "Accept-Charset": "utf-8",
            Accept: "application/json, text/plain, */*",
        });
        if (erCodesandbox()) {
            headers = new Headers({
                Origin: "null",
                "Accept-Charset": "utf-8",
                Accept: "application/json, text/plain, */*",
            });
        }

        const options: RequestInit = {
            headers: headers,
            method: RequestMethod.GET,
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((response: {[key: string]: KommuneInfo}) => {
                setResult({
                    restStatus: REST_STATUS.OK,
                    payload: {results: response},
                });
            })
            .catch((error) =>
                setResult({restStatus: REST_STATUS.FEILET, error})
            );
    }, [url]);
    return result;
};

const finnTilgjengeligKommune = (
    tilgjengeligeKommuner: {[key: string]: KommuneInfo},
    kommunenummer: string
): KommuneInfo | undefined => {
    return Object.values(tilgjengeligeKommuner)
        .filter((kommune) => kommune.kommunenummer.match(kommunenummer))
        .shift();
};

export const antallKommuner = (tilgjengeligeKommuner: {
    [key: string]: KommuneInfo;
}): string => {
    return Object.values(tilgjengeligeKommuner)
        .filter((kommune) => kommune.kanMottaSoknader)
        .length.toString();
};

export {finnTilgjengeligKommune};
export default useTilgjengeligeKommunerService;
