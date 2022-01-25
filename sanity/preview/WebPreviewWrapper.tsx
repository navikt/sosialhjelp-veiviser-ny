import styled from "styled-components";
import * as React from "react";

const Style = styled.div`
    iframe {
        height: 100%;
        width: 100%;
    }
    height: calc(100% - 2rem);
    margin: 1rem;
    box-shadow: 0 0 1rem #888;
`;

const getBasepath = () => {
    if (window.location.href.includes("localhost")) {
        return "http://localhost:3000/sosialhjelp";
    }

    return `${window.location.origin}/sosialhjelp`;
};

export function WebPreviewWrapper(props: {url: string}) {
    return (
        <Style>
            <iframe
                src={`${getBasepath()}/api/preview?slug=${props.url}`}
                frameBorder={0}
            />
        </Style>
    );
}
