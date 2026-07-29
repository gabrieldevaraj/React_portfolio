import './App.css';
import { HashRouter as BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Blogs from './pages/Blogs';
import ChurchERPDetail from './pages/ChurchERPDetail';
import PowerSchoolAIDetail from './pages/PowerSchoolAIDetail';
import AccentureDetail from './pages/AccentureDetail';
import BTechDetail from './pages/BTechDetail';
import MBADetail from './pages/MBADetail';

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
        <Route path="/projects/church-erp" element={<ChurchERPDetail />} />
        <Route path="/projects/powerschool-ai" element={<PowerSchoolAIDetail />} />
        <Route path="/projects/lenovo-platform" element={<AccentureDetail />} />
        
        {/* We can route experience to these as well or use generic ProjectDetail if needed, but we linked experience differently. */}
        {/* Let's route experience to the project detail since they overlap in narrative, or create dedicated if needed. Actually Home.js has <Link to={`/experience/${record.id}`}> */}
        <Route path="/experience/powerschool" element={<PowerSchoolAIDetail />} />
        <Route path="/experience/accenture" element={<AccentureDetail />} />

        <Route path="/education/B-Tech" element={<BTechDetail />} />
        <Route path="/education/MBA" element={<MBADetail />} />
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
