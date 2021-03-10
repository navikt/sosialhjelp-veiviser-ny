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
import client, {urlFor} from "../utils/sanityClient";
import {detekterSprak} from "../utils/sprakUtils";
import Veilederpanel from "nav-frontend-veilederpanel";
import styled from "styled-components/macro";
import {SokDigitalt} from "./sokDigitalt/SokDigitalt";

const StyledVeilederPanel = styled.div`
    margin: 5em 0 2em 0;

    .typo-undertittel {
        margin-top: 0;
        margin-bottom: 1rem;
        display: block;
        width: 100%;
        text-align: center;
    }
`;

const serializers = {
    types: {
        vimeo: function renderVimeo({node}) {
            const {url} = node;
            return <Vimeo responsive video={url} />;
        },
        customBlockComponent: function renderCustomBlockComponent({node}) {
            const {customValue} = node;
            if (customValue === "sokDigitalt") {
                return <SokDigitalt />;
            }
            return <div>Ikke implementert</div>;
        },
        expandedPanel: function renderExpandedPanel({node}) {
            return (
                <Ekspanderbartpanel tittel={node.title} apen={node.defaultOpen}>
                    <SanityBlockContent blocks={node.body} />
                </Ekspanderbartpanel>
            );
        },
        veilederPanel: function renderVeilederPanel({node}) {
            return (
                <StyledVeilederPanel>
                    <Veilederpanel
                        type="plakat"
                        kompakt
                        fargetema="suksess"
                        svg={<img src={urlFor(node.icon).url()} alt="" />}
                    >
                        <Undertittel>{node.title}</Undertittel>
                        <SanityBlockContent blocks={node.body} />
                    </Veilederpanel>
                </StyledVeilederPanel>
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