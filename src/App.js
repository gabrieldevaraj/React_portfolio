import './App.css';
import { HashRouter as BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import EducationDetail from './pages/EducationDetail';
import Landing from './pages/Landing';
import Blogs from './pages/Blogs';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/' && location.pathname !== '/blogs';

  return (
    <div className="App">
      {showNavbar && (
        <div className="navbar">
          <Link to="/portfolio" state={{ scrollTo: 'home' }}>
          <h1>Gabriel Devaraj</h1>
          </Link>
          <div>
            <Link className="navlink" to="/portfolio" state={{ scrollTo: 'home' }}>
              Home
            </Link>
            <Link className="navlink" to="/portfolio" state={{ scrollTo: 'about' }}>
              About
            </Link>
            <Link className="navlink" to="/portfolio" state={{ scrollTo: 'projects' }}>
              Projects
            </Link>
            <Link className="navlink" to="/portfolio" state={{ scrollTo: 'education' }}>
              Education
            </Link>
            <Link className="navlink" to="/portfolio" state={{ scrollTo: 'contact' }}>
              Contact
            </Link>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/education/:id" element={<EducationDetail />} />
        <Route path="*" element={<Landing />} />
      </Routes>

      <footer className="footer">
        <a  className="navlink" href={process.env.PUBLIC_URL + '/home.html'} target="_blank" rel="noopener noreferrer">
          Static page
        </a>
        <Link className="navlink" to="/portfolio" state={{ scrollTo: 'home' }}>
              Portfolio
            </Link>
        <Link className="navlink" to="/blogs" state={{ scrollTo: 'scroll' }}>
              Blogs
            </Link>
        <p>© {new Date().getFullYear()} Gabriel Devaraj. Crafted with React.</p>
      </footer>
    </div>
  );
}

export default App;
