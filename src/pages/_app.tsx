import React from 'react';
import { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import Head from 'next/head';
import theme from '../components/theme';
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const [currentTheme] = React.useState(theme);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="theme-color" content={currentTheme.palette.primary.main} />
      </Head>
      <CssBaseline />
      <ThemeProvider theme={currentTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
