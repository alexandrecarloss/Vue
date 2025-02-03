const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '192.168.0.16',
    port: 8080,
    hot: true,
    liveReload: true,
    allowedHosts: 'all', 
    client: {
      webSocketURL: 'ws://192.168.0.16:8080/ws',
    },
  },
});
