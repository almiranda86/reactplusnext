import React, { Component } from 'react';
import {IntlProvider, addLocaleData, injectIntl } from 'react-intl';
import {StaticRouter, Route} from "react-router-dom";

import ptBr from 'react-intl/locale-data/pt';
import en from 'react-intl/locale-data/en';

import Provider from '../components/common/provider';
import {Context} from '../components/common/context';

import localEng from '../intl/en.json';
import localPtBr from '../intl/pt.json';

import Container from "./container";
import Head from "./common/head";
import Header from "./header";
import NavMenu from "./navmenu";
import MainContainer from "./mainContainer";
import Footer from './footer';

addLocaleData(ptBr, en)

export class Layout extends Component {
  constructor(props) {
    super(props)
    
  }

  render() {
      const{
          intl,
          childrenContent
      } = this.props;

    return ( 
    <Provider>
        <Context.Consumer>
        {({ lang, toggleLanguage }) => (
            <IntlProvider locale={lang} messages={lang === 'pt' ? localEng  : localPtBr}>
                <StaticRouter>
                <Container>
                    <Head lang={lang} intl={intl} />
                    <Header intl={intl}/>
                    <Route path="/" component={NavMenu } />
                    <MainContainer childrenContent={childrenContent} />
                    <Footer toggleLanguage={toggleLanguage}
                            lang={lang}
                    />
                </Container>
                </StaticRouter>
            </IntlProvider>
        )}
        </Context.Consumer>
    </Provider>
    );
  }
}

export default injectIntl(Layout)