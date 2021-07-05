import styled from "styled-components";

const StyledVideo = styled.div`
    position: relative;
    padding-bottom: 56.25%;
`;

const StyledIframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const EmbeddedVideo = (props: {url: string; title: string}) => {
    return (
        <StyledVideo>
            <StyledIframe
                title={props.title}
                src={props.url}
                allowFullScreen={true}
                frameBorder="0"
            ></StyledIframe>
        </StyledVideo>
    );
};
