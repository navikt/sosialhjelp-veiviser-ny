import {
    PortableText,
    PortableTextBlockComponent,
    PortableTextMarkComponent,
} from "@portabletext/react";
import React, {useContext} from "react";
import Link from "next/link";
import Vimeo from "@u-wave/react-vimeo";
import styled from "styled-components";
import {EmbeddedVideo} from "./article/EmbeddedVideo";
import {
    Accordion,
    BodyLong,
    Ingress,
    Heading,
    Link as DSLink,
} from "@navikt/ds-react";

const NormalText: PortableTextBlockComponent = ({children}) => (
    <BodyLong spacing>{children}</BodyLong>
);

const H2: PortableTextBlockComponent = ({children}) => (
    <Heading level="2" size="medium" spacing>
        {children}
    </Heading>
);

const H3: PortableTextBlockComponent = ({children}) => (
    <Heading level="3" size="small" spacing>
        {children}
    </Heading>
);

const IngressText: PortableTextBlockComponent = ({children}) => (
    <Ingress spacing>{children}</Ingress>
);

const PortableTextLink: PortableTextMarkComponent<{
    _type: "link";
    blank: boolean;
    href: string;
}> = ({value, children}) => {
    return value.blank ? (
        <DSLink href={value.href} target="_blank" rel="noreferrer noopener">
            {children}
        </DSLink>
    ) : (
        <DSLink href={value.href}>{children}</DSLink>
    );
};

const InternalLink: PortableTextMarkComponent<{
    _type: "internalLink";
    slug: {current: string};
}> = ({value, children}) => {
    const href = `/${value.slug.current}`;
    return (
        <Link href={href}>
            <a className="navds-link">{children}</a>
        </Link>
    );
};

const InterpolatedText: PortableTextMarkComponent<{
    _type: "interpolate";
    prop: string;
}> = ({value}) => {
    const context = useContext(SanityContext);
    const {prop} = value;

    const interpolatedValue = context[prop];

    return <>{interpolatedValue}</>;
};

const StyledAccordion = styled(Accordion)`
    margin: 1rem 0;
`;

const serializers = {
    types: {
        vimeo: ({value}) => <Vimeo responsive video={value.url} />,

        embeddedVideo: ({value}) => (
            <EmbeddedVideo title={value.title} url={value.url} />
        ),

        expandedPanel: ({value}) => (
            <StyledAccordion>
                <Accordion.Item defaultOpen={value.defaultOpen}>
                    <Accordion.Header>{value.title}</Accordion.Header>
                    <Accordion.Content>
                        <SanityBlockContent blocks={value.body} />
                    </Accordion.Content>
                </Accordion.Item>
            </StyledAccordion>
        ),
    },
    block: {
        normal: NormalText,
        h2: H2,
        h3: H3,
        ingress: IngressText,
    },
    marks: {
        link: PortableTextLink,
        internalLink: InternalLink,
        interpolate: InterpolatedText,
    },
};

const SanityContext = React.createContext({});

export const SanityBlockContent = (props: {
    blocks: any;
    templateProps?: object;
}) => {
    return (
        <SanityContext.Provider value={props.templateProps}>
            <PortableText value={props.blocks} components={serializers} />
        </SanityContext.Provider>
    );
};
