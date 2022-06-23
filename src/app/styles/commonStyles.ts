import { ITheme, mergeStyles, MotionDurations } from '@fluentui/react';

export const borderRadius = 0;
export const shadowDisplacement = '3px';
export const shadowSpread = '6px';

export const card: string = mergeStyles({
  animationDuration: `${MotionDurations.duration4} !important`,
});

export const getShadows = (theme: ITheme): string =>
  mergeStyles({
    boxShadow: `${shadowDisplacement} ${shadowDisplacement} ${shadowSpread} ${theme.semanticColors.cardShadowHovered}, -${shadowDisplacement} -${shadowDisplacement} ${shadowSpread} ${theme.semanticColors.cardShadow} !important`,
    '.active-button:active': {
      boxShadow: `inset ${shadowDisplacement} ${shadowDisplacement} ${shadowSpread} ${theme.semanticColors.cardShadowHovered},inset -${shadowDisplacement} -${shadowDisplacement} ${shadowSpread} ${theme.semanticColors.cardShadow} !important`,
    },
  });

export const getDropShadow = (theme: ITheme): string =>
  mergeStyles({
    filter: `drop-shadow(${shadowDisplacement} ${shadowDisplacement} 3px ${theme.semanticColors.cardShadowHovered}) drop-shadow(-${shadowDisplacement} -${shadowDisplacement} 3px ${theme.semanticColors.cardShadow})`,
  });

export const getPanelShadows = (theme: ITheme): string =>
  mergeStyles({
    '.ms-Overlay': {
      backgroundColor: theme.semanticColors.bodyBackground,
      opacity: '0.75 !important',
    },
    '.ms-Panel-main,.ms-Button': {
      boxShadow: `${shadowDisplacement} ${shadowDisplacement} ${shadowSpread} ${theme.semanticColors.cardShadowHovered}, -${shadowDisplacement} -${shadowDisplacement} ${shadowSpread} ${theme.semanticColors.cardShadow} !important`,
      '.ms-Button:hover': {
        boxShadow: `inset ${shadowDisplacement} ${shadowDisplacement} ${shadowSpread} ${theme.semanticColors.cardShadowHovered},inset -${shadowDisplacement} -${shadowDisplacement} ${shadowSpread} ${theme.semanticColors.cardShadow} !important`,
      },
    },
  });

export const getGlobalStyles = (theme: ITheme): string =>
  mergeStyles({
    '*': {
      fontWeight: `600 !important`,
      textShadow: `1px 1px ${
        theme.isInverted
          ? theme.semanticColors.cardShadowHovered
          : theme.semanticColors.cardShadow
      } !important`,
    },
  });

export const getPivotShadows = (theme: ITheme): string =>
  mergeStyles({
    '.ms-Pivot': {
      boxShadow: `${shadowDisplacement} ${shadowDisplacement} ${shadowSpread} ${theme.semanticColors.cardShadowHovered}, -${shadowDisplacement} -${shadowDisplacement} ${shadowSpread} ${theme.semanticColors.cardShadow} !important`,
    },
    '.is-selected': {
      boxShadow: `inset 2px 2px 5px ${theme.semanticColors.cardShadowHovered}, inset -3px -3px 7px ${theme.semanticColors.cardShadow} !important;`,
    },
  });

export const getBackgroundColor = (theme: ITheme): string =>
  mergeStyles({
    backgroundColor: theme.semanticColors.bodyBackground,
  });

export const getImageFilter = (
  theme: ITheme,
  ignoreTheme: boolean = false
): string =>
  mergeStyles({
    filter:
      theme.isInverted && !ignoreTheme
        ? `drop-shadow(${shadowDisplacement} ${shadowDisplacement} 3px ${theme.semanticColors.cardShadowHovered}) drop-shadow(-${shadowDisplacement} -${shadowDisplacement} 3px ${theme.semanticColors.cardShadow}) saturate(2)`
        : `drop-shadow(${shadowDisplacement} ${shadowDisplacement} 3px ${
            !ignoreTheme
              ? theme.semanticColors.cardShadowHovered
              : 'rgb(184, 185, 190)'
          }) drop-shadow(-${shadowDisplacement} -${shadowDisplacement} 3px ${
            !ignoreTheme
              ? theme.semanticColors.cardShadow
              : 'rgb(255, 255, 255)'
          })`,
  });

export const getExternalLinkStyles = (theme: ITheme): string =>
  mergeStyles({
    'a:after': {
      content:
        'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==)',
      margin: '0 2px 0 4px',
      filter: `${
        theme.isInverted
          ? 'drop-shadow(rgb(255,255,255) 1px 1px) invert()'
          : 'drop-shadow(rgb(255,255,255) 1px 1px)'
      }`,
    },
  });
