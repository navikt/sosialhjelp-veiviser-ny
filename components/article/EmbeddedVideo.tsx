import styled from "styled-components";

const StyledVideo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledIframe = styled.iframe`
    border: none;
    @media all and (max-width: 599px) {
        border: none;
        height: 49vw;
        width: calc("100vw - 34px");
    }
    @media all and (max-width: 799px) and (min-width: 600px) {
        border: none;
        height: 45vw;
        width: calc(90vw - 190px);
    }

    @media all and (min-width: 800px) {
        border: none;
        height: 319px;
        width: 568px;
    }
`;

export const EmbeddedVideo = (props: {url: string; title: string}) => {
    return (
        <StyledVideo>
            <StyledIframe
                title={props.title}
                src={props.url}
                allowFullScreen={true}
                frameBorder="0"
                className="sok_sosialhjelp_video_player"
            ></StyledIframe>
        </StyledVideo>
    );
};
