import React from "react";

const Preview = ({value}) => (
    <div>
        <strong>Egendefinert komponent (håndtert i app)</strong>
    </div>
);

export default {
    name: "customBlockComponent",
    title: "Egendefinert komponent, håndtert i app",
    type: "object",
    fields: [
        {
            name: "customValue",
            title: "Verdi",
            type: "string",
        },
    ],
    preview: {
        component: Preview,
    },
};
