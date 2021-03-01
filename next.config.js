const withLess = require("@zeit/next-less");
const packageJson = require("./package.json");
const navFrontendModuler = [];
Object.keys(packageJson.dependencies).forEach((key) => {
    if (key.startsWith("nav-frontend-")) {
        navFrontendModuler.push(key);
    }
    if (key.startsWith("@navikt/nav-dekoratoren-moduler")) {
        navFrontendModuler.push(key);
    }
});
const withTranspileModules = require("next-transpile-modules")(
    navFrontendModuler
);
module.exports = withTranspileModules(
    withLess({
        basePath: "/sosialhjelp/next",
        target: "server",
        trailingSlash: false,
        reactStrictMode: true,

        i18n: {
            locales: ["en", "nb", "nn"],
            defaultLocale: "nb",
            localeDetection: false,
        },
    })
);
