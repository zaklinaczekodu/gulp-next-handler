'use strict';

require('zkflow-node').init({
  'lint-js': {
    eslint: {
      rules: {
        quotes: [2, 'single'],
        semi: [2, 'always'],
        eqeqeq: 2,
        strict: 2,
        'vars-on-top': 2,
        'comma-style': 2,
        indent: [2, 2],
        'linebreak-style': [2, 'unix'],
        'one-var': [2, 'never'],
        'no-trailing-spaces': 2,
        'no-multiple-empty-lines': [2, { 'max': 2, 'maxBOF': 0, 'maxEOF': 0 }],
        camelcase: [2, { properties: 'never' }],
        'comma-spacing': 2,
        'key-spacing': 2,
        'object-curly-spacing': [2, 'always']
      },
      envs: [
        'node',
        'jasmine',
        'es6'
      ],
      extends: 'eslint:recommended'
    }
  }
}, require('gulp'));
