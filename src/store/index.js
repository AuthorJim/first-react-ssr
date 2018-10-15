import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducer = (state = { name: 'ssssss', age: 20 }, action) => state

const getStore = () => createStore(reducer, applyMiddleware(thunk))

export default getStore
