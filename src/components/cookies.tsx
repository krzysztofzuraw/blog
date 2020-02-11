import * as React from 'react';

import style from '../styles/cookies.module.css';
import { useLocalStorage } from '../utils/hooks';

export const CookiesBanner: React.FunctionComponent = () => {
  const [isBannerClicked, setIsBannerClicked] = useLocalStorage('COOKIE_BANNER_CLICKED', false);
  if (!isBannerClicked) {
    return (
      <div
        className={style.cookies}
        title="Click to close"
        onClick={() => setIsBannerClicked(true)}
        role="banner"
      >
        <p>This website is using cookies for Google Analytics and Disqus.</p>
      </div>
    );
  }
  return null;
};
