import antfu from '@antfu/eslint-config'

export default antfu(
	{
		stylistic: {
			indent: 'tab',
			overrides: {
				'style/quote-props': ['error', 'as-needed'],
			},
		},
	},
	{
		files: ['package.json'],
		rules: {
			'jsonc/no-comments': ['error'],
		},
	},
	{
		files: [
			'wrangler.jsonc',
			'.vscode/*.json',
		],
		rules: {
			'jsonc/comma-dangle': ['error', 'always-multiline'],
		},
	},
)
