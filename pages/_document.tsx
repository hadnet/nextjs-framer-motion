import * as React from 'react';
import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';
import {Stylesheet, InjectionMode} from '@fluentui/merge-styles';
import {resetIds} from '@fluentui/utilities';
import {ServerStyleSheet} from 'styled-components';

/* eslint-disable-next-line */
// @ts-ignore
React.useLayoutEffect = React.useEffect; // a hack to avoid useLayoutEffect SSR warning

interface IProps {
  styleTags: string;
}
// Do this in file scope to initialize the stylesheet before Fabric components are imported.
const stylesheet = Stylesheet.getInstance();

// Set the config.
stylesheet.setConfig({
  injectionMode: InjectionMode.none,
  namespace: 'server',
});

// Now set up the document, and just reset the stylesheet.
export default class MyDocument extends Document<IProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentSheet = new ServerStyleSheet();
    const styledComponentTags = styledComponentSheet.getStyleElement();
    const originalRenderPage = ctx.renderPage;
    stylesheet.reset();
    resetIds();

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => styledComponentSheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styleTags: stylesheet.getRules(true),
        styles: (
          <>
            {initialProps.styles}
            {styledComponentTags}
          </>
        ),
      };
    } finally {
      styledComponentSheet.seal();
    }
  }

  render() {
    // noinspection HtmlRequiredTitleElement
    return (
      <Html>
        <Head>
          <style type="text/css" dangerouslySetInnerHTML={{__html: this.props.styleTags}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
