import * as React from "react";
import {
    InfoPanel,
    InfoPanelContainer,
} from "../../komponenter/infopanel/InfoPanel";
import "./komponenter/forside.less";
import {Normaltekst, Undertittel} from "nav-frontend-typografi";
import Dekorator from "../../komponenter/dekorator/Dekorator";
import SokOmSosialhjelpPanel from "./komponenter/SokOmSosialhjelpPanel";
import ChatIkon from "../../komponenter/bilder/ChatIkon";
import {ForsideLenke} from "./komponenter/ForsideLenke";
import {AlertStripeInfo} from "nav-frontend-alertstriper";
import Lenke from "nav-frontend-lenker";
import {useDecorator} from "../../utils/useDecorator";

export const ForsideNynorsk: React.FC = () => {
    useDecorator([]);
    return (
        <Dekorator erForside={true}>
            <div role="main" className="blokk-center forside">
                <AlertStripeInfo>
                    <Lenke href="./korona">
                        Koronavirus - Fleire kan ha rett til økonomisk
                        sosialhjelp
                    </Lenke>
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
                                href="./sok-papir?lang=nn"
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
                                href="./behandlingstid?lang=nn"
                                description="Kor lang tid tek det å behandle søknaden?"
                            >
                                Behandlingstid
                            </ForsideLenke>
                            <ForsideLenke
                                href="./ettersende?lang=nn"
                                description="Korleis ettersende dokumentasjon"
                            >
                                Ettersende
                            </ForsideLenke>
                            <ForsideLenke
                                href="./status-soknad?lang=nn"
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

                <InfoPanelContainer>
                    <InfoPanel
                        href="https://www.nav.no/person/kontakt-oss/chat/sosialhjelp"
                        className="infopanel_chat"
                    >
                        <Undertittel>
                            Har du spørsmål om sosiale tenester og økonomisk
                            sosialhjelp?
                        </Undertittel>
                        <Normaltekst>
                            <ChatIkon />
                            Chat med oss om sosiale tenester
                        </Normaltekst>
                    </InfoPanel>

                    <InfoPanel
                        href="https://www.nav.no/person/kontakt-oss/chat/okonomi"
                        className="infopanel_chat"
                    >
                        <Undertittel>
                            Har du spørsmål om budsjett, økonomi og gjeld?
                        </Undertittel>
                        <Normaltekst>
                            <ChatIkon />
                            Chat med oss om økonomi og gjeld
                        </Normaltekst>
                    </InfoPanel>
                </InfoPanelContainer>
            </div>
        </Dekorator>
    );
};
