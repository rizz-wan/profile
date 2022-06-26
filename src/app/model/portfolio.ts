export interface IPortfolio {
  outstandingPens: string;
  outstandingAltPens: string;
  otherPens: string[];
  portfolioSubheader: string;
  projectsText: string;
  pens: string;
  showcase: {
    pens: { link: string; src: string; alt: string }[];
    projects: { link: string; src: string; alt: string }[];
  };
}
