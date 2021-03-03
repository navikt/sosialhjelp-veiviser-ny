import {supportedLanguages} from "../utils/lang";

const localeString = {
    title: "Localized string",
    name: "localeString",
    type: "object",
    // Fieldsets can be used to group object fields.
    // Here we omit a fieldset for the "default language",
    // making it stand out as the main field.
    fieldsets: [
        {
            title: "Oversettelser",
            name: "translations",
            options: {collapsible: true},
        },
    ],
    // Dynamically define one field per language
    fields: supportedLanguages.map((lang) => ({
        title: lang.title,
        name: lang.id,
        type: "string",
        fieldset: lang.isDefault ? null : "translations",
    })),
};

export default localeString;
