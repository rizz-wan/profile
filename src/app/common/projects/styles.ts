import { ITheme, mergeStyles } from '@fluentui/react';

export const getImageContainerStyles = (imageUrl: string): string =>
  mergeStyles({
    backgroundImage: `url('${imageUrl}')`,
  });

export const getActionStyles = (theme: ITheme): string =>
  mergeStyles({
    borderRadius: '100%',
    zIndex: '1',
    color: theme.palette.black,
    margin: '8px',
    WebkitBackdropFilter: 'blur(8px)',
    backdropFilter: 'blur(8px)',
    border: `1px solid ${theme.palette.black}`,
    background: !theme.isInverted
      ? 'rgba(255,255,255,0.8)'
      : 'rgba(34,34,34,0.8)',
  });

export const getMetadataStyles = (theme: ITheme): string =>
  mergeStyles({
    '*': {
      color: `${theme.semanticColors.buttonTextDisabled} !important`,
    },
  });
