import { Link, useLocation } from 'react-router-dom';
import { projects, education, experience } from '../data';
import { useEffect } from 'react';

export default function Home() {
    const location = useLocation();

  useEffect(() => {
    // If the link passed the secret state, trigger the scroll
    if (location.state?.scrollTo) {
      const projectsSection = document.getElementById(location.state.scrollTo);
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Hey, I&apos;m Gabriel Devaraj</h1>
          <p>
            Software Engineer • AI Integration & Enterprise Architecture • Java | Python | React
          </p>
          <div className="hero-actions">
            <Link className="btn" to="/portfolio" state={{ scrollTo: 'contact' }}>
              Contact Me
            </Link>
            <Link className="btn secondary" to="/portfolio" state={{ scrollTo: 'projects' }}>
              View Work
            </Link>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <h3>About</h3>
        <div className="two-col">
          <div>
            <p>
              I’m a Software Engineer with over 5 years of experience architecting and building scalable enterprise solutions. From overhauling global ecommerce workflows to spearheading AI integrations in EdTech, I specialize in bridging complex backend architectures with seamless user experiences.
            </p>
            <p>
              My dual foundation—deep technical expertise coupled with an MBA in International Business—allows me to not only write robust code, but also understand product strategy, stakeholder orchestration, and customer impact.
            </p>
          </div>
          <div className="metrics">
            <div className="metric-card">
              <strong>10+</strong>
              <span>Enterprise Projects</span>
            </div>
            <div className="metric-card">
              <strong>5+</strong>
              <span>Years of Experience</span>
            </div>
            <div className="metric-card">
              <strong>15+</strong>
              <span>Certifications</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <h3>Skills</h3>
        <div className="skill-grid">
          <article className="skill">
            <h4>Java / Spring Boot</h4>
            <div className="bar fill-90" />
          </article>
          <article className="skill">
            <h4>Python / AI Orchestration</h4>
            <div className="bar fill-85" />
          </article>
          <article className="skill">
            <h4>React / JS</h4>
            <div className="bar fill-85" />
          </article>
          <article className="skill">
            <h4>System Architecture</h4>
            <div className="bar fill-80" />
          </article>
          <article className="skill">
            <h4>Cloud (GCP / Azure)</h4>
            <div className="bar fill-75" />
          </article>
        </div>
      </section>

      <section className="section" id="experience">
        <h3>Experience</h3>
        <div className="grid">
          {experience.map((record) => (
            <article key={record.id} className="card">
              <Link className="" to={`/experience/${record.id}`}>
              <h4>{record.role}</h4>
              <p>{record.company}</p>
              <small>{record.duration}</small>
            </Link></article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <h3>Featured Work</h3>
        <div className="grid">
          {projects.filter(project => project.showInPortfolio).map((project) => (
            <article key={project.id} className="card project-card">
              <Link className="" to={`/projects/${project.id}`}><h4>{project.title}</h4>
              <p>{project.summary}</p>
              <div className="tag-row">
                {project.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="education">
        <h3>Education</h3>
        <div className="grid">
          {education.map((record) => (
            <article key={record.id} className="card">
              <Link className="" to={`/education/${record.id}`}>
              <h4>{record.degree}</h4>
              <p>{record.school}</p>
              <small>{record.year}</small>
            </Link></article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <h3>Contact</h3>
        <div className="contact-box">
          <div>
            <p>Reach out for collaborations, full-time opportunities, or freelance work.</p>
            <p>
              Email: <a target="_blank" rel="noopener noreferrer" href="mailto:gabrieldevarajv@gmail.com">gabrieldevarajv@gmail.com</a>
            </p>
            <p>
              LinkedIn: <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gabriel-devaraj/">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
