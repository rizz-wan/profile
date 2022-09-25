import { getTheme, Panel, PanelType, Text } from '@fluentui/react';
import * as React from 'react';
import { getPanelShadows } from '../../styles/commonStyles';
import { ProjectCard } from './projectCard';
import { IProjectDetails } from '../../model';

interface IProjectProps {
  projectDetails: IProjectDetails[];
  onTabChange(): void;
}

interface IProjectsState {
  isPanelOpen: boolean;
  selectedProjectDetails: IProjectDetails;
}

export class Projects extends React.Component<IProjectProps, IProjectsState> {
  constructor(props: IProjectProps) {
    super(props);
    this.state = {
      isPanelOpen: false,
      selectedProjectDetails: this.props.projectDetails[0],
    };
  }

  handlePanelOpen = (projectDetail: IProjectDetails): void => {
    this.setState({
      isPanelOpen: !this.state.isPanelOpen,
      selectedProjectDetails: projectDetail,
    });
  };

  handlePanelClose = (): void => {
    this.setState({ isPanelOpen: !this.state.isPanelOpen });
  };

  getEmptyState(): JSX.Element {
    return (
      <>
        <div className="emptyState"></div>
        <div className="emptyStateText">
          <br />
          <Text variant="large">
            {'Uh oh. Something went sideways, on it!'}
          </Text>
          <br />
          <Text variant="large">
            {'Anyways, do '}
            <span className="asLink" onClick={() => this.props.onTabChange()}>
              {'Pens'}
            </span>
            {' work?'}
          </Text>
        </div>
      </>
    );
  }

  render(): JSX.Element {
    const theme = getTheme();

    return (
      <div className="projects">
        <Panel
          className={`${getPanelShadows(theme)}`}
          type={PanelType.large}
          headerText={this.state.selectedProjectDetails?.heading}
          isOpen={this.state.isPanelOpen}
          closeButtonAriaLabel="Close"
          onDismiss={this.handlePanelClose}
        >
          <p>{this.state.selectedProjectDetails?.description}</p>
        </Panel>
        <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
            {!this.props.projectDetails.length && this.getEmptyState()}
            {this.props.projectDetails.map((projectDetail, i) => {
              return (
                <div
                  className="ms-Grid-col ms-sm12 ms-md6 ms-lg6 ms-xl4"
                  key={i}
                >
                  <ProjectCard
                    theme={theme}
                    data={{
                      img: projectDetail.img,
                      heading: projectDetail.heading,
                      description: projectDetail.description,
                    }}
                    onQuickView={this.handlePanelOpen}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
