import {AlertStripeType} from "nav-frontend-alertstriper";
import client from "./sanityClient";
import {Sprak} from "./sprakUtils";

const blockContentSpec = `
{
    ...,
    markDefs[]{
        ...,
        _type == 'internalLink' => {
            "slug": @.reference->slug,
        },
    },
    
}
`;

const articleSpec = `
{
    "id": _id,
    "title": coalesce(title[$locale], title.nb),
    "slug": slug.current,
    "metaDescription": coalesce(metaDescription[$locale], metaDescription.nb),
    "body": coalesce(body[$locale], body.nb)[]${blockContentSpec},
    "iconUrl": icon.asset->url,
    languages
}`;

const metadataSpec = `
{
    "title": coalesce(title[$locale], title.nb),
}
`;

const frontPageSpec = `
{
    "title": coalesce(title[$locale], title.nb),
    "metaDescription": coalesce(metaDescription[$locale], metaDescription.nb),
    "bannerIconUrl": bannerIcon.asset->url,
    "alert": alert->{
      "title": coalesce(title[$locale], title.nb),
      "slug": article->slug.current,
      type,
    },
  	"soknadPanel": soknadPanel->{
      "title": coalesce(title[$locale], title.nb),
      "slug": article->slug.current,
      "iconUrl": icon.asset->url,
    },
    "linkBoxes": linkBoxes[]->{
        "title": coalesce(title[$locale], title.nb),
        "articles": articles[]{
           "title": coalesce(title[$locale], title.nb),
           "description": coalesce(description[$locale], description.nb),
            "slug": article->slug.current,
        },
    }
}
`;

const applicationPageSpec = `
{
    "title": coalesce(title[$locale], title.nb),
    "metaDescription": coalesce(metaDescription[$locale], metaDescription.nb),
    "ingress": coalesce(ingress[$locale], ingress.nb),
    "applyDigitallyPanel": applyDigitallyPanel{
        "title": coalesce(title[$locale], title.nb),
        "iconUrl": icon.asset->url,
        "buttonText": coalesce(buttonText[$locale], buttonText.nb),
        "innsynButtonText": coalesce(innsynButtonText[$locale], innsynButtonText.nb),
        "label": coalesce(label[$locale], label.nb),
        "errorText": coalesce(errorText[$locale], errorText.nb),
        "openPanelLink": coalesce(openPanelLink[$locale], openPanelLink.nb),
        "closePanelLink": coalesce(closePanelLink[$locale], closePanelLink.nb),
        "body": coalesce(body[$locale], body.nb)[]${blockContentSpec},
        "soknadOgInnsynTekst": coalesce(soknadOgInnsynTekst[$locale], soknadOgInnsynTekst.nb)[]${blockContentSpec},
        "soknadUtenInnsynTekst": coalesce(soknadUtenInnsynTekst[$locale], soknadUtenInnsynTekst.nb)[]${blockContentSpec},
        "kunPapirTekst": coalesce(kunPapirTekst[$locale], kunPapirTekst.nb)[]${blockContentSpec},
    },
    "applyOfflinePanel": applyOfflinePanel{
        "title": coalesce(title[$locale], title.nb),
        "iconUrl": icon.asset->url,
        "body": coalesce(body[$locale], body.nb)[]${blockContentSpec},
    },
    "body": coalesce(body[$locale], body.nb)[]${blockContentSpec},
}`;

const panelSpec = `
{
    "innhold": innhold[]{
        "title": coalesce(title[$locale], title.nb),
        "boxElements": boxElements[]{
            "text": coalesce(text[$locale], text.nb),
            "externalHref": coalesce(externalHref[$locale], externalHref.nb),
            "internalHref": internalHref->slug.current,
        },
    }
}
`;

const otherPossibilitiesSpec = `
{
    "title": coalesce(title[$locale], title.nb),
    "metaDescription": coalesce(metaDescription[$locale], metaDescription.nb),
    "iconUrl": icon.asset->url,
    "ingress": coalesce(ingress[$locale], ingress.nb),
    "panelTopLeft": panelTopLeft${panelSpec},
    "panelTopRight": panelTopRight${panelSpec},
    "housing": housing{
        "title": coalesce(title[$locale], title.nb),
        "panels": panels[]{
            "title": coalesce(title[$locale], title.nb),
            "description": coalesce(description[$locale], description.nb),
            "href": coalesce(href[$locale], href.nb),
        }
    },
    "panelBottomLeft": panelBottomLeft${panelSpec},
    "panelBottomRight": panelBottomRight${panelSpec},
    "jobblyst": jobblyst{
        "title": coalesce(title[$locale], title.nb),
        "description": coalesce(description[$locale], description.nb),
        "illustrationUrl": illustration.asset->url,
        href
    },
}
`;

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
}

export interface SanityFrontpage {
    title: string;
    metaDescription: string;
    bannerIconUrl: string;
    alert?: {
        title: string;
        slug: string;
        type: AlertStripeType;
    };
    soknadPanel: {
        title: string;
        slug: string;
        iconUrl: string;
    };
    linkBoxes: [
        {
            title: string;
            articles: [
                {
                    title: string;
                    description: string;
                    slug: string;
                }
            ];
        }
    ];
}

export interface SanityApplicationPage {
    title: string;
    metaDescription: string;
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

export const fetchMetadataWithLocale = async (
    locale = "nb"
): Promise<SanityMetadata> => {
    const query = `*[_type == "frontPage"][0]${metadataSpec}`;
    const params = {locale: locale};
    return client.fetch(query, params);
};

export const fetchAllArticleSlugs = async (): Promise<[{slug: string}]> => {
    return client.fetch(`*[_type == "article"]{ 'slug': slug.current }`);
};

export const fetchArticleWithSlugAndLocale = async (
    slug = "",
    locale = "nb"
): Promise<SanityArticle> => {
    const query = `*[_type == "article" && slug.current == $slug][0]
    ${articleSpec}`;
    const params = {slug: slug, locale: locale};
    return client.fetch(query, params);
};

export const fetchFrontPageWithLocale = async (
    locale = "nb"
): Promise<SanityFrontpage> => {
    const query = `*[_type == "frontPage"][0]${frontPageSpec}`;
    const params = {locale: locale};
    return client.fetch(query, params);
};

export const fetchApplicationPageWithLocale = async (
    locale = "nb"
): Promise<SanityApplicationPage> => {
    const query = `*[_type == "applicationPage"][0]${applicationPageSpec}`;
    const params = {locale: locale};
    return client.fetch(query, params);
};

export const fetchOtherPossibilitiesWithLocale = async (
    locale = "nb"
): Promise<SanityOtherPossibilitiesPage> => {
    const query = `*[_type == "otherPossibilities"][0]${otherPossibilitiesSpec}`;
    const params = {locale: locale};
    return client.fetch(query, params);
};
