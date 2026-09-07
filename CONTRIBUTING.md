# Contributing

Read [DEVELOPMENT.md](DEVELOPMENT.md) for setup and commands. Keep changes focused on one package or feature.

## Before you start

- Check existing issues, pull requests, and documentation before starting duplicate work.
- Keep public API changes backward-compatible when possible; call out breaking changes clearly.
- Never commit credentials, private keys, generated build output, or unrelated formatting changes.

## Projects

Choose the project that owns the behavior you are changing:

- `projects/core`: framework-agnostic TypeScript utilities for dates, DOM, files, images, objects, strings, numbers, timing, workers, and other shared application tasks.
- `projects/browser`: strongly typed wrappers for browser and Web Platform APIs, including media, audio, storage, permissions, speech, networking, device features, and browser-native capabilities.
- `projects/angular`: Angular directives, pipes, components, accessibility wrappers, form helpers, signal utilities, state management, and HTTP caching.
- `projects/firebase-admin`: server-side Firebase Admin helpers for authentication, Firestore, Storage, messaging, caching, and Express integrations.
- `projects/cli`: shared CLI and documentation-generation tools used to expose package utilities, README examples, interactive discovery, and static HTML documentation.
- `projects/react`: reusable typed building blocks intended for React applications.
- `projects/vue`: reusable typed building blocks intended for Vue applications.

The repository also contains demo applications used to validate and showcase the libraries:

- `projects/core-demo`: the main browser demo for `@trt-web/core` and browser utilities from `@trt-web/browser`.
- `projects/angular-demo`: interactive examples for `@trt-web/angular`.
- `projects/react-demo`: examples for React integrations and shared building blocks.
- `projects/vue-demo`: examples for Vue integrations and shared building blocks.

When a change affects a public API, update the owning library, its README, tests, and the relevant demo together.

## Adding or changing a utility

1. Choose the appropriate library under `projects/`.
2. Follow the existing directory and file naming pattern.
3. Update implementation and unit test together.
4. Export public features through local `index.ts` and `public-api.ts`.
5. Update the package README and demo when behavior is user-facing.
6. Run relevant checks before committing.

Public APIs should document purpose, signature, options, an example, runtime requirements, and limitations.

Use Conventional Commits, for example: `feat(core): add date range helper` or `docs: improve development guide`.

Pull requests should describe affected projects, checks run, compatibility impact, and documentation/demo updates.

## Pull request checklist

- [ ] The change is scoped to the relevant project or feature.
- [ ] Tests cover the changed behavior.
- [ ] Public exports and package documentation are updated when needed.
- [ ] The relevant demo or runtime behavior has been verified when applicable.
- [ ] Formatting, lint, build, and relevant workspace checks pass.
- [ ] The pull request explains compatibility impact and any known limitations.
