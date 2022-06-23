import { getTheme, ITheme } from '@fluentui/react';
import * as React from 'react';
import { card, getImageFilter, getShadows } from '../../styles/commonStyles';
import './index.scss';
import mail from '../../assets/img/mail.png';
import { IAbout } from '../../model';
import about from '../../data/about.json';

export class MailIcon extends React.Component {
  about: IAbout;
  constructor(props: {}) {
    super(props);
    this.about = about;
  }

  render(): JSX.Element {
    const theme: ITheme = getTheme();

    return (
      <div className={`${card} card ${getShadows(theme)} icon-container`}>
        <img
          className={`icon ${getImageFilter(theme)}`}
          height="100px"
          src={mail}
          alt="me"
          onClick={() => {
            window.location.href = `mailto:${this.about.email}`;
          }}
        />
      </div>
    );
  }
}
