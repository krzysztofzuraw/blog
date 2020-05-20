import * as React from 'react';

import { Layout, Link, SEO } from '../components';

const UsesPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <SEO title="Uses | Krzysztof Żuraw" description="What I use" slug="/uses" />
      <h2>Software (MacOS)</h2>
      <ul>
        <li>
          VSCode with <Link to="https://draculatheme.com/pro">Dracula pro</Link> theme &&nbsp;
          <Link to="https://dank.sh/">Dank Mono</Link> font
        </li>
        <li>Plain text in vcode</li>
        <li>
          Time blocking on pen and paper via{' '}
          <Link to="https://www.calnewport.com/blog/2013/12/21/deep-habits-the-importance-of-planning-every-minute-of-your-work-day/">
            Carl Newport
          </Link>
        </li>
        <li>Journaling and dev notebook using pen & paper</li>
        <li>
          <Link to="http://www.lightandmatter.com/when/when.html">When - plain text calendar</Link>
        </li>
        <li>
          <Link to="https://www.alfredapp.com/">Alfred launcher</Link>
        </li>
        <li>
          <Link to="https://getcleanshot.com/">Cleanshot</Link>
        </li>
        <li>
          <Link to="https://heyfocus.com/">Focus</Link>
        </li>
        <li>Firefox Developer Edition</li>
        <li>
          <Link to="https://github.com/pqrs-org/Karabiner-Elements">Karabiner elements</Link>
        </li>
        <li>Spotify</li>
        <li>
          <Link to="https://matthewpalmer.net/rocket/">Rocket</Link>
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
          <Link to="https://www.hario.jp/sp_v60series.html">Hairo V60</Link>
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
      <p>Last updated 2020-05-20</p>
    </Layout>
  );
};

export default UsesPage;
