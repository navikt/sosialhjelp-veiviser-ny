import {BodyShort, Heading, Link as DSLink} from "@navikt/ds-react";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import {SanityPanelSpec} from "../../src/utils/sanityFetch";

const StyledLenkeboks = styled.div`
    background-color: white;
    flex-grow: 1;
    flex-basis: 0;

    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;
    padding: 1rem;

    height: 100%;

    margin-bottom: 1rem;

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
`;

export const LenkeboksAndreMuligheter = (props: SanityPanelSpec) => {
    return (
        <StyledLenkeboks>
            {props.innhold?.map((panel) => {
                return (
                    <React.Fragment key={panel.title}>
                        <Heading level="2" size="medium" spacing>
                            {panel.title}
                        </Heading>
                        <ul>
                            {panel.boxElements.map((element) => {
                                if (element.internalHref) {
                                    return (
                                        <li key={element.internalHref}>
                                            <BodyShort>
                                                <Link
                                                    href={`/${element.internalHref}`}
                                                >
                                                    <a className="navds-link">
                                                        {element.text}
                                                    </a>
                                                </Link>
                                            </BodyShort>
                                        </li>
                                    );
                                }
                                if (element.externalHref)
                                    return (
                                        <li key={element.externalHref}>
                                            <BodyShort>
                                                <DSLink
                                                    href={element.externalHref}
                                                >
                                                    {element.text}
                                                </DSLink>
                                            </BodyShort>
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
