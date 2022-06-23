import {
  getTheme,
  ITheme,
  Link,
  mergeStyles,
  Stack,
  Text,
} from '@fluentui/react';
import * as React from 'react';
import { IAbout } from '../../model';
import about from '../../data/about.json';

const footerStyles = mergeStyles({
  cursor: 'pointer',
  fontSize: '12px',
  '.c-red': {
    color: '#f93f43',
  },
});
const footerBarStyles = mergeStyles({
  margin: '0 !important',
  padding: '0 2px 3px 2px !important',
});

export class Footer extends React.Component {
  about: IAbout;
  constructor(props: {}) {
    super(props);
    this.about = about;
  }

  getFooterContent = (theme: ITheme): JSX.Element => {
    return (
      <Text className={`${footerStyles} ms-motion-slideUpIn`}>
        {'Handcrafted with '}
        <span className="c-red">&hearts;</span>
        {' by '}
        <Link href={this.about.github} target="_blank">
          {this.about.maidenName}
        </Link>
      </Text>
    );
  };

  render(): JSX.Element {
    const theme = getTheme();

    return (
      <div className={`card ${footerBarStyles}`}>
        <Stack>
          <Stack.Item align="center">{this.getFooterContent(theme)}</Stack.Item>
        </Stack>
      </div>
    );
  }
}
