import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'

import Routes from '../routes'

const render = req => {
    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            {Routes}
        </StaticRouter>
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
