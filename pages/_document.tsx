import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";
import {
    Components,
    Env,
    fetchDecoratorReact,
    Props,
} from "@navikt/nav-dekoratoren-moduler/ssr";
import {ServerStyleSheet} from "styled-components";

const decoratorEnv = process.env.DECORATOR_ENV as Exclude<Env, "localhost">;

const decoratorParams: Props = {
    env: decoratorEnv ?? "prod",
    context: "privatperson",
    chatbot: false,
    feedback: false,
};

class MyDocument extends Document<{decorator: Components}> {
    static async getInitialProps(ctx: DocumentContext) {
        const styledComponentsStylesheet =
            await renderServersideStyledComponentsStylesheet(ctx);
        const decorator = await fetchDecoratorReact(decoratorParams);
        return {...styledComponentsStylesheet, decorator};
    }

    render() {
        const {Styles, Scripts, Header, Footer} = this.props.decorator;
        return (
            <Html>
                <Head>
                    {process.env.NEXT_PUBLIC_ENVIRONMENT != "prod-gcp" && (
                        <meta name="robots" content="noindex,nofollow" />
                    )}
                </Head>
                <Styles />
                <Scripts />

                <body>
                    <Header />
                    <div id="app" className="app">
                        <Main />
                    </div>
                    <Footer />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
async function renderServersideStyledComponentsStylesheet(
    ctx: DocumentContext
) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) =>
                    sheet.collectStyles(<App {...props} />),
            });
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
            ),
        };
    } finally {
        sheet.seal();
    }
}

export default MyDocument;
