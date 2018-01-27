import { combineReducers } from 'redux'
import NavReducer from './modules/Nav/index'

export default combineReducers({
    nav: NavReducer
})