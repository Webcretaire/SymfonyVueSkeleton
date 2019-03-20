var path = require('path');
var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app', ['./front/src/main.js'])
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableVueLoader()
    .addAliases({
        '@': path.resolve(__dirname, './front/src')
    })
;

module.exports = Encore.getWebpackConfig();
