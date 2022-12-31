import { getTheme, Spinner, SpinnerSize } from '@fluentui/react';
import * as React from 'react';
import { card, getShadows } from '../../styles/commonStyles';

interface IPenIFrameState {
  iFrameLoaded: boolean;
}

interface IPenIFrameProps {
  hash: string;
  ad?: string;
}

export class PenIFrame extends React.Component<
  IPenIFrameProps,
  IPenIFrameState
> {
  constructor(props: IPenIFrameProps) {
    super(props);
    this.state = {
      iFrameLoaded: false,
    };
  }

  handleFrame = (): void => {
    this.setState({ iFrameLoaded: true });
  };

  render(): JSX.Element {
    const theme = getTheme();

    return (
      <div className={`${card} card ${getShadows(theme)} p-1 ${this.props.ad}`}>
        {!this.state.iFrameLoaded && (
          <Spinner className="iframe-loader" size={SpinnerSize.large} />
        )}
        <iframe
          scrolling="no"
          title="Pen from Rizwan"
          src={`https://codepen.io/irizwankhan/embed/${
            this.props.hash
          }?default-tab=result&theme-id=${theme.isInverted ? 'dark' : 'light'}`}
          frameBorder="no"
          loading="lazy"
          className={this.state.iFrameLoaded ? '' : 'd-hidden'}
          onLoad={() => {
            this.handleFrame();
          }}
        />
      </div>
    );
  }
}
