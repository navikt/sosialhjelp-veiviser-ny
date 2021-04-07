import {Normaltekst, Undertittel} from "nav-frontend-typografi";
import Link from "next/link";
import styled from "styled-components/macro";

const StyledLenkeboks = styled.div`
    background-color: white;
    flex-grow: 1;
    flex-basis: 0;

    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;
    padding: 2rem;

    border: solid 1px #78706a;

    margin-bottom: 1rem;

    .typo-undertittel {
        margin-bottom: 1rem;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            margin-bottom: 0.7rem;
            padding-bottom: 0.5rem;
        }
    }

    @media all and (min-width: 601px) {
        :nth-child(1) {
            margin-right: 0.5rem;
        }

        :nth-child(2) {
            margin-left: 0.5rem;
        }
    }
`;

export const Lenkeboks = (props: {
    title: string;
    articles: [{title: string; slug: string; description: string}];
}) => {
    return (
        <StyledLenkeboks>
            <Undertittel>{props.title}</Undertittel>
            <ul>
                {props.articles.map((article) => {
                    return (
                        <li key={article.slug}>
                            <Link href={`/${article.slug}`}>
                                <a className="lenke">{article.title}</a>
                            </Link>
                            <Normaltekst>{article.description}</Normaltekst>
                        </li>
                    );
                })}
            </ul>
        </StyledLenkeboks>
    );
};
