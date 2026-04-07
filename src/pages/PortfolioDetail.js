import { Link, useLocation } from 'react-router-dom';

export default function PortfolioDtl() {
  const location = useLocation();
  const backLink = location.state?.from === '/blogs' ? '/blogs' : '/portfolio';
  const backState = backLink === '/portfolio' ? { scrollTo: 'projects' } : undefined;

  return (
    <section className="section">
      <h3>Dynamic Portfolio Site</h3>
      <p>
        A portfolio engine with CMS-style content updates and dark mode support. This project showcases how to build 
        a professional portfolio where all content is configured from JSON, making it easy to update without modifying code. 
        Includes advanced filtering for skills and project tags, plus accessible keyboard navigation.
      </p>

      <h4>Key Features</h4>
      <ul>
        <li>JSON-based content management system</li>
        <li>Project filtering by tags and skills</li>
        <li>Dark mode toggle with persistent preference</li>
        <li>Keyboard navigation support (accessibility)</li>
        <li>Responsive grid layouts</li>
        <li>Smooth scroll navigation</li>
      </ul>

      <h4>Tech Stack</h4>
      <ul>
        <li>React - Core framework</li>
        <li>React Router - Client-side routing</li>
        <li>Context API - State management</li>
        <li>LocalStorage - Data persistence</li>
      </ul>

      <h4>Project Timeline</h4>
      <p>January 2024 - Completed</p>

      <Link className="btn" to={backLink} state={backState}>Back</Link>
    </section>
  );
}
