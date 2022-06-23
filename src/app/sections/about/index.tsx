import { getTheme } from '@fluentui/react';
import * as React from 'react';
import Masonry from 'react-masonry-css';
import {
  ButtonCard,
  GithubIcon,
  Job,
  LinkedInIcon,
  MailForm,
  MailIcon,
  ProfileCard,
} from '../../common';
import { card, getShadows } from '../../styles/commonStyles';
import { IAbout } from '../../model';
import about from '../../data/about.json';

interface IAboutProps {
  onThemeChange: () => void;
}

export class About extends React.Component<IAboutProps> {
  about: IAbout;
  constructor(props: IAboutProps) {
    super(props);
    window.scrollTo(0, 0);
    this.about = about;
  }
  breakpointColumnsObjSmall = {
    default: 4,
    767: 1,
  };
  breakpointColumnsObj = {
    default: 2,
    500: 1,
  };

  render(): JSX.Element {
    const theme = getTheme();

    return (
      <>
        <div className={`${card} card ${getShadows(theme)}`}>
          {this.about.aboutSubheader}
        </div>
        <Masonry
          breakpointCols={this.breakpointColumnsObjSmall}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <MailIcon />
          <LinkedInIcon />
          <GithubIcon />
          <ButtonCard onThemeChange={this.props.onThemeChange} />
        </Masonry>
        <ProfileCard hideFooter />
        <Job isDetailedView />
        <MailForm />
      </>
    );
  }
}
