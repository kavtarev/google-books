import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import mainReducer from './mainReducer'

const store = createStore(mainReducer, applyMiddleware(thunk))
window.store = store
export default store
