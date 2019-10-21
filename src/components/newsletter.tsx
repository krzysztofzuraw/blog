import * as React from 'react';

const Newsletter: React.FunctionComponent = () => (
  <form
    action="https://buttondown.email/api/emails/embed-subscribe/krzysztof_zuraw"
    method="post"
    target="popupwindow"
    onSubmit={() => window.open('https://buttondown.email/krzysztof_zuraw', 'popupwindow')}
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
  >
    <p>Want to get blog posts via email?</p>
    <label
      htmlFor="bd-email"
      style={{ color: '#7e8a9a', fontSize: 'medium', marginBottom: '0.25em' }}
    >
      Enter your email
    </label>
    <input
      type="email"
      placeholder="email"
      name="email"
      id="bd-email"
      style={{
        border: '1px solid #ced3d9',
        borderRadius: '4px',
        padding: '0.75em 1em',
        fontSize: '16px',
        marginBottom: '1em',
      }}
    />
    <input type="hidden" value="1" name="embed" />
    <input
      type="submit"
      value="Subscribe"
      style={{
        backgroundColor: '#63B3ED',
        borderRadius: '0.25em',
        color: '#fff',
        padding: '0.75em 1em',
        fontSize: '16px',
        marginBottom: '0.5em',
        alignSelf: 'flex-end',
      }}
    />
    <p style={{ fontSize: 'medium' }}>
      <a href="https://buttondown.email" target="_blank">
        Powered by Buttondown.
      </a>
    </p>
  </form>
);

export default Newsletter;
