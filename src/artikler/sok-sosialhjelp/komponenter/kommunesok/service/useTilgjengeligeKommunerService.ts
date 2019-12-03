import {useEffect, useState} from "react";
import {erDevMiljo, ServiceHookTypes} from "./ServiceHookTypes";
import {RequestMethod, REST_STATUS} from "../../../../../utils/restUtils";

export interface KommuneTilgjengelighet {
    harMidlertidigDeaktivertMottak: boolean;
    harMidlertidigDeaktivertOppdateringer: boolean;
    kanMottaSoknader: boolean;
    kanOppdatereStatus: boolean;
    kommunenummer: string;
}

export interface TilgjengeligeKommuner {
    results: string[];
}

const useTilgjengeligeKommunerService = () => {
    const [result, setResult] = useState<ServiceHookTypes<TilgjengeligeKommuner>>({
        restStatus: REST_STATUS.PENDING
    });

    let url = "/sosialhjelp/soknad-api/informasjon/tilgjengelige_kommuner";

    if (erDevMiljo()) {
        // Nytt endepunkt:
        // url = "https://cors-anywhere.herokuapp.com/https://www.nav.no/sosialhjelp/innsyn-api/api/v1/innsyn/kommune";
        // Gammelt endepunkt:
        url = "https://cors-anywhere.herokuapp.com/https://www.nav.no/sosialhjelp/soknad-api/informasjon/tilgjengelige_kommuner";
    }

    let headers = new Headers({
        "Accept": "application/json, text/plain, */*"
    });

    if (erDevMiljo()) {
        headers = new Headers({
            "Origin": "null",
            "Accept": "application/json, text/plain, */*"
        });
    }
    const options: RequestInit = {
        headers: headers,
        method: RequestMethod.GET
    };

    useEffect(() => {
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
    });

    return funnetKommune !== undefined;
};

export {finnTilgjengeligKommune};
export default useTilgjengeligeKommunerService;
