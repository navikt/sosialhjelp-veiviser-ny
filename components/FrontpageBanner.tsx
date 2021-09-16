import React from "react";
import styled from "styled-components";
import {Heading} from "@navikt/ds-react";

import {colors} from "../src/utils/variables";

const Banner = styled.header`
    min-height: calc(200px - 1rem);
    background-color: ${colors.digisosGronn};
    border-bottom: 4px solid ${colors.digisosMorkGronn};
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    padding: 1rem 1rem 0 1rem;
`;

const BannerContent = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    h1 {
        margin: 0.5rem 1rem;
    }
`;

const BannerIcon = styled.img`
    margin-top: 1rem;
    align-self: flex-end;
`;

export const FrontpageBanner = (props: {title: string; iconUrl: string}) => {
    return (
        <Banner>
            <BannerContent>
                <Heading level="1" size="2xlarge">
                    {props.title}
                </Heading>
                <BannerIcon src={props.iconUrl} alt="" />
            </BannerContent>
        </Banner>
    );
};
