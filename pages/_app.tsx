import React from 'react';
import App, {AppProps} from 'next/app';
import {ThemeProvider, createTheme, Theme} from '@fluentui/react';
import {createGlobalStyle} from 'styled-components';
import {AnimatePresence} from 'framer-motion';
import {dark} from 'styles/dark';
import {light} from 'styles/light';
import Menu from 'components/Menu';

const GlobalStyle = createGlobalStyle<{background: Theme}>`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    background: ${(props) => props.background.palette.white};
  }
`;

const darkMode: Theme = createTheme({
  palette: dark.palette,
});
const lightMode: Theme = createTheme({
  palette: light.palette,
});

type State = {dark: boolean};
class MyApp extends App<AppProps, State> {
  state: State = {
    dark: true,
  };
  changeTheme = () => {
    this.setState({dark: !this.state.dark});
  };
  render() {
    const {Component, pageProps, router} = this.props;
    return (
      <>
        <GlobalStyle background={this.state.dark ? darkMode : lightMode} />
        <ThemeProvider theme={this.state.dark ? darkMode : lightMode}>
          <Menu changeTheme={this.changeTheme} />
          <AnimatePresence exitBeforeEnter>
            <Component key={router.route} {...pageProps} />
          </AnimatePresence>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
