export * from './education';
export * from './job';

export interface ITimelineProps {
  onTabChange?: (currentTab: string) => void;
  isDetailedView?: boolean;
}
