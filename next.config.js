const redirects = [
    {source: "/artikkel/124876", destination: "/gi-beskjed", permanent: true},
    {source: "/artikkel/124875", destination: "/klage", permanent: true},
    {
        source: "/hvis-du-er-enslig-forsorger",
        destination: "https://www.nav.no/familie/alene-med-barn",
        permanent: true,
    },
];

module.exports = {
    basePath: "/sosialhjelp",
    target: "server",
    trailingSlash: false,
    reactStrictMode: true,

    images: {
        domains: ["cdn.sanity.io"],
    },

    i18n: {
        locales: ["en", "nb", "nn"],
        defaultLocale: "nb",
        localeDetection: false,
    },

    async redirects() {
        return redirects;
    },
};
