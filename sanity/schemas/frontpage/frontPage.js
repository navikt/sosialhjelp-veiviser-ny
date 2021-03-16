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
                "Dette er teksten som vil vises for søkeresultater på eks. Google",
            validation: (Rule) => Rule.required(),
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
    ],
};
