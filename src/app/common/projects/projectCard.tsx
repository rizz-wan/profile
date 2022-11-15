import {
  FontIcon,
  IconButton,
  ITheme,
  Stack,
  Text,
  getTheme,
} from '@fluentui/react';
import { Component } from 'react';
import { card, getShadows } from '../../styles/commonStyles';
import { getImageContainerStyles, getActionStyles } from './styles';
import './styles.scss';
import { IProjectDetails } from '../../model';

export interface IProjectCardProps {
  theme: ITheme;
  data: IProjectDetails;
  onQuickView(projectDetail: IProjectDetails): void;
}

export class ProjectCard extends Component<IProjectCardProps> {
  onRoute = (route: string): void => {
    console.log(route);
  };

  render(): JSX.Element {
    const theme = getTheme();
    const data = this.props.data as IProjectDetails;

    return (
      <div className={`${card} card ${getShadows(theme)} projectCard p-1`}>
        <Stack horizontal horizontalAlign="end">
          <IconButton
            className={getActionStyles(this.props.theme)}
            iconProps={{ iconName: 'OpenInNewTab' }}
            title="Open in new tab"
            ariaLabel="Open in new tab"
          />
        </Stack>
        <div
          className={`${getImageContainerStyles(data.img)} image-container`}
        ></div>
        <div
          className={`heading m-t-3 ${theme.isInverted ? 'isInverted' : ''}`}
          title={data.heading}
          onClick={() => {
            this.onRoute('/wall');
          }}
        >
          <Text variant="mediumPlus">
            <strong>{data.heading}</strong>
          </Text>
        </div>
        <div className="description">
          <Text title={data.description}>{data.description}</Text>
        </div>
        <Stack horizontal className="custom-button-container">
          <Stack.Item grow> </Stack.Item>
          <Stack.Item className="p-1">
            <span
              className={`${getShadows(theme)} custom-button active-button`}
              onClick={() => this.props.onQuickView(data)}
            >
              <FontIcon
                className="custom-button-icon"
                aria-label="Quick view"
                iconName="RedEye"
              />
              {'Quick View'}
            </span>
          </Stack.Item>
        </Stack>
      </div>
    );
  }
}
