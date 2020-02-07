var path = require('path')
var webpack = require('webpack')

module.exports = {
    mode: 'production',
    context: path.join(__dirname, "src"),
    entry: {
        client: './index'
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "dist"),
        library: 'reactcards',
        libraryTarget: 'umd'
    },
    externals: {
        "react": "react",
        "react-dom": "react-dom"
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader", options: {transpileOnly: true}, exclude: /node_modules/},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?{presets:["es2015", "react", "stage-2"], plugins:["react-hot-loader/babel"]}']
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {   test: /\.(gif|jpg|jpeg|png)(\?]?.*)?$/,
                loader: 'url-loader?limit=1024'
            },
            {   test: /\.json$/,
                loader: 'json-loader', exclude: /node_modules/
            }
        ]
    },
};
