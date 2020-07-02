import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Menu from '../components/menu'


function renderMenu2(){
    return(
        <Menu 
            title={"page2.c.title"}
            description={"page2.c.description"}
            collapse={"collapseDoceFamilia"}
            collapseTarget={"#collapseDoceFamilia"}
            menuTitle={"page2.menutitle"}
        />
    );
};


function renderMenu1(){
    return(
        <Menu 
            title={"page2.b.title"}
            description={"page2.b.description"}
            collapse={"collapseDoceIndividual"}
            collapseTarget={"#collapseDoceIndividual"}
            menuTitle={"page2.menutitle"}
        />
    );
};


export default class Page2 extends Component {
  constructor (props) {
    super(props);
  }
  
  render() {
    return (
        <div id="what">
            <div className="row">
                <div className="col-sm-12">
                    <article className="header">
                        <h4>
                            <FormattedMessage id="page2.a.title" />
                        </h4>
                        <span>
                            <FormattedMessage id="page2.a.description" />
                        </span>
                    </article>
                </div>
                <hr />
            </div>
            <div className="row description">
                    <div className="col-sm-6">
                        { renderMenu1() }
                    </div>
                    <div className="col-sm-6">
                        { renderMenu2() }
                    </div>
            </div>
        </div>
     );
  }
}