import { useParams, Link, useLocation } from 'react-router-dom';
import { projects } from '../data';

export default function ProjectDetail() {
  const { id } = useParams();
  const location = useLocation();
  const project = projects.find((item) => item.id === id);
  const backLink = location.state?.from === '/blogs' ? '/blogs' : '/portfolio';
  const backState = backLink === '/portfolio' ? { scrollTo: 'projects' } : undefined;

  if (!project) {
    return (
      <section className="section">
        <h3>Project Not Found</h3>
        <p>Try another page.</p>
        <Link className="btn" to={backLink} state={backState}>Back</Link>
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
      <Link className="btn" to={backLink} state={backState}>Back</Link>
    </section>
  );
}
