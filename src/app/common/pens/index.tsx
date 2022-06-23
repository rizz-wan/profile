import { getTheme, Text } from '@fluentui/react';
import * as React from 'react';
import Masonry from 'react-masonry-css';
import { card, getShadows } from '../../styles/commonStyles';
import { PenIFrame } from './penIFrame';
import './index.scss';
import { ICommon, IPortfolio } from '../../model';
import pens from '../../data/portfolio.json';
import common from '../../data/common.json';

export class Pens extends React.Component {
  pens: IPortfolio;
  common: ICommon;
  constructor(props: {}) {
    super(props);
    this.pens = pens;
    this.common = common;
  }

  breakpointColumnsObj = {
    default: 2,
    767: 1,
  };

  render(): JSX.Element {
    const theme = getTheme();

    return (
      <>
        <>
          <PenIFrame
            key={this.pens.outstandingPens}
            hash={this.pens.outstandingPens}
          />
          <Masonry
            breakpointCols={this.breakpointColumnsObj}
            className="my-masonry-grid pens"
            columnClassName="my-masonry-grid_column"
          >
            {this.pens.otherPens.map((hash) => {
              return <PenIFrame key={hash} hash={hash} />;
            })}
            {this.pens.otherPens.length % 2 !== 0 && (
              <div className={`${card} card ${getShadows(theme)} p-1`}>
                <div className="placeholder">
                  <Text variant="xLarge" className="placeholder-text">
                    {this.common.penProgress}
                  </Text>
                </div>
              </div>
            )}
          </Masonry>
          <PenIFrame
            key={this.pens.outstandingAltPens}
            hash={this.pens.outstandingAltPens}
          />
        </>
      </>
    );
  }
}
