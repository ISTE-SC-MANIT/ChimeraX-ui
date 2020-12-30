import React, { ReactElement } from "react";
import Document, {
    DocumentContext,
    DocumentInitialProps,
    Html,
    Head,
    Main,
    NextScript,
} from "next/document";
import { AppType } from "next/dist/next-server/lib/utils";
import { ServerStyleSheets } from "@material-ui/core/styles";

class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const originalRenderPage = ctx.renderPage;

        const sheets = new ServerStyleSheets();
        ctx.renderPage = () =>
            originalRenderPage({
                // useful for wrapping the whole react tree
                enhanceApp: (App: AppType) => (props) => {
                    return sheets.collect(<App {...props} />);
                },
            });
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: [
                ...React.Children.toArray(initialProps.styles),
                sheets.getStyleElement(),
            ],
        };
    }

    render(): ReactElement {
        return (
            <Html>
                <Head>

                    <title>Chimera-X 2021</title>
                    <link rel="icon" href=
                        "/logo.jpeg"
                        type="image/x-icon" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;