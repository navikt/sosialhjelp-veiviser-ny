import {useEffect} from "react";
import {
    setAvailableLanguages,
    setBreadcrumbs,
    setParams,
} from "@navikt/nav-dekoratoren-moduler";
import {detekterSprak} from "./sprakUtils";
import {useCookies} from "react-cookie";

type Locale = "nb" | "nn" | "en";

interface AvailableLanguage {
    locale: Locale;
    url: string;
}

export const useDecorator = (pages: {title: string; slug: string}[]) => {
    const [cookie, setCookie] = useCookies(["decorator-language"]);
    const {REACT_APP_APP_URL} = process.env;

    const language = detekterSprak();

    const breadcrumbs = [
        {
            title:
                language === "en"
                    ? "Financial Assistance"
                    : "Økonomisk sosialhjelp",
            url: `${REACT_APP_APP_URL}?lang=${language}`,
        },
    ];

    pages.reverse().forEach((page) => {
        const breadcrumb = {
            title: page.title,
            url: `${REACT_APP_APP_URL}${page.slug}?lang=${language}`,
        };
        breadcrumbs.push(breadcrumb);
    });

    const languages: Locale[] = ["nb", "nn", "en"];
    const availableLanguages: AvailableLanguage[] = [];

    if (pages.length === 0) {
        languages.forEach((locale) => {
            availableLanguages.push({
                locale: locale,
                url: `${REACT_APP_APP_URL}?lang=${locale}`,
            });
        });
    }
    if (pages.length > 0) {
        const page = pages.pop();
        languages.forEach((locale) => {
            availableLanguages.push({
                locale: locale,
                url: `${REACT_APP_APP_URL}${page?.slug}?lang=${locale}`,
            });
        });
    }

    const params = {
        feedback: false,
    };

    useEffect(() => {
        setBreadcrumbs(breadcrumbs);
    }, [breadcrumbs]);

    useEffect(() => {
        setCookie("decorator-language", language);
        if (availableLanguages.length > 0) {
            setAvailableLanguages(availableLanguages);
        }
    }, [availableLanguages, language, cookie, setCookie]);

    useEffect(() => {
        setParams(params);
    });
};
