import { mergeStyles } from '@fluentui/react';

export const getImageContainerStyles = (imageUrl: string): string =>
  mergeStyles({
    backgroundImage: `url('${imageUrl}')`,
  });
