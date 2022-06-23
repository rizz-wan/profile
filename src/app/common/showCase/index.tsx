import * as React from 'react';
import {
  card,
  getShadows,
  getBackgroundColor,
} from '../../styles/commonStyles';
import {
  FontIcon,
  getTheme,
  Stack,
  StackItem,
  IconButton,
} from '@fluentui/react';
import { SlidEr } from './slidEr';
import './index.scss';
import { tabs } from '../../utils';
import { ICommon, IPortfolio } from '../../model';
import common from '../../data/common.json';
import portfolio from '../../data/portfolio.json';

interface IShowCaseProps {
  onTabChange?: (currentTab: string) => void;
}

interface IShowCaseState {
  shouldPause: boolean;
}

export class ShowCase extends React.Component<IShowCaseProps, IShowCaseState> {
  common: ICommon;
  portfolio: IPortfolio;
  constructor(props: IShowCaseProps) {
    super(props);
    this.state = {
      shouldPause: true,
    };
    this.common = common;
    this.portfolio = portfolio;
  }

  handleSlide = (): void => {
    this.setState({ shouldPause: !this.state.shouldPause });
  };
  render(): JSX.Element {
    const theme = getTheme();

    return (
      <div className={`${card} card ${getShadows(theme)} show-case d-block`}>
        <Stack>
          <StackItem align="center">
            <h1>{this.common.works}</h1>
          </StackItem>
          <StackItem align="center">
            <p className="sub-text">{this.common.worksSubheader}</p>
          </StackItem>
        </Stack>
        <SlidEr
          incrementor={0.2}
          id="1"
          shouldPause={this.state.shouldPause}
          showcase={this.portfolio.showcase}
          cta={this.common.seeLive}
        />
        <SlidEr
          incrementor={0.25}
          id="2"
          shouldPause={this.state.shouldPause}
          showcase={this.portfolio.showcase}
          cta={this.common.seeLive}
        />
        <Stack horizontal horizontalAlign="space-between" className="m-t-2">
          <span></span>
          <Stack horizontal className="custom-button-container">
            <span
              className={`${getShadows(
                theme
              )} custom-button  active-button ${getBackgroundColor(theme)}`}
              onClick={() => {
                this.props.onTabChange?.(tabs[2]);
              }}
            >
              <FontIcon
                aria-label="View"
                iconName="View"
                className="custom-button-icon"
              />
              {this.common.seeAll}
            </span>
          </Stack>
          <Stack horizontal className="custom-button-container">
            <IconButton
              iconProps={{
                iconName: this.state.shouldPause ? 'Pause' : 'Play',
              }}
              title={this.state.shouldPause ? 'Pause' : 'Play'}
              ariaLabel={this.state.shouldPause ? 'Pause' : 'Play'}
              className={`${getShadows(
                theme
              )} active-button ${getBackgroundColor(theme)}`}
              onClick={this.handleSlide}
            />
          </Stack>
        </Stack>
      </div>
    );
  }
}
