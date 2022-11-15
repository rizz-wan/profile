import * as React from 'react';
import { Header } from '../header';
import { About, All, Blog, Portfolio } from '../../sections';
import { getPathName, tabs } from '../../utils';

interface ILandingPageProps {
  onThemeChange: () => void;
}
interface ILandingPageState {
  selectedTab: string;
  currentPath: string;
}

export class LandingPage extends React.Component<
  ILandingPageProps,
  ILandingPageState
> {
  constructor(props: ILandingPageProps) {
    super(props);
    const currentLocation = getPathName() ? getPathName() : tabs[0];
    this.state = {
      selectedTab: currentLocation,
      currentPath: currentLocation,
    };
  }

  componentDidUpdate() {
    if (getPathName() !== this.state.currentPath) {
      const currentLocation = getPathName() ? getPathName() : tabs[0];
      this.setState({
        selectedTab: currentLocation,
        currentPath: currentLocation,
      });
    }
  }

  onTabChange = (currentTab: string): void => {
    if (this.state.selectedTab !== currentTab) {
      this.setState({ selectedTab: currentTab, currentPath: currentTab });
      window.history.pushState(null, '', `/${currentTab}`);
      window.history.replaceState(null, '', `/${currentTab}`);
    }
  };

  getSections = (currentTab: string): JSX.Element => {
    switch (currentTab) {
      case tabs[0]:
        return (
          <All
            onTabChange={this.onTabChange}
            onThemeChange={this.props.onThemeChange}
          />
        );
      case tabs[1]:
        return <About onThemeChange={this.props.onThemeChange} />;
      case tabs[2]:
        return <Portfolio />;
      case tabs[3]:
        return <Blog onThemeChange={this.props.onThemeChange} />;

      default:
        return <></>;
    }
  };

  render(): JSX.Element {
    return (
      <>
        <Header
          selectedKey={this.state.selectedTab}
          handleTabClick={this.onTabChange}
        />
        <div className="sections m-2 m-t-3">
          {this.getSections(this.state.selectedTab)}
        </div>
      </>
    );
  }
}
