import React, { PropTypes, Component } from 'react';
import { useRouterHistory, Router, Route, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';

const history = useRouterHistory(createHashHistory)({ queryKey: false });

import HomeContainer from './containers/home';
import Home from './components/home';
import PageNotFound from './components/pageNotFound';
function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}
const Root = React.createClass({
  render() {
    return (
      <Router history = {history} onUpdate={hashLinkScroll}>
        <Route name='home' path='/' component={HomeContainer}>
          <IndexRoute component={Home} />
        </Route>
        <Route path="*" component={PageNotFound} />
      </Router>
    );
  },
});

export default Root;
