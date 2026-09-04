'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  Download,
  ExternalLink,
  GitBranch,
  AtSign,
  Mail,
  Menu,
  Moon,
  Send,
  Sparkles,
  Sun,
  X,
} from 'lucide-react'

const projects = [
  { title: 'Task Manager App', description: 'A full-stack workspace to plan, track, and ship work with confidence.', tags: ['MongoDB', 'Express', 'React', 'Node'], featured: true },
  { title: 'Full Stack CRUD Application', description: 'A focused React frontend connected to an Express and MongoDB backend.', tags: ['React', 'Express', 'MongoDB'] },
  { title: 'Authentication System', description: 'JWT-based signup and login with hashed passwords and protected middleware.', tags: ['Node.js', 'JWT', 'bcrypt'] },
  { title: 'REST API with Express & MongoDB', description: 'A clean CRUD API designed, documented, and tested with Postman.', tags: ['Express', 'MongoDB', 'Postman'] },
  { title: 'React Router Multi-Page App', description: 'A multi-view React experience with client-side routing and a custom 404.', tags: ['React', 'Router', 'Vite'] },
  { title: 'Responsive Static Website', description: 'A multi-page HTML, CSS, and JavaScript site with a shared navbar.', tags: ['HTML5', 'CSS3', 'JavaScript'] },
]

const skillGroups = [
  ['Frontend', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'React Router', 'Vite'],
  ['Backend', 'Node.js', 'Express.js', 'REST API design'],
  ['Database', 'MongoDB', 'Mongoose'],
  ['Auth & Security', 'JWT', 'bcrypt password hashing'],
  ['Tools', 'Git', 'GitHub', 'VS Code', 'Postman', 'npm'],
]

export default function Portfolio() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)

  return (
    <div className={dark ? 'portfolio dark' : 'portfolio'}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Go to top"><span>&lt;</span>dev<span>/&gt;</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <button className="theme-button" onClick={() => setDark(!dark)} aria-label="Toggle color theme">{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          <a className="header-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Available for opportunities</p>
            <h1>Building things<br /><em>that matter.</em></h1>
            <p className="hero-intro">I&apos;m <strong>Adithi</strong>, a full stack developer focused on creating reliable, thoughtful web experiences with the MERN stack.</p>
            <div className="hero-actions"><a className="primary-button" href="#projects">View my work <ArrowUpRight size={17} /></a><a className="text-button" href="#contact">Download resume <Download size={16} /></a></div>
            <div className="social-row"><a href="https://github.com" aria-label="GitHub"><GitBranch size={18} /></a><a href="https://linkedin.com" aria-label="LinkedIn"><AtSign size={18} /></a><a href="mailto:hello@example.com" aria-label="Email"><Mail size={18} /></a></div>
          </div>
          <div className="hero-art" aria-label="Developer workspace illustration">
            <div className="code-window"><div className="window-bar"><span /><span /><span /><small>portfolio.js</small></div><pre><span className="code-muted">01</span> <b>const</b> <i>developer</i> = {'{'}{`\n`}<span className="code-muted">02</span>   name: <strong>&apos;Adithi&apos;</strong>,{`\n`}<span className="code-muted">03</span>   stack: [<strong>&apos;MERN&apos;</strong>],{`\n`}<span className="code-muted">04</span>   passion: <strong>&apos;solving problems&apos;</strong>{`\n`}<span className="code-muted">05</span> {'}'} </pre><div className="terminal-line"><span>➜</span> npm run build <Check size={14} /></div></div>
            <div className="float-card"><Sparkles size={16} /><span>Always learning<br /><b>always shipping.</b></span></div>
          </div>
        </section>

        <section id="about" className="section-wrap content-section"><div className="section-label">01 <span>About me</span></div><div className="about-grid"><h2>Curious by nature.<br /><em>Builder by choice.</em></h2><div className="about-copy"><p>I&apos;m a Full Stack MERN Developer who enjoys turning complex problems into simple, useful, and beautiful digital products.</p><p>Currently, I&apos;m deepening my understanding of scalable backend architecture and building projects that make an impact. I&apos;m looking for a team where curiosity is valued and great work is a shared habit.</p><a href="#contact" className="inline-link">More about my journey <ArrowUpRight size={15} /></a></div></div></section>

        <section id="skills" className="section-wrap content-section"><div className="section-label">02 <span>Toolkit</span></div><div className="skills-heading"><h2>The tools behind<br /><em>the work.</em></h2><p>A practical, ever-growing toolkit for bringing ideas from first commit to production.</p></div><div className="skills-grid">{skillGroups.map(([title, ...items]) => <div className="skill-group" key={title}><h3>{title}</h3><div className="skill-list">{items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></section>

        <section id="projects" className="section-wrap content-section projects-section"><div className="section-label">03 <span>Selected work</span></div><div className="projects-heading"><h2>Things I&apos;ve<br /><em>made.</em></h2><p>Each project is a chance to learn something new, solve a real problem, and write better code.</p></div><div className="project-grid">{projects.map((project, index) => <article className={project.featured ? 'project-card featured' : 'project-card'} key={project.title}><div className="project-top"><span className="project-index">0{index + 1}</span><a href="https://github.com" aria-label={`View ${project.title} on GitHub`}><GitBranch size={18} /></a></div><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-bottom"><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="https://github.com" className="project-link">View project <ExternalLink size={14} /></a></div></article>)}</div></section>

        <section id="contact" className="contact-section"><div className="section-wrap contact-inner"><div className="section-label">04 <span>Get in touch</span></div><div className="contact-grid"><div><h2>Have a project<br />in mind? <em>Let&apos;s talk.</em></h2><p>I&apos;m always open to hearing about new opportunities, collaborations, or just having a good conversation about the web.</p><div className="contact-links"><a href="mailto:hello@example.com"><Mail size={17} /> hello@example.com</a><a href="https://linkedin.com"><AtSign size={17} /> linkedin.com/in/yourname</a></div></div><form onSubmit={(event) => { event.preventDefault(); setSent(true) }}><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Message<textarea required name="message" placeholder="Tell me a little about your project..." rows={4} /></label><button className="primary-button" type="submit">{sent ? 'Message sent' : 'Send message'} {sent ? <Check size={17} /> : <Send size={16} />}</button></form></div></div></section>
      </main>
      <footer className="site-footer"><div className="section-wrap footer-inner"><span>© 2026 Adithi</span><span>Built with curiosity &amp; caffeine</span><div className="footer-social"><a href="https://github.com"><GitBranch size={17} /></a><a href="https://linkedin.com"><AtSign size={17} /></a></div></div></footer>
    </div>
  )
}
