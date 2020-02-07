var path = require('path')
module.exports = {
    mode: 'development',
    //devtool: 'source-map',
    context: path.join(__dirname, "src"),
    entry: [
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './main'
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    output: {
        filename: "app.js",
        path: path.join(__dirname, "public")
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
                loaders: ['babel?{presets:["es2015", "react", "stage-2"], plugins:["react-hot-loader/babel"]}']
            }
        ]
    },

    node: {
      fs: "empty"
    },

    // we need this because of enzyme
    // see https://github.com/airbnb/enzyme/blob/master/docs/guides/webpack.md
    externals: {
      'cheerio': 'window',
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    }
};
