/*Currently on hold*/
import * as React from 'react';
import {
  card,
  getBackgroundColor,
  getShadows,
} from '../../../styles/commonStyles';
import { FontIcon, getTheme, Separator, Stack, Text } from '@fluentui/react';
import { getColors } from '../styles';
import '../styles.scss';
import { ITimelineProps } from '..';
import { tabs } from '../../../utils';
import { ICommon } from '../../../model';
import common from '../../../data/common.json';
import education from '../../../data/education.json';
import { IEducation } from '../../../model';

export class Education extends React.Component<ITimelineProps> {
  education: IEducation[];
  common: ICommon;
  constructor(props: ITimelineProps) {
    super(props);
    this.education = education;
    this.common = common;
  }

  getEducation = (): JSX.Element => {
    return (
      <>
        {this.education.map((ed, index) => {
          return (
            <div key={index} className="description-container right">
              <div className="content">
                <div className="p-l-1">
                  <h4>{ed.year}</h4>
                  <p className="m-b-0">{ed.degree}</p>
                  <p>
                    <Text variant="small">{ed.school}</Text>
                  </p>
                  <p>
                    <Text variant="small">{ed.location}</Text>
                  </p>
                </div>
                {ed.summary.length > 0 && this.props.isDetailedView && (
                  <>
                    <Separator />
                    <ul>
                      {ed.summary.map((sum, index) => {
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
      <div className={`${card} card ${getShadows(theme)} timeline-card`}>
        <h3>{this.common.education}</h3>
        <div
          className={`timeline-container ${
            this.props.isDetailedView ? '' : 'trim-height'
          }`}
        >
          <div className={`timeline ${getColors(theme)}`}>
            {this.getEducation()}
          </div>
        </div>
        {!this.props.isDetailedView && (
          <Stack horizontal className="custom-button-container">
            <span
              className={`${getShadows(
                theme
              )} custom-button active-button ${getBackgroundColor(theme)}`}
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
