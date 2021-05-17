module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb', 
    'plugin:@typescript-eslint/eslint-recommended', 
    'plugin:react/recommended', 
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // 잘못된 오류 메세지 ''React' was used before it was defined' 를 해결하기 위해 base runle 을 off 한다.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    // jsx 파일과 tsx 파일에서 JSX 문법을 사용할 수 있도록 한다.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    // 경로에 js, jsx, ts, tsx 확장자를 적지 않아도 되도록 한다.
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never', 'jsx': 'never', 'ts': 'never', 'tsx': 'never',
      }
    ],
    // react/prop-types 와 typescript-eslint를 같이 사용하면 타입을 추측할 때 충돌하므로 react/prop-types 를 off 한다.
    // https://github.com/yannickcr/eslint-plugin-react/issues/2353
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {}, // tsconfig.json 을 eslint 로 로드한다.
    },
  }
};
