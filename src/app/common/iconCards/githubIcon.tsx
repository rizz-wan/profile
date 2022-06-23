import { getTheme, ITheme } from '@fluentui/react';
import * as React from 'react';
import { card, getImageFilter, getShadows } from '../../styles/commonStyles';
import './index.scss';
import github from '../../assets/img/github.png';
import { IAbout } from '../../model';
import about from '../../data/about.json';

export class GithubIcon extends React.Component {
  about: IAbout;
  constructor(props: {}) {
    super(props);
    this.about = about;
  }

  public componentDidMount(): void {
    const skillCloud = document.getElementsByClassName('github-icon')[0];
    setTimeout(() => {
      skillCloud.classList.add('f-90');
    }, 2500);
  }
  render(): JSX.Element {
    const theme: ITheme = getTheme();

    return (
      <div
        className={`${card} card ${getShadows(
          theme
        )} bg-white icon-container github-icon animation-none`}
      >
        <img
          className={`icon ${getImageFilter(theme, true)}`}
          height="100px"
          src={github}
          alt="me"
          onClick={() => {
            window.open(`${this.about.github}`, '_blank');
          }}
        />
      </div>
    );
  }
}
