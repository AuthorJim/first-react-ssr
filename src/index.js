import express from 'express'
import React from 'react'
import ReactDom from 'react-dom'
import { renderToString } from 'react-dom/server'

import Home from './containers/Home'

const app = express()
const content = renderToString(<Home />)
// const content = ReactDom.render(<Home />, document.getElementById('root'))

app.get('/', (req, res) =>
    res.send(`
    <html>
        <title>服务器端渲染</title>
        <body>
            <div id="root">
                ${content}
            </div>
        </body>
    </html>
`)
)

app.listen(3000)
