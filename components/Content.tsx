import React from "react";
import styled from "styled-components";

const Container = styled.div`
    box-sizing: border-box;

    margin: 0 auto;
    padding: 0 1rem;
    width: 100%;
    max-width: 840px;
`;

export const Content = (props: {children}) => {
    return <Container>{props.children}</Container>;
};
