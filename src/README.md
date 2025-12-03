# IA03/IA06 - User Registration System

This project implements a simple User Registration backend (NestJS + MongoDB) and frontend (React + Tailwind, React Router, React Hook Form, React Query).

## Backend

- NestJS with MongoDB (Mongoose)
- Endpoint: `POST /user/register`
- Validates email/password, checks duplicate email, hashes password (bcrypt)
- Uses environment variable `MONGODB_URI`
- CORS enabled

### Running locally

1. Create `.env` in `src/backend`:

```
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>/<db>?retryWrites=true&w=majority
PORT=3000
```

2. Install deps and run:

```
cd src/backend
npm i
npm run start:dev
```

## Frontend

- React + Vite + Tailwind
- Pages: Home, Login (UI only), Sign Up
- React Hook Form validation
- React Query for register mutation

### Running locally

```
cd src/frontend
npm i
npm run dev
```

Set backend URL in `.env` or `VITE_API_URL` environment variable when deploying.

## Deployment

- Backend: Render or Railway. Set `MONGODB_URI` and `PORT`.
- Frontend: Vercel or Netlify. Set `VITE_API_URL` to backend URL.

## Rubric mapping

- Backend API (2): `POST /user/register` implemented
- Error handling (2): Conflict on duplicate, validation, structured JSON
- Deployment (1): Config ready; deploy to Render/Vercel
- Routing (2): Home, Login, Sign Up via React Router
- Sign Up (2): Form, validation, mutation with states
- Login UI (1): Mock login page implemented
