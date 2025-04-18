# Company Information Widgets Dashboard

This is a dashboard application built with React and TypeScript that displays company information in a draggable and resizable layout using the `react-mosaic-component` library.

## 🛠️ Technologies Used

- **React** (with TypeScript)
- **Tailwind CSS** for styling
- **React Mosaic Component** for draggable/resizable widgets
- **PostCSS** with **Autoprefixer** for CSS optimization
- **Docker** for containerization

## 🔧 Setup

### Prerequisites

- Node.js (version 18.20.8 or later)
- Yarn (version 1.22 or later)

### 1. Clone the repository

- git clone https://github.com/Andriyk0/company-information-widgets.git
- cd company-information-widgets

### 2. Install dependencies

- yarn install

### 3. Run the application locally

- yarn start

The app will be available at http://localhost:3000

### 4. Build the app

- yarn build

### 5. Run the app in Docker
 To build and run the application in a Docker container:

 1. Build the Docker image:

    - docker build -t company-dashboard .

 2. Run the Docker container:

    - docker run -d --name company-dashboard -p 3000:3000 company-dashboard

The app will be accessible at http://localhost:3000.


#### 🧑‍💻 Development Workflow
 1. Create a new feature:

    - Create a new branch: git checkout -b feature-name

 2. Write your code.

    - Commit your changes: git commit -m "Added feature-name"

    - Push your branch: git push origin feature-name

 3. Create a pull request:

    - Push your changes to GitHub and create a pull request to the main branch.

    - After review and approval, the PR will be merged.