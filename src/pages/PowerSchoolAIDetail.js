import { Link } from 'react-router-dom';

export default function PowerSchoolAIDetail() {
  return (
    <main className="section article-detail">
      <Link className="btn" to="/portfolio" state={{ scrollTo: 'projects' }}>&larr; Back</Link>
      
      <h2>Autonomous AI Orchestrator & LLMOps</h2>
      
      <p>
        <strong>Role:</strong> Software Engineer & AI Innovation Lead<br/>
        <strong>Company:</strong> PowerSchool<br/>
        <strong>Tech Stack:</strong> Python, OpenAI API, N8N, GitHub Copilot Enterprise
      </p>

      <h3>Project Overview</h3>
      <p>
        Identified critical workflow bottlenecks within legacy EdTech systems and independently spearheaded the development of GenAI tooling. This ultimately evolved into a Production-Grade Multi-Agent System operating within a highly regulated enterprise environment.
      </p>

      <h3>Key Initiatives</h3>
      
      <h4>1. The Multi-Agent Orchestrator (SDLC Automation)</h4>
      <p>
        Architected an Autonomous Multi-Agent Architecture that automates minor Jira tickets and accelerates the Software Development Life Cycle (SDLC):
      </p>
      <ul>
        <li><strong>Supervisor Agent:</strong> Integrates directly with Jira to read incoming tickets, evaluates scope, and delegates tasks to specialized sub-agents.</li>
        <li><strong>LLMOps & Version Control:</strong> Built a dedicated Git repository managing agent prompts, roles, and constraints using markdown files.</li>
        <li><strong>Human-in-the-Loop (HITL):</strong> Developers can correct poor AI responses, push fixes to Git, and instantly update the entire organization's AI behavior.</li>
        <li><strong>Automated Execution:</strong> The orchestrator pushes validated code to CMT generation tools for direct deployment in dev environments.</li>
      </ul>

      <h4>2. Teacher Summarizer</h4>
      <p>
        Addressed a massive UX pain point where teachers had to manually read thousands of words in parent forms. Used the OpenAI API to build a one-click summarization tool that condensed 80,000 words of text into rapid, actionable insights, saving thousands of manual hours and demonstrating true customer obsession.
      </p>

      <h4>3. Developer Experience (DevEx) Governance Bot</h4>
      <p>
        Built an N8N Telegram bot that enforces coding standards across the engineering team. Developers text their requirements to the bot, which queries an LLM configured with strict company conventions to return perfectly formatted, standardized codebase nomenclature.
      </p>
      
      <div style={{ marginTop: '2rem' }}>
        <Link className="btn" to="/portfolio" state={{ scrollTo: 'projects' }}>Back to Portfolio</Link>
      </div>
    </main>
  );
}
