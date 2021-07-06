import React from "react";
import styled from "styled-components/macro";

const StyledArticle = styled.article`
    background-color: white;
    margin-bottom: 4rem;

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
    padding: 2rem 1.5rem 4rem 1.5rem;
    max-width: 640px;

    margin: 0 auto;

    @media all and (min-width: 960px) {
        padding: 2rem 6rem 4rem 6rem;
    }

    h1 {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    h2 {
        margin-top: 2rem;
        margin-bottom: 6px;
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

export const Article = ({children}) => {
    return (
        <StyledArticle role="main">
            <Innhold>{children}</Innhold>
        </StyledArticle>
    );
};
