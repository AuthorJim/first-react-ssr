import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import Routes from '../routes'
import getStore from '../store'

const render = req => {
    const content = renderToString(
        <Provider store={getStore()}>
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
