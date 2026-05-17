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
2. Create a new project named **"PrepForge"**.
3. Go to **Build > Authentication** and enable **Google** as a sign-in provider.
4. **Get Client Credentials (Frontend):**
   - Go to **Project Settings > General > Your Apps**.
   - Add a new **Web app**.
   - Copy the full `firebaseConfig` object — you need all fields below.
5. **Get Admin Credentials (Backend):**
   - Go to **Project Settings > Service Accounts**.
   - Click **Generate new private key** and download the JSON file.
   - You need: `project_id`, `client_email`, and `private_key` from that JSON.
6. Add your Vercel domain to Firebase **Authorized Domains**:
   - **Authentication > Settings > Authorized domains > Add domain**

---

## 2. Backend Deployment (Railway)

1. Log into [Railway](https://railway.app/).
2. Click **New Project → Deploy from GitHub repo** and select your PrepForge repository.
3. Configure the service:
   - **Root Directory:** `server/`
   - **Build Command:** `npm run build`
   - **Start Command:** `npm run start:prod`
4. Add **PostgreSQL** and **Redis** plugins to your Railway project.
5. Add the following **Environment Variables** to the backend service:

```env
# ── Database (auto-filled by Railway PostgreSQL plugin) ──────────────────────
DATABASE_URL=<Provided by Railway PostgreSQL plugin>

# ── Redis (auto-filled by Railway Redis plugin) ───────────────────────────────
REDIS_URL=<Provided by Railway Redis plugin>

# ── Firebase Admin SDK (from downloaded service-account JSON) ─────────────────
FIREBASE_PROJECT_ID=<your-project-id>
FIREBASE_CLIENT_EMAIL=<service-account-client-email>
FIREBASE_PRIVATE_KEY="<private-key-with-literal-\n-newlines>"

# ── Security & CORS ───────────────────────────────────────────────────────────
JWT_SECRET=<generate-a-strong-random-secret>
CORS_ORIGIN=https://your-app.vercel.app   # ← update after Vercel deploy
PORT=4001
```

6. **Database Migration & Seeding:**
   Add a `prestart:prod` script in `server/package.json` to auto-migrate on every deploy:
   ```json
   "prestart:prod": "npx prisma migrate deploy && npm run db:seed"
   ```
   Railway will run migrations and seed the default tracks automatically.

---

## 3. Frontend Deployment (Vercel)

1. Log into [Vercel](https://vercel.com/).
2. Click **Add New → Project** and import your PrepForge repository.
3. Set the **Root Directory** to `apps/web`.
4. Add the following **Environment Variables** before clicking Deploy:

```env
# ── Firebase Client SDK ───────────────────────────────────────────────────────
NEXT_PUBLIC_FIREBASE_API_KEY=<your-api-key>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your-project>.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<your-project>.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<your-messaging-sender-id>
NEXT_PUBLIC_FIREBASE_APP_ID=<your-app-id>

# ── Backend URLs (use your Railway service URL) ───────────────────────────────
NEXT_PUBLIC_API_URL=https://<your-railway-service>.up.railway.app/api
NEXT_PUBLIC_WS_URL=https://<your-railway-service>.up.railway.app
```

5. Click **Deploy**. Vercel builds the Next.js app and gives you a production URL.
6. **Important:** After deploy, update `CORS_ORIGIN` in Railway to match your Vercel URL.

---

## 4. Local Development

### Create `server/.env`

```env
DATABASE_URL=postgresql://prepforge:password@localhost:5432/prepforge_dev
REDIS_URL=redis://localhost:6379

FIREBASE_PROJECT_ID=<your-project-id>
FIREBASE_CLIENT_EMAIL=<service-account-client-email>
FIREBASE_PRIVATE_KEY="<private-key>"

JWT_SECRET=local-dev-secret-change-in-prod
CORS_ORIGIN=http://localhost:4000
PORT=4001
```

### Create `apps/web/.env.local`

```env
NEXT_PUBLIC_FIREBASE_API_KEY=<your-api-key>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your-project>.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<your-project>.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<your-messaging-sender-id>
NEXT_PUBLIC_FIREBASE_APP_ID=<your-app-id>

NEXT_PUBLIC_API_URL=http://localhost:4001/api
NEXT_PUBLIC_WS_URL=http://localhost:4001
```

### Start the stack

```bash
# 1. Start DB + Redis
docker-compose up -d

# 2. Run migrations + seed (first time only)
npm run db:migrate
npm run db:seed

# 3. Start everything
npm run dev
```

> Frontend: http://localhost:4000  
> Backend API: http://localhost:4001/api

---

## 5. Post-Deploy Verification

1. Open the Vercel frontend URL.
2. Click **Sign in with Google** — Firebase auth should redirect and return you to the dashboard.
3. Open the **Tracks** page — data should load from your Railway backend (seeded tracks will appear).
4. Check the **Leaderboard** — your user should appear after completing any item.

---

## Environment Variable Checklist

| Variable | Where | Required |
|---|---|---|
| `DATABASE_URL` | Railway (Backend) | ✅ |
| `REDIS_URL` | Railway (Backend) | ✅ |
| `FIREBASE_PROJECT_ID` | Railway (Backend) | ✅ |
| `FIREBASE_CLIENT_EMAIL` | Railway (Backend) | ✅ |
| `FIREBASE_PRIVATE_KEY` | Railway (Backend) | ✅ |
| `JWT_SECRET` | Railway (Backend) | ✅ |
| `CORS_ORIGIN` | Railway (Backend) | ✅ |
| `PORT` | Railway (Backend) | ✅ |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Vercel (Frontend) | ✅ |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Vercel (Frontend) | ✅ |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Vercel (Frontend) | ✅ |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Vercel (Frontend) | ✅ |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Vercel (Frontend) | ✅ |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Vercel (Frontend) | ✅ |
| `NEXT_PUBLIC_API_URL` | Vercel (Frontend) | ✅ |
| `NEXT_PUBLIC_WS_URL` | Vercel (Frontend) | ✅ |
