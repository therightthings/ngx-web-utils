# @trt-web/cli

## Introduction

- `@trt-web/cli` is a TypeScript toolkit for building interactive package CLIs and static documentation from README content.
- It keeps package discovery, utility descriptions, methods, and examples close to the source README.
- Use it to expose consistent `list`, `info`, `docs`, and help experiences for libraries in a monorepo or standalone package.

---

**Why `@trt-web/cli`?**

- README-driven documentation with a predictable structure.
- Interactive utility discovery for developers.
- Static HTML output with code highlighting and copyable examples.
- Reusable building blocks for package-specific CLIs.

---

**Install**

```bash
npm install @trt-web/cli
```

```bash
yarn add @trt-web/cli
```

```bash
bun add @trt-web/cli
```

---

**For Contributors**

- Contributions are welcome. See `CONTRIBUTING.md` for contribution guidelines, testing expectations, and pull request requirements.
- Contact:
  - Github: [therightthings/trt-web](https://github.com/therightthings/trt-web)
  - NPM: [@trt-web/cli](https://www.npmjs.com/package/@trt-web/cli)
  - Email: nanam133hg@gmail.com (Nam Nguyen)

---

## TrtCommand

Creates an interactive CLI from a package README and package metadata. The README is the source of truth for utility groups, methods, descriptions, and examples.

### Methods

- `startCli(config: CliConfig): Promise<void>`: start an interactive CLI for a package.

### Example

```ts
import { TrtCommand } from '@trt-web/cli';

await TrtCommand.startCli({
  readmePath: '../README.md',
  packageJsonPath: '../package.json',
  name: 'trt-browser',
  codeTheme: 'vs-code-dark-modern',
  docs: {
    outputPath: './dist/docs/browser',
    title: '@trt-web/browser',
  },
});
```

The generated CLI supports:

- `list`: browse utility groups and inspect utility details.
- `info <utility>`: show one utility's methods and README examples.
- `docs`: generate a static HTML documentation site when `docs` is configured.
- `--version`: show the package version and utility count.
- `--help`: show available options and commands.

---

## DocGenerator

Generates a static HTML documentation site from a package README.

### Methods

- `generate(config: DocGeneratorConfig): void`: parse a README and write the generated `index.html`.

### Example

```ts
import { DocGenerator } from '@trt-web/cli';

DocGenerator.generate({
  readmePath: './README.md',
  outputPath: './dist/docs',
  title: '@trt-web/core',
  codeTheme: 'vs-code-dark-modern',
});
```

---

## README structure

Each documented utility should use a heading, description, methods, and examples:

````md
## LocalStorage

Typed browser storage helpers.

### Methods

- `set<T>(key: string, value: T): void`: store typed data.

### Examples

```ts
LocalStorage.set('profile', { id: 1, name: 'Alice' });
```
````

Code examples may use `ts`, `js`, `html`, `css`, `scss`, or `bash` fences. Multiple examples under one utility are preserved in their original order.

---

## Supported code highlighting languages

`Highlighter` currently supports syntax highlighting for:

- `ts`: TypeScript.
- `js`: JavaScript.
- `html`: HTML.
- `css`: CSS.
- `scss`: SCSS.
- `bash`: Bash and common package or shell commands.

Highlighting is available for both terminal ANSI output and generated HTML documentation. Use `theme: 'none'` to keep the source unchanged.
