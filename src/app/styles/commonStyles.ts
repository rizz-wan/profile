import { ITheme, mergeStyles, MotionDurations } from '@fluentui/react';

export const borderRadius = 0;
export const shadowDisplacement = '3px';
export const shadowSpread = '6px';

export const hideShadows = localStorage.getItem('hideShadows') !== 'true';

export const card: string = mergeStyles({
  animationDuration: `${MotionDurations.duration4} !important`,
});

export const getShadows = (theme: ITheme, isBgWhite = false): string =>
  hideShadows
    ? getNormalShadows(theme, isBgWhite)
    : getShadowLite(theme, isBgWhite);

export const getNormalShadows = (theme: ITheme, isBgWhite = false): string =>
  mergeStyles({
    boxShadow: `${shadowDisplacement} ${shadowDisplacement} ${shadowSpread} ${
      theme.semanticColors.cardShadowHovered
    }, -${shadowDisplacement} -${shadowDisplacement} ${shadowSpread} ${
      theme.semanticColors.cardShadow
    }${
      isBgWhite
        ? ''
        : `, inset 0 0 0 1px ${theme.isInverted ? '#3a3a3a' : '#d1d9e6'}`
    } !important`,
    backgroundColor: theme.palette.white,
    '.active-button:active': {
      boxShadow: `inset ${shadowDisplacement} ${shadowDisplacement} ${shadowSpread} ${
        theme.semanticColors.cardShadowHovered
      },inset -${shadowDisplacement} -${shadowDisplacement} ${shadowSpread} ${
        theme.semanticColors.cardShadow
      }, 0 0 0 1px ${theme.isInverted ? '#3a3a3a' : '#d1d9e6'} !important`,
    },
  });

export const getShadowLite = (theme: ITheme, isBgWhite = false): string =>
  mergeStyles({
    boxShadow: `${
      isBgWhite
        ? ''
        : `inset 0 0 0 1px ${theme.isInverted ? '#3a3a3a' : '#d1d9e6'}`
    } !important`,
    background: theme.isInverted ? '#333333' : '#fbfbfb',
    '.active-button:active': {
      boxShadow: `0 0 0 1px ${
        theme.isInverted ? '#3a3a3a' : '#d1d9e6'
      } !important`,
    },
    '.ms-TextField-field': {
      background: theme.isInverted ? '#333333' : '#fbfbfb',
    },
  });

export const getDropShadow = (theme: ITheme): string =>
  mergeStyles({
    filter: `drop-shadow(${shadowDisplacement} ${shadowDisplacement} 3px ${theme.semanticColors.cardShadowHovered})`,
  });

export const getPanelShadows = (theme: ITheme): string =>
  mergeStyles({
    '.ms-Overlay': {
      backgroundColor: theme.semanticColors.bodyBackground,
      opacity: '0.75 !important',
    },
    '.ms-Panel-main,.ms-Button': {
      boxShadow: `${shadowDisplacement} ${shadowDisplacement} ${shadowSpread} ${
        theme.semanticColors.cardShadowHovered
      }, -${shadowDisplacement} -${shadowDisplacement} ${shadowSpread} ${
        theme.semanticColors.cardShadow
      }, inset 0 0 0 1px ${
        theme.isInverted ? '#3a3a3a' : '#d1d9e6'
      } !important`,
      '.ms-Button:hover': {
        boxShadow: `inset ${shadowDisplacement} ${shadowDisplacement} ${shadowSpread} ${
          theme.semanticColors.cardShadowHovered
        },inset -${shadowDisplacement} -${shadowDisplacement} ${shadowSpread} ${
          theme.semanticColors.cardShadow
        },0 0 0 1px ${theme.isInverted ? '#3a3a3a' : '#d1d9e6'}  !important`,
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
  hideShadows ? getOriginalPivotShadows(theme) : getPivotShadowsLite(theme);

export const getOriginalPivotShadows = (theme: ITheme): string =>
  mergeStyles({
    '.ms-Pivot': {
      boxShadow: `${shadowDisplacement} ${shadowDisplacement} ${shadowSpread} ${
        theme.semanticColors.cardShadowHovered
      }, -${shadowDisplacement} -${shadowDisplacement} ${shadowSpread} ${
        theme.semanticColors.cardShadow
      }, inset 0 0 0 1px ${
        theme.isInverted ? '#3a3a3a' : '#d1d9e6'
      } !important`,
      backgroundColor: theme.palette.white,
    },
    '.is-selected': {
      boxShadow: `inset 2px 2px 5px ${
        theme.semanticColors.cardShadowHovered
      }, inset -3px -3px 7px ${theme.semanticColors.cardShadow}, 0 0 0 1px ${
        theme.isInverted ? '#3a3a3a' : '#d1d9e6'
      } !important;`,
    },
  });

export const getPivotShadowsLite = (theme: ITheme): string =>
  mergeStyles({
    '.ms-Pivot': {
      boxShadow: `inset 0 0 0 1px ${
        theme.isInverted ? '#3a3a3a' : '#d1d9e6'
      } !important`,
      background: theme.isInverted ? '#333333' : '#fbfbfb',
    },
    '.is-selected': {
      boxShadow: `0 0 0 1px ${
        theme.isInverted ? '#3a3a3a' : '#d1d9e6'
      } !important;`,
      backgroundColor: theme.isInverted
        ? '#333333 !important'
        : '#fbfbfb !important',
    },
  });

export const getBackgroundColor = (theme: ITheme): string =>
  mergeStyles({
    backgroundColor: hideShadows
      ? theme.semanticColors.bodyBackground
      : theme.isInverted
      ? '#333333'
      : '#fbfbfb',
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
