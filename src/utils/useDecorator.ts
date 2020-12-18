import {useContext, useEffect} from "react";
import {
    setAvailableLanguages,
    setBreadcrumbs,
    setParams,
} from "@navikt/nav-dekoratoren-moduler";
import {detekterSprak, Sprak} from "./sprakUtils";
import {useCookies} from "react-cookie";
import SprakvelgerContext from "../komponenter/oversettelser/Oversettelser";

interface AvailableLanguage {
    locale: Sprak;
    url: string;
}

const getAppUrl = (): string => {
    return `${window.location.origin}/sosialhjelp`;
};

export const useDecorator = (pages: {title: string; slug: string}[]) => {
    const [cookie, setCookie] = useCookies(["decorator-language"]);

    const selectedLanguage = detekterSprak();

    const sprakvelger = useContext(SprakvelgerContext);

    const breadcrumbs = [
        {
            title:
                selectedLanguage === "en"
                    ? "Financial Assistance"
                    : "Økonomisk sosialhjelp",
            url: `${getAppUrl()}/?lang=${selectedLanguage}`,
        },
    ];

    pages.reverse().forEach((page) => {
        const breadcrumb = {
            title: page.title,
            url: `${getAppUrl()}${page.slug}?lang=${selectedLanguage}`,
        };
        breadcrumbs.push(breadcrumb);
    });

    const availableLanguages: AvailableLanguage[] = [];

    if (pages.length === 0) {
        sprakvelger.sprak.forEach((locale) => {
            availableLanguages.push({
                locale: locale,
                url: `${getAppUrl()}/?lang=${locale}`,
            });
        });
    }
    if (pages.length > 0) {
        const page = pages.pop();
        sprakvelger.sprak.forEach((locale) => {
            availableLanguages.push({
                locale: locale,
                url: `${getAppUrl()}${page?.slug}?lang=${locale}`,
            });
        });
    }

    const params = {
        feedback: false,
        chatbot: "false",
    };

    useEffect(() => {
        setBreadcrumbs(breadcrumbs);
    }, [breadcrumbs]);

    useEffect(() => {
        setCookie("decorator-language", selectedLanguage);
        if (availableLanguages.length > 0) {
            setAvailableLanguages(availableLanguages);
        }
    }, [availableLanguages, selectedLanguage, cookie, setCookie]);

    useEffect(() => {
        // @ts-ignore
        setParams(params);
    }, [params]);
};
