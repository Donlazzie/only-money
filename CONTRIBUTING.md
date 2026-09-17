# Contributing to Stellar Dev Toolkit — Frontend

Thanks for your interest in contributing! This project is part of the Stellar Wave Program and welcomes contributors of all experience levels.

## How to Contribute

### Reporting Bugs

Open an issue with:

- A clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Browser and OS

### Suggesting Features

Open an issue describing:

- The problem you're solving
- Your proposed solution
- Any alternatives considered

### Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make your changes
4. Run `npm run build` to ensure it compiles
5. Commit with a clear message (see below)
6. Push and open a PR against `main`

## Development Setup

    npm install
    npm run dev

Make sure the backend is running at http://localhost:4000 or set `VITE_API_URL` in `.env`.

## Code Style

- Use TypeScript
- Follow existing formatting (2-space indentation)
- Prefer functional components with hooks
- Keep components small and focused
- Use meaningful variable names

## Commit Messages

Use conventional commits:

- `feat: add ledger display`
- `fix: handle API errors`
- `docs: update README`
- `chore: update dependencies`

## Issue Labels

- `good first issue` — suitable for new contributors
- `help wanted` — extra attention needed
- `bug` — something isn't working
- `enhancement` — new feature or request

## Questions?

Open a discussion or reach out in the Stellar Wave Discord.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.