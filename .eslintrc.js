// eslint-disable-next-line import/no-extraneous-dependencies
const appRootPath = require('app-root-path').path;

// Не даем eslint самому фиксить эти правила
const fixRulesOverride = {
  'react-hooks/exhaustive-deps': 'off',
};

// Отключаем некоторые правила, что сложно исправить, чтобы пройти проверку на прекомит хук
const cliRulesOverride = {};

// Временно отключаем старые ошибки, чтобы можно было хоть как-то запускать в ci
const ciRulesOverride = {};

module.exports = {
  plugins: ['optimize-regex', 'sonarjs', 'no-loops', 'no-use-extend-native', 'prettier'],
  extends: ['airbnb', 'airbnb/hooks', 'plugin:sonarjs/recommended', 'plugin:prettier/recommended'],
  env: {
    es6: true,
    browser: true,
  },
  root: true,
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    // This loads <rootdir>/jsconfig.json to eslint
    'import/resolver': {
      alias: {
        map: [
          ['@', `${appRootPath}/src`],
          ['public', `${appRootPath}/public`],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'optimize-regex/optimize-regex': 'warn',
    'no-loops/no-loops': 'warn',
    'prettier/prettier': 'warn',

    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-fragments': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],

    // Используем объекты вместо ошибок
    'prefer-promise-reject-errors': 'off',

    // Этому правилу нереально следовать
    'sonarjs/cognitive-complexity': 'off',

    // компромисы с prettier
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: false,
        assignment: false,
      },
    ],
    'react/jsx-one-expression-per-line': 'off',

    'prefer-destructuring': 'off',
    'linebreak-style': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'prefer-rest-params': 'off',
    curly: ['error', 'all'],
    'arrow-body-style': ['error', 'always'],
    'no-implicit-coercion': ['error', { allow: [] }],
    'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],
    'no-console': ['error', { allow: ['error'] }],
    'no-restricted-syntax': ['error', 'SequenceExpression'],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

    // Для работы с immer
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsForRegex: ['[dD]raft|it'] },
    ],

    // Стараемся избегать использования default export
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    // Задаём строгий порядок импортов
    'import/order': [
      'error',
      {
        groups: ['object', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          // Разделяем основные компоненты приложение, чтобы не было нагромаждения,
          // все остальные папки из src будут импортироваться вплотную.
          { pattern: '{@/constants,@/constants/**}', group: 'internal', position: 'after' },
          { pattern: '{@/utils,@/utils/**}', group: 'internal', position: 'after' },
          { pattern: '{@/components,@/components/**}', group: 'internal', position: 'after' },
          { pattern: '{@/hooks,@/hooks/**}', group: 'internal', position: 'after' },
          { pattern: '@/**', group: 'internal', position: 'after' },

          { pattern: './*.module.scss', group: 'index', position: 'after' },
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],

    ...(process.env.ESLINT_MODE_CI ? ciRulesOverride : {}),
    ...(process.env.ESLINT_MODE_CLI ? cliRulesOverride : {}),
    ...(process.env.ESLINT_MODE_FIX ? fixRulesOverride : {}),
  },
};
