import {useEffect, useState} from "react";
import {erDevMiljo, ServiceHookTypes} from "./ServiceHookTypes";
import {RequestMethod, REST_STATUS} from "../../../../../utils/restUtils";

export interface Nedetid {
    isNedetid: boolean;
    isPlanlagtNedetid: boolean;
    nedetidStart: string;
    nedetidSlutt: string;
    nedetidStartText: string;
    nedetidSluttText: string;
    nedetidStartTextEn: string;
    nedetidSluttTextEn: string;
}

const useNedetidService = () => {
    const [result, setResult] = useState<ServiceHookTypes<Nedetid>>({
        restStatus: REST_STATUS.PENDING,
    });

    let url = "/sosialhjelp/soknad-api/nedetid";

    useEffect(() => {
        if (erDevMiljo()) {
            return;
        }

        let headers = new Headers({
            "Accept-Charset": "utf-8",
            Accept: "application/json, text/plain, */*",
        });

        const options: RequestInit = {
            headers: headers,
            method: RequestMethod.GET,
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((response) =>
                setResult({
                    restStatus: REST_STATUS.OK,
                    payload: {
                        isNedetid: response.isNedetid,
                        isPlanlagtNedetid: response.isPlanlagtNedetid,
                        nedetidStart: response.nedetidStart,
                        nedetidSlutt: response.nedetidSlutt,
                        nedetidStartText: response.nedetidStartText,
                        nedetidSluttText: response.nedetidSluttText,
                        nedetidStartTextEn: response.nedetidStartTextEn,
                        nedetidSluttTextEn: response.nedetidSluttTextEn,
                    },
                })
            )
            .catch((error) =>
                setResult({restStatus: REST_STATUS.FEILET, error})
            );
    }, [url]);
    return result;
};

export default useNedetidService;
