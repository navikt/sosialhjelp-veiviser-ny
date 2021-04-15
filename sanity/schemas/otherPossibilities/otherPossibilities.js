import {defaultLanguage} from "../utils/lang";

export default {
    name: "otherPossibilities",
    title: "Andre muligheter",
    type: "document",
    preview: {
        select: {
            title: `title.${defaultLanguage.id}`,
        },
    },
    initialValue: {
        slug: "andre-muligheter",
    },
    fields: [
        {
            name: "title",
            title: "Tittel",
            type: "localeString",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            readOnly: true,
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
            name: "icon",
            title: "Ikon",
            type: "image",
        },
        {
            name: "ingress",
            title: "Ingress",
            type: "localeString",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "panelTopLeft",
            type: "Panel topp venstre",
            type: "boxPanel",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "panelTopRight",
            type: "Panel topp høyre",
            type: "boxPanel",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "housing",
            title: "Hjelp til bolig",
            type: "housingPanel",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "panelBottomLeft",
            type: "Panel bunn venstre",
            type: "boxPanel",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "panelBottomRight",
            type: "Panel bunn høyre",
            type: "boxPanel",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "jobblyst",
            title: "Jobblyst",
            type: "jobblystPanel",
            validation: (Rule) => Rule.required(),
        },
    ],
};
