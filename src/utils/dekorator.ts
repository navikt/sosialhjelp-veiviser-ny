import crypto from "crypto";
import * as cheerio from "cheerio";

import {cache} from "./cache";

export interface DecoratorParts {
    decoratorHeader: string;
    decoratorFooter: string;
    decoratorEnv: string;
    linkTags: LinkTags[];
    scriptTags: ScriptTags[];
}

export interface LinkTags {
    href?: string;
    key?: string;
    rel?: string;
    type?: string;
}

export interface ScriptTags {
    id?: string;
    key?: string;
    src: string;
    type?: string;
    defer?: string | boolean;
    async?: string | boolean;
}

const getDecoratorCached = async () => {
    return new Promise((resolve, reject) => {
        const decorator = cache.get("decorator-cache");
        if (decorator) {
            console.log("got decorator from cache");
            resolve(decorator);
        } else {
            fetch("https://www.nav.no/dekoratoren/?feedback=false")
                .then((res) => res.text())
                .then((body) => {
                    cache.set("decorator-cache", body);
                    resolve(body);
                })
                .catch((err) => reject(err));
        }
    });
};

const objHash = (obj: any): string => {
    const str = JSON.stringify(obj);
    return crypto.createHash("md5").update(str).digest("hex");
};

export const fetchDecoratorParts = async (): Promise<DecoratorParts> => {
    const decoratorSrc = await getDecoratorCached();

    //@ts-ignore
    const $ = cheerio.load(decoratorSrc);

    const scriptTags: ScriptTags[] = [];

    $("#scripts script").each((index: number, element: any) => {
        element.attribs.key = objHash(element.attribs);
        scriptTags.push({...element.attribs});
    });

    $("#megamenu-resources script").each((index: number, element: any) => {
        element.attribs.key = objHash(element.attribs);
        scriptTags.push({...element.attribs});
    });

    const linkTags: LinkTags[] = [];
    $("#styles link").each((index: number, element: any) => {
        element.attribs.key = objHash(element.attribs);
        linkTags.push({...element.attribs});
    });

    $("#megamenu-resources link").each((index: number, element: any) => {
        element.attribs.key = objHash(element.attribs);
        linkTags.push({...element.attribs});
    });
    //@ts-ignore
    // eslint-disable-next-line
    scriptTags.map((attrib) => {
        if (attrib.id === "google-tag-manager-props") {
            attrib.defer = true;
            attrib.async = true;
        }
        if (attrib.src.indexOf("app.min.js")) {
            attrib.defer = "true";
        }
    });

    return {
        decoratorHeader: $.html($("#decorator-header")),
        decoratorFooter: $.html($("#decorator-footer")),
        decoratorEnv: $.html($("#decorator-env")),
        scriptTags: scriptTags,
        linkTags: linkTags,
    };
};
