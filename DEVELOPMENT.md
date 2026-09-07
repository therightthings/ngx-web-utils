# Development guide

## Setup

Use a supported Node.js version and Yarn, then run `yarn install` from the repository root.

## Run demos

Use `yarn serve core-demo`, `yarn serve angular-demo`, `yarn serve react-demo`, or `yarn serve vue-demo`.
The server prints its local URL and should be stopped with `Ctrl-C` after testing.

## Build and test

Common commands are `yarn build <project>`, `yarn test <project>`, `yarn test-e2e <project>-e2e`, and `yarn lint`.
Workspace checks include `yarn format:check`, `yarn check:deadcode`, `yarn check:circular`, `yarn check:spell`, and `yarn check:package`.

## Runtime verification

Start the relevant demo, open its localhost URL, exercise the changed flow, inspect visible output and console errors, then stop the server and close temporary tabs.
Camera, microphone, location, notifications, Bluetooth, and NFC may require browser support, HTTPS, and permission.

## Release

Package scripts are `yarn release:core`, `yarn release:browser`, `yarn release:angular`, `yarn release:firebase-admin`, `yarn release:cli`, `yarn release:react`, and `yarn release:vue`.
Publishing is an external side effect; verify package, version, registry, and Git status first.

If Nx state is stale, run `yarn reset`. If a port is occupied, stop the previous demo process.
