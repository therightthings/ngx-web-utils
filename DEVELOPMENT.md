# Development Guide

This document describes the local workflow for developing, testing, and validating `trt-web`.

## Setup

Use Node.js 22 and Yarn from the repository root. Install dependencies before running workspace commands:

```bash
yarn install
```

The repository is an Nx monorepo. Run commands from the root so project dependencies and task configuration are resolved consistently.

## Development workflow

1. Create a focused branch from the current development branch.
2. Identify the owning project under `projects/`.
3. Implement the change together with tests and documentation.
4. Run the relevant project checks, then run the workspace checks before opening a pull request.
5. Review the final diff for generated files, unrelated changes, and sensitive data.

## Run demos

Use one of the following commands:

```bash
yarn serve core-demo
yarn serve angular-demo
yarn serve react-demo
yarn serve vue-demo
```

The server prints its local URL. Stop it with `Ctrl-C` after testing and close temporary browser tabs.

## Build and test

Project commands:

```bash
yarn build <project>
yarn test <project>
yarn lint
yarn test-e2e <project>-e2e
```

Workspace checks:

```bash
yarn format:check
yarn check:deadcode
yarn check:circular
yarn check:spell
yarn check:package
```

For a broad validation pass, use `yarn build`, `yarn test`, and `yarn test-e2e --all`.

## Runtime verification

Start the relevant demo, open its localhost URL, exercise the changed flow, inspect visible output and console errors, then stop the server and close temporary tabs.
Camera, microphone, location, notifications, Bluetooth, and NFC may require browser support, HTTPS, and permission.

Record the checks you ran in the pull request. If a runtime-dependent feature cannot be tested locally, document the limitation and the expected browser or permission requirements.

## Documentation

README files are the source of truth for package examples and are consumed by the package CLI documentation generator. Keep public API documentation aligned with the implementation, including imports, signatures, options, runtime requirements, and limitations. Update the relevant demo when a user-facing behavior changes.

## Release

Package scripts are `yarn release:core`, `yarn release:browser`, `yarn release:angular`, `yarn release:firebase-admin`, `yarn release:cli`, `yarn release:react`, and `yarn release:vue`.

Before releasing, verify the package version, dependency versions, generated build output, README, registry, and clean Git diff. Release commands publish to npm and are external side effects; run them only with explicit release intent.

If Nx state is stale, run `yarn reset`. If a port is occupied, stop the previous demo process. Do not commit `dist/`, local caches, credentials, or environment-specific files.
