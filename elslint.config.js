module.exports = [
    {
      files: ['**/*.js'],
      ignores: ['node_modules/**'],
      languageOptions: {
        ecmaVersion: 2022,
        sourceType: 'commonjs',
        globals: {
          require: 'readonly',
          module: 'readonly',
          process: 'readonly',
          console: 'readonly',
          test: 'readonly',
          expect: 'readonly'
        }
      },
      rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single']
      }
    }
  ];