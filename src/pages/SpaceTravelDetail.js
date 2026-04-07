import { Link, useLocation } from 'react-router-dom';

export default function SpaceTravelDetail() {
  const location = useLocation();
  const backLink = location.state?.from === '/blogs' ? '/blogs' : '/portfolio';
  const backState = backLink === '/portfolio' ? { scrollTo: 'projects' } : undefined;

  return (
    <section className="section">
      <h3>Space Travel Booking Web App</h3>
      <p>
        A responsive site that lets users search and book space tours. Built with a mobile-first design, featuring 
        authentication, dynamic pricing, and persistent bookings in MongoDB. Includes an admin panel for managing trip schedules.
      </p>

      <h4>Key Features</h4>
      <ul>
        <li>Real-time availability search and booking system</li>
        <li>Dynamic pricing based on demand and travel dates</li>
        <li>User authentication and booking history</li>
        <li>Admin dashboard for trip management</li>
        <li>Responsive design for all devices</li>
        <li>Payment integration</li>
      </ul>

      <h4>Tech Stack</h4>
      <ul>
        <li>React - Frontend framework</li>
        <li>Tailwind CSS - Styling</li>
        <li>Node.js & Express - Backend</li>
        <li>MongoDB - Database</li>
      </ul>

      <h4>Project Timeline</h4>
      <p>May 2023 - Completed</p>

      <Link className="btn" to={backLink} state={backState}>Back</Link>
    </section>
  );
}
