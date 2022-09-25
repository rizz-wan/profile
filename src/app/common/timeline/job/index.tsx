import * as React from 'react';
import {
  card,
  getExternalLinkStyles,
  getShadows,
  getBackgroundColor,
} from '../../../styles/commonStyles';
import {
  FontIcon,
  getTheme,
  Link,
  Separator,
  Stack,
  Text,
} from '@fluentui/react';
import '../styles.scss';
import { getColors } from '../styles';
import { ITimelineProps } from '..';
import { tabs } from '../../../utils';
import { ICommon, IExperience } from '../../../model';
import experiences from '../../../data/experience.json';
import common from '../../../data/common.json';

export class Job extends React.Component<ITimelineProps> {
  experience: IExperience[];
  common: ICommon;
  constructor(props: ITimelineProps) {
    super(props);
    this.experience = experiences;
    this.common = common;
  }

  getJobs = (): JSX.Element => {
    return (
      <>
        {this.experience.map((ex, index) => {
          return (
            <div key={index} className="description-container right">
              <div className="content">
                <div className="p-l-1">
                  <h4>{ex.year}</h4>
                  <Text variant="small">{ex.date}</Text>
                  <p className="m-b-0">{ex.designation}</p>
                  <Link
                    target="_blank"
                    href={ex.company.link}
                    className="d-block"
                  >
                    {ex.company.text}
                  </Link>
                  <p>
                    <Text variant="small">{ex.location}</Text>
                  </p>
                </div>
                {this.props.isDetailedView && (
                  <>
                    <Separator />
                    <ul>
                      {ex.summary.map((sum, index) => {
                        return <li key={index}>{sum}</li>;
                      })}
                    </ul>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </>
    );
  };

  render(): JSX.Element {
    const theme = getTheme();

    return (
      <div
        className={`${card} card ${getShadows(
          theme
        )} timeline-card ${getExternalLinkStyles(theme)} a-d1`}
      >
        <h3>{this.common.experience}</h3>
        <div
          className={`timeline-container ${
            this.props.isDetailedView ? '' : 'trim-height'
          }`}
        >
          <div className={`timeline ${getColors(theme)}`}>{this.getJobs()}</div>
        </div>
        {!this.props.isDetailedView && (
          <Stack horizontal className="custom-button-container">
            <span
              className={`${getShadows(
                theme
              )} custom-button  active-button ${getBackgroundColor(theme)}`}
              onClick={() => {
                this.props.onTabChange?.(tabs[1]);
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
        )}
      </div>
    );
  }
}
