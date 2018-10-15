import express from 'express'
import React from 'react'
import ReactDom from 'react-dom'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'

import Home from '../containers/Home/index'
import Routes from '../routes'

const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => {
    const content = renderToString(
        <StaticRouter location={req.path} context={{}}>
            {Routes}
        </StaticRouter>
    )
    res.send(`
        <html>
            <title>服务器端渲染</title>
            <body>
                <div id="root">${content}</div>
                <script src="/index.js"></script> 
            </body>
        </html>
    `)
})

app.listen(3000)
