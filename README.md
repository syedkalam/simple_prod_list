# simple_prod_list

Simple Expo + TypeScript app that fetches and shows a list of products.

## Quick Start

Requirements

- Node.js (18+ recommended)
- npm or Yarn
- Expo (you can use the local dependency via npm scripts or install the CLI globally)

Install

```bash
npm install
# or
yarn install
```

Run (development)

```bash
npm run start    # start the Expo dev server
npm run android  # open on Android device/emulator
npm run ios      # open on iOS simulator (macOS only)
npm run web      # run in the browser
```

You can replace `npm` with `yarn` if you prefer.

Configuration

- The API base URL is defined in `src/constants/baseUrl.ts` and defaults to `https://dummyjson.com`.
- The project also includes `react-native-dotenv` if you prefer to use an `.env` file—add `.env` to `.gitignore` if you do.

Project notes

- Entry point: `App.tsx` (bootstrapped from `index.ts`).
- Main pieces: `src/api` (network), `src/components`, `src/hooks`, `src/screens`, `src/constants`, `src/types`.
- TypeScript is enabled; run a type check with:
  ```bash
  npx tsc --noEmit
  ```

Troubleshooting

- If Metro is stuck or you see caching issues, run: `expo start -c` to clear cache.
- If a device can't connect, confirm it's on the same network as your dev machine or use a local emulator.

Dependencies

- expo, react, react-native
- @tanstack/react-query
- @expo/vector-icons
- react-native-safe-area-context
- react-native-dotenv

Contributing & License

- Open issues or PRs. Keep changes focused and include small tests/typings when relevant.
- Add a LICENSE file for your preferred license (MIT is common).

That's it — run `npm run start` and open the app on a device or in the browser.
