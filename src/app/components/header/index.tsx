import { getTheme, Pivot, PivotItem, Stack } from '@fluentui/react';
import * as React from 'react';
import { ICommon } from '../../model';
import { getPivotShadows } from '../../styles/commonStyles';
import { tabs } from '../../utils';
import common from '../../data/common.json';

export interface IHeaderProps {
  handleTabClick: (selectedTab: string) => void;
  selectedKey: string;
}

export class Header extends React.Component<IHeaderProps> {
  common: ICommon;
  constructor(props: IHeaderProps) {
    super(props);
    this.common = common;
  }
  handleTabChange = (item?: PivotItem): void => {
    this.props.handleTabClick(item?.props.itemKey as string);
  };
  render(): JSX.Element {
    const theme = getTheme();
    return (
      <Stack className="header m-t-3">
        <Stack.Item align="center" className="w-lg-60">
          <Pivot
            onLinkClick={this.handleTabChange}
            className={`${getPivotShadows(theme)} ms-motion-slideDownIn`}
            selectedKey={`${this.props.selectedKey}`}
          >
            <PivotItem
              headerText={this.common.tabsNames[0]}
              itemKey={tabs[0]}
            ></PivotItem>
            <PivotItem
              headerText={this.common.tabsNames[1]}
              itemKey={tabs[1]}
            ></PivotItem>
            <PivotItem
              headerText={this.common.tabsNames[2]}
              itemKey={tabs[2]}
            ></PivotItem>
            <PivotItem
              itemIcon="AppIconDefaultList"
              itemKey={tabs[3]}
            ></PivotItem>
          </Pivot>
        </Stack.Item>
      </Stack>
    );
  }
}
