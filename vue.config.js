const path = require('path')
module.exports = {
  pages: {
    pc: {
      entry: './src/entry/pc/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    mobile: {
      entry: './src/entry/mobile/main.js',
      template: 'public/indexM.html',
      filename: 'indexM.html'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      }
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          changOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
}