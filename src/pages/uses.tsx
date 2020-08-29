import React, { FunctionComponent } from 'react';
import { Layout, Stack } from '../components';

const UsesPage: FunctionComponent = () => {
  return (
    <Layout location="uses">
      <Stack css={(theme) => ({ ul: { listStyle: 'disc', paddingLeft: theme.spacing['s+1'] } })}>
        <h1>Tools that I'm using</h1>
        <h2>Software (MacOS)</h2>
        <Stack as="ul" space="s-1">
          <li>
            <a href="https://code.visualstudio.com/">Visual Studio Code</a> with Dark+ theme/SF Mono
          </li>
          <li>Apple Calendar</li>
          <li>Plain text for todos</li>
          <li>
            <a href="https://www.alfredapp.com/">Alfred</a>
          </li>
          <li>
            <a href="https://cleanshot.com/">Cleanshot</a>
          </li>
          <li>
            <a href="https://affinity.serif.com/en-gb/designer/">Affinity Designer</a>
          </li>
          <li>
            <a href="https://karabiner-elements.pqrs.org/">Karabiner elements</a>
          </li>
          <li>Spotify</li>
          <li>
            <a href="http://freemacsoft.net/appcleaner/">AppCleaner</a>
          </li>
          <li>
            <a href="https://www.macbartender.com/">Bartender 3</a>
          </li>
          <li>
            <a href="https://heyfocus.com/">Focus</a>
          </li>
          <li>Google Chrome</li>
          <li>
            <a href="https://www.ergonis.com/products/typinator/">Typinator</a>
          </li>
          <li>
            <a href="https://c-command.com/toothfairy/">ToothFairy</a>
          </li>
        </Stack>
        <h2>Hardware</h2>
        <Stack as="ul" space="s-1">
          <li>MacBook Air 2019 - personal</li>
          <li>MacBook Pro 2015 - work</li>
          <li>Iphone 11 64GB</li>
          <li>Airpods</li>
          <li>
            <a href="https://www.bose.pl/pl_pl/products/headphones/over_ear_headphones/quietcomfort-35-wireless-ii.html#v=qc35_ii_black">
              Bose QC 35
            </a>
          </li>
          <li>Apple watch</li>
          <li>
            <a href="https://www.logitech.com/pl-pl/product/mx-vertical-ergonomic-mouse">
              MX Vertical
            </a>
          </li>
          <li>
            <a href="https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard">
              Keychron K1
            </a>
          </li>
        </Stack>
        <h2>Coffee Gear</h2>
        <Stack as="ul" space="s-1">
          <li>
            <a href="https://www.chemexcoffeemaker.com/">Chemex</a>
          </li>
          <li>
            <a href="https://aeropress.com/">Areopress</a>
          </li>
          <li>
            <a href="https://www.hario.jp/sp_v60series.html">Hairo v60</a>
          </li>
          <li>
            <a href="https://baratza.com/grinder/encore/">Baratza encore</a>
          </li>
          <li>
            <a href="https://alternativebrewing.com.au/product/brewista-smart-pour-variable-temperature-gooseneck-kettle/">
              Brewista kettle
            </a>
          </li>
        </Stack>
        <p>
          Last updated in <time>August 28, 2020</time>
        </p>
      </Stack>
    </Layout>
  );
};

export default UsesPage;
