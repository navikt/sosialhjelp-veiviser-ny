import React from "react";
import {LenkepanelBase} from "nav-frontend-lenkepanel/lib";
import Link from "next/link";
import styled from "styled-components/macro";
import {Systemtittel} from "nav-frontend-typografi";
import {colors} from "../../src/utils/variables";
import IllustrasjonsGruppe from "../../src/komponenter/bilder/IllustrasjonsGruppe";

const StyledPanel = styled.a`
    transition: all 0.2s;
    position: relative;
    margin: 1rem 0;

    .illustrasjonsGruppe {
        position: absolute;
        bottom: 0;
        right: 60px;
        margin-bottom: -5px;
    }

    @media all and (min-width: 802px) {
        padding: 2rem !important;

        h2 {
            display: block;
            width: 80%;
        }
    }

    @media all and (max-width: 802px) {
        h2 {
            display: block;
            width: 80%;
        }

        .illustrasjonsGruppe {
            right: 2vw;

            svg {
                height: 4vw;
                max-width: 40vw;
            }
        }
    }
`;

const CircleIllustration = styled.div`
    background-size: contain;
    border-radius: 50%;
    overflow: hidden;
    background-color: ${colors.digisosGronn};

    img {
        height: 100%;
        width: 100%;
    }

    @media all and (min-width: 501px) {
        width: 5rem;
        height: 5rem;
        min-width: 5rem;
        margin-right: 5px;
    }

    @media all and (max-width: 500px) {
        width: 2.5rem;
        height: 2.5rem;
        min-width: 2.5rem;
        margin-right: 5px;
    }
`;

export const SokOmSosialhjelpPanel = (props: {
    title: string;
    slug: string;
    iconUrl: string;
}) => {
    return (
        <LenkepanelBase
            linkCreator={(linkProps) => (
                <Link href={`/${linkProps.href}`} passHref>
                    <StyledPanel className="lenkepanel lenkepanel--border">
                        <CircleIllustration>
                            <img src={props.iconUrl} alt="" />
                        </CircleIllustration>

                        <Systemtittel className="lenkepanel__heading">
                            {props.title}
                        </Systemtittel>
                        <div className="illustrasjonsGruppe">
                            <IllustrasjonsGruppe />
                        </div>
                        <span className="lenkepanel__indikator" />
                    </StyledPanel>
                </Link>
            )}
            href={props.slug}
            border
        >
            <></>
        </LenkepanelBase>
    );
};
