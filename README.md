# 🎬 Movie App

A sleek, responsive web application that fetches real-time movie and TV show data using the TMDB API. The project is fully optimized and continuously deployed via Vercel.

🚀 **Live Demo:** [brianmongare-movie-app.vercel.app](https://vercel.app)

---

## ✨ Features

- **Real-Time Data:** Fetches trending, top-rated, and upcoming movies directly from TMDB.
- **Search Functionality:** Dynamic search bar to find specific titles instantly.
- **Detailed Views:** In-depth information for each movie, including ratings, release dates, and overviews.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewports.
- **CI/CD Integration:** Automated preview and production builds powered by Vercel.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React (via Vite / Next.js) <!-- Edit this to match your choice -->
- **Styling:** Tailwind CSS / CSS Modules
- **Data Fetching:** Fetch API / Axios
- **API Provider:** [The Movie Database (TMDB)](https://themoviedb.org)
- **Hosting & Deployment:** Vercel

---

## 🚀 Local Setup & Installation

Follow these steps to run the project locally on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com
cd movie-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory of your project. Do **not** commit this file to GitHub (it is ignored via `.gitignore`). 

Add your TMDB API token/key using the appropriate prefix for your framework:

```env
# For Vite projects:
VITE_TMDB_API_KEY=your_actual_tmdb_api_key_here

# For Next.js projects:
NEXT_PUBLIC_TMDB_API_KEY=your_actual_tmdb_api_key_here
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) (or the port specified in your terminal) to view the app.

---

## 🌐 Production Deployment (Vercel)

This project is configured for seamless deployment on Vercel. 

### Critical Configuration Step:
Because the `.env` file is excluded from your Git repository for security, you must manually add your API keys to Vercel for the live site to work:

1. Go to your **Vercel Dashboard** and select your project.
2. Navigate to **Settings > Environment Variables**.
3. Add the key name (e.g., `VITE_TMDB_API_KEY`) and paste your TMDB token as the value.
4. Ensure **Production**, **Preview**, and **Development** checkboxes are all checked.
5. Save and trigger a new deployment to apply the changes.

---

## 🌿 Git Branching Workflow

To keep the codebase stable, this project follows a feature-branch workflow:

1. **`main`**: Houses the production-ready code. Pushes here instantly update the live site.
2. **`feature/...`**: Used for developing new components or fixing bugs.
   - Example: `git checkout -b feature/search-bar`
   - Open a Pull Request on GitHub to preview changes via Vercel's automated staging URLs before merging.
