# PrepForge Deployment Guide

This guide outlines the steps to deploy the PrepForge monorepo to production. The architecture consists of a Next.js frontend deployed to Vercel and a NestJS backend (along with PostgreSQL and Redis) deployed to Railway.

## Prerequisites

- **Node.js** v18+
- **Vercel** account (for frontend)
- **Railway** account (for backend, DB, and Redis)
- **Firebase** project (for Authentication)
- GitHub repository with the code

---

## 1. Firebase Setup (Authentication)

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project named "PrepForge".
3. Enable **Google Analytics** (optional).
4. Go to **Build > Authentication** and enable **Google** as a sign-in provider.
5. **Get Client Credentials (Frontend):**
   - Go to Project Settings > General > Your Apps.
   - Add a new Web app.
   - Copy the Firebase configuration object.
6. **Get Admin Credentials (Backend):**
   - Go to Project Settings > Service Accounts.
   - Click **Generate new private key** and download the JSON file. You will need these for the backend environment variables.

---

## 2. Backend Deployment (Railway)

1. Log into [Railway](https://railway.app/).
2. Click **New Project** -> **Deploy from GitHub repo** and select your PrepForge repository.
3. Once the repository is added, Railway will detect the monorepo structure. You may need to configure the root directory to `server/` or use a custom start command if Railway tries to deploy the entire workspace.
   - **Root Directory:** `/server`
   - **Build Command:** `npm run build`
   - **Start Command:** `npm run start:prod`
4. Add **PostgreSQL** and **Redis** plugins to your Railway project.
5. In the backend service settings, add the following Environment Variables:

```env
# Database
DATABASE_URL=<Provided by Railway PostgreSQL plugin>

# Redis
REDIS_URL=<Provided by Railway Redis plugin>

# Firebase Admin SDK (From downloaded JSON)
FIREBASE_PROJECT_ID=<your-project-id>
FIREBASE_CLIENT_EMAIL=<your-client-email>
FIREBASE_PRIVATE_KEY="<your-private-key-with-\n-newlines>"

# Security & CORS
JWT_SECRET=<generate-a-strong-secret-key>
CORS_ORIGIN=https://prepforge.vercel.app  # URL of your Vercel frontend
PORT=3001
```

6. **Database Migration & Seeding:**
   - Go to your backend service in Railway, open the **Variables** tab, ensure `DATABASE_URL` is available.
   - To deploy the schema, run the migrations on the Railway instance or add a pre-start script to your `server/package.json`:
     `"prestart:prod": "npx prisma migrate deploy && npm run db:seed"`
   - Railway will automatically run the migrations and seed the database with the default tracks and resources on the next deployment.

---

## 3. Frontend Deployment (Vercel)

1. Log into [Vercel](https://vercel.com/).
2. Click **Add New...** -> **Project**.
3. Import your PrepForge repository.
4. Vercel should automatically detect that it's a **Next.js** project in a monorepo.
   - **Root Directory:** `apps/web`
5. Configure the following Environment Variables before deploying:

```env
# Firebase Client SDK
NEXT_PUBLIC_FIREBASE_API_KEY=<your-api-key>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your-project>.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your-project-id>

# Backend URL
NEXT_PUBLIC_API_URL=https://<your-railway-backend-url>.up.railway.app/api
NEXT_PUBLIC_WS_URL=https://<your-railway-backend-url>.up.railway.app
```

6. Click **Deploy**. Vercel will build the frontend application and provide you with a production URL.
7. Important: Update the `CORS_ORIGIN` variable in your backend (Railway) to match this new Vercel URL, and add the Vercel domain to your Firebase Authorized Domains (Authentication > Settings > Authorized domains).

---

## 4. Verification

After both services are deployed:
1. Open the Vercel frontend URL.
2. Attempt to Sign in with Google.
3. If successful, your frontend is communicating correctly with Firebase.
4. Open the Dashboard or Tracks page to ensure data (seeded tracks/items) is being fetched successfully from the Railway backend.

## Local Development Requirements

To run this stack locally, ensure you have a `.env` file at the root or within both `apps/web` and `server/` with your local connection strings.
- **Backend:** PostgreSQL must be running locally or via Docker.
- **Frontend:** Make sure `NEXT_PUBLIC_API_URL` points to `http://localhost:3001/api`.

Run the development servers:
```bash
# In the root directory:
npm install
npm run dev
```
