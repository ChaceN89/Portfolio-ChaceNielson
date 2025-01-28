
ok great now since i transitioned this app from react to react+vite. I want to improve the readme 

i listed a few thinsg i want to add to it




# Chace Nielson Portfolio

Welcome to the repository for Chace Nielson's portfolio. This site showcases my skills, work experience, projects, and more.



Addition things to add

Its in Vite now so needs to be updated

test build 
npm run build 
npm run preview


include technologies i used as a newheader before instalation - an about the proejct section
react vite, tailwind, css, 

features
modal routing using params - epxlain this rout and that you can view it withou leavingthe main page
contact form using email js
google analytics 
animatio
http://localhost:4173/?project=scale-the-depths


## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Data Files](#data-files)
  - [Home Page Data](#home-page-data)
  - [Photos Page Data](#photos-page-data)
  - [Thanks Page Data](#thanks-page-data)
- [Public Folder Structure](#public-folder-structure)
- [Pages](#pages)
- [Components](#components)
- [Development](#development)
- [More Information](#more-information)

## Installation

To install the necessary dependencies, run:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory with the following content:

```env
VITE_APP_EMAILJS_SERVICE_ID=service_.......
VITE_APP_EMAILJS_TEMPLATE_ID=template_.......
VITE_APP_EMAILJS_USER_ID=.......

VITE_APP_VERSION=0.0.0
VITE_GOOGLE_MEASUREMENT_ID=G-........

VITE_APP_ENVIRONMENT=development // only for development environment
```
- The file will not be tracked by git

## Running the Project

To run the local version of the project, run:

```bash
npm run dev
```

## Data Files

### Application Data

- The data folder under `src/data` contains page data and project and skills data

## Public Folder Structure

- Various image files for projects, logos, portraits and backgrounds.
- Also contains a folder of svg icons

## Pages

The site is broken up into the following pages:

- **Home**: Main page containing sections like Hero, Call to Action, Technical Skills, Work Experience, Interests, Projects, and Contact.
- **Photos**: Displays a carousel of photos and videos.
- **Thanks**: A thank you page displayed after form submission.

## Components

The components for the site are located in the `src/components` folder. Each component is documented and used throughout the site to build the UI.

## Development

The `TailwindBreakPoints.jsx` component shows the breakpoints during development. You can turn this off by changing the environment variable `VITE_APP_ENVIRONMENT` to something other than `development`.

## Libraries Used

The application uses the following libraries:

- React
- Tailwind CSS
- Framer Motion
- React Router
- EmailJS
- React Icons
- React GA4
- React Modal
- Blurhash
- And more...

For more information, refer to the `package.json` file.

## More Information

For more information, contact Chace Nielson:

- Website: [chacenielson.com](https://chacenielson.com)
- Email: [chacen@shaw.ca](mailto:chacen@shaw.ca)
