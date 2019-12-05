import {useEffect, useState} from "react";
import {erDevMiljo, ServiceHookTypes} from "./ServiceHookTypes";
import {erCodesandbox, RequestMethod, REST_STATUS} from "../../../../../utils/restUtils";

export interface TilgjengeligeKommuner {
    results: string[];
}

const useTilgjengeligeKommunerService = () => {
    const [result, setResult] = useState<ServiceHookTypes<TilgjengeligeKommuner>>({
        restStatus: REST_STATUS.PENDING
    });

    let url = "/sosialhjelp/soknad-api/informasjon/tilgjengelige_kommuner";

    if (erDevMiljo()) {
        // Kjør mot lokal proxyserver:
        // url = "http://localhost:8080/https://www.nav.no/sosialhjelp/soknad-api/informasjon/tilgjengelige_kommuner";

        // Public proxy server:
        url = "https://cors-anywhere.herokuapp.com/https://www.nav.no/sosialhjelp/soknad-api/informasjon/tilgjengelige_kommuner";

        // Nytt endepunkt med status om kommune er midlertidig nede:
        //    url = "/https://www.nav.no/sosialhjelp/innsyn-api/api/v1/innsyn/kommune";
        // Gammelt endepunkt med bare kommunenummer:
        //   url = "https://www.nav.no/sosialhjelp/soknad-api/informasjon/tilgjengelige_kommuner";
    }

    if (erCodesandbox()) {
        // Public
        url = "https://cors-anywhere.herokuapp.com/https://www.nav.no/sosialhjelp/soknad-api/informasjon/tilgjengelige_kommuner";
    }

    useEffect(() => {
        let headers = new Headers({
            "Accept-Charset": "utf-8",
            "Accept": "application/json, text/plain, */*"
        });
        if (erCodesandbox()) {
            headers = new Headers({
                "Origin": "null",
                "Accept-Charset": "utf-8",
                "Accept": "application/json, text/plain, */*"
            });
        }

        const options: RequestInit = {
            headers: headers,
            method: RequestMethod.GET
        };
        fetch(url, options)
            .then(response => response.json())
            .then(response => setResult({ restStatus: REST_STATUS.OK, payload: {results: response} }))
            .catch(error => setResult({ restStatus: REST_STATUS.FEILET, error }));
    }, [url]);
    return result;
};

const finnTilgjengeligKommune = (tilgjengeligeKommuner: string[], kommunenummer: string): boolean => {
    let funnetKommune: any = undefined;
    tilgjengeligeKommuner.map((tilgjengeligeKommuneNr: string) => {
        if (tilgjengeligeKommuneNr.match(kommunenummer)) {
            // console.log("bingo!: " + tilgjengeligeKommuneNr + ".match( " + kommunenummer);
            funnetKommune = tilgjengeligeKommuneNr;
        }
        return funnetKommune;
    });

    return funnetKommune !== undefined;
};

export {finnTilgjengeligKommune};
export default useTilgjengeligeKommunerService;
