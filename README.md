# Chace Nielson Portfolio

Welcome to the repository for Chace Nielson's portfolio. This site showcases my skills, work experience, projects, and more. The application has been migrated to **React + Vite** for improved performance and development efficiency.

This is the version 2 application - there is a newer version in the master branch of this project

---

## Table of Contents

1. [About the Project](#about-the-project)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Environment Variables](#environment-variables)
6. [Running the Project](#running-the-project)
7. [Testing the Build](#testing-the-build)
8. [Data Files](#data-files)
9. [Public Folder Structure](#public-folder-structure)
10. [Pages](#pages)
11. [Components](#components)
12. [Development](#development)
13. [Libraries Used](#libraries-used)
14. [More Information](#more-information)

---

## About the Project

This project is a professional portfolio website showcasing Chace Nielson's skills, projects, and work experience. It has been developed to provide a seamless, interactive, and visually appealing experience. The application uses **React + Vite** for faster builds and better development workflow.

---

## Features

- **Modal Routing Using Params**  
  Modal-based routing allows users to view detailed project information without leaving the main page. Example:  
  `http://localhost:4173/?project=scale-the-depths`

- **Contact Form with EmailJS**  
  Users can send messages directly via a contact form integrated with EmailJS.

- **Google Analytics**  
  Tracks user interactions and behavior using Google Analytics for insights.

- **Animations**  
  Smooth animations are implemented using **Framer Motion** for better user experience.

- **Optimized Build**  
  The application leverages Vite for lightning-fast build times and efficient development.

---

## Technologies Used

- **React**  
- **Vite**  
- **Tailwind CSS**  
- **Framer Motion**  
- **EmailJS**  
- **Google Analytics**  
- **React Router**  
- **React Icons**  
- **Blurhash**  

---

## Installation

To install the necessary dependencies, run:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory with the following content:

```env
VITE_APP_EMAILJS_SERVICE_ID=service_.......
VITE_APP_EMAILJS_TEMPLATE_ID=template_.......
VITE_APP_EMAILJS_USER_ID=.......

VITE_APP_VERSION=0.0.0
VITE_GOOGLE_MEASUREMENT_ID=G-........

VITE_APP_ENVIRONMENT=development
```
- The `.env` file will not be tracked by git.

---

## Running the Project

To run the local version of the project, use:

```bash
npm run dev
```

---

## Testing the Build

To test the production build locally:

```bash
npm run build
npm run preview
```

---

## Data Files

### Application Data

- The `src/data` folder contains data for:
  - Home page sections (e.g., Hero, Skills, Projects)
  - Project and skill details
  - Contact page content

---

## Public Folder Structure

The `public` folder contains:

- **Images**: Project images, logos, and background images.
- **Icons**: A folder with SVG icons for the site.
- **Manifest**: The `manifest.json` file for PWA support.

---

## Pages

The site includes the following pages:

- **Home**: Showcasing skills, work experience, projects, and more.
- **Photos**: A carousel of images and videos.
- **Thanks**: Displayed after form submission.

---

## Components

The `src/components` folder contains modular components used across the site. Each component is documented and reused for consistency.

---

## Development

- The `TailwindBreakPoints.jsx` component shows breakpoints during development. It can be toggled off by changing the environment variable `VITE_APP_ENVIRONMENT` to something other than `development`.

---

## Libraries Used

- **React**
- **Vite**
- **Tailwind CSS**
- **Framer Motion**
- **React Router**
- **EmailJS**
- **React Icons**
- **React GA4**
- **React Modal**
- **Blurhash**

For a complete list of libraries, refer to the `package.json` file.

---

## More Information

For more information, contact Chace Nielson:

- Website: [chacenielson.com](https://chacenielson.com)  
- Email: [chacen@shaw.ca](mailto:chacen@shaw.ca)

