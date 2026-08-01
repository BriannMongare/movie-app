# 🎬 Movie App

A polished movie discovery web app built with React and Vite. Users can browse popular movies, search by title, and view trending searches powered by Appwrite and the TMDB API.

## ✨ Features

- Browse a curated list of popular movies from TMDB
- Search movies instantly by title
- Track popular search terms with Appwrite
- Enjoy a responsive, modern UI on desktop and mobile

## 🛠️ Tech Stack

- React 19
- Vite
- Appwrite
- TMDB API
- Tailwind CSS

## 📁 Project Structure

- src/App.jsx: main app logic, movie fetching, and UI composition
- src/appwrite.js: Appwrite integration for storing and retrieving trending searches
- src/components/: reusable UI components such as Search, MovieCard, and Spinner

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a .env file in the project root and add the following values:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
```

> Make sure your Appwrite collection includes fields such as searchTerm, count, movie_id, and poster_url.

### 3. Run the development server

```bash
npm run dev
```

Then open http://localhost:5173 to view the app.

## ▶️ Available Scripts

- npm run dev — start the Vite development server
- npm run build — create a production build
- npm run preview — preview the production build locally

## 🌐 Deployment

This app can be deployed to Vercel or any other static hosting platform. Be sure to add the same environment variables in your deployment settings.

## 🤝 Contributing

Contributions are welcome. Feel free to fork the repository, create a feature branch, and submit a pull request with your improvements.
