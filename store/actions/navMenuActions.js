import * as types from '../types';
import Home from '../../pages/home';
import WhoAmI from '../../pages/page1';
import WhatDoIDo from '../../pages/page2';

export const fetchNavMenu = (navURL) => async dispatch => {
    switch (navURL){
        case types.NAV_URL_HOME:
            dispatch({
                type: types.NAV_URL_HOME,
                payload: <Home />
            });
            break;
        case types.NAV_URL_PAGE1:
            dispatch({
                type: types.NAV_URL_PAGE1,
                payload: <WhoAmI />
            });  
            break;
        case types.NAV_URL_PAGE2:
            dispatch({
                type: types.NAV_URL_PAGE2,
                payload: <WhatDoIDo />
            });
            break;

    }
}