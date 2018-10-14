const Path = require('path')
const NodeExternals = require('webpack-node-externals')
const webpackMerge = require('webpack-merge')
const config = require('./webpack.base.js')
const entryDir = Path.resolve(process.cwd(), 'src')

const serverconfig = {
    // 告诉webpack将要打包的代码是服务器端还是浏览器端
    target: 'node',
    mode: 'development',
    entry: Path.resolve(entryDir, 'server'),
    output: {
        filename: 'bundle.js',
        path: Path.resolve(process.cwd(), 'build')
    },
    externals: [NodeExternals()]
}

module.exports = webpackMerge(config, serverconfig)
