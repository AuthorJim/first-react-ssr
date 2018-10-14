const Path = require('path')

module.exports = {
    // 告诉webpack将要打包的代码是服务器端还是浏览器端
    mode: 'development',
    entry: './src/client/index.js',
    output: {
        filename: 'index.js',
        path: Path.resolve(__dirname, 'public')
    },
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
