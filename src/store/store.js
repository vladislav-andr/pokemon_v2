import { combineReducers, createStore } from 'redux'
import list_Urls from './actions'
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    list_Urls,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store