// commitlint.config.js
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']],
        'scope-enum': [2, 'always', ['auth', 'button', 'api', 'ui']],
        'subject-case': [2, 'always', 'sentence-case'],
    },
};