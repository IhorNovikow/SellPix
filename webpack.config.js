const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');

const baseConfig = {
    entry: {
        index: path.resolve(__dirname, './src/index/index'),
        gamePage: path.resolve(__dirname, './src/gamePage/gamePage'),
        oneGamePage: path.resolve(__dirname, './src/oneGamePage/oneGamePage'),
        favoritsGamePage: path.resolve(__dirname, './src/favoritsGamePage/favoritsGamePage'),
        profilePage: path.resolve(__dirname, './src/profile/profilePage'),
        newsStr: path.resolve(__dirname, './src/news/newsStr'),
        oneNewsPage: path.resolve(__dirname, './src/oneNewsPage/oneNewsPage'),
        qestionPage: path.resolve(__dirname, './src/qestionPage/qestionPage'),
        reviews: path.resolve(__dirname, './src/reviews/reviews'),
    },
    mode: 'development',
    module: {
        rules: [
            { 
                test: /\.ts$/i,
                use: 'ts-loader'
            },
            {
                test: /\.css$/i,
                use:['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                type: 'asset/resource',
            },
            {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader'}
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: `js/[name].js`,
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new EslingPlugin({ extensions: 'ts' }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index/index.html'),
            filename: 'index.html',
            inject:false,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/gamePage/gamePage.html'),
            filename: 'gamePage.html',
            inject: false,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/oneGamePage/oneGamePage.html'),
            filename: 'oneGamePage.html',
            inject: false,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/favoritsGamePage/favoritsGamePage.html'),
            filename: 'favoritsGamePage.html',
            inject: false,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/profile/profilePage.html'),
            filename: 'profilePage.html',
            inject: false,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/news/newsStr.html'),
            filename: 'newsStr.html',
            inject: false,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/oneNewsPage/oneNewsPage.html'),
            filename: 'oneNewsPage.html',
            inject: false,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/qestionPage/qestionPage.html'),
            filename: 'qestionPage.html',
            inject: false,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/reviews/reviews.html'),
            filename: 'reviews.html',
            inject: false,
        }),
        new CopyPlugin({
            patterns: [
              { from: "src/assets", to: "assets" },
            ],
          }),
        new CleanWebpackPlugin(),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');


    return merge(baseConfig, envConfig);
};
