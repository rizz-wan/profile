import { getTheme } from '@fluentui/react';
import * as React from 'react';
import loader from '../../assets/img/loader.gif';
import { MailForm } from '../../common';
import { card, getShadows } from '../../styles/commonStyles';

export class Blog extends React.Component {
  constructor(props: {}) {
    super(props);
    window.scrollTo(0, 0);
  }
  render(): JSX.Element {
    const theme = getTheme();

    return (
      <>
        <div className="ms-Grid">
          <div className="ms-Grid-row">
            <div className={`${card} card ${getShadows(theme)} profile`}>
              <img width="100%" src={loader} alt="loader" />
            </div>
          </div>
        </div>
        <MailForm />
      </>
    );
  }
}
