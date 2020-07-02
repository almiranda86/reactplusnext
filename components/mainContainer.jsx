import React, { Component } from 'react';
import { injectIntl } from 'react-intl';

class MainContainer extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    const{
        intl,
        childrenContent
    } = this.props;
    
    return (
        <div className="container-fluid" id="mainContainer">
            {childrenContent}
        </div>
    );
  }
}

export default MainContainer;