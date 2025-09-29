# Netflix GPT 🎬

A modern Netflix clone built with React, featuring AI-powered search capabilities using OpenAI's GPT API. This application provides a comprehensive streaming platform experience with user authentication, movie browsing, and intelligent content discovery.

## ✨ Features

### 🔐 Authentication & User Management
- **Firebase Authentication** - Secure user registration and login
- **User Profile Management** - Personalized user experience
- **Session Management** - Persistent login sessions

### 🎭 Content Discovery
- **AI-Powered Search** - GPT-integrated search for intelligent movie recommendations
- **Multiple Content Categories**:
  - Now Playing Movies
  - Popular Movies
  - Top Rated Movies
  - Upcoming Movies
  - Trending Movies
  - TV Shows (Airing Today, On The Air, Popular, Top Rated)

### 🎨 Modern UI/UX
- **Responsive Design** - Optimized for all screen sizes (mobile, tablet, desktop)
- **Netflix-inspired Interface** - Authentic streaming platform experience
- **Dark Theme** - Eye-friendly dark mode interface
- **Smooth Animations** - Enhanced user experience with React Awesome Reveal
- **Interactive Components** - Hover effects, loading states, and smooth transitions

### 🌐 Multi-language Support
- **Internationalization** - Support for multiple languages
- **Dynamic Language Switching** - Real-time language updates

### 📱 Advanced Features
- **Movie Details & Cast Information** - Comprehensive movie information
- **Trailer Integration** - YouTube trailer playback
- **Search Functionality** - Advanced search with filters
- **Sidebar Navigation** - Easy content browsing
- **Mobile Menu** - Touch-friendly mobile navigation

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **React Router DOM** - Client-side routing
- **Redux Toolkit** - State management
- **Tailwind CSS** - Utility-first CSS framework
- **Material-UI** - React component library
- **React Icons** - Icon library

### Backend & APIs
- **Firebase** - Authentication and hosting
- **OpenAI API** - AI-powered search
- **TMDB API** - The Movie Database for content
- **OMDB API** - Additional movie information

### Development Tools
- **Create React App** - Development environment
- **ESLint** - Code linting
- **Jest** - Testing framework
- **React Testing Library** - Component testing

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Firebase project setup
- OpenAI API key
- TMDB API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/netflix-gpt.git
   cd netflix-gpt
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
   REACT_APP_OPENAI_API_KEY=your_openai_api_key
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   REACT_APP_OMDB_API_KEY=your_omdb_api_key
   ```

4. **Firebase Configuration**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password)
   - Get your Firebase configuration keys
   - Update the `.env` file with your Firebase credentials

5. **API Keys Setup**
   - **OpenAI API**: Get your API key from [OpenAI Platform](https://platform.openai.com/)
   - **TMDB API**: Register at [The Movie Database](https://www.themoviedb.org/settings/api)
   - **OMDB API**: Get your API key from [OMDB API](http://www.omdbapi.com/apikey.aspx)

6. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

7. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 📁 Project Structure

```
netflix-gpt/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/          # React components
│   │   ├── Body.js         # Main router component
│   │   ├── Login.js        # Authentication component
│   │   ├── Browse.js       # Main browsing interface
│   │   ├── Header.js       # Navigation header
│   │   ├── MainContainer/  # Hero section components
│   │   ├── SecondaryContainer/ # Movie lists
│   │   ├── SearchContainer/ # Search functionality
│   │   ├── TVContainer/    # TV shows section
│   │   └── ...
│   ├── hooks/              # Custom React hooks
│   │   ├── useNowPlayingMovies.js
│   │   ├── usePopularMovies.js
│   │   ├── useSearchMovie.js
│   │   └── ...
│   ├── utils/              # Utility functions
│   │   ├── firebase.js     # Firebase configuration
│   │   ├── openAi.js       # OpenAI integration
│   │   ├── store.js        # Redux store
│   │   └── ...
│   └── assets/             # Static assets
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎯 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🌟 Key Components

### Authentication Flow
- User registration and login with Firebase
- Form validation and error handling
- Secure session management

### Content Management
- Dynamic movie and TV show loading
- Category-based content organization
- Real-time search with AI integration

### Responsive Design
- Mobile-first approach
- Adaptive layouts for different screen sizes
- Touch-friendly navigation

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom breakpoints:
- `xs: 375px` - Extra small devices
- `sm: 640px` - Small devices
- `md: 768px` - Medium devices
- `lg: 1024px` - Large devices
- `xl: 1280px` - Extra large devices

### Redux Store
State management includes:
- User authentication state
- Movie and TV show data
- Search functionality
- Language preferences
- UI state management

## 🚀 Deployment

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login to Firebase: `firebase login`
3. Initialize Firebase: `firebase init hosting`
4. Build the project: `npm run build`
5. Deploy: `firebase deploy`

### Other Deployment Options
- Vercel
- Netlify
- AWS Amplify
- Heroku

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for movie data
- [OpenAI](https://openai.com/) for AI-powered search
- [Firebase](https://firebase.google.com/) for authentication and hosting
- [Netflix](https://netflix.com/) for design inspiration

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the [Issues](https://github.com/your-username/netflix-gpt/issues) page
2. Create a new issue with detailed information
3. Contact the maintainers

---

**Happy Streaming! 🎬✨**