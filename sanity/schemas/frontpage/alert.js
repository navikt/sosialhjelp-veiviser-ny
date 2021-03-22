import {defaultLanguage} from "../utils/lang";

export default {
    name: "alert",
    title: "Varsel",
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
            name: "type",
            title: "Type",
            type: "string",
            options: {
                list: ["info", "suksess", "advarsel", "feil"],
            },
        },
        {
            name: "article",
            title: "Artikkel",
            type: "reference",
            to: [
                {
                    type: "article",
                },
            ],
            validation: (Rule) => Rule.required(),
        },
    ],
};
