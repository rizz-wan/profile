export interface IExperience {
  year: string;
  date: string;
  designation: string;
  company: {
    text: string;
    link: string;
  };
  location: string;
  summary: string[];
}
