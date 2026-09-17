# Stellar Dev Toolkit — Frontend

A minimal Vite + React + TypeScript frontend that displays the latest Stellar testnet ledger by consuming the backend API.

## Features

- Vite for fast development
- React 18 with TypeScript
- Fetches data from the backend API
- Displays latest ledger information
- Ready for Drips Wave contributors

## Tech Stack

- Vite
- React
- TypeScript
- Fetch API

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- The backend running at http://localhost:4000

### Installation

    git clone https://github.com/Donlazzie/only-money
    cd stellar-dev-toolkit-frontend
    npm install

### Environment Variables

Create a `.env` file in the root:

    VITE_API_URL=http://localhost:4000

### Running Locally

    npm run dev

The app will start on http://localhost:5173.

### Building for Production

    npm run build
    npm run preview

The output will be in the `dist/` folder.

## Environment Variables

| Variable | Description | Default |
| --- | --- | --- |
| VITE_API_URL | Base URL of the backend API | http://localhost:4000 |

## Scripts

| Command | Description |
| --- | --- |
| npm run dev | Start development server |
| npm run build | Build for production |
| npm run preview | Preview production build |

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT — see [LICENSE](./LICENSE).