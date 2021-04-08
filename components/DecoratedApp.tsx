import {ReactChild, useEffect} from "react";
import styled from "styled-components/macro";
import {
    setBreadcrumbs,
    setAvailableLanguages,
} from "@navikt/nav-dekoratoren-moduler";

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
    breadcrumbs: Breadcrumb[];
    availableLanguages: Language[];
    children: ReactChild;
}

const StyledDecoratedApp = styled.div`
    background-color: #e7e9e9;
`;

export const DecoratedApp = (props: Props) => {
    const breadcrumbs = [
        {
            title: "Økonomisk sosialhjelp",
            url: "/sosialhjelp",
        },
    ];

    useEffect(() => {
        setBreadcrumbs(breadcrumbs);
    }, [breadcrumbs]);

    const availableLanguages = [
        {
            url: "/sosialhjelp/nb",
            locale: "nb",
        },
        {
            url: "/sosialhjelp/nn",
            locale: "nn",
        },
        {
            url: "/sosialhjelp/en",
            locale: "en",
        },
    ];

    useEffect(() => {
        setAvailableLanguages(availableLanguages);
    }, [availableLanguages]);

    return <StyledDecoratedApp>{props.children}</StyledDecoratedApp>;
};
