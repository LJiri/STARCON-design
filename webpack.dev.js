const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    filename: 'index.html',
    inject: 'body',
    template: 'nunjucks-html-loader!./src/templates/index.njk',
    minify: "false",
  });


module.exports = merge(common, {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
      ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    }
});