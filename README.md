# AIDONIC Backend API

A Node.js/Express.js backend API for the AIDONIC application.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file (optional for basic setup):

```bash
PORT=8080
```

3. Run the development server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the TypeScript code
- `npm start` - Start production server
- `npm test` - Run tests

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /api/test` - Test router endpoint

## Project Structure

```
src/
├── index.ts          # Main server entry point
└── routes/
    └── index.ts      # Basic router setup
```

## Next Steps

- Add authentication routes
- Add dashboard data endpoints
- Implement JWT middleware
- Add data validation
- Add error handling middleware
