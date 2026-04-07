import { Link } from 'react-router-dom';

export default function BTechDetail() {
  return (
    <section className="section">
      <h3>B.Tech in Electronics and Communication Engineering</h3>
      <p className="section-subtitle">Karunya Institute of Technology and Sciences</p>
      <p className="section-subtitle">2017 - 2021</p>

      <h4>Overview</h4>
      <p>
        Comprehensive engineering degree focusing on electronics design, digital signal processing, communication systems, 
        and microcontroller programming. Developed strong fundamentals in circuit design, embedded systems, and telecommunications.
      </p>

      <h4>Key Coursework</h4>
      <ul>
        <li>Digital Electronics & Logic Design</li>
        <li>Microprocessors and Microcontrollers</li>
        <li>Analog Communications</li>
        <li>Digital Signal Processing</li>
        <li>Electromagnetic Theory</li>
        <li>Network Analysis</li>
      </ul>

      <h4>Projects & Achievements</h4>
      <ul>
        <li>Designed and implemented embedded systems projects</li>
        <li>Worked on IoT and sensor-based applications</li>
        <li>Active in technical clubs and workshops</li>
      </ul>

      <Link className="btn" to="/portfolio" state={{ scrollTo: 'education' }}>Back to home</Link>
    </section>
  );
}
