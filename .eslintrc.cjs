/* eslint-env node */
module.exports = {
	root: true,
	env: {
	  browser: true,
	  node: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
	  parser: '@typescript-eslint/parser',
	},
	extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
	plugins: [],
	ignorePatterns: [
	  '*.yml',
	  '*.prod.yml',
	  '*.dev.yml',
	  '*.override.yml',
	  '*.spec.js',
	],
  
	rules: {
	  quotes: ['off', 'single'],
	  semi: ['warn', 'never'],
	  'vue/no-v-html': 'off',
	  'vue/multi-word-component-names': 'off',
	  '@typescript-eslint/no-unused-vars': 'warn',
	  'nuxt/no-env-in-hooks': 'off',
	  'node/no-callback-literal': 'off',
	  'node/handle-callback-err': 'off',
	  'import/no-named-as-default': 'off',
	  'no-console': 'off',
	  'no-unref': 'off',
	  'no-undef': 'off',
	  'no-unused-vars': 'off',
	  'no-unreachable': 'warn',
	  'spaced-comment': 'off',
	  'require-await': 'warn',
	},
  }
  