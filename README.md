# 🎬 Netflix GPT

A modern Netflix-inspired web application enhanced with GPT-powered movie search.  
Built with **React**, **TailwindCSS**, **Firebase**, and **TMDB API**.

## 🚀 Tech Stack

- **React** (CRA setup)
- **TailwindCSS** for styling
- **Redux Toolkit** for state management
- **Firebase** for authentication & deployment
- **TMDB API** for movie data
- **OpenAI API** for GPT-powered movie search

## ✨ Features

### Authentication

- Login / Sign Up forms with validation
- Firebase authentication (Sign In, Sign Up, Sign Out)
- Profile update (display name, profile picture)
- Protected routes (`/browse` requires login)

### Browse Page

- Responsive **Netflix-like UI**
- Header with navigation
- Main movie trailer autoplaying in background
- Movie details (title, description)
- Multiple movie lists (Now Playing, Popular, etc.)
- Movie cards powered by **TMDB Image CDN**

### GPT Search

- GPT-powered **Search Bar**
- AI-based movie suggestions
- Reusable movie list components for recommendations
- Multi-language support

### State Management

- Redux slices: `userSlice`, `movieSlice`, `gptSlice`
- Custom hooks for fetching Now Playing, Popular, and Trailer videos

## 🛠️ Implemented Functionalities

- TailwindCSS configuration for responsive UI
- Routing setup for authentication and browsing
- Firebase setup & deployment pipeline
- TMDB API integration with secure `.env` handling
- Memoization for optimized rendering
- Subscribed/unsubscribed auth state listeners to prevent memory leaks

## ⚡ Quick Start

1. Clone the repo

   ```bash
   git clone https://github.com/your-username/netflix-gpt.git
   cd netflix-gpt

   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Add your environment variables in `.env`

   ```
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   REACT_APP_OPENAI_API_KEY=your_openai_api_key
   ```

4. Run the app

   ```bash
   npm start
   ```

5. Build for production

   ```bash
   npm run build
   ```

## 🎥 Demo Walkthrough

- **Login / Sign Up** with Firebase auth
- **Browse Movies** with trailers & categories
- **Search Movies** using GPT suggestions
- **Responsive UI** across all devices

## ✅ To-Do / Improvements

- [ ] Add more language support
- [ ] Improve recommendation accuracy
- [ ] Add watchlist / favorites feature
