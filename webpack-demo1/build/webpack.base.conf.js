import path from 'path'

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './../src/main.js')
    },
    output: {
        path: path.resolve(__dirname, './../src'),
        filename: '[name]-bundle.js'
    },
    /**
     * 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
     * 牺牲了构建速度的 `source-map' 是最详细的。
     */
    devtool: 'source-maps',
};