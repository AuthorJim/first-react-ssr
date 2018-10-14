module.exports = {
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
