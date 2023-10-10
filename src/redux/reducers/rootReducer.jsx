import { combineReducers } from "redux";
import gitApiReducer from './gitApiReducer'
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
    gitApi: gitApiReducer,
    search: searchReducer
})

export default rootReducer