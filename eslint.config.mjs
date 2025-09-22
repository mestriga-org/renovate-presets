import antfu from '@antfu/eslint-config'

export default antfu(
	{
		pnpm: true,
		stylistic: {
			indent: 'tab',
			overrides: {
				'style/quote-props': ['error', 'as-needed'],
			},
		},
		type: 'lib',
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
