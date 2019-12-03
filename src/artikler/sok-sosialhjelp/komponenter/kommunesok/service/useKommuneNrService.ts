import {useEffect, useState} from "react";
import {erDevMiljo, ServiceHookTypes} from "./ServiceHookTypes";
import {Suggestion} from "../navAutocomplete/NavAutcomplete";
import {RequestMethod, REST_STATUS} from "../../../../../utils/restUtils";

export interface KommuneNummere {
    results: Suggestion[];
}

const useKommuneNrService = () => {
    const [result, setResult] = useState<ServiceHookTypes<KommuneNummere>>({
        restStatus: REST_STATUS.PENDING
    });

    let url = "/sosialhjelp/innsyn-api/api/veiviser/kommunenummer";
    if (erDevMiljo()) {
        url = "https://cors-anywhere.herokuapp.com/https://www.nav.no/sosialhjelp/innsyn-api/api/veiviser/kommunenummer";
    }

    let headers = new Headers({
        "Accept": "application/json, text/plain, */*"
    });

    if (erDevMiljo()) {
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
    useEffect(() => {
        fetch(url, options)
            .then(response => response.json())
            .then(response => setResult({ restStatus: REST_STATUS.OK, payload: ekstraherKommuneNr(response) }))
            .catch(error => setResult({ restStatus: REST_STATUS.FEILET, error }));
    }, [url]);
    return result;
};

const ekstraherKommuneNr = (result: any): KommuneNummere => {
    const CONTAINED_ITEMS = "containeditems";
    const DESCRIPTION = "description";
    const LABEL = "label";
    const STATUS = "status";
    const kommuner: any[] = [];
    const responseData = result[CONTAINED_ITEMS].filter((item: any) => item[STATUS] === "Gyldig");
    responseData.map((item: any) => {
        return kommuner.push({
            key: item[LABEL],
            value: item[DESCRIPTION]
        });
    });
    kommuner.sort((a: Suggestion, b: Suggestion) => {
        if (a.value > b.value) {
            return 1;
        } else if (a.value < b.value) {
            return -1;
        } else {
            return 0;
        }
    });
    return {results: kommuner};
};

export default useKommuneNrService;
