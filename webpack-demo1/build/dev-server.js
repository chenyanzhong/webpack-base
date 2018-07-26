import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import express from 'express';
import path from 'path';

import config from './webpack.base.conf';

let app = express();
let compiler = webpack(config);
app.use(middleware(compiler, {
    // webpack-dev-middleware options
}));

app.get('/',function(req,res){
    let htmlUrl = path.resolve(__dirname, "./../src/index.html")
    res.sendFile(htmlUrl)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));
module.exports = app;