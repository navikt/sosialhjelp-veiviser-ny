import {defaultLanguage} from "../utils/lang";

export default {
    name: "linkBoxLine",
    title: "Lenkebokslinje",
    type: "object",
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
            name: "description",
            title: "Beskrivelse",
            type: "localeString",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "article",
            title: "Artikkel",
            type: "reference",
            to: {type: "article"},
            validation: (Rule) => Rule.required(),
        },
    ],
};
