import React from "react";
import {fetchAllArticleSlugs} from "../src/utils/sanityFetch";

const generateSitemap = (pages: {slug: string}[]): string =>
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
            .map(({slug}) => {
                return `
                    <url>
                        <loc>${`${process.env.NEXT_PUBLIC_APP_URL}/${slug}`}</loc>
                    </url>
                `;
            })
            .join("")}
    </urlset>
    `;

class Sitemap extends React.Component {
    static getInitialProps = async ({res}) => {
        const articleSlugs = await fetchAllArticleSlugs();

        const pages = articleSlugs.map((slug) => slug);

        pages.push(
            {slug: ""},
            {slug: "slik-soker-du"},
            {slug: "andre-muligheter"}
        );

        res.setHeader("Content-Type", "text/xml");
        res.write(generateSitemap(pages));
        res.end();
    };
}

interface Page {
    path: string;
    slug: string;
}

export default Sitemap;
