import { Footer } from './app/components/footer';
import { LandingPage } from './app/components/landingPage';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.scss';
import {
  getTheme,
  IStackTokens,
  Link,
  loadTheme,
  Stack,
  ThemeProvider,
} from '@fluentui/react';
import { darkTheme, lightTheme } from './app/components/theme/theme';
import { useState } from 'react';
import { getGlobalStyles } from './app/styles/commonStyles';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import about from './app/data/about.json';

const itemAlignmentsStackTokens: IStackTokens = {
  childrenGap: 16,
  padding: 16,
};

function App(): JSX.Element {
  initializeIcons();

  const [darkMode, setUseDarkMode] = useState(false);

  function onThemeChange(): void {
    setUseDarkMode(!darkMode);
  }

  return (
    <ThemeProvider
      applyTo="body"
      theme={darkMode ? loadTheme(darkTheme) : loadTheme(lightTheme)}
      className={getGlobalStyles(getTheme())}
    >
      <div dir="ltr" className="app">
        <Helmet
          defaultTitle={`${about.name}`}
          titleTemplate={`%s - ${about.name}`}
        ></Helmet>
        <div className="container">
          <span
            className="vertical vl"
            onClick={(): void => {
              window.scrollTo(0, 0);
            }}
          >
            {about.name}
          </span>
          <span className={`vertical vr`}>
            {'This is how I look '}
            <Link href={about.resumeLink} target="_blank">
              {'on paper'}
            </Link>
          </span>
          <Stack tokens={itemAlignmentsStackTokens}>
            <Stack.Item align="center" className="w-100">
              <BrowserRouter>
                <Switch>
                  <Route
                    path="/"
                    render={(): JSX.Element => {
                      return <LandingPage onThemeChange={onThemeChange} />;
                    }}
                  />
                </Switch>
              </BrowserRouter>
            </Stack.Item>
            <Stack.Item align="center">{<Footer />}</Stack.Item>
          </Stack>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
