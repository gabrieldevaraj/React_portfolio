import { Link, useLocation } from 'react-router-dom';

export default function FintrackDetail() {
  const location = useLocation();
  const backLink = location.state?.from === '/blogs' ? '/blogs' : '/portfolio';
  const backState = backLink === '/portfolio' ? { scrollTo: 'projects' } : undefined;

  return (
    <section className="section">
      <h3>Personal Finance Tracker</h3>
      <p>
        A comprehensive finance management application that visualizes budgets, recurring expenses, and savings goals. 
        Users can categorize transactions, view detailed analytics charts, and set monthly saving targets. Features real-time 
        updates with Firestore.
      </p>

      <h4>Key Features</h4>
      <ul>
        <li>Transaction tracking with custom categories</li>
        <li>Budget planning and monitoring</li>
        <li>Interactive analytics dashboards with Chart.js</li>
        <li>Savings goal setting and progress tracking</li>
        <li>Expense summaries by category</li>
        <li>Real-time synchronization across devices</li>
      </ul>

      <h4>Tech Stack</h4>
      <ul>
        <li>React - Frontend UI</li>
        <li>TypeScript - Type safety</li>
        <li>Chart.js - Data visualization</li>
        <li>Firebase/Firestore - Backend & database</li>
      </ul>

      <h4>Project Timeline</h4>
      <p>August 2023 - Completed</p>

      <Link className="btn" to={backLink} state={backState}>Back</Link>
    </section>
  );
}
