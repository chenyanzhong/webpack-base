import path from 'path'

module.exports = {
    mode: 'development',
    entry: {
        main: './html/src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './../src'),
        filename: '[name]-bundle.js'
    },
    devtool: 'source-maps',
};