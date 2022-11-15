export const lightTheme = {
  isInverted: false,
  palette: {
    themePrimary: '#0078d4', //primary
    themeLighterAlt: '#eff6fc',
    themeLighter: '#deecf9',
    themeLight: '#c7e0f4',
    themeTertiary: '#71afe5',
    themeSecondary: '#2b88d8',
    themeDarkAlt: '#106ebe',
    themeDark: '#005a9e',
    themeDarker: '#004578',
    neutralLighterAlt: '#e0e1e7',
    neutralLighter: '#dcdde3',
    neutralLight: '#d3d4da',
    neutralQuaternaryAlt: '#c5c5cb',
    neutralQuaternary: '#bcbcc2',
    neutralTertiaryAlt: '#b4b5ba',
    neutralTertiary: '#c2c2c2',
    neutralSecondary: '#858585',
    neutralSecondaryAlt: '#858585',
    neutralPrimaryAlt: '#4b4b4b',
    neutralPrimary: '#333333', //text
    neutralDark: '#272727',
    black: '#1d1d1d',
    white: '#e6e7ee', //background
  },
  semanticColors: {
    cardShadow: '#ffffff',
    cardShadowHovered: '#b8b9be',
  },
};
export const darkTheme = {
  isInverted: true,
  palette: {
    themePrimary: '#70c1ff', //primary
    themeLighterAlt: '#04080a',
    themeLighter: '#121f29',
    themeLight: '#223a4d',
    themeTertiary: '#437499',
    themeSecondary: '#63aae0',
    themeDarkAlt: '#7ec7ff',
    themeDark: '#92d0ff',
    themeDarker: '#afdcff',
    neutralLighterAlt: '#454545',
    neutralLighter: '#444444',
    neutralLight: '#424242',
    neutralQuaternaryAlt: '#3d3d3d',
    neutralQuaternary: '#3a3a3a',
    neutralTertiaryAlt: '#383838',
    neutralTertiary: '#eeeff3',
    neutralSecondary: '#f1f1f5',
    neutralSecondaryAlt: '#f1f1f5',
    neutralPrimaryAlt: '#f4f4f7',
    neutralPrimary: '#e6e7ee', //text
    neutralDark: '#f9f9fb',
    black: '#fcfcfd',
    white: '#474747', //background
  },
  semanticColors: {
    cardShadow: '#545454',
    cardShadowHovered: '#2e2e2e',
  },
};

export const isInvertedTheme =
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

export function setInitialThemeClassToBody() {
  let documentClassList = document.body.classList;
  if (
    !(documentClassList.contains('dark') || documentClassList.contains('light'))
  )
    documentClassList.add(isInvertedTheme ? 'dark' : 'light');
}
