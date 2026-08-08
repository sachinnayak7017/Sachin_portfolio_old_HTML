const { useState, useEffect, useRef } = React;

// ---------- Icons (inline SVG, no icon library) ----------
const Icon = {
  menu: (p) => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></svg>,
  close: (p) => <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" /></svg>,
  arrowUpRight: (p) => <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" {...p}><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>,
  award: (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="12" cy="8" r="6" /><path d="M8.7 13.9 7 22l5-3 5 3-1.7-8.1" /></svg>,
  mail: (p) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></svg>,
  phone: (p) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.8 2Z" /></svg>,
  pin: (p) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>,
  download: (p) => <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" {...p}><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></svg>,
  github: (p) => <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...p}><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.9-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.5A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" /></svg>,
  linkedin: (p) => <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...p}><path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-6.98-5.94-8.68-2.91V8.48Z" /></svg>,
  code: (p) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...p}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  briefcase: (p) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...p}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
  globe: (p) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...p}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20Z" /></svg>,
  instagram: (p) => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...p}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>,
};

const SOCIAL_ICON = {
  github: Icon.github,
  linkedin: Icon.linkedin,
  leetcode: Icon.code,
  naukri: Icon.briefcase,
  email: Icon.mail,
  website: Icon.globe,
  instagram: Icon.instagram,
};

function SocialIcon({ icon, ...rest }) {
  const Cmp = SOCIAL_ICON[icon] || Icon.globe;
  return <Cmp {...rest} />;
}

// ---------- Reveal on scroll ----------
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </Reveal>
  );
}

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

// ---------- Layout ----------
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resources", href: "#resources" },
  { label: "Education", href: "#education" },
  { label: "Tracker", href: "#/tracker" },
  { label: "Resume", href: "#/resume" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const firstName = DATA.profile.name.split(" ")[0];

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <a href="#/" className="brand">
          {firstName}
          <span className="dot">.</span>
        </a>
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button className="menu-btn" aria-label="Open menu" onClick={() => setOpen(true)}>
          <Icon.menu />
        </button>
      </div>

      {open && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-backdrop" onClick={() => setOpen(false)} />
          <div className="mobile-drawer-panel">
            <button className="close-btn" aria-label="Close menu" onClick={() => setOpen(false)}>
              <Icon.close />
            </button>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  const { profile } = DATA;
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <p>© {new Date().getFullYear()} {profile.name}.</p>
        <div className="footer-socials">
          {profile.socialLinks.filter((l) => l.url).map((link) => (
            <a key={link.label} href={link.url} target={link.icon === "email" ? undefined : "_blank"} rel="noopener noreferrer" aria-label={link.label}>
              <SocialIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ---------- Home sections ----------
function Hero() {
  const { profile } = DATA;
  const [photoOk, setPhotoOk] = useState(true);
  return (
    <section className="hero-section">
      <div className="container">
        {profile.photoPath && photoOk && (
          <img
            className="hero-photo"
            src={profile.photoPath}
            alt={profile.name}
            onError={() => setPhotoOk(false)}
          />
        )}
        <p className="hero-eyebrow">Hi, I&apos;m</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-role text-gradient">{profile.role}</p>
        <p className="hero-tagline">{profile.heroTagline}</p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#/resume" className="btn btn-outline">Download Resume</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>

        <div className="hero-socials">
          {profile.socialLinks.filter((l) => l.url).map((link) => (
            <a key={link.label} href={link.url} target={link.icon === "email" ? undefined : "_blank"} rel="noopener noreferrer" aria-label={link.label}>
              <SocialIcon icon={link.icon} />
            </a>
          ))}
        </div>

        <div className="hero-badges">
          {profile.badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionHeading eyebrow="About" title="Who I am" />
        <Reveal className="about-text" delay={0.1}>
          {DATA.aboutParagraphs.map((p, i) => <p key={i}>{p}</p>)}
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="Where I've worked" description="Banking and enterprise systems, from secure API design to production support." />
        <div className="timeline">
          {DATA.experience.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.1} className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-header">
                <h3>{exp.role}</h3>
                <span className="timeline-date">{exp.startDate} — {exp.endDate}</span>
              </div>
              <p className="timeline-company">
                {exp.company} · {exp.employmentType}
                {exp.endDate.toLowerCase() === "present" && <span className="current-badge">Current</span>}
              </p>
              <ul className="bullet-list">
                {exp.responsibilities.map((r, j) => <li key={j}>{r}</li>)}
              </ul>
              <div className="tag-row">
                {exp.technologies.map((t) => <Badge key={t}>{t}</Badge>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function youtubeEmbedUrl(url) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

function ProjectCard({ project, onOpen }) {
  const [imageOk, setImageOk] = useState(true);
  return (
    <div className="card project-card" onClick={() => onOpen(project)}>
      {project.image && imageOk && (
        <img
          className="project-image"
          src={project.image}
          alt={project.title}
          onError={() => setImageOk(false)}
        />
      )}
      <div className="project-card-header">
        <h3>{project.title}</h3>
        <span className="project-date">{project.dateLabel}</span>
      </div>
      <p className="project-desc">{project.shortDescription}</p>
      <div className="tag-row">
        {project.technologies.slice(0, 5).map((t) => <Badge key={t}>{t}</Badge>)}
      </div>
      <div className="project-links">
        <a onClick={(e) => { e.stopPropagation(); onOpen(project); }}>
          View details <Icon.arrowUpRight />
        </a>
        {project.githubUrl && (
          <a className="icon-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} aria-label={`${project.title} on GitHub`}>
            <Icon.github width="16" height="16" />
          </a>
        )}
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close" onClick={onClose}><Icon.close /></button>
        <h2 className="section-title" style={{ marginTop: 0 }}>{project.title}</h2>
        <p style={{ color: "var(--muted)" }}>{project.detailedDescription}</p>

        {project.videoUrl && (
          <div className="project-video">
            <iframe
              src={youtubeEmbedUrl(project.videoUrl)}
              title={`${project.title} demo video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <h3 style={{ fontSize: "0.875rem", fontWeight: 600 }}>Features</h3>
        <ul className="bullet-list">
          {project.features.map((f, i) => <li key={i}>{f}</li>)}
        </ul>

        <h3 style={{ fontSize: "0.875rem", fontWeight: 600 }}>Technology Stack</h3>
        <div className="tag-row">
          {project.technologies.map((t) => <Badge key={t}>{t}</Badge>)}
        </div>

        <div className="modal-actions">
          {project.githubUrl && (
            <a className="btn btn-outline" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Icon.github width="16" height="16" /> View Code
            </a>
          )}
          {project.certificatePath && (
            <a className="btn btn-outline" href={project.certificatePath} target="_blank" rel="noopener noreferrer">
              <Icon.award width="16" height="16" /> View Certificate
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [active, setActive] = useState(null);
  return (
    <section id="projects">
      <div className="container">
        <SectionHeading eyebrow="Projects" title="Things I've built" />
        <div className="grid grid-3">
          {DATA.projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionHeading eyebrow="Skills" title="Technologies I work with" />
        <div className="grid grid-3">
          {DATA.skillCategories.map((cat, i) => (
            <Reveal key={cat.name} delay={(i % 3) * 0.08}>
              <div className="card skill-card">
                <h3>{cat.name}</h3>
                <div className="tag-row">
                  {cat.skills.map((s) => <Badge key={s}>{s}</Badge>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResourceCard({ resource }) {
  const link = resource.type === "Video" ? resource.videoUrl : resource.filePath;
  const isDownload = resource.type !== "Video";
  return (
    <div className="card resource-card">
      <div className="resource-card-header">
        <Badge>{resource.category}</Badge>
        <span className="resource-type">{resource.type}</span>
      </div>
      <h3>{resource.title}</h3>
      {resource.description && <p className="resource-desc">{resource.description}</p>}
      {link && (
        <a
          className="resource-link"
          href={link}
          target={resource.type === "Video" ? "_blank" : undefined}
          rel="noopener noreferrer"
          download={isDownload ? true : undefined}
        >
          {isDownload ? <Icon.download /> : <Icon.arrowUpRight />}
          {resource.type === "Video" ? "Watch video" : "Download"}
        </a>
      )}
    </div>
  );
}

function StudentResources() {
  const categories = ["All", ...new Set(DATA.resources.map((r) => r.category))];
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? DATA.resources : DATA.resources.filter((r) => r.category === active);

  return (
    <section id="resources">
      <div className="container">
        <SectionHeading
          eyebrow="Resources"
          title="Student Resources"
          description="Notes, short notes, and videos for DSA, Java, Spring Boot, and more."
        />
        <div className="filter-row">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-3">
          {filtered.map((resource, i) => (
            <Reveal key={resource.title} delay={(i % 3) * 0.08}>
              <ResourceCard resource={resource} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education">
      <div className="container">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <div className="grid grid-2">
          <div>
            {DATA.education.map((edu, i) => (
              <Reveal key={edu.institution} delay={i * 0.1}>
                <div className="card edu-card">
                  <div className="timeline-header">
                    <h3>{edu.degree}</h3>
                    <span className="timeline-date">{edu.startYear} — {edu.endYear}</span>
                  </div>
                  <p className="edu-meta">{edu.institution} · {edu.location}</p>
                  {edu.cgpa && <p className="edu-cgpa">CGPA: {edu.cgpa}</p>}
                  {edu.coursework.length > 0 && (
                    <div className="tag-row">
                      {edu.coursework.map((c) => <Badge key={c}>{c}</Badge>)}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="card achievements-card">
              <h3>Achievements & Leadership</h3>
              {DATA.achievements.map((a) => (
                <div key={a.title} className="achievement-item">
                  <Icon.award />
                  <div>
                    <p className="achievement-title">
                      {a.title}
                      {a.date && <span className="achievement-date">{a.date}</span>}
                    </p>
                    <p className="achievement-desc">{a.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { profile } = DATA;
  return (
    <section id="contact">
      <div className="container">
        <SectionHeading eyebrow="Contact" title="Let's work together" description="Reach out directly — I'll get back to you as soon as I can." />
        <Reveal delay={0.1} className="contact-grid">
          <a className="contact-item" href={`mailto:${profile.email}`}>
            <Icon.mail /> {profile.email}
          </a>
          <a className="contact-item" href={`tel:${profile.phone}`}>
            <Icon.phone /> {profile.phone}
          </a>
          <div className="contact-item">
            <Icon.pin /> {profile.location}
          </div>
        </Reveal>
        <Reveal delay={0.2} className="contact-social-row">
          {profile.socialLinks.filter((l) => l.url && l.icon !== "email").map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
              <SocialIcon icon={link.icon} width="16" height="16" /> {link.label}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <StudentResources />
      <Education />
      <Contact />
    </>
  );
}

// ---------- Resume page ----------
function ResumePage() {
  const { resumePath, name } = DATA.profile;
  return (
    <section>
      <div className="container resume-page">
        <h1 className="section-title">Resume</h1>
        <p className="section-description">{name}&apos;s resume</p>
        <a className="btn btn-primary" href={resumePath} download style={{ marginTop: "2rem" }}>
          <Icon.download /> Download Resume
        </a>
        <div className="resume-embed">
          <iframe src={resumePath} title="Resume preview" />
        </div>
      </div>
    </section>
  );
}

// ---------- Tracker page ----------
function TrackerPage() {
  return (
    <section>
      <div className="container" style={{ maxWidth: "48rem" }}>
        <SectionHeading eyebrow="Tracker" title="Daily learning log" description="What I'm practicing and building, day by day." />
        {DATA.tracker.length === 0 ? (
          <p style={{ color: "var(--muted)" }}>No entries yet — check back soon.</p>
        ) : (
          DATA.tracker.map((entry, i) => (
            <Reveal key={`${entry.date}-${entry.topic}`} delay={(i % 5) * 0.05}>
              <div className="card tracker-item">
                <div className="tracker-item-header">
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Badge>{entry.category}</Badge>
                    <span className="tracker-topic">{entry.topic}</span>
                  </div>
                  <span className="tracker-date">{entry.date}{entry.hours && ` · ${entry.hours}h`}</span>
                </div>
                {entry.notes && <p className="tracker-notes">{entry.notes}</p>}
              </div>
            </Reveal>
          ))
        )}
      </div>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section>
      <div className="container not-found">
        <p className="section-eyebrow">404</p>
        <h1 className="section-title">Page not found</h1>
        <p className="section-description">The page you&apos;re looking for doesn&apos;t exist.</p>
        <a className="btn btn-primary" href="#/" style={{ marginTop: "2rem" }}>Back to home</a>
      </div>
    </section>
  );
}

// ---------- Router (hash-based, no build step) ----------
// Routes look like "#/resume" or "#/tracker". Plain in-page anchors like
// "#about" are left to the browser's native same-page scrolling and are
// treated as the home route here.
function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return hash;
}

function App() {
  const hash = useHashRoute();
  const route = hash.startsWith("#/") ? hash.slice(2) : "";

  let page;
  if (route === "" || route === "/") {
    page = <Home />;
  } else if (route === "resume") {
    page = <ResumePage />;
  } else if (route === "tracker") {
    page = <TrackerPage />;
  } else {
    page = <NotFoundPage />;
  }

  return (
    <>
      <Navbar />
      <main>{page}</main>
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
