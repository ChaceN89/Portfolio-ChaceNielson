# 🧑‍💻 Chace Nielson Portfolio

Welcome to the codebase for **Chace Nielson’s developer portfolio**, a site showcasing my full stack and game development experience, selected projects, tech stack, and contact information. Built with **React + Vite** for fast performance and smooth animations.

> 📍 Deployed via [Vercel](https://vercel.com/)

<br>

## 📑 Table of Contents

- [🧰 Technologies Used](#🧰-technologies-used)
- [✨ Features](#✨-features)
- [🔧 Installation](#🔧-installation)
- [🔐 Environment Variables](#🔐-environment-variables)
- [🏃 Running the Project](#🏃-running-the-project)
- [🔍 Testing the Build](#🔍-testing-the-build)
- [📁 Project Structure](#📁-project-structure)
- [📊 Google Analytics](#📊-google-analytics)
- [📬 Contact](#📬-contact)
- [🚀 Deployment](#🚀-deployment)

<br>

## 🧰 Technologies Used

### 🧱 Core
- **React** (v19+)
- **Vite** (v5+)
- **Tailwind CSS** (v4)

### 🧩 Libraries
- `react-router-dom` – Routing and modals
- `framer-motion` – Animations
- `react-ga4` – Google Analytics
- `emailjs-com` – Contact form messaging
- `blurhash` – Image loading effects
- `react-icons` – Icons

<br>

## ✨ Features

- **💡 Modal-Based Routing**  
  Project modals are linked using query params (`?project=id`) without leaving the main page.

- **📨 EmailJS Contact Form**  
  Users can send direct messages via the integrated contact form.

- **📊 Google Analytics (GA4)**  
  Tracks page views and button interactions, only in production.

- **🎨 Framer Motion Animations**  
  Smooth fade, slide, and staggered UI effects for polished UX.

- **⚡ Vite Performance**  
  Instant reloads and optimized bundling for dev + production.

<br>

## 🔧 Installation

Clone the repository and install dependencies:

```bash
npm install
```

<br>

## 🔐 Environment Variables

Create a `.env` file in the project root with the following keys:

```env
VITE_APP_ENVIRONMENT=development

# EmailJS
VITE_APP_EMAILJS_SERVICE_ID=service_...
VITE_APP_EMAILJS_TEMPLATE_ID=template_...
VITE_APP_EMAILJS_USER_ID=user_...

# Google Analytics
VITE_APP_VERSION=2.0.0
VITE_GOOGLE_MEASUREMENT_ID=G-XXXXXXX
```

> These values are excluded from Git and only used during build/runtime.

<br>

## 🏃 Running the Project

Launch the development server:

```bash
npm run dev
```

<br>

## 🔍 Testing the Build

Create and preview a production build:

```bash
npm run build
npm run preview
```

<br>

## 📁 Project Structure

```
src/
├── components/       # Reusable UI elements
├── data/             # Static site data (projects, skills)
├── pages/            # Route-based page files (Home, Thanks, Photos)
├── styles/           # CSS and theme definitions
├── utils/            # Helper functions (e.g., for GA)
public/
├── logos/            # Personal and project logos
├── backgrounds/      # Background image assets
```

<br>

## 📊 Google Analytics

Analytics are initialized with `react-ga4` in production only.

### 🔍 How it Works
- GA is set up via `useGoogleAnalytics.js`
- Page views are tracked using `AnalyticsProvider.jsx`
- Custom events (e.g., clicks) use `useAnalyticsEvent.js`

### Example:
```js
const trackEvent = useAnalyticsEvent();
trackEvent("Button", "Click", "Hero CTA", 1);
```

> The `VITE_GOOGLE_MEASUREMENT_ID` is required in your `.env` file.

<br>

## 📬 Contact

- **Portfolio:** [chacenielson.com](https://chacenielson.com)
- **Email:** [chacen@shaw.ca](mailto:chacen@shaw.ca)

For collaboration inquiries or freelance opportunities, feel free to reach out.

<br>

## 🚀 Deployment

### Vercel Hosting

This site is continuously deployed on **[Vercel](https://vercel.com/)** via GitHub integration.

To deploy manually:

```bash
npm run build
vercel --prod
```

> Make sure your environment variables are added in your Vercel dashboard.
