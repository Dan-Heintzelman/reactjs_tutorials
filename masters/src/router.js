import Router from 'ampersand-router';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import qs from 'qs';
import Layout from './layout'
import Public from './pages/public';
import Repos from './pages/repos';
import xhr from 'xhr';

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
    'login': 'login',
    'auth/callback?:query': 'authCallback'
  },

  public() {
    this.renderPage(<Public/>, {layout: false});
    // console.log("Public page");
  },

  repos() {
    this.renderPage(<Repos/>);
    // console.log("Repos page");
  },

  login() {
    // GitHub OAuth web application flow
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      'client_id': '1de7be3b859861001db8',
      'redirect_uri': window.location.origin + '/auth/callback' ,
      'scope': 'user, repo'
    })
  },

  authCallback (query) {
    query = qs.parse(query)
    console.log(query)

    xhr({
      url: 'https://reactampersandtest.herokuapp.com/authenticate/' + query.code,
      json: true
    }, (err, req, body) => {
        console.log(body)
    })

  }

});
