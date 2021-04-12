import Lenke from "nav-frontend-lenker";
import {Normaltekst, Undertittel} from "nav-frontend-typografi";
import Link from "next/link";
import React from "react";
import styled from "styled-components/macro";
import {SanityPanelSpec} from "../../src/utils/sanityFetch";

const StyledLenkeboks = styled.div`
    background-color: white;
    flex-grow: 1;
    flex-basis: 0;

    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;
    padding: 1rem;

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
            border-bottom: 1px solid #b7b1a9;
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

export const LenkeboksAndreMuligheter = (props: SanityPanelSpec) => {
    return (
        <StyledLenkeboks>
            {props.innhold?.map((panel) => {
                return (
                    <React.Fragment key={panel.title}>
                        <Undertittel>{panel.title}</Undertittel>
                        <ul>
                            {panel.boxElements.map((element) => {
                                if (element.internalHref) {
                                    return (
                                        <li>
                                            <Link href={element.internalHref}>
                                                <a className="lenke">
                                                    {element.text}
                                                </a>
                                            </Link>
                                        </li>
                                    );
                                }
                                if (element.externalHref)
                                    return (
                                        <li>
                                            <Lenke href={element.externalHref}>
                                                {element.text}
                                            </Lenke>
                                        </li>
                                    );
                            })}
                        </ul>
                    </React.Fragment>
                );
            })}
        </StyledLenkeboks>
    );
};
