# Repository Guidelines

## Project Structure & Module Organization
The React client lives in `src/`: route-level screens reside in `src/pages/`, reusable widgets in `src/components/`, and the app shell originates from `src/App.js`. Static assets and the CRA HTML scaffold sit in `public/`. FastAPI code is grouped under `mentor-backend/` with `main.py` defining endpoints, `crud.py` handling persistence and uploads, `models.py` capturing SQLAlchemy tables, and `database.py` wiring the MySQL connection; uploaded avatars land in `mentor-backend/uploads/`.

## Build, Test, and Development Commands
Run `npm install` once to pull frontend dependencies, then `npm start` for the CRA dev server on http://localhost:3000 and `npm test` for the Jest + Testing Library watch runner. `npm run build` bundles production assets. Launch the FastAPI backend via `uvicorn mentor-backend.main:app --reload` after installing FastAPI, SQLAlchemy, Passlib, python-multipart, and PyMySQL in a virtualenv. Bootstrap sample data with `mysql -u <user> -p < mentor-backend/sql.sql`.

## Coding Style & Naming Conventions
Stick to 2-space indentation, single quotes, and the eslint-react-app defaults; resolve warnings surfaced in `npm start` or `npm test`. Name React components and pages with PascalCase, hooks and helpers camelCase, and CSS classes kebab-case. Group imports (third-party above internal) and keep files focused on a single responsibility.

## Testing Guidelines
Add frontend tests beside their component as `*.test.js`, leaning on Testing Library's `screen` queries for user-facing assertions. Cover validation, API error states, and navigation paths introduced by your change. Plan backend coverage with pytest, a temporary database, and cleanup for uploaded fixtures when introducing new FastAPI endpoints.

## Commit & Pull Request Guidelines
Write concise, capitalized, action-oriented commits (e.g., `Add mentor filters`) and keep each commit limited to related work. Before pushing, run `npm test` and exercise touched API routes. Pull requests into `main` need a short summary, linked issue, UI screenshots when relevant, and notes on schema or configuration changes plus manual QA steps.

## Security & Configuration Tips
Never commit live credentials; move the MySQL URL in `mentor-backend/database.py` into environment variables before release. Update FastAPI CORS origins for deployed hosts and relocate `uploads/` to persistent storage outside the repository in production.
