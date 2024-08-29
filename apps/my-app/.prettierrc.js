'use strict';

module.exports = {
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    endOfLine: 'auto',
    printWidth: 120,
    overrides: [
        {
            files: '*.hbs',
            options: {
                parser: 'glimmer',
                singleQuote: false
            }
        }
    ]
};
