import * as React from 'react';
import { style } from 'typestyle';

import { theme } from '../../theme';
import { typography } from '../../utils';

const wrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: typography.rhythm(1),
});

const formStyle = style({
  display: 'flex',
  flexDirection: 'column',
});

const labelStyle = style({
  marginBottom: typography.rhythm(0.25),
  color: theme.colors.gray.toString(),
});

const inputStyle = style({
  fontSize: typography.rhythm(1),
  fontFamily: 'inherit',
  marginBottom: typography.rhythm(0.5),
});

const buttonStyle = style({
  backgroundColor: theme.colors.blue.toString(),
  borderRadius: typography.rhythm(0.25),
  border: 0,
  padding: typography.rhythm(0.5),
  fontFamily: 'inherit',
  color: theme.colors.white.toString(),
});

interface Props {
  handleFormSubmit: () => void;
  formAction: string;
}

export const Newsletter: React.FunctionComponent<Props> = ({ handleFormSubmit, formAction }) => (
  <div className={wrapperStyle}>
    <div>
      <p>
        <b>Hello!</b> 👋🏻
      </p>
      <p>Below you will find subscription form to my newsletter.</p>
      <p>
        You give me your email address - I will send you an email with my writings about TypeScript
        every week. After one week I take my newsletter post and publish it here to my blog.
      </p>
    </div>
    <form
      action={formAction}
      method="POST"
      target="popupwindow"
      onSubmit={handleFormSubmit}
      className={formStyle}
    >
      <label htmlFor="bd-email" className={labelStyle}>
        Enter your email
      </label>
      <input type="email" name="email" id="bd-email" className={inputStyle} />
      <input type="hidden" value="1" name="embed" />
      <input type="submit" value="Subscribe" className={buttonStyle} />
    </form>
    <p>
      <a href="https://buttondown.email" target="_blank">
        Powered by Buttondown
      </a>
    </p>
  </div>
);
