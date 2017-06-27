import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Header from '../../components/shared/header';
import ScrollableAnchor from 'react-scrollable-anchor';


class homeContainer extends Component {
  render() {
    return (
      <section>
        <Header />
        {this.props.children}
      </section>
    );
  }
}

export default homeContainer;
