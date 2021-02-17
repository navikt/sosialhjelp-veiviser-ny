import * as React from "react";
import styled from "styled-components";
import "./banner.less";
import {Sidetittel, Innholdstittel} from "nav-frontend-typografi";
import ForsideBanner from "../bilder/ForsideBanner";
import {detekterSprak} from "../../utils/sprakUtils";

const StyledDecorator = styled.div`
    margin-bottom: 2rem;
`;

const Dekorator: React.FC<{
    children: React.ReactNode;
    tittel?: string;
    erForside?: boolean;
}> = ({children, tittel, erForside}) => {
    const valgtSprak: string = detekterSprak();
    const sosialhjelpTittel =
        valgtSprak === "en" ? "Financial Assistance" : "Økonomisk sosialhjelp";

    const bannerClassNames = erForside
        ? "banner__forside"
        : "banner__underside";

    return (
        <StyledDecorator>
            <div role="banner" className={"banner " + bannerClassNames}>
                <div className="blokk-center">
                    {erForside && (
                        <div className="banner__forside-wrapper">
                            <div className="banner__tittel-tekst">
                                <Sidetittel>{sosialhjelpTittel}</Sidetittel>
                            </div>
                            <ForsideBanner className="banner__forside-illustrasjon" />
                        </div>
                    )}
                    {!erForside && (
                        <div className="undersideBanner__tekst">
                            {tittel && tittel !== "" && (
                                <Innholdstittel>{tittel}</Innholdstittel>
                            )}
                            {!(tittel && tittel !== "") && (
                                <span>{sosialhjelpTittel}</span>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <br />
            <br />
            {children}
        </StyledDecorator>
    );
};

export default Dekorator;
