/**
 * CC BASE — Commit message linter
 * Follows Conventional Commits v1.0.0
 * See CLAUDE.md for the full convention.
 */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
      ],
    ],
    'scope-enum': [
      1,
      'always',
      ['content', 'ui', 'config', 'deps', 'search', 'deploy'],
    ],
    'subject-case': [0],
  },
};
