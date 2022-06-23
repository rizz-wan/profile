import { ITheme, mergeStyles } from '@fluentui/react';

export const getColors = (theme: ITheme): string => {
  return mergeStyles({
    '&::after,.content,.description-container::after': {
      backgroundColor: theme.isInverted ? '#3a3a3a' : '#f5f6f8',
    },
    '.right::before': {
      border: `solid ${theme.isInverted ? '#3a3a3a' : '#f5f6f8'}`,
      borderColor: `transparent ${
        theme.isInverted ? '#3a3a3a' : '#f5f6f8'
      } transparent transparent`,
    },
  });
};
