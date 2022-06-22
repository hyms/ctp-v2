const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],

  assetsDir: 'assets',
  runtimeCompiler: true
})
