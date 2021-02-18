import * as React from "react";
import "./komponenter/forside.less";
import {Undertittel} from "nav-frontend-typografi";
import Dekorator from "../../komponenter/dekorator/Dekorator";
import SokOmSosialhjelpPanel from "./komponenter/SokOmSosialhjelpPanel";
import {ForsideLenke} from "./komponenter/ForsideLenke";
import {AlertStripeInfo} from "nav-frontend-alertstriper";
import {useDecorator} from "../../utils/useDecorator";
import {InternLenke} from "../../komponenter/InternLenke";
import {BlokkCenter} from "../../komponenter/BlokkCenter";
import {ARTICLE_WIDTH} from "../../utils/variables";

export const ForsideNynorsk: React.FC = () => {
    useDecorator([]);
    return (
        <Dekorator erForside={true}>
            <BlokkCenter width={ARTICLE_WIDTH.default} role="main">
                <AlertStripeInfo>
                    <InternLenke href="/korona">
                        Koronavirus - Fleire kan ha rett til økonomisk
                        sosialhjelp
                    </InternLenke>
                </AlertStripeInfo>

                <br />

                <SokOmSosialhjelpPanel href="./slik-soker-du?lang=nn">
                    Søk om økonomisk sosialhjelp
                </SokOmSosialhjelpPanel>

                <div className="lenkeboks_container lenkeboks_container--2_spalter">
                    <div className="lenkeboks lenkeboks_forside lenkeboks_med_border">
                        <Undertittel style={{textAlign: "left"}}>
                            Før du søkjer
                        </Undertittel>
                        <ul>
                            <ForsideLenke
                                href="./dette-bor-du-vite?lang=nn"
                                description="Informasjon til deg som søkjer for første gang"
                            >
                                Dette bør du vite
                            </ForsideLenke>
                            <ForsideLenke
                                href="./dette-kan-du-soke-om?lang=nn"
                                description="Kva utgifter kan du få hjelp til å betale"
                            >
                                Dette kan du søkje om
                            </ForsideLenke>
                            <ForsideLenke
                                href="./nodsituasjon?lang=nn"
                                description="Utgifter til det mest nødvendige"
                            >
                                Nødsituasjon
                            </ForsideLenke>
                            <ForsideLenke
                                href="./sok-papir?lang=nb"
                                description="Kor finn du søknadsskjema på papir"
                            >
                                Søknadsskjema på papir
                            </ForsideLenke>
                            <ForsideLenke
                                href="./andre-muligheter?lang=nn"
                                description="Andre moglegheiter til å forsørgje deg sjølv"
                            >
                                Andre moglegheiter
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
                                description="Kor lang tid tek det å behandle søknaden?"
                            >
                                Behandlingstid
                            </ForsideLenke>
                            <ForsideLenke
                                href="./ettersende?lang=nb"
                                description="Korleis ettersende dokumentasjon"
                            >
                                Ettersende
                            </ForsideLenke>
                            <ForsideLenke
                                href="./status-soknad?lang=nb"
                                description="Kva er status på søknaden din?"
                            >
                                Status på søknad
                            </ForsideLenke>
                            <ForsideLenke
                                href="./kontakte-veileder?lang=nn"
                                description="Korleis kan du kontakte rettleiaren din?"
                            >
                                Kontakt rettleiar
                            </ForsideLenke>
                            <ForsideLenke
                                href="./klage?lang=nn"
                                description="Kor sender du klage på utfall i ei sak?"
                            >
                                Klage
                            </ForsideLenke>
                        </ul>
                    </div>
                </div>
            </BlokkCenter>
        </Dekorator>
    );
};
