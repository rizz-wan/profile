import { getTheme } from '@fluentui/react';
import * as React from 'react';
import Masonry from 'react-masonry-css';
import {
  ButtonCard,
  DumbFooter,
  GithubIcon,
  LinkedInIcon,
  MailForm,
  MailIcon,
  ShowCase,
} from '../../common';
import { card, getShadows } from '../../styles/commonStyles';
import { scrollToTop } from '../../utils';

interface IBlogProps {
  onThemeChange: () => void;
}

export class Blog extends React.Component<IBlogProps> {
  constructor(props: IBlogProps) {
    super(props);
    scrollToTop();
  }
  breakpointColumnsObjSmall = {
    default: 4,
    767: 1,
  };
  render(): JSX.Element {
    const theme = getTheme();

    return (
      <>
        <div
          className={`${card} card ${getShadows(
            theme
          )} p-1 contribution-grid-con`}
        >
          <img
            className="contribution-grid"
            width="100%"
            src={
              'https://raw.githubusercontent.com/rizz-wan/rizz-wan/main/dist/github-contribution-grid-snake.svg'
            }
            alt="loader"
          />
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
        <ShowCase isMinVersion />
        <DumbFooter />
        <br />
        <MailForm isOnLastTab />
      </>
    );
  }
}
