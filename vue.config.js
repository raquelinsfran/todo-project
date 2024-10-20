const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/todo-project/'  // Reemplaza con el nombre exacto de tu repositorio
    : '/'
});
