# Contributing

Read [DEVELOPMENT.md](DEVELOPMENT.md) for setup and commands. Keep changes focused on one package or feature.

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
