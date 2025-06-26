# Football Application

A modern, responsive web application for viewing football match fixtures, scores, and news. Built with Next.js 14 and TypeScript, this application provides an intuitive interface for football fans to stay updated with their favorite teams and matches.

## 🚀 Features

- View upcoming and past football fixtures
- Live score updates (simulated with dummy data)
- Latest football news section
- Light/Dark mode support
- Fully responsive design for all devices
- Fast and optimized performance
- Mobile-first approach

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Query (TanStack Query)
- **UI Components**: Radix UI, Lucide Icons
- **Date Handling**: date-fns
- **Theme**: next-themes for dark/light mode
- **Build Tool**: Vite (via Next.js)

## 📦 Dependencies

Main dependencies include:
- `next`: 14.2.29
- `react`: ^18
- `typescript`: ^5
- `@tanstack/react-query`: ^5.80.6
- `tailwindcss`: ^3.4.1
- `next-themes`: ^0.4.6
- `date-fns`: ^4.1.0
- `lucide-react`: ^0.513.0

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd football-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🏗️ Project Structure

```
football-app/
├── src/
│   ├── app/                  # App router pages and layouts
│   ├── components/           # Reusable UI components
│   │   ├── fixtures/         # Fixture-related components
│   │   ├── layout/           # Layout components
│   │   └── ui/               # UI primitives
│   ├── data/                 # Static data and dummy data
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions and API clients
│   └── provider/             # Context providers
├── public/                   # Static assets
│   ├── Teams/                # Team logos
│   └── news/                 # News images
└── styles/                   # Global styles
```

## 📝 Note on Data Source

This application was initially designed to use the SportMonk API for fetching live football data. However, due to data limitations, the application currently uses dummy data stored in `src/data/dummyFixtures.ts`. The application is structured to easily switch to the actual API when needed.

## 🎨 Theming

The application supports both light and dark modes, which can be toggled using the theme switcher in the UI. The theming is implemented using `next-themes` and Tailwind CSS dark mode.