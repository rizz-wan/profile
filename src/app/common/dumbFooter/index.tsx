import { getTheme, ITheme } from '@fluentui/react';
import * as React from 'react';
import './index.scss';

export class DumbFooter extends React.Component {
  render(): JSX.Element {
    const theme: ITheme = getTheme();

    return (
      <div
        className={`dumbFooter ${theme.isInverted ? 'dumbFooterInverted' : ''}`}
      ></div>
    );
  }
}
