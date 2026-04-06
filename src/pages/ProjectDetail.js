import { useParams, Link } from 'react-router-dom';
import { projects } from '../data';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <section className="section">
        <h3>Project Not Found</h3>
        <p>Try another project from the home page.</p>
        <Link className="btn" to="/" state={{ scrollTo: 'projects' }}>Back to home</Link>
      </section>
    );
  }

  return (
    <section className="section">
      <h3>{project.title}</h3>
      <p>{project.details}</p>
      <h4>Tech</h4>
      <ul>
        {project.tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link className="btn" to="/" state={{ scrollTo: 'projects' }}>Back to home</Link>
    </section>
  );
}
