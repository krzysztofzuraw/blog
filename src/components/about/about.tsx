import * as React from 'react';
import { style } from 'typestyle';

import { Link } from 'gatsby';
import { SiteSiteMetadataSocialInputObject_2 } from 'typings/graphql';
import { typography } from '../../utils';

const wrapperStyle = style({
  lineHeight: typography.rhythm(1.5),
});

interface Props {
  socialMedia?: SiteSiteMetadataSocialInputObject_2 | null;
}

export const About: React.FunctionComponent<Props> = ({ socialMedia }) => (
  <div className={wrapperStyle}>
    <h1>Hello!</h1>
    <div>
      <p>
        My name is <strong>Krzysztof Żuraw</strong>. To see what I'm doing now go to{' '}
        <Link to="/now">now page.</Link>
      </p>
    </div>
    <h2>Timeline</h2>
    <ul>
      <li>1991: born in Nowa Sarzyna</li>
      <li>2010: go to university in Kraków to study land surveying</li>
      <li>2015: start coding on my own and change carriers to software development</li>
      <li>2015 March: start attending <a href="http://pythingy.github.io/">PyThingy</a>meetings</li>
      <li>2015 May: get the intern job at <a href="https://getprintbox.com/">Printbox</a></li>
      <li>2015 July: move to Wrocław to work for Dolby Laboratories</li>
      <li>2016 January: switch jobs to <a href="https://stxnext.com/">STXNext</a></li>
      <li>2016 January: join Toastmasters International</li>
      <li>2016 November: be a mentor on Django Grils Kraków</li>
      <li>2017 September: be a mentor on Code Geeks Carrots</li>
      <li>2017 June: be a mentor (again) on Django Grils Kraków</li>
      <li>2017 September: be a mentor on Django Girls Wrocław</li>
      <li>2018 March: switch jobs to <a href="https://www.ingrid.com/">Ingrid</a></li>
      <li>2018 November: be a meta mentor on Django Girls Wrocław</li>
    </ul>
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
        <a href="https://speakerdeck.com/krzysztofzuraw/typescript-myths-debunked">TypeScript Myths Debunked</a>.
        Talk about various myths connected with TypeScript. The first talk at the first meeting of Wrocław TypeScript
        meetup.
      </li>
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
          <li>
            <a href={socialMedia.speakerDeck as string}>Speaker Deck</a>
          </li>
        </ul>
      </>
    )}
  </div>
);
