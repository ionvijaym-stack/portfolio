# Ionora Startup Portfolio

Premium startup portfolio built with React, Tailwind CSS, and Framer Motion.

## Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- React Router
- React Helmet Async
- Vercel Serverless Function (`api/contact.js`)

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Contact Form Backend (Live Endpoint)

The form posts to `POST /api/contact`.

### 1) Configure environment variables

Copy `.env.example` to `.env` and set:

- `VITE_CONTACT_ENDPOINT` (defaults to `/api/contact`)
- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

### 2) Deploy

Deploy to Vercel (recommended), then set the same environment variables in the deployment project.

### 3) Behavior

- Validates incoming payload (`name`, `email`, `message`)
- Sends an email through Resend when configured
- Returns `202` if email provider is not configured yet (request is accepted, but not delivered)
