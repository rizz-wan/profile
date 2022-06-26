import * as React from 'react';
import './index.scss';

interface ISlidErProps {
  incrementor: number;
  id: string;
  shouldPause: boolean;
  showcase: { link: string; src: string; alt: string }[];
  cta: string;
}

export class SlidEr extends React.Component<ISlidErProps> {
  randomizedData: { link: string; src: string; alt: string }[];
  constructor(props: ISlidErProps) {
    super(props);
    this.randomizedData = this.randomize(this.props.showcase);
  }
  public componentDidMount(): void {
    let xOffset = 0;
    let isMouseIn = false;
    const slides = document.getElementById(
      `${this.props.id}slides`
    ) as HTMLElement;

    const translate = (): void => {
      let offsetIncrementor = this.props.shouldPause
        ? isMouseIn
          ? 0.05
          : this.props.incrementor
        : 0;
      if (xOffset >= 296 * this.props.showcase.length) xOffset = 0;
      else xOffset = xOffset + offsetIncrementor;
      slides.style.transform = 'translateX(-' + xOffset + 'px)';
    };

    slides.addEventListener('mouseover', function (event) {
      isMouseIn = true;
    });

    slides.addEventListener('mouseout', function (event) {
      isMouseIn = false;
    });
    setInterval(translate, 0);
  }

  randomize = (showcase: { link: string; src: string; alt: string }[]) => {
    for (let i = showcase.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [showcase[i], showcase[j]] = [showcase[j], showcase[i]];
    }
    return showcase;
  };

  render(): JSX.Element {
    return (
      <div className="slid-er">
        <div className="slides" id={`${this.props.id}slides`}>
          {this.randomizedData.map((showcaseItem) => {
            return (
              <div className="slide">
                <div className="slide-content">
                  <a
                    href={`${showcaseItem.link}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/showcase${showcaseItem.src}`}
                      loading="lazy"
                      alt={`${showcaseItem.alt}`}
                    />
                    <div className="button-container">
                      <span className="button">{this.props.cta}</span>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
          {/*-- Mirror content --*/}
          {this.randomizedData.map((showcaseItem) => {
            return (
              <div className="slide">
                <div className="slide-content">
                  <a
                    href={`${showcaseItem.link}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/showcase${showcaseItem.src}`}
                      loading="lazy"
                      alt={`${showcaseItem.alt}`}
                    />
                    <div className="button-container">
                      <span className="button">{this.props.cta}</span>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
