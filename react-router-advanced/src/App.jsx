import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import BlogPost from './pages/BlogPost'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  // Simulating an authentication state (replace with actual authentication logic)
  const isUserAuthenticated = true

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isUserAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/post/:postId" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

