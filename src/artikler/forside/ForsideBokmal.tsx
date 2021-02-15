import * as React from "react";
import "./komponenter/forside.less";
import {Undertittel} from "nav-frontend-typografi";
import Dekorator from "../../komponenter/dekorator/Dekorator";
import SokOmSosialhjelpPanel from "./komponenter/SokOmSosialhjelpPanel";
import {ForsideLenke} from "./komponenter/ForsideLenke";
import {AlertStripeInfo} from "nav-frontend-alertstriper";
import {useDecorator} from "../../utils/useDecorator";
import {InternLenke} from "../../komponenter/InternLenke";

export const ForsideBokmal: React.FC = () => {
    useDecorator([]);

    return (
        <Dekorator erForside={true}>
            <div role="main" className="blokk-center forside">
                <AlertStripeInfo>
                    <InternLenke href="/korona">
                        Koronavirus - Flere kan ha rett til økonomisk
                        sosialhjelp
                    </InternLenke>
                </AlertStripeInfo>

                <br />

                <SokOmSosialhjelpPanel href="./slik-soker-du?lang=nb">
                    Søk om økonomisk sosialhjelp
                </SokOmSosialhjelpPanel>

                <div className="lenkeboks_container lenkeboks_container--2_spalter">
                    <div className="lenkeboks lenkeboks_forside lenkeboks_med_border">
                        <Undertittel style={{textAlign: "left"}}>
                            Før du søker
                        </Undertittel>
                        <ul>
                            <ForsideLenke
                                href="./dette-bor-du-vite?lang=nb"
                                description="Informasjon til deg som søker for første gang"
                            >
                                Dette bør du vite
                            </ForsideLenke>
                            <ForsideLenke
                                href="./dette-kan-du-soke-om?lang=nb"
                                description="Hvilke utgifter kan du få hjelp til å betale"
                            >
                                Dette kan du søke om
                            </ForsideLenke>
                            <ForsideLenke
                                href="./nodsituasjon?lang=nb"
                                description="Utgifter til det mest nødvendige"
                            >
                                Nødssituasjon
                            </ForsideLenke>
                            <ForsideLenke
                                href="./sok-papir?lang=nb"
                                description="Hvor du finner søknadsskjema på papir"
                            >
                                Søknadsskjema på papir
                            </ForsideLenke>
                            <ForsideLenke
                                href="./andre-muligheter?lang=nb"
                                description="Andre muligheter til å forsørge deg"
                            >
                                Andre muligheter
                            </ForsideLenke>
                        </ul>
                    </div>

                    <div className="lenkeboks lenkeboks_forside lenkeboks_med_border">
                        <Undertittel style={{textAlign: "left"}}>
                            Etter at du har søkt
                        </Undertittel>
                        <ul>
                            <ForsideLenke
                                href="./behandlingstid?lang=nb"
                                description="Hvor lang tid tar det å behandle søknaden?"
                            >
                                Behandlingstid
                            </ForsideLenke>
                            <ForsideLenke
                                href="./ettersende?lang=nb"
                                description="Hvordan ettersende dokumentasjon"
                            >
                                Ettersende
                            </ForsideLenke>
                            <ForsideLenke
                                href="./status-soknad?lang=nb"
                                description="Hva er status på søknaden din?"
                            >
                                Status på søknad
                            </ForsideLenke>
                            <ForsideLenke
                                href="./kontakte-veileder?lang=nb"
                                description="Hvordan kan du kontakte veilederen din?"
                            >
                                Kontakt veileder
                            </ForsideLenke>
                            <ForsideLenke
                                href="./klage?lang=nb"
                                description="Hvor sender du klage på utfall i en sak?"
                            >
                                Klage
                            </ForsideLenke>
                        </ul>
                    </div>
                </div>
            </div>
        </Dekorator>
    );
};
