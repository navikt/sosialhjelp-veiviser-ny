import {BodyShort, LinkPanel, Title} from "@navikt/ds-react";
import {NavdsColorTextLink} from "@navikt/ds-tokens/dist/tokens";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import {ExternalLink} from "@navikt/ds-icons";

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
    display: flex;
    color: ${NavdsColorTextLink};
    gap: 0.5rem;
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
                <StyledHeading>
                    {props.iconUrl && (
                        <Image
                            width="24"
                            height="24"
                            src={props.iconUrl}
                            alt=""
                        />
                    )}
                    <Title level={2} size="m">
                        {props.title}
                    </Title>
                    {props.externalLink && (
                        <ExternalLink height="24" width="24" fill="#0067C5" />
                    )}
                </StyledHeading>
                <BodyShort>{props.description}</BodyShort>
            </StyledLinkPanel>
        </Link>
    );
};
