# TODO

- set minimum release age for all dependency types
  (this will also delay the need to update dev tools)
- automerge "pin" dependencies
- configure branch protection rules
- pin less dependencies, see
	https://docs.renovatebot.com/presets-config/#configjs-app
	https://docs.renovatebot.com/presets-config/#configjs-lib

# useful stuff for debugging

- https://docs.renovatebot.com/configuration-options/#loglevelremap

# ISSUES

- renovate does not support remediation for vulnerable transitive dependencies: https://docs.renovatebot.com/key-concepts/minimum-release-age/#what-happens-to-transitive-dependencies
- uses key needs to be on its own line: https://github.com/renovatebot/renovate/blob/42.42.2/lib/modules/manager/github-actions/extract.ts#L23
