'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
    let app = new EmberApp(defaults, {
        'ember-cli-babel': { enableTypeScriptTransform: true },
        autoImport: {
            watchDependencies: ['@blackmesa/my-addon-one']
        }
    });

    const { Webpack } = require('@embroider/webpack');
    return require('@embroider/compat').compatBuild(app, Webpack, {
        packagerOptions: {
            webpackConfig: {
                devtool: 'eval-source-map'
            }
        }
    });
};
