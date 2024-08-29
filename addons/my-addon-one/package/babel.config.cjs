'use strict';

module.exports = {
    plugins: [
        // eslint-disable-next-line n/no-unpublished-require
        ...require('ember-cli-code-coverage').buildBabelPlugin(),
        [
            '@babel/plugin-transform-typescript',
            { allExtensions: true, onlyRemoveTypeImports: true, allowDeclareFields: true }
        ],
        '@embroider/addon-dev/template-colocation-plugin',
        [
            'babel-plugin-ember-template-compilation',
            {
                targetFormat: 'hbs',
                transforms: []
            }
        ],
        ['module:decorator-transforms', { runtime: { import: 'decorator-transforms/runtime' } }]
    ]
};
