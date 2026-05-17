# PrepForge Deployment Guide

This guide outlines the steps to deploy the PrepForge monorepo to production. The architecture consists of a Next.js frontend deployed to Vercel and a NestJS backend (along with PostgreSQL and Redis) deployed to Render.

## Prerequisites

- **Node.js** v18+
- **Vercel** account (for frontend)
- **Render** account (for backend Node service)
- **Neon** or **Supabase** account (for permanently free PostgreSQL)
- **Upstash** account (for permanently free Redis)
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

## 2. Database & Redis (100% Free Alternatives)

Render's free databases expire after 30 days. To keep your app running free forever, use these external services:

1. **PostgreSQL via Neon (neon.tech) or Supabase (supabase.com)**
   - Create a free account and start a new Postgres project.
   - Copy the **Connection String** (it will look like `postgresql://user:password@...`).
   
2. **Redis via Upstash (upstash.com)**
   - Create a free account and create a new Redis database.
   - Scroll down to the **Connect** section, select "Redis-CLI", and copy the URL (it will look like `redis://default:password@...`).

## 3. Backend Deployment (Render)

1. Log into [Render](https://render.com/).
2. Click **New → Web Service** and connect your PrepForge GitHub repository.
3. Configure the Web Service:
   - **Name:** prepforge-backend
   - **Root Directory:** `server`
   - **Environment:** `Node`
   - **Build Command:** `npm run build`
   - **Start Command:** `npm run start:prod`
   - **Instance Type:** Free ($0/month)
4. Click **Advanced** and add the following **Environment Variables**:

```env
# ── Databases (Paste the URLs from Neon and Upstash) ──────────────────────────
DATABASE_URL=postgresql://<from-neon>
REDIS_URL=redis://<from-upstash>

# ── Firebase Admin SDK (from downloaded service-account JSON) ─────────────────
FIREBASE_PROJECT_ID=<your-project-id>
FIREBASE_CLIENT_EMAIL=<your-client-email>
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# ── Security & CORS ───────────────────────────────────────────────────────────
JWT_SECRET=<generate-a-strong-random-secret>
CORS_ORIGIN=https://your-app.vercel.app   # ← update after Vercel deploy
PORT=4001
```

5. **Database Migration & Seeding:**
   Add a `prestart:prod` script in `server/package.json` to auto-migrate on every deploy:
   ```json
   "prestart:prod": "npx prisma migrate deploy && npm run db:seed"
   ```
   Render will run migrations and seed the default tracks automatically when starting the service.

---

## 4. Frontend Deployment (Vercel)

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

# ── Backend URLs (use your Render service URL) ───────────────────────────────
NEXT_PUBLIC_API_URL=https://<your-render-service>.onrender.com/api
NEXT_PUBLIC_WS_URL=https://<your-render-service>.onrender.com
```

5. Click **Deploy**. Vercel builds the Next.js app and gives you a production URL.
6. **Important:** After deploy, update `CORS_ORIGIN` in Render to match your Vercel URL.

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
| `DATABASE_URL` | Render (Backend) | ✅ |
| `REDIS_URL` | Render (Backend) | ✅ |
| `FIREBASE_PROJECT_ID` | Render (Backend) | ✅ |
| `FIREBASE_CLIENT_EMAIL` | Render (Backend) | ✅ |
| `FIREBASE_PRIVATE_KEY` | Render (Backend) | ✅ |
| `JWT_SECRET` | Render (Backend) | ✅ |
| `CORS_ORIGIN` | Render (Backend) | ✅ |
| `PORT` | Render (Backend) | ✅ |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Vercel (Frontend) | ✅ |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Vercel (Frontend) | ✅ |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Vercel (Frontend) | ✅ |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Vercel (Frontend) | ✅ |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Vercel (Frontend) | ✅ |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Vercel (Frontend) | ✅ |
| `NEXT_PUBLIC_API_URL` | Vercel (Frontend) | ✅ |
| `NEXT_PUBLIC_WS_URL` | Vercel (Frontend) | ✅ |
