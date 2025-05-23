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
├── components/          # Reusable UI components organized by feature (navbar, footer, home sections, etc.)
│   ├── analytics/           # Google Analytics integration
│   ├── animations/          # Reusable motion components (e.g., magnetic hover)
│   ├── buttons/             # Custom button components and styles
│   ├── contact/             # Contact form and related utilities
│   ├── footer/              # Footer layout and social components
│   ├── homeSections/        # Sections for homepage (Hero, Projects, TechStacks, About)
│   ├── navbar/              # Desktop/mobile nav components
│   ├── photoGallery/        # Photo gallery grid and modal viewer
│   ├── projects/            # Project display components (cards, filters, carousels)
│   ├── routing/             # App router setup, error boundaries, and layout wrapper
│   ├── testing/             # Developer utilities for theme/debugging
│   └── uiElements/          # Generic UI elements (modals, loaders, wrappers, scroll buttons)

├── data/                # Static data files for projects, skills, tech stacks, and site content
│   ├── iconData/            # Categorized icons (frontend, backend, soft skills, etc.)
│   ├── pageData/            # Section-level data (hero text, contact info, etc.)
│   ├── projects/            # Individual project metadata
│   ├── techStacks/          # Technology groupings (Full Stack, Game Design)
│   └── nav/                 # Navigation link data

├── global-styles/       # Global animation and effect styles for specific items (e.g., ripple, particle)

├── pages/               # Top-level pages used with React Router (Home, Contact, Projects, etc.)

├── utils/               # Utility functions and helpers (e.g., scroll, analytics, image effects)

├── index.css            # Tailwind base + global styles
├── App.jsx              # Main App wrapper
└── main.jsx             # App entry point
```

**public/**
```
public/
├── backgrounds/         # Background images for different sections
├── logos/               # Personal and project logos
├── icons/               # SVGs used in the UI
└── manifest.json        # PWA and metadata configuration
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
