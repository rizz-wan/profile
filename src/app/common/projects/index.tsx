import { getTheme, Panel, PanelType } from '@fluentui/react';
import * as React from 'react';
import Masonry from 'react-masonry-css';
import { getPanelShadows } from '../../styles/commonStyles';
import { card, getShadows } from '../../styles/commonStyles';

interface IProjectsState {
  isPanelOpen: boolean;
}

export class Projects extends React.Component<{}, IProjectsState> {
  constructor(props: IProjectsState) {
    super(props);
    this.state = {
      isPanelOpen: false,
    };
  }

  handlePanel = (): void => {
    this.setState({ isPanelOpen: !this.state.isPanelOpen });
  };

  breakpointColumnsObj = {
    default: 2,
    767: 1,
  };

  render(): JSX.Element {
    const theme = getTheme();

    return (
      <>
        <Panel
          className={`${getPanelShadows(theme)}`}
          type={PanelType.large}
          headerText="Hi !"
          isOpen={this.state.isPanelOpen}
          closeButtonAriaLabel="Close"
          onDismiss={this.handlePanel}
        >
          <p>{'Yep, its work in progress, as you can see, sit tight :)'}</p>
        </Panel>
        <>
          <Masonry
            breakpointCols={this.breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            <div
              className={`${card} card ${getShadows(theme)}`}
              onClick={this.handlePanel}
            >
              Coming soon...
            </div>
          </Masonry>
        </>
      </>
    );
  }
}
