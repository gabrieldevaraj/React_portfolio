import { useParams, Link } from 'react-router-dom';
import { education } from '../data';

export default function EducationDetail() {
  const { id } = useParams();
  const record = education.find((item) => item.id === id);

  if (!record) {
    return (
      <section className="section">
        <h3>Education Record Not Found</h3>
        <p>Return home and pick another entry.</p>
        <Link className="btn" to="/">Back to home</Link>
      </section>
    );
  }

  return (
    <section className="section">
      <h3>{record.degree}</h3>
      <p>{record.school}</p>
      <p>{record.year}</p>
      <p>{record.details}</p>
      <Link className="btn" to="/">Back to home</Link>
    </section>
  );
}
