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

const StyledDecoratedApp = styled.div``;

export const DecoratedApp = (props: Props) => {
    const breadcrumbs = [
        {
            title: "Økonomisk sosialhjelp",
            url: "/sosialhjelp/next",
        },
    ];

    useEffect(() => {
        setBreadcrumbs(breadcrumbs);
    }, [breadcrumbs]);

    const availableLanguages = [
        {
            url: "/sosialhjelp/next/nb",
            locale: "nb",
        },
        {
            url: "/sosialhjelp/next/nn",
            locale: "nn",
        },
        {
            url: "/sosialhjelp/next/en",
            locale: "en",
        },
    ];

    useEffect(() => {
        setAvailableLanguages(availableLanguages);
    }, [availableLanguages]);

    return <StyledDecoratedApp>{props.children}</StyledDecoratedApp>;
};
