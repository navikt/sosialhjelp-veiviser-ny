const {withSentryConfig} = require("@sentry/nextjs");

const sentryWebpackPluginOptions = {
    silent: true,
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options.
};

const redirects = [
    {source: "/artikkel/124876", destination: "/gi-beskjed", permanent: true},
    {source: "/artikkel/124875", destination: "/klage", permanent: true},
    {
        source: "/hvis-du-er-enslig-forsorger",
        destination: "https://www.nav.no/familie/alene-med-barn",
        permanent: true,
    },
];

const moduleExports = {
    basePath: "/sosialhjelp",
    target: "server",
    trailingSlash: false,
    reactStrictMode: true,
    swcMinify: true, // Blir default på i Next 12.2

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

if (process.env.ENABLE_SENTRY === "true") {
    console.log("sentry enabled", process.env.ENABLE_SENTRY);
    module.exports = withSentryConfig(
        moduleExports,
        sentryWebpackPluginOptions
    );
} else {
    module.exports = moduleExports;
}
