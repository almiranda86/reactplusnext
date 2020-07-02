import React, { Component } from "react"
import { connect } from "react-redux";
import { injectIntl } from 'react-intl'
import { NavLink } from "react-router-dom";

import * as types from '../store/types';
import {navRouter, findRouteAction} from './componentLogic/navmenuHandler'

class NavMenu extends Component {
    constructor(props) {
        super(props)
        this.handleClickNavigation = this.handleClickNavigation.bind(this);
    }

    handleClickNavigation(route){
        navRouter(this.props.dispatch, findRouteAction(route))
    }

    render() {
        const { intl: { formatMessage }} = this.props;

        return(
            <div className="center-nav-container bg-dark navbar-dark">
                <nav className="navbar navbar-expand-sm text-center center-nav">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={types.ROUTE_PAGE1} onClick={() => this.handleClickNavigation(types.ROUTE_PAGE1)}>
                                {formatMessage({ id: "menu.page1" })}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={types.ROUTE_PAGE2} onClick={() => this.handleClickNavigation(types.ROUTE_PAGE2)}>
                                {formatMessage({ id: "menu.page2" })}
                            </NavLink>
                        </li> 
                        </ul>
                    </div>
                </nav>
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


NavMenu = injectIntl(NavMenu);

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavMenu);