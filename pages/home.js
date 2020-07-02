import React, { Component } from 'react';
import { injectIntl } from 'react-intl'

import Carousel from '../components/carousel';

export class Home extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <Carousel />
    );
  }
}

export default injectIntl(Home)