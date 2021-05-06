export default async function handler(req, res) {
    await fetchKommuner()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch(res.status(500));
}

export interface KommunerResponse {
    totaltAntall: number;
    antallAktivertSoknad: number;
    kommuner: {
        [kommuneNummer: string]: Kommune;
    };
}

export interface Kommune {
    kommuneNummer: string;
    kommuneNavn: string;
    kanMottaSoknader: boolean;
    kanOppdatereStatus: boolean;
}

export const ANTALL_KOMMUNER = 356;

export interface KommuneInfo {
    kommuneNummer: string;
    kanMottaSoknader: boolean;
    kanOppdatereStatus: boolean;
}

export interface KommuneinfoResponse {
    [kommuneNummer: string]: KommuneInfo;
}

export interface KommunenummerResponse {
    containeditems: [
        {
            status: string;
            description: string;
            label: string;
        }
    ];
}

export interface KommuneNummer {
    [kommuneNummer: string]: {
        kommuneNummer: string;
        kommuneNavn: string;
    };
}

export async function fetchKommuner(): Promise<KommunerResponse> {
    const kommuneinfoUrl = `${process.env.SOSIALHJELP_SOKNAD_API_URL}/informasjon/kommuneinfo`;

    const kommuneinfo: KommuneinfoResponse = await fetch(
        kommuneinfoUrl
    ).then((response) => response.json());

    const kommunenrUrl = `${process.env.SOSIALHJELP_INNSYN_API_URL}/api/veiviser/kommunenummer`;

    const kommuner = await fetch(kommunenrUrl)
        .then((response) => response.json())
        .then((response: KommunenummerResponse) => {
            return processKommunenummerResponse(response);
        });

    return {
        totaltAntall: ANTALL_KOMMUNER,
        antallAktivertSoknad: Object.values(kommuneinfo).filter(
            (kommune) => kommune.kanMottaSoknader
        ).length,
        kommuner: Object.values(kommuner).reduce((accumulator, kommune) => {
            const kommuneInfo = kommuneinfo[kommune.kommuneNummer];
            return {
                ...accumulator,
                [kommune.kommuneNummer]: {
                    kommuneNummer: kommune.kommuneNummer,
                    kommuneNavn: kommune.kommuneNavn,
                    kanMottaSoknader: kommuneInfo?.kanMottaSoknader ?? false,
                    kanOppdatereStatus:
                        kommuneInfo?.kanOppdatereStatus ?? false,
                },
            };
        }, {}),
    };
}

const processKommunenummerResponse = (
    response: KommunenummerResponse
): KommuneNummer => {
    return response.containeditems
        .filter((item) => {
            return item.status === "Gyldig" || item.status === "Valid";
        })
        .reduce((accumulator, kommune) => {
            return {
                ...accumulator,
                [kommune.label]: {
                    kommuneNummer: kommune.label,
                    kommuneNavn: kommune.description,
                },
            };
        }, {});
};
