import React, { FunctionComponent } from 'react';

import { Layout, Link, SEO } from '../components';

const Uses: FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Uses" />
      <article className="prose slashed-zero tabular-nums">
        <h1>What I'm using</h1>
        <p>
          Make sure to check out <Link to="https://uses.tech/">uses.tech</Link> for a list of
          everyone’s <code className="language-text">/uses</code> pages!
        </p>

        <h2>Core applications</h2>

        <ul>
          <li>Chrome</li>
          <li>
            <Link to="https://culturedcode.com/things/">Things 3</Link> - for all my todos/ideas to
            implement lists
          </li>
          <li>
            <Link to="https://ia.net/writer">iA Writer</Link> - for all my writing &amp; notes
          </li>
          <li>
            Visual Studio Code with{' '}
            <Link to="https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme">
              GitHub Dark/Light
            </Link>{' '}
            theme. I’m using <Link to="https://www.monolisa.dev/">MonoLisa</Link> font
          </li>
          <li>1Password - for managing all my passwords</li>
          <li>Figma - for my atempts at creating UIs</li>
          <li>
            <Link to="https://www.alfredapp.com/">Alfred</Link>. I use it as an application
            launcher, snippets tool, clipboard manager, browser bookmarks search and to launch
            workflows here and there
          </li>
        </ul>

        <h2>Core services</h2>

        <ul>
          <li>
            <Link to="https://www.youneedabudget.com/">YNAB</Link> - for my budget and estimating
            spending.
          </li>
          <li>
            <Link to="https://www.fastmail.com/">Fastmail</Link> - for my emails. I really like my
            workflow with custom newsletter alias - I make them as read by default and consume every
            Sunday to coffee.
          </li>
          <li>
            <Link to="https://feedbin.com/">Feedbin</Link> - for RSS/twitter &amp; newsletters
            reading
          </li>
        </ul>

        <h2>Interesting applications/services</h2>

        <ul>
          <li>
            <Link to="https://www.choosyosx.com/">Choosy</Link> - to switch between multiple
            browsers
          </li>
          <li>
            <Link to="https://github.com/leits/MeetingBar">Metting bar</Link> - display next event
            in menubar with option to join call with one click
          </li>
          <li>
            <Link to="https://c-command.com/toothfairy/">Tooth fairy</Link> - connect &amp; show
            bluetooth devices
          </li>
          <li>
            <Link to="http://freemacsoft.net/appcleaner/">App cleaner</Link> - cleanup leftovers
            after removing apps from mac
          </li>
          <li>
            <Link to="https://typefully.app/">Typefully</Link> - writing interface for twitter
          </li>
          <li>
            <Link to="https://justgetflux.com/">Flux</Link> - better night shift
          </li>
          <li>
            <Link to="https://www.macbartender.com/">Bartender</Link> - hide &amp; show menubar apps
          </li>
        </ul>

        <h2>Hardware</h2>

        <ul>
          <li>Apple Macbook Air 2019 &amp; Macbook Pro 2015 (home/work)</li>
          <li>iPhone 11</li>
          <li>iPad 6gen</li>
          <li>Apple watch</li>
          <li>
            <Link to="https://www.timetimer.com/">Time timer</Link> - for pomodoros
          </li>
          <li>
            <Link to="https://www.logitech.com/en-us/products/mice/mx-vertical-ergonomic-mouse.910-005447.html">
              MX Vertical mouse
            </Link>
          </li>
        </ul>

        <h2>Coffee gear</h2>

        <ul>
          <li>Chemex/Aeropress/V60</li>
          <li>
            <Link to="https://baratza.com/grinder/encore/">Baratza Encore</Link> grinder
          </li>
          <li>
            <Link to="https://alternativebrewing.com.au/product/brewista-smart-pour-variable-temperature-gooseneck-kettle/">
              Brewista goose
            </Link>{' '}
            kettle
          </li>
          <li>No-name scale</li>
        </ul>
        <time dateTime="2021-02-26" className="italic">
          Last updated on 2021-02-26
        </time>
      </article>
    </Layout>
  );
};

export default Uses;
