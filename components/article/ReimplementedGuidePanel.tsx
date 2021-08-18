import React from "react";
import styled from "styled-components";

const StyledGuidePanel = styled.div`
    position: relative;
    margin-top: 3.125rem;
    padding: 4.25rem 2rem 2rem 2rem;

    @media (max-width: 448px) {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    border: 2px solid #99dead;

    border-radius: 0.5rem;
    display: flex;
    align-items: center;

    .navds-title {
        text-align: center;
    }
`;

const Icon = styled.div`
    position: absolute;

    top: -50px;
    left: 50%;
    margin-left: -3.125rem;

    display: flex;
    align-items: flex-end;
    justify-content: center;

    background-color: #99dead;
    height: 6.25rem;
    width: 6.25rem;

    border-radius: 50%;

    overflow: hidden;
`;

export const ReimplementedGuidePanel = (props: {
    svg: React.ReactNode;
    children: any;
}) => {
    return (
        <StyledGuidePanel>
            <Icon>{props.svg}</Icon>
            <div>{props.children}</div>
        </StyledGuidePanel>
    );
};
