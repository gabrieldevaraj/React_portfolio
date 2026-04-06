import './App.css';
import { HashRouter as BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import EducationDetail from './pages/EducationDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
          <Link to="/" state={{ scrollTo: 'home' }}>
          <h1>Gabriel Devaraj</h1>
          </Link>
          <div>
            <Link className="navlink" to="/" state={{ scrollTo: 'home' }}>
              Home
            </Link>
            <Link className="navlink" to="/" state={{ scrollTo: 'about' }}>
              About
            </Link>
            <Link className="navlink" to="/" state={{ scrollTo: 'projects' }}>
              Projects
            </Link>
            <Link className="navlink" to="/" state={{ scrollTo: 'education' }}>
              Education
            </Link>
            <Link className="navlink" to="/" state={{ scrollTo: 'contact' }}>
              Contact
            </Link>
          </div>
        </div>

        <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/education/:id" element={<EducationDetail />} />
            <Route path="*" element={<Home />} />
        </Routes>
        </div>

        <footer className="footer">
          <a href={process.env.PUBLIC_URL + '/home.html'} target="_blank" rel="noopener noreferrer">
            Go to my static page
          </a>
          <p>© {new Date().getFullYear()} Gabriel Devaraj. Crafted with React.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
