import {Title} from "@navikt/ds-react";
import React from "react";
import styled from "styled-components";
import {colors} from "../src/utils/variables";

const Banner = styled.header`
    background-color: ${colors.digisosGronn};
    border-bottom: 4px solid ${colors.digisosMorkGronn};
    width: 100%;
    display: flex;
    justify-content: center;
    min-height: 70px;
    margin-bottom: 2rem;
`;

const BannerContent = styled.div`
    width: 100%;
    max-width: 792px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    h1 {
        margin: 0.5rem 1rem;
    }
`;

export const PageBanner = (props: {
    isFrontPage?: boolean;
    title: string;
    iconUrl?: string;
}) => {
    return (
        <Banner>
            <BannerContent>
                <Title level={1} size="m">
                    {props.title}
                </Title>
            </BannerContent>
        </Banner>
    );
};
