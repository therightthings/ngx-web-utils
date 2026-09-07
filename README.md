# TRT Web

An Nx monorepo of focused, strongly typed TypeScript utilities for web applications, browser APIs, Angular projects, and Firebase Admin backends.

## Packages

### [`@trt-web/core`](https://www.npmjs.com/package/@trt-web/core)

- Framework-agnostic utilities for dates, DOM, files, images, objects, strings, numbers, timing, workers, and shared application tasks.

- Documentation: [trt-core](https://core.trt-web.surge.sh)

### [`@trt-web/browser`](https://www.npmjs.com/package/@trt-web/browser)

- Typed wrappers for modern browser and Web Platform APIs, including media, audio, storage, permissions, speech, networking, and device features.

- Documentation: [trt-browser](https://browser.trt-web.surge.sh)

### [`@trt-web/angular`](https://www.npmjs.com/package/@trt-web/angular)

- Angular directives, pipes, components, accessibility wrappers, form helpers, signals, state management, and HTTP caching.

- Documentation: [trt-angular](https://angular.trt-web.surge.sh)

### [`@trt-web/firebase-admin`](https://www.npmjs.com/package/@trt-web/firebase-admin)

- Backend utilities for Firebase Admin authentication, Firestore, Storage, messaging, caching, and Express integrations.

- Documentation: [trt-firebase-admin](https://firebase-admin.trt-web.surge.sh)

### [`@trt-web/cli`](https://www.npmjs.com/package/@trt-web/cli)

- README-driven interactive CLIs and static documentation generation.

- Documentation: [trt-cli](https://github.com/therightthings/trt-web#readme)

### [`@trt-web/react`](https://www.npmjs.com/package/@trt-web/react)

- Reusable typed building blocks for React applications.

- Documentation: [trt-react](https://github.com/therightthings/trt-web#readme)

### [`@trt-web/vue`](https://www.npmjs.com/package/@trt-web/vue)

- Reusable typed building blocks for Vue applications.

- Documentation: [trt-vue](https://github.com/therightthings/trt-web#readme)

## Installation

Install only the package your application needs:

```bash
npm install @trt-web/core
npm install @trt-web/browser
npm install @trt-web/angular
npm install @trt-web/firebase-admin
npm install @trt-web/cli
npm install @trt-web/react
npm install @trt-web/vue
```

With Yarn:

```bash
yarn add @trt-web/core
yarn add @trt-web/browser
yarn add @trt-web/angular
yarn add @trt-web/firebase-admin
yarn add @trt-web/cli
yarn add @trt-web/react
yarn add @trt-web/vue
```

With Bun:

```bash
bun add @trt-web/core
bun add @trt-web/browser
bun add @trt-web/angular
bun add @trt-web/firebase-admin
bun add @trt-web/cli
bun add @trt-web/react
bun add @trt-web/vue
```

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
