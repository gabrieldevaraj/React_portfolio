import { Link } from 'react-router-dom';

export default function ChurchERPDetail() {
  return (
    <main className="section article-detail">
      <Link className="btn" to="/portfolio" state={{ scrollTo: 'projects' }}>&larr; Back</Link>
      
      <h2>Multi-Tenant Enterprise Church ERP & Financial Portal</h2>
      
      <p>
        <strong>Project Type:</strong> SaaS Enterprise Resource Planning (ERP) Platform<br/>
        <strong>Target Audience:</strong> Dioceses, Local Churches, Financial Collectors<br/>
        <strong>Architecture:</strong> Microservices via Google Cloud Run, PostgreSQL, React 18, Spring Boot 3
      </p>

      <h3>Project Overview</h3>
      <p>
        I architected and developed a massive multi-tenant ERP platform designed to modernize church administration. The platform serves as a complete ledger, membership directory, and workflow automation tool for complex regional church networks.
      </p>

      <h3>Multi-Tier Role-Based Access Control (RBAC)</h3>
      <p>
        The platform ensures strict data isolation and security with a 6-Tier Hierarchical Authorization System:
      </p>
      <ul>
        <li><strong>Super Admin:</strong> Global system administration and onboarding.</li>
        <li><strong>Diocese Admin:</strong> Oversees churches, pastor transfers, and regional analytics.</li>
        <li><strong>Church Admin:</strong> Complete control over local parish registries and finance.</li>
        <li><strong>Pastor/Clergy:</strong> Pastoral care, spiritual timeline management, and prayer requests.</li>
        <li><strong>Finance Collector:</strong> Realtime field cash collection, double-entry ledger oversight, and thermal receipt printing.</li>
        <li><strong>Parishioner Portal:</strong> Self-service access to family ledgers and sacramental status.</li>
      </ul>

      <h3>Technical Highlights</h3>
      <ul>
        <li><strong>Multi-Tenant Architecture:</strong> Header-based tenant resolution (X-Church-Subdomain) with strict database layer isolation.</li>
        <li><strong>Double-Entry Accounting:</strong> Real-time in-hand cash tracking per collector and complex delta computations.</li>
        <li><strong>Third-Party Integrations:</strong> Meta WhatsApp Cloud API for automated greetings and event notifications.</li>
        <li><strong>Smart Search:</strong> Debounced realtime autocomplete UI for filtering thousands of members instantly.</li>
      </ul>
      
      <div style={{ marginTop: '2rem' }}>
        <Link className="btn" to="/portfolio" state={{ scrollTo: 'projects' }}>Back to Portfolio</Link>
      </div>
    </main>
  );
}
