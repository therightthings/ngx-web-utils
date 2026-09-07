# TRT Web

An Nx monorepo of focused, strongly typed TypeScript utilities for web applications, browser APIs, Angular projects, and Firebase Admin backends.

## Packages

- `@trt-web/core`: framework-agnostic utilities for dates, DOM, files, images, objects, strings, numbers, timing, workers, and shared application tasks.
- `@trt-web/browser`: typed wrappers for modern browser and Web Platform APIs, including media, audio, storage, permissions, speech, networking, and device features.
- `@trt-web/angular`: Angular directives, pipes, components, accessibility wrappers, form helpers, signals, state management, and HTTP caching.
- `@trt-web/firebase-admin`: backend utilities for Firebase Admin authentication, Firestore, Storage, messaging, caching, and Express integrations.
- `@trt-web/cli`: README-driven interactive CLIs and static documentation generation.
- `@trt-web/react` and `@trt-web/vue`: reusable typed building blocks for React and Vue applications.

## Installation

Install the package you need:

- `npm install @trt-web/core` if you want the shared helpers directly.
- `npm install @trt-web/angular` for Angular projects.
- `npm install @trt-web/firebase-admin` for Firebase Admin backend projects.

Use `yarn add` or `bun add` when using another package manager.

## CLI and documentation

Packages with a CLI support utility discovery, method inspection, examples, and static documentation:

```bash
npx trt-core
npx trt-browser
npx trt-angular
npx trt-firebase-admin
```

Use `--list`, `info <utility>`, or `docs` to explore a package. Each package README is the source of truth for generated documentation.

## Demos

```bash
yarn serve core-demo
yarn serve angular-demo
yarn serve react-demo
yarn serve vue-demo
```

Browser APIs may require browser support, secure contexts, and user permission.

## Development

```bash
yarn install
yarn build <project>
yarn test <project>
yarn lint
```

Read [DEVELOPMENT.md](DEVELOPMENT.md) for the complete development, validation, and release workflow.

## Contributing

- Contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) for project responsibilities, public API guidelines, testing expectations, and pull request requirements.

## License

- Apache-2.0
