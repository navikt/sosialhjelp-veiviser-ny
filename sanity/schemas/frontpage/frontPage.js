import {defaultLanguage} from "../utils/lang";

export default {
    name: "frontPage",
    title: "Forside",
    type: "document",
    preview: {
        select: {
            title: `title.${defaultLanguage.id}`,
        },
    },
    fields: [
        {
            name: "title",
            title: "Tittel",
            type: "localeString",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "metaDescription",
            title: "Metabeskrivelse",
            type: "localeString",
            description:
                "Søkemotorer kan bruke denne teksten i søkeresultater. Kan i de fleste tilfeller være tom, da Google etc helst genererer egne tekster basert på innholdet på siden",
        },
        {
            name: "bannerIcon",
            title: "Banner Icon",
            type: "image",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "alert",
            title: "Varselboks",
            type: "reference",
            to: {type: "alert"},
        },
        {
            name: "soknadPanel",
            title: "Søknadpanel",
            type: "reference",
            to: {type: "linkPanel"},
            validation: (Rule) => Rule.required(),
        },
        {
            name: "linkBoxes",
            title: "Lenkebokser",
            type: "array",
            of: [{type: "reference", to: {type: "linkBox"}}],
        },
        {
            name: "featuredArticles",
            title: "Fremhevede artikler",
            type: "array",
            of: [{type: "linkWithDescription"}],
        },
        {
            name: "otherArticles",
            title: "Andre artikler og lenker",
            type: "array",
            of: [{type: "linkWithDescription"}],
        },
    ],
};
