import Router from 'ampersand-router';
import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Layout from './layout'
import Public from './pages/public';
import Repos from './pages/repos';

import localLinks from 'local-links';

export default Router.extend({

  renderPage(page, opts = {layout: true}) {
    if (opts.layout) {
      page = (

        <Layout>
          {page}
        </Layout>
      );
    }
    ReactDom.render(page, document.body);
  },

  routes: {
    '':'public',
    'repos': 'repos',
  },

  public() {
    this.renderPage(<Public/>, {layout: false});
    // console.log("Public page");
  },

  repos() {
    this.renderPage(<Repos/>);
    // console.log("Repos page");
  }

});
