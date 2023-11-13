const path = require('path');
const shell = require('shelljs');

shell.exec('node -v')

const config = {
  projectName: 'taro-sample-weapp',
  date: '2018-9-10',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  framework: 'react',
  defineConstants: {
  },
  plugins:['@tarojs/plugin-platform-kwai'],
  compiler: {
    type: 'webpack5',
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {

      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
