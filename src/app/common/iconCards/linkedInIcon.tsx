import { getTheme, ITheme } from '@fluentui/react';
import * as React from 'react';
import { card, getImageFilter, getShadows } from '../../styles/commonStyles';
import './index.scss';
import linkedin from '../../assets/img/linkedin.png';
import { IAbout } from '../../model';
import about from '../../data/about.json';

export class LinkedInIcon extends React.Component {
  about: IAbout;
  constructor(props: {}) {
    super(props);
    this.about = about;
  }

  render(): JSX.Element {
    const theme: ITheme = getTheme();

    return (
      <div className={`${card} card ${getShadows(theme)} icon-container a-d2`}>
        <img
          className={`icon ${getImageFilter(theme)}`}
          height="100px"
          src={linkedin}
          alt="linkedin"
          onClick={() => {
            window.open(`${this.about.linkedIn}`, '_blank');
          }}
        />
      </div>
    );
  }
}
