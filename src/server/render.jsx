import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Routes from '../routes'

const render = req => {
    const reducer = (state = { name: 'ssssss' }, action) => state
    const store = createStore(reducer)
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                {Routes}
            </StaticRouter>
        </Provider>
    )
    return `
    <html>
        <title>服务器端渲染</title>
        <body>
            <div id="root">${content}</div>
            <script src="/index.js"></script> 
        </body>
    </html>
`
}

export default render
