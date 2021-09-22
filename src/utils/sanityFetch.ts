import client from "./sanityClient";

export enum Sprak {
    NORSK_BOKMAL = "nb",
    NYNORSK = "nn",
    ENGELSK = "en",
}

export const blockContentSpec = `
{
    ...,
    _type == 'expandedPanel' => {
        ...,
        "body": body[]{
            ...,
            markDefs[]{
                ...,
                _type == 'internalLink' => {
                    "slug": @.reference->slug,
                    "type": @.reference->_type,
                },
            },
        }
    },
    markDefs[]{
        ...,
        _type == 'internalLink' => {
            "slug": @.reference->slug,
        },
    },
    
}
`;

export const metadataSpec = `*[_type == "frontPage"][0]
{
    "title": coalesce(title[$locale], title.nb),
    "bannerIconUrl": bannerIcon.asset->url,
}`;

export interface SanityArticle {
    body: any;
    title: string;
    slug: string;
    metaDescription?: string;
    iconUrl?: string;
    languages?: Sprak[]; // Bytt til required når lagt på i alle artikler
}

export interface SanityMetadata {
    title: string;
    bannerIconUrl: string;
}

export interface SanityFrontpage {
    title: string;
    metaDescription?: string;
    bannerIconUrl: string;
    alert?: {
        title: string;
        slug: string;
        variant: "error" | "warning" | "info" | "success";
    };
    applyDigitallyPanel: {
        title: string;
        description: string;
        nySoknadButtonText: string;
        innsynButtonText: string;
        illustrationUrl: string;
    };
    featuredArticles: [
        {
            title: string;
            description: string;
            slug?: string;
            externalLink?: string;
            iconUrl?: string;
        }
    ];
    otherArticlesTitle: string;
    otherArticles: [
        {
            title: string;
            description: string;
            slug?: string;
            externalLink?: string;
            iconUrl?: string;
        }
    ];
}

export interface SanityApplicationPage {
    title: string;
    metaDescription?: string;
    ingress: string;
    applyDigitallyPanel: SanityApplyDigitallyPanel;
    applyOfflinePanel: {
        title: string;
        iconUrl: string;
        body: any;
    };
    body: any;
}

export interface SanityApplyDigitallyPanel {
    title: string;
    iconUrl: string;
    buttonText: string;
    innsynButtonText: string;
    label: string;
    errorText: string;
    openPanelLink: string;
    closePanelLink: string;
    body: any;
    soknadOgInnsynTekst: any;
    soknadUtenInnsynTekst: any;
    kunPapirTekst: any;
}

export interface SanityOtherPossibilitiesPage {
    title: string;
    metaDescription?: string;
    iconUrl?: string;
    ingress: string;
    panelTopLeft: SanityPanelSpec;
    panelTopRight: SanityPanelSpec;
    housing: SanityHousingPanel;
    panelBottomLeft: SanityPanelSpec;
    panelBottomRight: SanityPanelSpec;
    jobblyst: SanityJobblystPanel;
}

export interface SanityPanelSpec {
    innhold: [
        {
            title: string;
            boxElements: [
                {
                    text: string;
                    externalHref?: string;
                    internalHref?: string;
                }
            ];
        }
    ];
}

export interface SanityHousingPanel {
    title: string;
    panels: [
        {
            title: string;
            description?: string;
            href: string;
        }
    ];
}

export interface SanityJobblystPanel {
    title: string;
    description: string;
    illustrationUrl: string;
    href: string;
}

export interface SanityAlert {
    type: "info" | "suksess" | "advarsel" | "feil";
}

export const fetchAllArticleSlugs = async (): Promise<[{slug: string}]> => {
    return client.fetch(`*[_type == "article"]{ 'slug': slug.current }`);
};
