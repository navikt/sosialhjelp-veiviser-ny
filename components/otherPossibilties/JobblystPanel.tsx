import {Ingress, LinkPanel, Heading} from "@navikt/ds-react";
import React from "react";
import styled from "styled-components";
import {SanityJobblystPanel} from "../../src/utils/sanityFetch";

const StyledJobblystPanel = styled(LinkPanel)`
    margin-top: 1rem;
    margin-bottom: 4rem;
    border: 4px solid #9bd0b0;
    border-radius: 5px;
    transition: all 0.2s;

    .navds-link-panel__content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }

    @media all and (min-width: 801px) {
        .navds-link-panel__chevron {
            margin-bottom: 3rem;
        }

        padding: 3rem 1.5rem 0rem 3rem !important;
    }

    @media all and (max-width: 800px) {
        padding: 1rem;
    }

    :hover {
        border: 4px solid #0067c5;

        h1,
        p {
            color: black;
            text-decoration-color: black;
        }
    }
`;

const Content = styled.div`
    @media all and (min-width: 801px) {
        align-self: center;
        padding-bottom: 3rem;
    }
`;

const JobblystImage = styled.img`
    @media all and (max-width: 800px) {
        display: none;
    }
    @media all and (min-width: 801px) {
        align-self: flex-end;
        width: 322px;
        margin-right: 1rem;
    }
`;

export const JobblystPanel = (props: SanityJobblystPanel) => {
    return (
        <StyledJobblystPanel href={props.href} border={false}>
            <Content>
                <Heading level="2" size="large" spacing>
                    {props.title}
                </Heading>
                <Ingress>{props.description}</Ingress>
            </Content>
            <JobblystImage src={props.illustrationUrl} alt="" />
        </StyledJobblystPanel>
    );
};
