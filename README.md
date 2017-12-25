To list all available commands, enter "/?".
	
Rohit Choudhary	07:40
yarn init
yarn init
npm install -g yarn
yarn add webpack webpack-dev-server path
yarn add webpack webpack-dev-server path
const path = require('path');
module.exports = {
  entry: './client/index.js',
  output: {
  path: path.resolve('dist'),
  filename: 'index_bundle.js'
  },
  module: {
  loaders: [
  { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
  { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
  ]
  }
}
yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev
create a file .babelrc
--
{
  "presets":[
  "es2015", "react"
  ]
}
--
console.log('Hey guys lets start!!')
--
<!DOCTYPE html>
<html>
  <head>
  <meta charset="utf-8">
  <title>React App Setup</title>
  </head>
  <body>
  <div id="root">

  </div>
  </body>
</html>
yarn add html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})
plugins: [HtmlWebpackPluginConfig]
--
"start": "webpack-dev-server"
	
me	08:05
==================
yarn add webpack webpack-dev-server path
	
Rohit Choudhary	08:13
yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev
	
me	08:13
=================
yarn add babel-loader babel-core babel-preset-es2015 babel-preset-react --dev
Rohit Choudhary left group chat.
Rohit Choudhary joined group chat.
	
Rohit Choudhary	08:32
yarn add react react-dom
components
App.jsx
import React from 'react';

export default class App extends React.Component {
  render() {
  return (
  <div style={{textAlign: 'center'}}>
  <h1>Hello World</h1>
  </div>);
  }
}
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('root'));
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
https://reactjs.org/docs/jsx-in-depth.html
	
Manoj Hooda	08:54
ok
yes sir