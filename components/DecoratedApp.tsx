import {ReactChild} from "react";
import styled from "styled-components/macro";
import {useDecorator} from "../src/utils/useNextDecorator";

export interface Breadcrumb {
    url: string;
    title: string;
    handleInApp?: boolean;
}

export interface Language {
    url: string;
    locale: string;
    handleInApp?: boolean;
}

interface Props {
    breadcrumbPage?: Breadcrumb;
    availableLanguages: Language[];
    children: ReactChild;
}

const StyledDecoratedApp = styled.div`
    background-color: #e7e9e9;
`;

export const DecoratedApp = (props: Props) => {
    useDecorator(props.breadcrumbPage, props.availableLanguages);

    return <StyledDecoratedApp>{props.children}</StyledDecoratedApp>;
};
