'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function (defaults) {
    const app = new EmberApp(defaults, {
        'ember-cli-babel': { enableTypeScriptTransform: true },
        babel: {
            plugins: [
                require.resolve('ember-concurrency/async-arrow-task-transform'),
                require.resolve('@babel/plugin-transform-class-static-block'),
                ...require('ember-cli-code-coverage').buildBabelPlugin()
            ]
        }
    });

    const { Webpack } = require('@embroider/webpack');
    return require('@embroider/compat').compatBuild(app, Webpack, {
        packagerOptions: {
            webpackConfig: {
                plugins: [new MiniCssExtractPlugin({ filename: 'addon.css' })],
                devtool: 'eval-source-map',
                module: {
                    rules: [
                        {
                            test: /\.s[ac]ss$/i,
                            use: [
                                MiniCssExtractPlugin.loader,
                                { loader: 'css-loader', options: { url: false } },
                                'sass-loader'
                            ]
                        }
                    ]
                }
            }
        }
    });
};
