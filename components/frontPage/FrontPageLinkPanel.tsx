import {BodyShort, LinkPanel, Heading} from "@navikt/ds-react";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import {ExternalLink} from "@navikt/ds-icons";

const StyledLinkPanel = styled(LinkPanel)`
    padding: 2rem;
    cursor: pointer;
    margin-bottom: 0;
    height: 100%;

    @media (max-width: 648px) {
        padding: 1rem;
    }

    .navds-link-panel__content {
        align-self: start;
    }

    .navds-link-panel__chevron {
        display: none;
    }
`;

const StyledHeading = styled.div`
    display: flex;
    align-items: center;
    color: var(--navds-semantic-color-link);
    gap: 0.5rem;

    img,
    svg {
        margin-bottom: var(--navds-spacing-3);
    }
`;

export const FrontPageLinkPanel = (props: {
    title: string;
    slug?: string;
    externalLink?: string;
    description: string;
    iconUrl?: string;
}) => {
    return (
        <Link
            href={props.slug ? `/${props.slug}` : props.externalLink}
            passHref
        >
            <StyledLinkPanel border={false}>
                <LinkPanel.Title>
                    <StyledHeading>
                        {props.iconUrl && (
                            <img
                                width="24"
                                height="24"
                                src={props.iconUrl}
                                alt=""
                            />
                        )}
                        <Heading level="2" size="medium" spacing>
                            {props.title}
                        </Heading>
                        {props.externalLink && (
                            <ExternalLink
                                height="24"
                                width="24"
                                fill="#0067C5"
                            />
                        )}
                    </StyledHeading>
                </LinkPanel.Title>
                <LinkPanel.Description>
                    <BodyShort>{props.description}</BodyShort>
                </LinkPanel.Description>
            </StyledLinkPanel>
        </Link>
    );
};
