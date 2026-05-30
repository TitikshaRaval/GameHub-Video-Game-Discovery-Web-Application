# GameHub

GameHub is a video-game discovery web application built with React and TypeScript. It lets users search, filter and browse video games by platform, genre, and other criteria using the RAWG video games API.

This repository is useful as a learning example for component composition, custom hooks, Chakra UI, and integrating with third-party APIs.

## Features

- Search games by title from the navbar
- Filter by genre and platform
- Sort results (e.g. by release date, rating)
- Responsive layout with an aside genre list on large screens
- Game cards with cover images, platform icons and critic scores
- Loading skeletons and error handling for network requests

## Tech stack

- React 18 + TypeScript
- Vite (dev server and build)
- Chakra UI + Emotion for styling
- Axios for HTTP requests
- Framer Motion for subtle UI animations
- react-icons for icons

## Quick start

1. Clone the repo:

```bash
git clone https://github.com/TitikshaRaval/GameHub-Video-Game-Discovery-Web-Application.git
cd GameHub-Video-Game-Discovery-Web-Application
```

2. Install dependencies:

```bash
npm install
```

3. Get a RAWG API key: https://rawg.io/apidocs (create an account and obtain an API key).

4. Add your API key to `src/services/api-client.ts`. The file contains a placeholder where to set the key.

5. Run the development server:

```bash
npm run dev
```

6. Open http://localhost:5173 (or the Vite URL shown in the terminal).

## Available scripts

- `npm run dev` — start dev server
- `npm run build` — compile TypeScript and build production assets with Vite
- `npm run preview` — preview the production build locally

## Project structure (high level)

- `src/`
  - `components/` — UI components (NavBar, GameGrid, GameCard, GenreList, etc.)
  - `hooks/` — custom hooks (`useGames`, `useGenres`, `usePlatforms`, `useData`)
  - `services/` — API client and image URL helpers (`api-client.ts`, `image-url.ts`)
  - `data/` — small static lookup lists (`genres.ts`, `platforms.ts`)
  - `App.tsx`, `main.tsx` — application entry and root layout

## Important configuration

- The app relies on the RAWG API. Set your API key in `src/services/api-client.ts` before running.
- No other environment variables are required by default.

