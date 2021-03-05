import BlockContent from "@sanity/block-content-to-react";
import Lenke from "nav-frontend-lenker";
import {
    Element,
    Ingress,
    Normaltekst,
    Undertittel,
} from "nav-frontend-typografi";
import Ekspanderbartpanel from "nav-frontend-ekspanderbartpanel";
import React from "react";
import {Link} from "react-router-dom";
import Vimeo from "@u-wave/react-vimeo";
import client from "../utils/sanityClient";
import {detekterSprak} from "../utils/sprakUtils";

const serializers = {
    types: {
        vimeo: function renderVimeo({node}) {
            const {url} = node;
            return <Vimeo responsive video={url} />;
        },
        expandedPanel: function renderExpandedPanel({node}) {
            return (
                <Ekspanderbartpanel tittel={node.title} apen={node.defaultOpen}>
                    <SanityBlockContent blocks={node.body} />
                </Ekspanderbartpanel>
            );
        },
        block: function renderBlock({node, children}) {
            const style = node.style;
            if (style === "normal") {
                return <Normaltekst>{children}</Normaltekst>;
            }
            if (style === "h2") {
                return <Undertittel>{children}</Undertittel>;
            }
            if (style === "h3") {
                return <Element tag="h3">{children}</Element>;
            }
            if (style === "ingress") {
                return <Ingress>{children}</Ingress>;
            }

            console.error("unhandled style", node);
            return children;
        },
    },
    marks: {
        fileUpload: function renderFileUpload({mark, children}) {
            const {slug} = mark;
            return (
                <Lenke href={`/okonomi-og-gjeld/api/download/${slug}`}>
                    {children}
                </Lenke>
            );
        },
        link: function renderLink({mark, children}) {
            const {blank, href} = mark;

            return blank ? (
                <Lenke href={href} target="_blank" rel="noreferrer noopener">
                    {children}
                </Lenke>
            ) : (
                <Lenke href={href}>{children}</Lenke>
            );
        },
        internalLink: function renderInternalLink({mark, children}) {
            const {slug = {}} = mark;
            const href = `/${slug.current}?lang=${detekterSprak()}`;
            return (
                <Link to={href} className="lenke">
                    {children}
                </Link>
            );
        },
    },
};

export const SanityBlockContent = (props) => {
    return (
        <BlockContent
            blocks={props.blocks}
            serializers={serializers}
            {...client.config()}
        />
    );
};
