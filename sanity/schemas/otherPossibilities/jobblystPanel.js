import {defaultLanguage} from "../utils/lang";

export default {
    name: "jobblystPanel",
    title: "Jobblyst",
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
            name: "illustration",
            title: "Illustrasjon",
            type: "image",
        },
        {
            name: "href",
            title: "URL",
            type: "url",
            validation: (Rule) => Rule.required(),
        },
    ],
};
