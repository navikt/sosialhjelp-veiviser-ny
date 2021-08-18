import BlockContent from "@sanity/block-content-to-react";
import React, {useContext} from "react";
import Link from "next/link";
import Vimeo from "@u-wave/react-vimeo";
import client from "../src/utils/sanityClient";
import styled from "styled-components/macro";
import {EmbeddedVideo} from "./article/EmbeddedVideo";
import {
    Accordion,
    BodyLong,
    Ingress,
    Title,
    Link as DSLink,
} from "@navikt/ds-react";

const StyledAccordion = styled(Accordion)`
    margin: 1rem 0;
`;

const serializers = {
    types: {
        vimeo: function renderVimeo({node}) {
            const {url} = node;
            return <Vimeo responsive video={url} />;
        },
        embeddedVideo: function renderEmbeddedVideo({node}) {
            const {url, title} = node;
            return <EmbeddedVideo title={title} url={url} />;
        },
        expandedPanel: function renderExpandedPanel({node}) {
            return (
                <StyledAccordion heading={node.title} open={node.defaultOpen}>
                    <SanityBlockContent blocks={node.body} />
                </StyledAccordion>
            );
        },

        block: function renderBlock({node, children}) {
            const style = node.style;
            if (style === "normal") {
                return <BodyLong spacing>{children}</BodyLong>;
            }
            if (style === "h2") {
                return (
                    <Title level={2} size="m" spacing>
                        {children}
                    </Title>
                );
            }
            if (style === "h3") {
                return (
                    <Title level={3} size="s" spacing>
                        {children}
                    </Title>
                );
            }
            if (style === "ingress") {
                return <Ingress spacing>{children}</Ingress>;
            }

            return children;
        },
    },
    marks: {
        link: function renderLink({mark, children}) {
            const {blank, href} = mark;

            return blank ? (
                <DSLink href={href} target="_blank" rel="noreferrer noopener">
                    {children}
                </DSLink>
            ) : (
                <DSLink href={href}>{children}</DSLink>
            );
        },
        internalLink: function renderInternalLink({mark, children}) {
            const {slug = {}} = mark;
            const href = `/${slug.current}`;
            return (
                <Link href={href}>
                    <a className="navds-link">{children}</a>
                </Link>
            );
        },
        interpolate: function renderInterpolate({mark}) {
            const context = useContext(SanityContext);
            const {prop} = mark;

            const value = context[prop];

            return <>{value}</>;
        },
    },
};

const SanityContext = React.createContext({});

export const SanityBlockContent = (props: {
    blocks: any;
    templateProps?: object;
}) => {
    return (
        <SanityContext.Provider value={props.templateProps}>
            <BlockContent
                blocks={props.blocks}
                serializers={serializers}
                {...client.config()}
            />
        </SanityContext.Provider>
    );
};
