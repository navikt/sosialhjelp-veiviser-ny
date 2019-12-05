import * as React from "react";
import "./sprakVelger.less";
import {useState} from "react";
import {detekterSprak, Sprak} from "../../utils/sprakUtils";
import {history} from "../../utils/navigasjon";

interface Props {
    sprak: Sprak[];
}

const SprakVelger: React.FC<Props> = ({sprak}) => {
    const [aapen, setAapen] = useState(false);

    // Detekter klikk utenfor språkvelger, og lukk språkvelger.
    // Gir desverre feilmelding "can't update unmounted component..."
    // useEffect(() => {
    //     if (aapen) {
    //         const handler = (event: any) => {
    //             setAapen(false);
    //             window.removeEventListener('click', handler);
    //         };
    //         window.addEventListener('click', handler);
    //     }
    //
    // }, [aapen]);

    const onClick = (event: any): void => {
        setAapen(!aapen);
    };

    const velgSpraak = (event: any, search: string) => {
        history.push({search: search});
        event.preventDefault();
    };

    let valgtSprak = detekterSprak();

    const tilgjengelige: Sprak[] = sprak;

    const erSprakTilgjengelig = (sprak: Sprak): boolean => {
        return tilgjengelige.find(item => item === sprak) !== undefined;
    };

    return (
        <div className="spraakvelger">
            <div
                onClick={(event: any) => onClick(event)}
                className={"content-languages " + (aapen ? "selected" : "")}
                role="button"
                data-is-open={aapen ? "true" : "false"}
                aria-haspopup={aapen ? "true" : "false"}
                aria-owns="language-selection"
                aria-controls="language-selection"
            >
                <span>Language</span>
                <ul aria-hidden="false" className={aapen ? "" : "hidden"} id="language-selection">
                    {erSprakTilgjengelig(Sprak.NORSK_BOKMAL) && (
                        <li>
                            <a
                                href="?lang=no"
                                onClick={(event: any) => velgSpraak(event, "?lang=nb")}
                                className={valgtSprak === Sprak.NORSK_BOKMAL ? "active-lang" : ""}
                                title="Bokmål (Språkvalg for innhold)"
                            >
                                Bokmål
                            </a>
                        </li>
                    )}

                    {erSprakTilgjengelig(Sprak.NYNORSK) && (
                        <li>
                            <a
                                href="?lang=nn"
                                className={valgtSprak === Sprak.NYNORSK ? "active-lang" : ""}
                                onClick={(event: any) => velgSpraak(event, "?lang=nn")}
                                title="Nynorsk (Språkvalg for innhold)"
                            >
                                Nynorsk
                            </a>
                        </li>
                    )}

                    {erSprakTilgjengelig(Sprak.ENGELSK) && (
                        <li>
                            <a
                                href="?lang=en"
                                onClick={(event: any) => velgSpraak(event, "?lang=en")}
                                className={valgtSprak === Sprak.ENGELSK ? "active-lang" : ""}
                                title="English (Språkvalg for innhold)"
                            >
                                English
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default SprakVelger;
