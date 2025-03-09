const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { options } = require('yargs');
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        alias: {
            react: path.join(__dirname, 'node_modules', 'react'),
        },
    },
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [['@babel/preset-react', { runtime: 'automatic' }]],
                },
            },
        },
        {
            test: /\.css$/,
            use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
            },
          ],
        },
      ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'src/index.html',
        }),
      ],
    devServer: {
        devMiddleware: {
            index: true,
            serverSideRender: true,
            writeToDisk: true,
        },
    }
};