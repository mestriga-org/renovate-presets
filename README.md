## TODO

- fix grouping
- get notifications from dashboard warnings
- set "minimumReleaseAgeBehaviour" = "timestamp-required" for updates known to have timestamps
- https://docs.renovatebot.com/key-concepts/minimum-release-age/#which-update-types-take-minimumreleaseage-into-account
- automerge "pin" dependencies
- configure branch protection rules
- pin less dependencies, see
	https://docs.renovatebot.com/presets-config/#configjs-app
	https://docs.renovatebot.com/presets-config/#configjs-lib

## useful stuff for debugging

- https://docs.renovatebot.com/configuration-options/#loglevelremap

## ISSUES

- renovate does not support remediation for vulnerable transitive dependencies: https://docs.renovatebot.com/key-concepts/minimum-release-age/#what-happens-to-transitive-dependencies

## Gotchas
