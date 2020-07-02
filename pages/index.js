import React, { Component } from 'react';
import { connect } from "react-redux";

import {Layout} from '../components/layout';

import * as types from '../store/types';

import {navRouter} from "../components/componentLogic/navmenuHandler"

class Index extends Component {
  constructor (props) {
    super(props);
    this.state = { 
    
    };
  }

  handleContentPage(){
    let obj = this.props.contentPage.navMenu.content;
    if(Object.keys(obj).length !== 0){
      return this.props.contentPage.navMenu.content;
    }
  }

  componentDidMount(){
    navRouter(this.props.dispatch, types.NAV_URL_HOME)
  }

  render() {
    return (
      <Layout childrenContent={this.handleContentPage()}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    contentPage: state
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);