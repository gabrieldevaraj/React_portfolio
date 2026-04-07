import { Link } from 'react-router-dom';

export default function MBADetail() {
  return (
    <section className="section">
      <h3>MBA in International Business</h3>
      <p className="section-subtitle">Alagappa University</p>
      <p className="section-subtitle">2024 - 2026</p>

      <h4>Overview</h4>
      <p>
        Advanced management program focusing on international business strategy, global markets, cross-cultural management, 
        and international trade. Gaining expertise in managing businesses across multiple countries and understanding 
        global economic dynamics.
      </p>

      <h4>Key Coursework</h4>
      <ul>
        <li>International Business Strategy</li>
        <li>Global Marketing Management</li>
        <li>Cross-Cultural Management</li>
        <li>International Trade & Finance</li>
        <li>Global Supply Chain Management</li>
        <li>International Business Law</li>
      </ul>

      <h4>Current Focus</h4>
      <ul>
        <li>Developing expertise in global market expansion</li>
        <li>Understanding international compliance and regulations</li>
        <li>Building skills in managing distributed teams</li>
        <li>Exploring emerging markets and opportunities</li>
      </ul>

      <Link className="btn" to="/portfolio" state={{ scrollTo: 'education' }}>Back to home</Link>
    </section>
  );
}
