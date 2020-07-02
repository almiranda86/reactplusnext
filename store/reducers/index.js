import {combineReducers} from 'redux'
import {navMenuReducer} from './navMenuReducer'

export default combineReducers({
    navMenu: navMenuReducer
});