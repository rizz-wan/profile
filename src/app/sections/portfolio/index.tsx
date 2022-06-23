import { getTheme, Pivot, PivotItem, Stack } from '@fluentui/react';
import * as React from 'react';
import { MailForm, Pens, Projects } from '../../common';
import { IPortfolio } from '../../model';
import { card, getPivotShadows, getShadows } from '../../styles/commonStyles';
import { getSubPathName, subTabs, tabs } from '../../utils';
import portfolio from '../../data/portfolio.json';

interface IPortfolioState {
  selectedTab: string;
  currentPath: string;
}

export class Portfolio extends React.Component<{}, IPortfolioState> {
  portfolio: IPortfolio;
  constructor(props: {}) {
    super(props);
    window.scrollTo(0, 0);
    const currentLocation = getSubPathName() ? getSubPathName() : subTabs[1];
    this.state = {
      selectedTab: currentLocation,
      currentPath: currentLocation,
    };
    window.history.replaceState(null, '', `/${tabs[2]}/${currentLocation}`);
    this.portfolio = portfolio;
  }

  componentDidUpdate() {
    if (getSubPathName() !== this.state.currentPath) {
      const currentLocation = getSubPathName() ? getSubPathName() : subTabs[0];
      this.setState({
        selectedTab: currentLocation,
        currentPath: currentLocation,
      });
    }
  }

  onTabChange = (item?: PivotItem): void => {
    const currentTab = item?.props.itemKey as string;
    if (this.state.selectedTab !== currentTab) {
      this.setState({ selectedTab: currentTab, currentPath: currentTab });
      window.history.pushState(null, '', `/${tabs[2]}/${currentTab}`);
      window.history.replaceState(null, '', `/${tabs[2]}/${currentTab}`);
    }
  };

  render(): JSX.Element {
    const theme = getTheme();

    return (
      <>
        <Stack className="m-t-3">
          <div className={`${card} card ${getShadows(theme)}`}>
            {this.portfolio.portfolioSubheader}
          </div>
          <Stack.Item align="center" className="w-100 sub-pivot">
            <Pivot
              className={`${getPivotShadows(theme)} ms-motion-slideUpIn`}
              selectedKey={`${this.state.selectedTab}`}
              onLinkClick={this.onTabChange}
            >
              <PivotItem
                headerText={this.portfolio.projectsText}
                itemKey={subTabs[0]}
                itemCount={0}
              >
                <Projects />
              </PivotItem>
              <PivotItem
                headerText={this.portfolio.pens}
                itemKey={subTabs[1]}
                itemCount={this.portfolio.otherPens.length + 2}
              >
                <Pens />
              </PivotItem>
            </Pivot>
          </Stack.Item>
        </Stack>
        <MailForm />
      </>
    );
  }
}
