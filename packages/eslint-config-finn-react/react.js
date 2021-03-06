'use strict';

module.exports = {
    extends: ['eslint-config-schibsted-react'],
    rules: {
        'react/no-multi-comp': ['error', { ignoreStateless: true }],
        'react/no-did-mount-set-state': 'off',
    },
};
