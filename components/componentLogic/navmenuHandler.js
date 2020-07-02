import * as types from '../../store/types'
import { fetchNavMenu } from "../../store/actions/navMenuActions"

export function navRouter(dispatch, route){
    dispatch(fetchNavMenu(route));
}

export function findRouteAction(route){
    switch(route){
        case types.ROUTE_PAGE1:
            return types.NAV_URL_PAGE1;
        case types.ROUTE_PAGE2:
            return types.NAV_URL_PAGE2;            
         default:
             return types.NAV_URL_HOME;
    }
 }