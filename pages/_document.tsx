import Document, {Html, Head, Main, NextScript} from "next/document";
import {fetchDecoratorReact} from "@navikt/nav-dekoratoren-moduler/ssr";
import {FunctionComponent} from "react";

interface DecoratorProps {
    decorator: {
        Styles: FunctionComponent;
        Scripts: FunctionComponent;
        Header: FunctionComponent;
        Footer: FunctionComponent;
    };
}

class MyDocument extends Document<DecoratorProps> {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        const decorator = await fetchDecoratorReact({
            env: "prod",
            chatbot: false,
            feedback: false,
        });
        return {...initialProps, decorator};
    }

    render() {
        const {Styles, Scripts, Header, Footer} = this.props.decorator;
        return (
            <Html>
                <Head>
                    <Styles />
                    <Scripts />
                </Head>
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

export default MyDocument;
