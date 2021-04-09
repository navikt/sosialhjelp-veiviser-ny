const express = require("express");
const mustacheExpress = require("mustache-express");
const path = require("path");

const app = express(); // create express app

const buildPath = path.resolve(__dirname, "build");

const basePath = "/sosialhjelp";

const decoratorUrl = process.env.DECORATOR_URL
    ? process.env.DECORATOR_URL
    : "https://www.nav.no/dekoratoren";

app.set("views", `${__dirname}/build`);
app.set("view engine", "mustache");
app.engine("html", mustacheExpress());

app.get(`${basePath}/hvis-du-er-enslig-forsorger`, (req, res) =>
    res.redirect(301, "https://www.nav.no/familie/alene-med-barn")
);

app.use(basePath, express.static(buildPath, {index: false}));

// Nais functions
app.get(`${basePath}/api/isAlive|isReady`, (req, res) => res.sendStatus(200));

app.use(/^(?!.*\/(internal|api|static)\/).*$/, (req, res) =>
    res.render("index.html", {DECORATOR_URL: decoratorUrl})
);

// start express server on port 5000
app.listen(5000, () => {
    console.log("server started on port 5000");
});
