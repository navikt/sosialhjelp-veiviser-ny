export default async function handler(req, res) {
    await fetchNedetid()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch(res.status(500));
}

export interface NedetidResponse {
    isNedetid: boolean;
    isPlanlagtNedetid: boolean;
    nedetidStart: string;
    nedetidSlutt: string;
    nedetidStartText: string;
    nedetidSluttText: string;
    nedetidStartTextEn: string;
    nedetidSluttTextEn: string;
}

export async function fetchNedetid(): Promise<NedetidResponse> {
    const nedetidUrl = "https://www.nav.no/sosialhjelp/soknad-api/nedetid";
    return await fetch(nedetidUrl)
        .then((response) => response.json())
        .then((json) => {
            return {
                isNedetid: json.isNedetid,
                isPlanlagtNedetid: json.isPlanlagtNedetid,
                nedetidStart: json.nedetidStart,
                nedetidSlutt: json.nedetidSlutt,
                nedetidStartText: json.nedetidStartText,
                nedetidSluttText: json.nedetidSluttText,
                nedetidStartTextEn: json.nedetidStartTextEn,
                nedetidSluttTextEn: json.nedetidSluttTextEn,
            };
        });
}
