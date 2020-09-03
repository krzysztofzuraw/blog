import { css } from '@emotion/core';
import React, { FunctionComponent } from 'react';
import { Theme } from 'src/theme';
import { Layout, Link, SEO, Stack } from '../components';

const UsesPage: FunctionComponent = () => {
  return (
    <Layout location="uses">
      <SEO title="Uses" />
      <Stack css={styles.list}>
        <h1>Tools that I'm using</h1>
        <h2>Software (MacOS)</h2>
        <Stack as="ul" space="small">
          <li>
            <Link to="https://culturedcode.com/things/">Things</Link> for managing my todo list
          </li>
          <li>
            <Link to="https://ia.net/writer">iA Writer</Link> for all kinds of notes
          </li>
          <li>
            <Link to="https://code.visualstudio.com/">Visual Studio Code</Link> for editing code
          </li>
          <li>Apple Calendar for time blocking and events</li>
          <li>
            <Link to="https://www.alfredapp.com/">Alfred</Link> for launching applications &
            workflows
          </li>
          <li>
            <Link to="https://cleanshot.com/">Cleanshot</Link> for taking screenshots
          </li>
          <li>
            <Link to="https://affinity.serif.com/en-gb/designer/">Affinity Designer</Link> for
            vector graphic
          </li>
          <li>
            <Link to="https://karabiner-elements.pqrs.org/">Karabiner elements</Link> for
            reassigning keyboard shortcuts.
          </li>
          <li>Spotify for music</li>
          <li>
            <Link to="http://freemacsoft.net/appcleaner/">AppCleaner</Link> for cleaning application
            lefovers
          </li>
          <li>
            <Link to="https://www.macbartender.com/">Bartender 3</Link> for hiding mac menu bar
            items
          </li>
          <li>
            <Link to="https://heyfocus.com/">Focus</Link> for blocking distrating sites
          </li>
          <li>Google Chrome</li>
          <li>
            <Link to="https://www.ergonis.com/products/typinator/">Typinator</Link> for text
            expansion
          </li>
          <li>
            <Link to="https://c-command.com/toothfairy/">ToothFairy</Link> for menu bar bluetooth
          </li>
        </Stack>
        <h2>Hardware</h2>
        <Stack as="ul" space="small">
          <li>MacBook Air 2019 - personal</li>
          <li>MacBook Pro 2015 - work</li>
          <li>Iphone 11 64GB</li>
          <li>Airpods</li>
          <li>
            <Link to="https://www.bose.pl/pl_pl/products/headphones/over_ear_headphones/quietcomfort-35-wireless-ii.html#v=qc35_ii_black">
              Bose QC 35
            </Link>{' '}
            - noise canceling headphones
          </li>
          <li>Apple watch</li>
          <li>
            <Link to="https://www.logitech.com/pl-pl/product/mx-vertical-ergonomic-mouse">
              MX Vertical
            </Link>{' '}
            - vertical mouse
          </li>
          <li>
            <Link to="https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard">
              Keychron K1
            </Link>{' '}
            - keyboard
          </li>
        </Stack>
        <h2>Coffee Gear</h2>
        <Stack as="ul" space="small">
          <li>
            <Link to="https://www.chemexcoffeemaker.com/">Chemex</Link>
          </li>
          <li>
            <Link to="https://aeropress.com/">Areopress</Link>
          </li>
          <li>
            <Link to="https://www.hario.jp/sp_v60series.html">Hairo v60</Link>
          </li>
          <li>
            <Link to="https://baratza.com/grinder/encore/">Baratza encore</Link>
          </li>
          <li>
            <Link to="https://alternativebrewing.com.au/product/brewista-smart-pour-variable-temperature-gooseneck-kettle/">
              Brewista kettle
            </Link>
          </li>
        </Stack>
        <p>
          Last updated in <time>August 28, 2020</time>
        </p>
      </Stack>
    </Layout>
  );
};

const styles = {
  list: (theme: Theme) => css({ ul: { listStyle: 'disc', paddingLeft: theme.spacing.medium } }),
};

export default UsesPage;
