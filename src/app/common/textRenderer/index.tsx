import { Link, Text } from '@fluentui/react';
import * as React from 'react';

interface ITextRendererProps {
  data: string;
}
export class TextRenderer extends React.Component<ITextRendererProps> {
  resolveSpace = (spaceString: string): string => {
    return spaceString.replaceAll('<space>', ' ');
  };

  getLink = (linkString: string): JSX.Element => {
    const linkComponents = linkString.replace('}', '').split('|');
    return (
      <Link href={linkComponents[1]} target={linkComponents[2]}>
        {this.resolveSpace(linkComponents[3])}
      </Link>
    );
  };

  render(): JSX.Element {
    return (
      <Text>
        {this.props.data.split(' ').map((text) => {
          const isLink = text.startsWith('{:link');
          if (isLink) {
            return this.getLink(text);
          }
          return `${text} `;
        })}
      </Text>
    );
  }
}
