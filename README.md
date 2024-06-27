# Planner App

## Description

The Planner App is a simple web application that allows users to create projects and tasks within those projects. It is designed to be a Progressive Web App (PWA), which means it can be installed on your device and work offline.

## Features

- Add and delete projects
- Add and delete tasks within projects
- Persistent data storage using `localStorage`
- Offline support with a service worker

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/planner-app.git
    ```
2. Navigate to the project directory:
    ```sh
    cd planner-app
    ```

## Usage

1. Open `index.html` in a web browser.

## Progressive Web App

The app is designed as a Progressive Web App (PWA). To install the PWA:

1. Open the app in your browser.
2. Click on the install button (usually found in the browser's address bar or menu).

## Project Structure

```plaintext
planner-app/
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── app.js
├── index.html
├── manifest.json
├── service-worker.js
└── README.md
