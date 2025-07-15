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

### Basic Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /api/test` - Test router endpoint

### Dashboard Endpoints (6 specific endpoints)

#### Admin Dashboard Components

- `GET /api/dashboard/last-data` - Last data chart data
- `GET /api/dashboard/last-income` - Last income chart data with rates
- `GET /api/dashboard/normal-data` - Normal chart data with rates

#### User Dashboard Components

- `GET /api/dashboard/coders-type` - Coders type line chart data
- `GET /api/dashboard/new-employees` - New employees bar chart data
- `GET /api/dashboard/solid-products` - Solid products pie charts data

## Project Structure

```
src/
├── index.ts                    # Main server entry point
├── controllers/
│   └── dashboardController.ts  # Dashboard data functions
└── routes/
    ├── index.ts               # Main router setup
    └── dashboard.ts           # Dashboard routes
```

## Next Steps

- Add authentication routes
- Implement JWT middleware
- Add data validation
- Add error handling middleware
- Add database integration
