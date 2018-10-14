const Path = require('path')
const webpackMerge = require('webpack-merge')

const config = require('./webpack.base')
const entryDir = Path.resolve(process.cwd(), 'src')

const clientConfig = {
    // 告诉webpack将要打包的代码是服务器端还是浏览器端
    mode: 'development',
    entry: Path.resolve(entryDir, 'client'),
    output: {
        filename: 'index.js',
        path: Path.resolve(process.cwd(), 'public')
    }
}

module.exports = webpackMerge(config, clientConfig)
