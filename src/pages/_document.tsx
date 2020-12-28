import React from "react";
import Document, { DocumentContext, DocumentInitialProps } from "next/document";
import { AppType, NextComponentType } from "next/dist/next-server/lib/utils";
import { ServerStyleSheets } from "@material-ui/core";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: (App: AppType) => (props) =>
          sheets.collect(<App {...props} />),
        // useful for wrapping in a per-page basis
        enhanceComponent: (Component: NextComponentType) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  }
}

export default MyDocument;
