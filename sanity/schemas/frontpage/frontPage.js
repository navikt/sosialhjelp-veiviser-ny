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
            title: "Søknadpanel (deprecated)",
            type: "reference",
            to: {type: "linkPanel"},
            validation: (Rule) => Rule.required(),
        },
        {
            name: "applyDigitallyPanel",
            title: "Søknadpanel",
            type: "object",
            fields: [
                {
                    name: "title",
                    title: "Tittel",
                    type: "localeString",
                },
                {
                    name: "description",
                    title: "Beskrivelse",
                    type: "localeString",
                },
                {
                    name: "nySoknadButtonText",
                    title: "Ny søknad knappetekst",
                    type: "localeString",
                },
                {
                    name: "innsynButtonText",
                    title: "Innsyn knappetekst",
                    type: "localeString",
                },
                {
                    name: "illustration",
                    title: "Illustasjon",
                    type: "image",
                },
            ],
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
            name: "otherArticlesTitle",
            title: "Overskrift for andre artikler og lenker",
            type: "localeString",
        },
        {
            name: "otherArticles",
            title: "Andre artikler og lenker",
            type: "array",
            of: [{type: "linkWithDescription"}],
        },
    ],
};
