import * as React from 'react';

import { Layout, Link, SEO } from '../components';

const UsesPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Uses" />
      <h2>Software (MacOS)</h2>
      <p>
        I have <Link to="https://github.com/krzysztofzuraw/dotfiles">dotfiles</Link> repo with my
        common configuration.
      </p>
      <ul>
        <li>
          VSCode with <Link to="https://draculatheme.com/pro">Dracula pro</Link> theme &&nbsp;
          <Link to="https://dank.sh/">Dank Mono</Link> font
        </li>
        <li>
          <Link to="https://www.alfredapp.com/">Alfred launcher</Link>
        </li>
        <li>
          <Link to="https://bear.app/">Bear</Link>
        </li>
        <li>
          <Link to="https://mindnode.com/">Mind node</Link>
        </li>
        <li>
          <Link to="https://culturedcode.com/things/">Things</Link>
        </li>
        <li>
          <Link to="https://getcleanshot.com/">Cleanshot</Link>
        </li>
        <li>
          <Link to="https://kapeli.com/dash">Dash</Link>
        </li>
        <li>
          <Link to="https://www.mozilla.org/en-US/firefox/developer/">
            Firefox Developer Edition
          </Link>
        </li>
        <li>
          <Link to="https://heyfocus.com/">Focus</Link>
        </li>
        <li>
          <Link to="https://github.com/pqrs-org/Karabiner-Elements">Karabiner elements</Link>
        </li>
        <li>Spotify</li>
        <li>
          <Link to="https://matthewpalmer.net/rocket/">Rocket</Link>
        </li>
        <li>
          <Link to="https://apps.apple.com/us/app/tadam-stay-focused-at-work/id531349534?mt=12">
            Tadam
          </Link>
        </li>
        <li>
          <Link to="https://apps.apple.com/us/app/toothfairy/id1191449274?mt=12">Tooth Fairy</Link>
        </li>
      </ul>
      <h2>Hardware</h2>
      <ul>
        <li>MacBook Air 2019 - personal</li>
        <li>MacBook Pro 2015 - work</li>
        <li>Iphone 11 64GB</li>
        <li>Airpods & Bose QC 35</li>
        <li>Apple watch</li>
        <li>
          <Link to="https://www.logitech.com/en-us/product/mx-vertical-ergonomic-mouse">
            MX Vertical
          </Link>
        </li>
        <li>
          <Link to="https://www.keychron.com/">Keychron K1</Link>
        </li>
      </ul>
      <h2>Coffe gear</h2>
      <ul>
        <li>
          <Link to="https://www.chemexcoffeemaker.com/">Chemex</Link>
        </li>
        <li>
          <Link to="https://aeropress.com/">Areopress</Link>
        </li>
        <li>
          <Link to="https://baratza.com/grinder/encore/">Baratza encore</Link>
        </li>
        <li>
          <Link to="https://www.mybrewista.com/collections/kettles/products/smart-pour-variable-temperature-kettle">
            Brewista kettle
          </Link>
        </li>
      </ul>
      <p>Updated at 2020-02-22</p>
    </Layout>
  );
};

export default UsesPage;
