const Path = require('path')
const NodeExternals = require('webpack-node-externals')

module.exports = {
    // 告诉webpack将要打包的代码是服务器端还是浏览器端
    target: 'node',
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: Path.resolve(__dirname, 'build')
    },
    externals: [NodeExternals()],
    module: {
        rules: [
            {
                test: /\.js|jsx?$/,
                loader: 'babel-loader',
                exclude: '/node_modules',
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        [
                            'env',
                            {
                                targets: {
                                    browers: ['last 2 version']
                                }
                            }
                        ]
                    ]
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', 'sass', '.less', 'svg']
    }
}
