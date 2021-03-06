const withCss = require("@zeit/next-css");
const withLess = require("@zeit/next-less");
const packageJson = require("./package.json");
const navFrontendModuler = [];
Object.keys(packageJson.dependencies).forEach((key) => {
    if (key.startsWith("nav-frontend-")) {
        navFrontendModuler.push(key);
    }
    if (key.startsWith("@navikt/")) {
        navFrontendModuler.push(key);
    }
});
const withTranspileModules = require("next-transpile-modules")(
    navFrontendModuler
);

const redirects = [
    {source: "/artikkel/124876", destination: "/gi-beskjed", permanent: true},
    {source: "/artikkel/124875", destination: "/klage", permanent: true},
    {
        source: "/hvis-du-er-enslig-forsorger",
        destination: "https://www.nav.no/familie/alene-med-barn",
        permanent: true,
    },
];

module.exports = withTranspileModules(
    // withCss må med siden css blir disablet av withLess. Kan fjernes når alle less-avhengigheter er ute
    withCss(
        withLess({
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
        })
    )
);
