const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

const moduleEntries = {
    "module3/exercise1": './src/module3/exercise1.js',
    "module3/exercise2": './src/module3/exercise2.js',
}

const entries = {
    root: './src/index.js',
    ...moduleEntries
};

const moduleHtmlGenerators = Object.keys(moduleEntries).map(entry => {
    return new HtmlWebpackPlugin({
        inject: true,
        chunks: [entry],
        filename: `${entry}.html`,
    })
});

const rootHtmlGenerator = new HtmlWebpackPlugin({
    inject: true,
    chunks: ['root'],
    filename: 'index.html',
    templateContent: ({htmlWebpackPlugin}) => `
    <html>
      <head>
      </head>
      <body>
      ${Object.keys(moduleEntries).map(entry => `<a href="${entry}.html">${entry}</a>`).join('\n')}
      </body>
    </html>
  `
});


module.exports = {
mode: 'development',
  entry: entries,
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
},
devServer: {
    static: './dist',
  },
    plugins: [
        ...moduleHtmlGenerators, rootHtmlGenerator,
        new NodePolyfillPlugin()
    ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    fallback: {
        "fs": false,
    },
},
    optimization: {
        runtimeChunk: 'single',
      },
};