global.Promise         = require('bluebird');

let webpack            = require('webpack');
let path               = require('path');
let ExtractTextPlugin  = require('extract-text-webpack-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');

let publicPath         = 'http://localhost:8050/public/assets';
let cssName            = process.env.NODE_ENV === 'production' ? 'styles-[hash].css' : 'styles.css';
let jsName             = process.env.NODE_ENV === 'production' ? 'bundle-[hash].js' : 'bundle.js';

let plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            BROWSER:  JSON.stringify(true),
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
        }
    }),
    new ExtractTextPlugin(cssName)
];

if (process.env.NODE_ENV === 'production') {
    plugins.push(new CleanWebpackPlugin);
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.OccurenceOrderPlugin());
}

module.exports = {
    entry: ['babel-polyfill', './src/client.js'],
    mode: (process.env.NODE_ENV !== 'production')? "development": "production",
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
        extensions:         ['.js', '.jsx']
    },
    plugins,
    output: {
        path: `${__dirname}/public/assets/`,
        filename: jsName,
        publicPath
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
            },
            { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
            { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
            { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
            { test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml' },
            { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1' },
            { test: /\.jsx?$/, use: {loader: 'babel-loader!eslint-loader!react-hot', options: {presets: ["@babel/preset-env"]}}, exclude: [/node_modules/, /public/] },
            { test: /\.json$/, loader: 'json-loader' },
        ]
    },
    devtool: process.env.NODE_ENV !== 'production' ? 'source-map' : 'cheap-module-source-map',
    devServer: {
        headers: { 'Access-Control-Allow-Origin': '*' }
    }
};