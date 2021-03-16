import {defaultLanguage} from "../utils/lang";

export default {
    name: "linkBox",
    title: "Lenkeboks",
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
            name: "articles",
            title: "Artikkler",
            type: "array",
            of: [{type: "linkBoxLine"}],
            validation: (Rule) => Rule.required(),
        },
    ],
};
