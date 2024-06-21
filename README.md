# Contacts App Frontend

This is the frontend part of the Contacts App, built using React and TypeScript. The application allows users to manage their contacts, including creating, updating, and deleting contacts. It interacts with a backend API to perform these operations.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [API Integration](#api-integration)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm (Node Package Manager) installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).
- A running backend server for the Contacts App. You can find the backend setup instructions in its repository.

## Installation

To install the necessary dependencies for this project, run the following command in the project directory:

```bash
npm install


## Running the Application

To start the development server, use the following command:
npm start

This will start the app in development mode. Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## Project Structure

The project structure is organized as follows:

├── public
├── src
├── api.ts
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── api.ts
│   ├── components
│       ├── ContactForm.tsx
│       ├── ContactList.tsx
│       ├── Login.tsx
│   ├── context
│       ├── AuthContext.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
└── tsconfig.json
├── package-lock.json
├── package.json

## Available Scripts

In the project directory, you can run the following scripts:

npm start
Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

npm run build
Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

npm test
Launches the test runner in interactive watch mode.

npm run eject
If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

## Dependencies

The main dependencies used in this project are:

React
TypeScript
Axios
React Router
You can find the complete list of dependencies in the package.json file.

## API Integration

The frontend communicates with the backend API to manage contacts. The API endpoints are defined in the api directory and are used to perform CRUD operations:

GET /contacts - Fetch all contacts
POST /contacts - Create a new contact
PUT /contacts/:id - Update an existing contact
DELETE /contacts/:id - Delete a contact
Ensure the backend server is running and accessible at the correct URL, which is configured in the api configuration file.

