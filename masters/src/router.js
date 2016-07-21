import Router from 'ampersand-router';
import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Public from './pages/public';
import Repos from './pages/repos';

export default Router.extend({
  routes: {
    '':'public',
    'repos': 'repos',
  },

  public() {
    ReactDom.render(<Public/>, document.body)
    // console.log("Public page");
  },

  repos () {
    ReactDom.render(<Repos />,document.body)
    // console.log("Repos page");
  }

});
