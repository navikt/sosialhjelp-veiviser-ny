import {
    Breadcrumb,
    Language,
    setAvailableLanguages,
    setBreadcrumbs,
} from "@navikt/nav-dekoratoren-moduler";
import {useEffect} from "react";
import {useRouter} from "next/router";
import {useCookies} from "react-cookie";

export const useDecorator = (
    breadcrumbPage?: Breadcrumb,
    availableLanguages?: Language[]
) => {
    const router = useRouter();
    const {basePath, locale} = router;

    const [cookie, setCookie] = useCookies(["decorator-language"]);

    useEffect(() => {
        const breadcrumbs: Breadcrumb[] = [
            {
                title:
                    locale === "en"
                        ? "Financial Assistance"
                        : "Økonomisk sosialhjelp",
                url: `${basePath}/${locale}`,
            },
        ];

        if (breadcrumbPage) {
            breadcrumbs.push(breadcrumbPage);
        }
        setBreadcrumbs(breadcrumbs);
    }, [breadcrumbPage, locale, basePath]);

    useEffect(() => {
        if (availableLanguages?.length > 0) {
            setAvailableLanguages(availableLanguages);
        }
    }, [availableLanguages]);

    useEffect(() => {
        setCookie("decorator-language", locale);
    }, [locale, cookie]);
};
