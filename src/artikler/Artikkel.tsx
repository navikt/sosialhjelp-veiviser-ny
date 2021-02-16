import * as React from "react";
import styled from "styled-components";
import Dekorator from "../komponenter/dekorator/Dekorator";

import {useEffect} from "react";
import {useDecorator} from "../utils/useDecorator";
import {useHistory} from "react-router-dom";

const StyledArticle = styled.article`
    background-color: white;
    margin-bottom: 4rem;

    @media all and (min-width: 601px) {
        margin-left: 1rem;
        margin-right: 1rem;
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

    .illustrasjon {
        width: 100%;
        height: 65px;
    }
`;

interface Props {
    children: React.ReactNode;
    className?: string;
    tittel: string;
    illustrasjon?: React.ReactNode;
    foreldreside?: {title: string; slug: string};
}

const Artikkel: React.FC<Props> = ({
    children,
    className,
    tittel,
    illustrasjon,
    foreldreside,
}) => {
    document.title = tittel ? tittel : "ingen tittel";

    const history = useHistory();

    const pathname = window.location.pathname;

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
            <div className={"blokk-center " + className}>
                <StyledArticle role="main">
                    <Innhold>
                        {illustrasjon && <span>{illustrasjon}</span>}
                        {children}
                    </Innhold>
                </StyledArticle>
            </div>
        </Dekorator>
    );
};

export default Artikkel;
