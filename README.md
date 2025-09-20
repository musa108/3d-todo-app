# My To-Do App with 3D Twist

A modern to-do list app built with Next.js, featuring a creative 3D widget powered by React Three Fiber. The app includes light and dark themes, a sidebar for project and task management, and a dynamic 3D cube that reflects task progress.

## Features

- **Next.js (App Router)**: Fast and modern React framework.
- **Tailwind CSS**: For responsive and customizable UI.
- **React Context + useReducer**: Efficient state management.
- **Theme Toggle**: Switch between light and dark modes.
- **Sidebar Navigation**: Organize tasks by projects and categories.
- **3D Widget**: A rotating cube that changes color based on task completion (using @react-three/fiber and @react-three/drei).
- **Local Storage**: Persist tasks locally in the browser — no backend required.

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/musa108/3d-todo-app
   ```
2. Navigate to the project directory:
   ```bash
   cd my-todo-3d
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and go to `http://localhost:3000`.

## Deploy

Deploy to Vercel by linking this GitHub repository.

## Notes

- All data is stored locally in the browser (`localStorage`) — no backend required.
- The 3D widget is purely client-side.
