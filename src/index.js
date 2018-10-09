const express = require('express')

const app = express()
const Home = require('./containers/Home')

app.get('/', (req, res) => res.send(`<h1>你他妈的到底是谁</h1><a href="https://www.baidu.com">我怎么知道我是谁</a>`))

app.listen(3000)