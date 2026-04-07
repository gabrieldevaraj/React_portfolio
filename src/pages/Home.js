import { Link, useLocation } from 'react-router-dom';
import { projects, education } from '../data';
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
            Full Stack Developer • React | Node.js | MongoDB • Building performant
            web apps with elegant UX.
          </p>
          <div className="hero-actions">
            <Link className="navlink" to="/portfolio" state={{ scrollTo: 'contact' }}>
              Contact Me
            </Link>
            <Link className="navlink" to="/portfolio" state={{ scrollTo: 'projects' }}>
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
              I’m a Full Stack Developer with over 4 years of experience building scalable digital products. I specialize in crafting robust Java backends and connecting them to dynamic, responsive React user interfaces.
            </p>
            <p>
              My primary goal is to write accessible, maintainable code that translates into seamless and delightful user experiences.
            </p>
          </div>
          <div className="metrics">
            <div className="metric-card">
              <strong>10+</strong>
              <span>Projects delivered</span>
            </div>
            <div className="metric-card">
              <strong>4+</strong>
              <span>Years of experience</span>
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
            <h4>Java</h4>
            <div className="bar fill-90" />
          </article>
          <article className="skill">
            <h4>React</h4>
            <div className="bar fill-85" />
          </article>
          <article className="skill">
            <h4>Javascript</h4>
            <div className="bar fill-80" />
          </article>
          <article className="skill">
            <h4>CSS</h4>
            <div className="bar fill-75" />
          </article>
          <article className="skill">
            <h4>Github</h4>
            <div className="bar fill-75" />
          </article>
        </div>
      </section>

      <section className="section" id="projects">
        <h3>Featured Projects</h3>
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
              {/* <Link className="btn" to={`/projects/${project.id}`}>
                View details
              </Link> */}
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
              {/* <Link className="btn" to={`/education/${record.id}`}>
                Read more
              </Link> */}
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
          {/* <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required />
            <button type="submit" className="btn">
              Send message
            </button>
          </form> */}
        </div>
      </section>
    </main>
  );
}
