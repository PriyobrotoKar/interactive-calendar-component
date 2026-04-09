# Interactive Calendar Component

A lightweight calendar UI built with Next.js where users can:

- navigate month-by-month,
- select a single day or date range,
- attach notes to a month/day/range,
- view Sunday and India holiday dates highlighted in the calendar.

## Implementation choices

- **Next.js + React**: chosen for fast local development, file-based routing, and a clean component architecture.
- **Tailwind CSS**: used for rapid, utility-first styling and responsive layout control.
- **`date-fns`**: handles date parsing, formatting, and month/day calculations with small focused utilities.
- **`date-holidays` (IN)**: marks India-specific public holidays in the calendar.
- **`localStorage` persistence**: keeps notes in the browser without requiring a backend.
- **Month theme map**: each month has its own accent color and hero image for a seasonal visual identity.

## Run locally

1. Install dependencies:

```bash
bun install
```

2. Start the development server:

```bash
bun run dev
```

3. Open `http://localhost:3000` in your browser.

## Available scripts

- `bun run dev` - start local development server
- `bun run build` - create production build
- `bun run start` - run production server
- `bun run lint` - run ESLint checks
