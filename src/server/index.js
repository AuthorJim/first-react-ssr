import express from 'express'
import React from 'react'
import ReactDom from 'react-dom'
import { renderToString } from 'react-dom/server'

import Home from '../containers/Home/index'

const app = express()
app.use(express.static('public'))
const content = renderToString(<Home />)

app.get('/', (req, res) =>
    res.send(`
    <html>
        <title>服务器端渲染</title>
        <body>
            <div id="root">${content}</div>
            <script src="/index.js"></script> 
        </body>
    </html>
`)
)

app.listen(3000)
