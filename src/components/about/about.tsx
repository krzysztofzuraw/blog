import * as React from 'react';
import { style } from 'typestyle';

import { SiteSiteMetadataSocialInputObject_2 } from 'typings/graphql';
import { theme } from '../../theme';
import { typography } from '../../utils';

const wrapperStyle = style({
  lineHeight: typography.rhythm(1.5),
  $nest: {
    '& a': {
      textDecoration: 'none',
      color: theme.colors.gray.toString(),
    },
    '& a:hover': {
      textDecoration: 'underline',
    },
  },
});

interface Props {
  socialMedia?: SiteSiteMetadataSocialInputObject_2 | null;
}

export const About: React.FunctionComponent<Props> = ({ socialMedia }) => (
  <div className={wrapperStyle}>
    <h1>Hello!</h1>
    <div>
      <p>
        My name is <strong>Krzysztof Żuraw</strong>. I'm currently living in Wrocław, Poland where I
        work as FrontEnd developer at <a href="https://www.ingrid.com/">Ingird</a>. I used to work
        with Python but nowadays I code using TypeScript. Besides that I really enjoy playing with
        React, Redux, RxJS. I'm try to learn more CSS and functional programming.
      </p>
      <p>
        If I'm not coding I one of people who organize{' '}
        <a href="https://www.meetup.com/WrocTypeScript/">Wrocław TypeScript meetup</a>. I'm really
        into discovering awesome restaurants, enjoying good specialty coffee and doing some street
        workout. I used to be member of Wrocław Speakers - Toastmasters group.
      </p>
    </div>
    <h2>My projects</h2>
    <ul>
      <li>
        <a href="https://github.com/krzysztofzuraw/histmag_to_kindle">Histmag to kindle</a>. Simple
        web crawler that sends you historical articles to your kindle device.
      </li>
      <li>
        <a href="https://krzysztofzuraw.github.io/pomodoro-timer/">Pomodoro timer</a>. Pomodoro
        timer that can show if your 25 minutes was good or bad.{' '}
        <a href="https://github.com/krzysztofzuraw/pomodoro-timer">Pomodoro timer source code</a>.
      </li>
      <li>
        <a href="https://krzysztofzuraw.github.io/all-roads-lead-to/">All roads lead to</a>. Select
        a place & see that all roads lead there.{' '}
        <a href="https://github.com/krzysztofzuraw/all-roads-lead-to">
          All roads lead to source code
        </a>
        .
      </li>
      <li>
        <a href="https://poznaj-wroclaw.herokuapp.com/api/">Poznaj</a>. Discover history of Wroclaw
        using your smartphone.{' '}
        <a href="https://github.com/KlubJagiellonski/poznaj-app-backend">Poznaj source code</a>.
      </li>
      <li>
        <a href="Podcast-app">Podcast-app</a>. Simple podcast searcher made in ReactJS.{' '}
        <a href="https://github.com/krzysztofzuraw/podcast-app">Podcast-app source code</a>.
      </li>
      <li>
        <a href="https://photogram-kz.herokuapp.com/">Photogram</a>. Instagram for unsplash in
        ReactJS with Redux.{' '}
        <a href="https://github.com/krzysztofzuraw/photogram">Photogram source code</a>.
      </li>
    </ul>
    <h2>My talks</h2>
    <ul>
      <li>
        <a href="https://www.youtube.com/watch?v=nFIoHcNQo84">TypeRefactoring</a>. Lightning talk
        from Nordic.js 2018 about refactoring codebase written in TypeScript.
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=s1T9ravp2a0">Solutions reviews</a>. Talk about
        solutions reviews concept.
      </li>
      <li>
        <a href="https://speakerdeck.com/krzysztofzuraw/lessons-learned-from-integrating-django-and-graphql">
          Lessons learned from integrating Django & GraphQL (English)
        </a>
        . Talk about a few lessons learned while working with GraphQL.
      </li>
      <li>
        <a href="http://slides.com/noaal/deck">GeoDjango- kiedy GIS spotyka Django (Polish)</a>.
        Talk about GeoDjango, made for #20 wrocpy.
      </li>
      <li>
        <a href="GeoPy- geodokodowanie z Pythonem (Polish)">
          GeoPy- geodokodowanie z Pythonem (Polish)
        </a>
        . Lightning talk about GeoPy library, made for #21 wrocpy.
      </li>
    </ul>
    {socialMedia && (
      <>
        <h2>Social media links</h2>
        <ul>
          <li>
            <a href={socialMedia.twitter as string}>Twitter</a>
          </li>
          <li>
            <a href={socialMedia.github as string}>Github</a>
          </li>
          <li>
            <a href={socialMedia.email as string}>Email</a>
          </li>
          <li>
            <a href={socialMedia.linkedin as string}>LinkedIn</a>
          </li>
        </ul>
      </>
    )}
  </div>
);
