# Amaan Shaikh — Creative Web Developer & Frontend Engineer Portfolio

A modern, high-performance web engineering portfolio built with Next.js 15 (App Router), React 19, Tailwind CSS, Framer Motion, and Three.js.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router, Server & Client Components)
- **Library:** React 19
- **Animations:** Framer Motion & GSAP
- **3D Graphics:** Three.js (WebGL ambient canvas)
- **Styling:** Tailwind CSS
- **Smooth Scroll:** Lenis
- **Type Safety:** TypeScript
- **Backend / Webhook:** Google Apps Script + Google Sheets API

## 📦 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Add your Google Apps Script Webhook URL:
```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
```bash
npm run build
npm run start
```

## 🌐 Deploy to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Add the environment variable:
   - `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`: your deployed Google Apps Script URL.
5. Click **Deploy**. Vercel will automatically build and publish your portfolio with global edge caching.

---
© 2026 Amaan Shaikh. All rights reserved.
