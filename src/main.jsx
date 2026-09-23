import React, {useEffect, useState} from "react";
import {createRoot} from "react-dom/client";
import {
  ArrowUpRight, Download, Github, Linkedin, Mail, Phone, MapPin,
  ExternalLink, Code2, BrainCircuit, Globe2, ShieldCheck, Trophy,
  GraduationCap, BriefcaseBusiness, Menu, X, ChevronDown, Sparkles
} from "lucide-react";
import "./styles.css";

const links = {
  github: "https://github.com/AyushiNishad",
  linkedin: "https://www.linkedin.com/in/ayushi-nishad-20o6a716",
  leetcode: "https://leetcode.com/u/AYUSHINISHAD/",
  gfg: "https://www.geeksforgeeks.org/profile/nishadayuhw3w",
  hackerRank: "https://www.hackerrank.com/profile/Ayushi153047",
  smartAgri: "https://github.com/AyushiNishad/smart-agriculture-monitoring-system",
  email: "mailto:nishadayushi2006@gmail.com"
};

const skills = [
  ["Python", "Programming"], ["C Programming", "Programming"], ["DSA", "Problem Solving"],
  ["HTML", "Web"], ["CSS", "Web"], ["Frontend Development", "Web"],
  ["Artificial Intelligence", "AI"], ["AI Agents", "AI"], ["APIs", "AI / Web"],
  ["Cyber Security", "Security"], ["Generative AI", "AI"], ["Git & GitHub", "Tools"]
];

const certificates = [
  ["Bharatiya Antariksh Hackathon 2026", "ISRO", "Certificate of participation and successful idea submission.", "/Portfolio/assets/certificates/certificate-01.png"],
  ["Codefuse 2025", "GFG Campus Body AIT", "Certificate of participation in the Codefuse MCQ round.", "/Portfolio/assets/certificates/certificate-02.png"],
  ["Pragati: Path to Future", "Infosys", "Certificate / participation recognition.", "/Portfolio/assets/certificates/certificate-03.png"],
  ["Internshala Student Partner", "Internshala", "Appointment and participation recognition for the ISP program.", "/Portfolio/assets/certificates/certificate-04.png"],
  ["100K Milestone Honor", "CampusCrew", "Recognition for contributing to the CampusCrew community.", "/Portfolio/assets/certificates/certificate-05.png"],
  ["SWAMLCS 24 & TechNova National Quiz Challenge", "Allenhouse Institute of Technology / SVECW", "Certificates of participation shown on this page.", "/Portfolio/assets/certificates/certificate-06.png"],
  ["NextGen AI Hackathon", "AI Academia", "Certificate of participation.", "/Portfolio/assets/certificates/certificate-07.png"],
  ["MongoDB Skill Badge", "MongoDB", "MongoDB skill badge achievement.", "/Portfolio/assets/certificates/certificate-08.png"],
  ["AI Agents for Beginners", "Simplilearn SkillUp", "Certificate of completion for the online course.", "/Portfolio/assets/certificates/certificate-09.png"],
  ["Python Programming Internship", "Intern Infobyte", "Certificate for successfully completing the one-month internship.", "/Portfolio/assets/certificates/certificate-10.png"],
  ["Cyber Security and Ethical Hacking Internship Program", "Edureka", "Certificate of attendance for the demo session.", "/Portfolio/assets/certificates/certificate-11.png"]
];

function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [showTop, setShowTop] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState(0);

  const previousCertificate = () => {
    setActiveCertificate((current) => (current - 1 + certificates.length) % certificates.length);
  };
  const nextCertificate = () => {
    setActiveCertificate((current) => (current + 1) % certificates.length);
  };

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 600);
      const ids = ["home","about","skills","projects","experience","education","achievements","contact"];
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 180) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = id => {
    document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
    setMenu(false);
  };

  return (
    <div>
      <div className="noise"/>
      <nav className="nav">
        <div className="wrap nav-inner">
          <button className="brand" onClick={() => go("home")}>AYUSHI<span>.</span></button>
          <div className={`nav-links ${menu ? "open":""}`}>
            {["about","skills","projects","experience","education","achievements","contact"].map(id =>
              <button key={id} className={active===id ? "active":""} onClick={() => go(id)}>
                {id[0].toUpperCase()+id.slice(1)}
              </button>
            )}
          </div>
          <div className="nav-actions">
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19}/></a>
            <button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Menu">{menu?<X/>:<Menu/>}</button>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-orb orb1"/><div className="hero-orb orb2"/>
          <div className="wrap hero-grid">
            <div className="hero-copy reveal">
              <div className="status"><span/> AVAILABLE FOR OPPORTUNITIES</div>
              <p className="mini">B.TECH • COMPUTER SCIENCE • AI & ML</p>
              <h1>Building ideas into <em>useful technology.</em></h1>
              <p className="lead">I'm Ayushi Nishad, a final-year B.Tech student with a growing foundation in programming, frontend development, Artificial Intelligence and problem-solving.</p>
              <div className="hero-buttons">
                <button className="btn primary" onClick={()=>go("projects")}>Explore my work <ArrowUpRight size={18}/></button>
                <a className="btn ghost" href={`${import.meta.env.BASE_URL}Ayushi_Nishad_Resume.pdf`} download>Resume <Download size={17}/></a>
                
              </div>
              <div className="hero-socials">
                <a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a>
                <a href={links.github} target="_blank" rel="noreferrer"><Github/> GitHub</a>
                <a href={links.leetcode} target="_blank" rel="noreferrer"><Code2/> LeetCode</a>
                <a href={links.gfg} target="_blank" rel="noreferrer">GFG</a>
                <a href={links.hackerRank} target="_blank" rel="noreferrer">HackerRank</a>
              </div>
            </div>
            <div className="hero-visual reveal">
              <div className="portrait-ring"><div className="portrait-card"><img src="/Portfolio/assets/ayushi-profile.png" alt="Ayushi Nishad"/></div></div>
              <div className="float-card fc1"><BrainCircuit/><span><b>AI & ML</b><small>Building & learning</small></span></div>
              <div className="float-card fc2"><Code2/><span><b>50+ Days</b><small>Consistent coding</small></span></div>
              <div className="scroll-hint"><ChevronDown size={16}/> Scroll to explore</div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="wrap">
            <SectionTitle eyebrow="01 / About" title="A curious builder with a practical mindset." text="My focus is learning by building: taking a concept, understanding its fundamentals, and turning it into a working project."/>
            <div className="about-grid">
              <div className="glass about-main reveal">
                <span className="quote-mark">“</span>
                <p>Enthusiastic and quick-learning technology student with a strong foundation in programming, frontend development and problem-solving. I enjoy exploring new technologies and building efficient, real-world solutions.</p>
                <div className="stats">
                  <Stat n="2023–27" l="B.Tech journey"/>
                  <Stat n="4 weeks" l="Python internship"/>
                  <Stat n="50+" l="Coding-day milestone"/>
                </div>
              </div>
              <div className="glass values reveal">
                <h3>What I value</h3>
                <Value icon={<Sparkles/>} title="Continuous learning" text="I like improving through practice, projects and feedback."/>
                <Value icon={<Code2/>} title="Problem solving" text="Breaking problems into understandable, manageable steps."/>
                <Value icon={<Globe2/>} title="Real-world impact" text="Building technology that can be useful beyond a classroom demo."/>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-dark">
          <div className="wrap">
            <SectionTitle eyebrow="02 / Skills" title="Tools, technologies & strengths." text="A practical toolkit developed through coursework, projects, training and hands-on practice."/>
            <div className="skill-layout">
              <div className="skill-groups reveal">
                <SkillGroup icon={<Code2/>} title="Programming" tags={["Python","C Programming","DSA","Problem Solving"]}/>
                <SkillGroup icon={<Globe2/>} title="Web Development" tags={["HTML","CSS","Frontend","Full Stack Exposure","APIs"]}/>
                <SkillGroup icon={<BrainCircuit/>} title="AI & Emerging Tech" tags={["Artificial Intelligence","AI Agents","Generative AI","AI/ML"]}/>
                <SkillGroup icon={<ShieldCheck/>} title="Security" tags={["Cyber Security","Ethical Hacking Awareness"]}/>
              </div>
              <div className="skill-cloud glass reveal">
                <p className="mini">TECH STACK</p>
                <div className="cloud">{skills.map(([s])=><span key={s}>{s}</span>)}</div>
                <p className="muted">Also strengthening communication, teamwork, adaptability, time management and logical thinking.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="wrap">
            <SectionTitle eyebrow="03 / Projects" title="Selected work." text="From frontend fundamentals to an AI-enabled agriculture solution, these projects show my learning progression."/>
            <div className="project-grid">
              <Project
                number="01" icon="🌾" title="Smart Agriculture Monitoring System"
                desc="A software solution designed to assist farmers using real-time weather and location-based information for crop recommendations."
                tags={["Python","APIs","AI/ML","GPS","AI Chatbot"]}
                link={links.smartAgri}
                featured
              />
              <Project
                number="02" icon="🛒" title="Amazon Clone Website"
                desc="A frontend e-commerce interface built to understand page structure, responsive layout, styling and UI design."
                tags={["HTML","CSS","Frontend"]}
              />
            </div>
            <div className="project-note glass reveal"><span>Next build →</span> AI Project ATS / Project Quality Analyzer — a final-year project concept focused on automated GitHub repository analysis and project-quality reporting.</div>
          </div>
        </section>

        <section id="experience" className="section section-dark">
          <div className="wrap">
            <SectionTitle eyebrow="04 / Experience" title="Experience that shaped my learning."/>
            <div className="timeline">
              <TimelineItem date="10 May – 10 June 2025" title="Python Development Intern" org="INFOBYTE" icon={<BriefcaseBusiness/>}>
                Developed two basic games using Python; applied core programming concepts, logic-building techniques and Python libraries, while strengthening problem-solving and analytical thinking.
              </TimelineItem>
              <TimelineItem date="12 February 2026 • Noida" title="Industrial Visit" org="HCL Technologies" icon={<Globe2/>}>
                Gained exposure to corporate work culture and industry practices, including real-world corporate operations and the impact of AI in modern workplaces.
              </TimelineItem>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="wrap">
            <SectionTitle eyebrow="05 / Education" title="Academic foundation."/>
            <div className="edu-grid">
              <EduCard year="2023 — 2027" title="Bachelor of Technology" detail="Computer Science (AI & ML)" school="AllenHouse Institute Of Technology"/>
              <EduCard year="2022 — 2023" title="Intermediate" detail="D.D Vidhya Niketan Girls Education Center" school="Intermediate Education"/>
            </div>
          </div>
        </section>

        <section id="achievements" className="section section-dark">
          <div className="wrap">
            <SectionTitle eyebrow="06 / Achievements" title="Learning, participation & milestones."/>
            <div className="achievement-grid">
              <div className="glass achievement-copy reveal">
                <div className="achievement-icon"><Trophy/></div>
                <p className="mini">CODING MILESTONE</p>
                <h3>50 Days Badge — 2026</h3>
                <p className="muted">A milestone representing consistent problem-solving practice across 50+ days in 2026.</p>
                <div className="event-list">
                  <span>ByteBattle</span><span>Codefuse</span><span>Next Gen AI Hackathon</span><span>Technova National Quiz</span>
                </div>
              </div>
              <div className="badge-frame reveal"><img src="/Portfolio/assets/50-days-badge.png" alt="50 Days coding badge"/></div>
            </div>
            <div className="section-head compact"><p className="mini">CERTIFICATIONS & TRAINING</p><h3>Learning beyond the classroom.</h3></div>
            <div className="cert-carousel" aria-label="Certifications carousel">
              <button className="cert-arrow cert-prev" onClick={previousCertificate} aria-label="Previous certificate">‹</button>
              <div className="cert-stage">
                {certificates.map(([title,issuer,desc,image], index) => (
                  <div
                    className={`cert-slide ${index === activeCertificate ? "active" : ""}`}
                    key={title}
                    aria-hidden={index !== activeCertificate}
                  >
                    <div className="cert-glow"/>
                    <div className="cert glass">
                      <span className="cert-number">{String(index + 1).padStart(2, "0")} / {String(certificates.length).padStart(2, "0")}</span>
                      <div className="cert-image-wrap">
                        <img src={image} alt={`${title} certificate`} className="cert-image" />
                      </div>
                      <div className="cert-info">
                        <small>{issuer}</small>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="cert-arrow cert-next" onClick={nextCertificate} aria-label="Next certificate">›</button>
            </div>
            <div className="cert-dots" aria-label="Choose certificate">
              {certificates.map(([title], index) => (
                <button
                  key={title}
                  className={index === activeCertificate ? "active" : ""}
                  onClick={() => setActiveCertificate(index)}
                  aria-label={`Show certificate ${index + 1}`}
                  aria-current={index === activeCertificate ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="wrap">
            <div className="contact-box reveal">
              <div>
                <p className="mini">07 / CONTACT</p>
                <h2>Let's build something meaningful.</h2>
                <p className="lead">Open to internships, entry-level opportunities, project collaboration and technology discussions.</p>
              </div>
              <div className="contact-links">
                <a href={links.email}><Mail/><span><small>Email</small>nishadayushi2006@gmail.com</span></a>
                <a href="tel:+916387466140"><Phone/><span><small>Phone</small>+91 6387466140</span></a>
                <a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin/><span><small>LinkedIn</small>ayushi-nishad-20o6a716</span></a>
                <a href={links.github} target="_blank" rel="noreferrer"><Github/><span><small>GitHub</small>AyushiNishad</span></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer><div className="wrap footer-inner"><span>© {new Date().getFullYear()} Ayushi Nishad</span><span>B.Tech • AI & ML • Built with React + Vite</span><a href="#home">Back to top ↑</a></div></footer>
      {showTop && <button className="top" onClick={()=>go("home")}>↑</button>}
    </div>
  );
}

function SectionTitle({eyebrow,title,text}) {
  return <div className="section-head reveal"><p className="mini">{eyebrow}</p><h2>{title}</h2>{text && <p className="lead">{text}</p>}</div>
}
function Stat({n,l}) { return <div><b>{n}</b><span>{l}</span></div> }
function Value({icon,title,text}) { return <div className="value"><i>{icon}</i><span><b>{title}</b><small>{text}</small></span></div> }
function SkillGroup({icon,title,tags}) { return <div className="skill-group"><div className="sg-title">{icon}<b>{title}</b></div><div className="chips">{tags.map(x=><span key={x}>{x}</span>)}</div></div> }
function Project({number,icon,title,desc,tags,link,featured}) {
  return <article className={`project glass reveal ${featured?"featured":""}`}><div className="project-top"><span>{number}</span><b>{icon}</b></div><h3>{title}</h3><p>{desc}</p><div className="chips">{tags.map(x=><span key={x}>{x}</span>)}</div>{link?<a className="project-link" href={link} target="_blank" rel="noreferrer">View on GitHub <ExternalLink size={16}/></a>:<span className="project-link muted">Project details available on request</span>}</article>
}
function TimelineItem({date,title,org,icon,children}) {
  return <div className="timeline-item reveal"><div className="timeline-dot">{icon}</div><div className="timeline-card"><p className="mini">{date}</p><h3>{title}</h3><b className="org">{org}</b><p className="muted">{children}</p></div></div>
}
function EduCard({year,title,detail,school}) {
  return <div className="edu-card glass reveal"><div className="edu-icon"><GraduationCap/></div><p className="mini">{year}</p><h3>{title}</h3><b>{detail}</b><p className="muted">{school}</p></div>
}

createRoot(document.getElementById("root")).render(<App />);
