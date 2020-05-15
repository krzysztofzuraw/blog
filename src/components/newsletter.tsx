import * as React from 'react';

export const Newsletter: React.FunctionComponent = () => (
  <form
    action="https://buttondown.email/api/emails/embed-subscribe/krzysztof_zuraw"
    method="post"
    target="popupwindow"
    onSubmit={() =>
      window && window.open('https://buttondown.email/krzysztof_zuraw', 'popupwindow')
    }
    className="newsletter"
  >
    <label htmlFor="bd-email">Enter your email to subscribe to monthly newsletter</label>
    <div className="newsletter-fields">
      <input type="email" name="email" id="bd-email" placeholder="Your email address" />
      <input type="hidden" value="1" name="embed"></input>
      <input type="submit" value="Subscribe"></input>
    </div>
    <p>
      <a href="https://buttondown.email" target="_blank">
        Powered by Buttondown
      </a>
    </p>
  </form>
);
