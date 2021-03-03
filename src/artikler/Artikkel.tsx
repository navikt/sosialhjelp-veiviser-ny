import * as React from "react";
import styled from "styled-components/macro";
import Dekorator from "../komponenter/dekorator/Dekorator";
import {BlokkCenter} from "../komponenter/BlokkCenter";

import {useEffect} from "react";
import {useDecorator} from "../utils/useDecorator";
import {useHistory} from "react-router-dom";

import {ARTICLE_WIDTH} from "../utils/variables";

const StyledArticle = styled.article<{margin: string}>`
    background-color: white;
    margin-bottom: 4rem;

    @media all and (min-width: 601px) {
        margin-left: ${(props) => props.margin};
        margin-right: ${(props) => props.margin};
    }

    @media all and (max-width: 600px) {
        padding-bottom: 2rem;
    }

    .ekspanderbartPanel {
        margin-top: 1rem;

        .ekspanderbartPanel__heading {
            font-size: 1rem;
        }
    }
`;

const Innhold = styled.div`
    display: block;

    @media all and (min-width: 601px) {
        padding: 2rem 6rem 4rem 6rem;
    }

    @media all and (max-width: 600px) {
        padding: 2rem 0.5rem 0rem 0.5rem;
    }

    h1 {
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    h2.artikkel_sidetittel {
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    h2 {
        margin-top: 2rem;
        margin-bottom: 6px;
    }

    .typo-ingress {
        margin-bottom: 1rem;
    }

    .typo-normal {
        margin-bottom: 1rem;
    }

    .ekspanderbartPanel {
        margin-bottom: 1rem;
    }

    .illustrasjon {
        width: 100%;
        height: 65px;
    }

    .illustrasjon_andre_muligheter {
        width: 100%;
        height: 65px;
        margin-bottom: 2rem;
    }
`;

interface Props {
    children: React.ReactNode;
    className?: string;
    tittel: string;
    illustrasjon?: React.ReactNode;
    foreldreside?: {title: string; slug: string};
    extraWide?: boolean;
}

const Artikkel: React.FC<Props> = ({
    children,
    className,
    tittel,
    illustrasjon,
    foreldreside,
    extraWide,
}) => {
    document.title = tittel ? tittel : "ingen tittel";

    const history = useHistory();

    const pathname = window.location.pathname;

    const margin = extraWide ? "0" : "1rem";

    const breadcrumbPages = [{title: tittel, slug: history.location.pathname}];
    if (foreldreside) {
        breadcrumbPages.push(foreldreside);
    }
    useDecorator(breadcrumbPages);

    useEffect(() => {
        const supportsNativeSmoothScroll =
            "scrollBehavior" in document.documentElement.style;
        supportsNativeSmoothScroll
            ? window.scrollTo({
                  behavior: "smooth",
                  top: 0,
              })
            : window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Dekorator tittel={tittel ? tittel : "ingen tittel"}>
            <BlokkCenter
                width={extraWide ? ARTICLE_WIDTH.large : ARTICLE_WIDTH.default}
            >
                <StyledArticle role="main" margin={margin}>
                    <Innhold>
                        {illustrasjon && <span>{illustrasjon}</span>}
                        {children}
                    </Innhold>
                </StyledArticle>
            </BlokkCenter>
        </Dekorator>
    );
};

export default Artikkel;
