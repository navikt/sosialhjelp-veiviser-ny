import {defaultLanguage} from "../utils/lang";

export default {
    name: "linkPanel",
    title: "Lenkepanel",
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
            name: "icon",
            title: "Ikon",
            type: "image",
        },
        {
            name: "article",
            title: "Artikkel",
            type: "reference",
            to: [
                {
                    type: "article",
                },
                {
                    type: "otherPossibilities",
                },
                {type: "applicationPage"},
            ],
            validation: (Rule) => Rule.required(),
        },
    ],
};
