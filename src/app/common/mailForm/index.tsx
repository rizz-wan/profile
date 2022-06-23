import * as React from 'react';
import { card, getShadows } from '../../styles/commonStyles';
import {
  FontIcon,
  getTheme,
  MessageBar,
  MessageBarType,
  Shimmer,
  Stack,
  TextField,
  Text,
} from '@fluentui/react';
import './index.scss';
import emailjs from 'emailjs-com';
import { ICommon } from '../../model';
import common from '../../data/common.json';

interface IMailFormState {
  pageHasError: boolean;
  messageSent: boolean;
  messageSending: boolean;
  message: string;
  name: string;
}

export class MailForm extends React.Component<{}, IMailFormState> {
  common: ICommon;
  constructor(props: IMailFormState) {
    super(props);
    this.state = {
      pageHasError: false,
      messageSent: false,
      messageSending: false,
      message: '',
      name: '',
    };
    this.common = common;
  }

  updateState = (
    messageSending: boolean,
    messageSent: boolean,
    pageHasError: boolean
  ): void => {
    this.setState({
      pageHasError: pageHasError,
      messageSent: messageSent,
      messageSending: messageSending,
      message: '',
    });
  };

  handleEmail = (): void => {
    if (this.state.message.trim().length && this.state.name.trim().length) {
      try {
        this.updateState(true, false, false);
        emailjs.init(process.env.REACT_APP_EMAIL_USER_ID as string);
        emailjs
          .send(
            process.env.REACT_APP_EMAIL_SERVICE_ID as string,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID as string,
            {
              irizwan_sender: this.state.name,
              irizwan_message: this.state.message,
            }
          )
          .then(
            (response) => {
              this.updateState(false, true, false);
            },
            function (error) {}
          );
      } catch (e) {
        this.updateState(false, false, true);
      }
    }
  };

  handleTextField = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ): void => {
    this.setState({ message: newValue ?? '' });
  };

  handleNameField = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ): void => {
    this.setState({ name: newValue ?? '' });
  };

  render(): JSX.Element {
    const theme = getTheme();

    return (
      <div className={`${card} card ${getShadows(theme)} mailForm`}>
        {this.state.messageSending && (
          <Shimmer
            className="ms-motion-slideDownIn"
            height={'100px !important'}
          />
        )}
        {this.state.pageHasError && (
          <MessageBar
            className="ms-motion-slideDownIn"
            messageBarType={MessageBarType.error}
            isMultiline={true}
          >
            {this.common.mailError}
          </MessageBar>
        )}
        {this.state.messageSent && (
          <MessageBar
            className="ms-motion-slideDownIn"
            messageBarType={MessageBarType.success}
            isMultiline={true}
          >
            {this.common.mailSuccess}
          </MessageBar>
        )}
        <h3>{this.common.quickThought}</h3>
        <TextField
          multiline
          resizable={false}
          value={this.state.message}
          placeholder={this.common.mailPlaceholder}
          onChange={this.handleTextField}
        />
        <TextField
          label={this.common.mailTextLabel}
          underlined
          placeholder={this.common.mailTextPlaceholder}
          onChange={this.handleNameField}
        />
        <Text variant="xSmall">
          <FontIcon iconName="Lightbulb" />
          <Text variant="xSmall" className="tip">
            {this.common.mailTip}
          </Text>
        </Text>
        <Stack horizontal className="custom-button-container">
          <Stack.Item grow> </Stack.Item>
          <Stack.Item>
            <span
              className={`custom-button ${
                this.state.message.trim().length &&
                this.state.name.trim().length
                  ? `active-button ${getShadows(theme)}`
                  : 'disabled-button'
              }`}
              onClick={this.handleEmail}
            >
              <FontIcon
                aria-label={this.common.send}
                iconName={this.common.send}
                className="custom-button-icon"
              />
              {this.common.send}
            </span>
          </Stack.Item>
        </Stack>
      </div>
    );
  }
}
