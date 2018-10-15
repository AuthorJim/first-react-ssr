import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Routes from '../routes'

const reducer = (state = { name: 'ssssss' }, action) => state
const store = createStore(reducer)

const App = () => (
    <Provider store={store}>
        <BrowserRouter>{Routes}</BrowserRouter>
    </Provider>
)

ReactDom.hydrate(<App />, document.getElementById('root'))
