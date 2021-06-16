import {Sidetittel, Systemtittel} from "nav-frontend-typografi";
import styled from "styled-components";
import {colors} from "../src/utils/variables";

interface BannerProps {
    height: string;
}

const Banner = styled.div<BannerProps>`
    background-color: ${colors.digisosGronn};
    border-bottom: 4px solid ${colors.digisosMorkGronn};
    width: 100%;
    display: flex;
    justify-content: center;
    min-height: ${(props) => props.height};
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

const BannerIcon = styled.img`
    margin-top: 1rem;
    align-self: flex-end;
`;

export const PageBanner = (props: {
    isFrontPage?: boolean;
    title: string;
    iconUrl?: string;
}) => {
    return (
        <Banner height={props.isFrontPage ? "165px" : "70px"}>
            <BannerContent>
                {props.isFrontPage ? (
                    <Sidetittel tag="h1">{props.title}</Sidetittel>
                ) : (
                    <Systemtittel tag="h1">{props.title}</Systemtittel>
                )}
                {props.isFrontPage && props.iconUrl && (
                    <BannerIcon alt="" src={props.iconUrl} />
                )}
            </BannerContent>
        </Banner>
    );
};
