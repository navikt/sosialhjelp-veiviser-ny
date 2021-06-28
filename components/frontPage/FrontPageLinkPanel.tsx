import {BodyShort, LinkPanel, Title} from "@navikt/ds-react";
import {NavdsColorTextLink} from "@navikt/ds-tokens/dist/tokens";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const StyledLinkPanel = styled(LinkPanel)`
    padding: 1.25rem;
    cursor: pointer;
    margin-bottom: 0;
    height: calc(100% - 2.5rem);

    .navds-link-panel__content {
        align-self: start;
    }

    .navds-link-panel__chevron {
        display: none;
    }
`;

const StyledHeading = styled.div`
    color: ${NavdsColorTextLink};
`;

export const FrontPageLinkPanel = (props: {
    title: string;
    slug?: string;
    externalLink?: string;
    description: string;
}) => {
    return (
        <Link
            href={props.slug ? `/${props.slug}` : props.externalLink}
            passHref
        >
            <StyledLinkPanel border={false}>
                <StyledHeading>
                    <Title level={2} size="m" spacing>
                        {props.title}
                    </Title>
                </StyledHeading>
                <BodyShort>{props.description}</BodyShort>
            </StyledLinkPanel>
        </Link>
    );
};
