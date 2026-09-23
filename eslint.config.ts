import type { Linter } from 'eslint'
import antfu from '@antfu/eslint-config'
import jsonSchemaValidator from 'eslint-plugin-json-schema-validator'

const config: Promise<Linter.Config[]> = antfu(
	{
		plugins: {
			'json-schema-validator': jsonSchemaValidator,
		},
		pnpm: {
			sort: false,
		},
		rules: {
			'json-schema-validator/no-invalid': 'error',
		},
		settings: {
			'json-schema-validator': {
				cache: {
					path: 'node_modules/.cache/eslint/plugin-json-schema-validator',
				},
			},
		},
		stylistic: {
			indent: 'tab',
			overrides: {
				'style/quote-props': ['error', 'as-needed'],
			},
		},
		type: 'lib',
		typescript: true,
	},
	{
		files: ['pnpm-workspace.yaml'],
		rules: {
			'pnpm/yaml-enforce-settings': ['error', {
				forbiddenFields: [
					// TODO complete
					'enableGlobalVirtualStore',
					'engineStrict',
					'minimumReleaseAge',
					'minimumReleaseAgeIgnoreMissingTime',
					'minimumReleaseAgeStrict',
					'scriptShell',
					'trustPolicy',
					'virtualStoreDirMaxLength',
					'virtualStoreType',
				],
				requiredFields: ['packages'],
				settings: {
					audit: { ignorePrune: true },
					catalogMode: 'strict',
					catalogPrune: true,
					dedupeDirectDeps: true,
					dedupePeers: true,
					disallowWorkspaceCycles: true,
					enablePrePostScripts: false,
					hoist: false,
					minimumReleaseAgeExcludePrune: true,
					resolutionMode: 'lowest-direct',
					strictPeerDependencies: true,
					trustPolicyExcludePrune: true,
				},
			}],
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
)
export default config
