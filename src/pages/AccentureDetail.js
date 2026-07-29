import { Link } from 'react-router-dom';

export default function AccentureDetail() {
  return (
    <main className="section article-detail">
      <Link className="btn" to="/portfolio" state={{ scrollTo: 'projects' }}>&larr; Back</Link>
      
      <h2>Lenovo Global Seller Platform</h2>
      
      <p>
        <strong>Role:</strong> Application Development Associate<br/>
        <strong>Company:</strong> Accenture<br/>
        <strong>Tech Stack:</strong> Java, Liferay, JavaScript, HTML, CSS
      </p>

      <h3>Project Overview</h3>
      <p>
        Served as a core developer on the Lenovo Global Seller Platform, managing complex enterprise workflows and high-scale eCommerce operations across multiple regions globally. 
      </p>

      <h3>Key Achievements</h3>
      
      <ul>
        <li><strong>Rapid Promotion & Client Recognition:</strong> Delivered such undeniable value to the customer that I earned a rare, off-cycle 32% promotion within my first year, moving quickly from junior developer to a core contributor.</li>
        <li><strong>Mentorship & Leadership:</strong> Promoted to lead and mentor two junior developers. Guided them on Liferay best practices, complex database architectures, and rigorous code reviews.</li>
        <li><strong>Enterprise Culture:</strong> Acted as a "Culture Builder" for a highly distributed, remote team by running virtual team-building initiatives, ensuring high morale during critical release cycles.</li>
        <li><strong>Massive Scale:</strong> Transitioned from simple single-file academic projects directly into massive, sprawling enterprise repositories connected to global databases, mastering strict Git workflows and enterprise deployment strategies.</li>
      </ul>

      <div style={{ marginTop: '2rem' }}>
        <Link className="btn" to="/portfolio" state={{ scrollTo: 'projects' }}>Back to Portfolio</Link>
      </div>
    </main>
  );
}
