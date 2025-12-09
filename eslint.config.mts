import type { Linter } from 'eslint'
import antfu from '@antfu/eslint-config'

const config: Promise<Linter.Config[]> = antfu(
	{
		stylistic: {
			indent: 'tab',
			overrides: {
				'style/quote-props': ['error', 'as-needed'],
			},
		},
		type: 'lib',
		typescript: {
			erasableOnly: true,
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
			'.vscode/*.json',
		],
		rules: {
			'jsonc/comma-dangle': ['error', 'always-multiline'],
		},
	},
).remove('antfu/pnpm/pnpm-workspace-yaml-sort')
export default config
