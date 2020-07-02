import React, { Component } from 'react';
import { connect } from "react-redux";
import { injectIntl } from 'react-intl';

import * as types from '../store/types';
import {navRouter, findRouteAction} from './componentLogic/navmenuHandler'

import logo from "../images/logo-10.svg";

class Header extends Component {
  constructor(props) {
    super(props)
    this.handleClickNavigation = this.handleClickNavigation.bind(this);
    
  }

  handleClickNavigation(route){
    navRouter(this.props.dispatch, findRouteAction(route))
  }

  render() {
    const { intl } = this.props;

    return (
        <div className="text-center col-sm-12" id="header">
            <h1>
                <a href="#" onClick={() => this.handleClickNavigation(types.ROUTE_HOME)}>
                    <img src={logo} alt={intl.formatMessage({ id: "site.titulo" })} />
                </a>
            </h1>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}


Header = injectIntl(Header);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);