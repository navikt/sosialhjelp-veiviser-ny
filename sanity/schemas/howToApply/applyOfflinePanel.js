import {defaultLanguage} from "../utils/lang";

export default {
    name: "applyOfflinePanel",
    title: "Søk på papir panel",
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
            name: "icon",
            title: "Ikon",
            type: "image",
        },
        {
            name: "body",
            title: "Innhold",
            type: "localeBlockContent",
            validation: (Rule) => Rule.required(),
        },
    ],
};
