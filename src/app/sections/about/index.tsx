import * as React from 'react';
import Masonry from 'react-masonry-css';
import {
  ButtonCard,
  DumbFooter,
  GithubIcon,
  Job,
  LinkedInIcon,
  MailIcon,
  ProfileCard,
} from '../../common';
import { IAbout } from '../../model';
import about from '../../data/about.json';
import { scrollToTop } from '../../utils';

interface IAboutProps {
  onThemeChange: () => void;
}

export class About extends React.Component<IAboutProps> {
  about: IAbout;
  constructor(props: IAboutProps) {
    super(props);
    scrollToTop();
    this.about = about;
  }
  breakpointColumnsObjSmall = {
    default: 4,
    767: 1,
  };

  render(): JSX.Element {
    return (
      <>
        <ProfileCard hideFooter />
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
        <Job isDetailedView />
        <DumbFooter />
      </>
    );
  }
}
