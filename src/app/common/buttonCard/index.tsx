import { getTheme, ITheme, mergeStyles } from '@fluentui/react';
import * as React from 'react';
import { card, getShadows } from '../../styles/commonStyles';
import './index.scss';

export const getButtonShadows = (theme: ITheme): string =>
  mergeStyles({
    boxShadow: theme.isInverted
      ? `2px 2px 5px 0px #6d6d6d, 6px 6px 10px #2e2e2e, -2px -2px 5px #474747, -3px -3px 10px #616161, inset 0 0 3px 0 #474747`
      : `inset 2px 2px 5px #2b2b2b, 6px 6px 12px #b8b9be,
  inset -1px -1px 2px transparent, -6px -6px 12px #fff !important;`,
    border: `1px solid ${theme.isInverted ? '#2e2e2e' : '#868686'};`,
  });

interface IButtonCardProps {
  onThemeChange: () => void;
}
export class ButtonCard extends React.Component<IButtonCardProps> {
  render(): JSX.Element {
    const theme: ITheme = getTheme();

    let buttonClass = theme.isInverted ? 'bl' : 'bd';
    let thumbClass = theme.isInverted ? 'btl' : 'btd';
    const handleClick = (): void => {
      buttonClass = buttonClass === 'bl' ? 'bd' : 'bl';
      thumbClass = thumbClass === 'btl' ? 'btd' : 'btl';
      this.props.onThemeChange();
    };

    return (
      <div
        className={`${card} card ${getShadows(theme)} theme-button-container`}
      >
        <div
          onClick={handleClick}
          className={`button ${buttonClass} ${getButtonShadows(theme)}`}
        >
          <div className={`thumb ${thumbClass}`}></div>
        </div>
      </div>
    );
  }
}
