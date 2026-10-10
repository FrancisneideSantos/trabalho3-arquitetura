
const globals = require('globals')

module.exports = [
  {
    ignores: [
      'node_modules/**',
      'prisma/migrations/**'
    ]
  },
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node
      }
    },
    rules: {
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],
      'no-undef': 'error',
      'no-unreachable': 'error',
      'no-duplicate-imports': 'error'
    }
  }
]
