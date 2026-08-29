"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Code2,
  Database,
  BrainCircuit,
  Server,
  Layers3,
  Terminal,
  ExternalLink,
  Sparkles,
  Menu,
  X,
  Box,
  Orbit,
  Cpu
} from "lucide-react";
import { useState, type MouseEvent, type ReactNode } from "react";

const GITHUB_URL = "https://github.com/cherukuriyogini";
const LINKEDIN_URL = "https://in.linkedin.com/in/cherukuri-yogini-b90410380";

const projects = [
  {
    number: "01",
    title: "SkillXchange",
    subtitle: "Individual Capstone · Peer-to-Peer Skill Exchange",
    description:
      "A full-stack skill exchange platform that connects learners and mentors through live sessions, AI-assisted learning, peer groups, gamification and role-based experiences.",
    contribution: [
      "Built learner, mentor, moderator and admin experiences with role-based access.",
      "Implemented real-time communication with Socket.IO and WebRTC-based live sessions.",
      "Integrated Gemini-powered AI tutoring, learning paths, document Q&A and session summaries.",
      "Worked with MongoDB, Redis caching, Docker and CI-oriented development workflows."
    ],
    stack: [
      "React 19",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "WebRTC",
      "Gemini AI",
      "Docker"
    ],
    github: "https://github.com/cherukuriyogini/SKILLXCHANGE-CP",
    live: "https://skillxchange-cp.vercel.app/home"
  },
  {
    number: "02",
    title: "Flipkart Smart Wishlist",
    subtitle: "Kalvium Team Project · Smart E-Commerce Wishlist",
    description:
      "A production-style smart wishlist and e-commerce application with stock synchronization, optimistic cart interactions, search, filtering, checkout flows and inventory management.",
    contribution: [
      "Worked on a Next.js 14 application backed by PostgreSQL and Prisma ORM.",
      "Implemented authentication and protected application flows using NextAuth.",
      "Built stock-aware wishlist behavior, cart workflows, checkout and order management.",
      "Used Vitest, Docker and deployment-oriented engineering practices as part of the team project."
    ],
    stack: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "NextAuth",
      "Tailwind CSS",
      "Vitest",
      "Docker"
    ],
    github: "https://github.com/kalviumcommunity/FLIPKART-WISHLIST_kalvium-community",
    live: "https://flipkart-wishlist-kalvium-community.vercel.app/login?callbackUrl=https%3A%2F%2Fflipkart-wishlist-kalvium-community.vercel.app%2Fhome"
  }
];

const skillGroups = [
  {
    icon: Code2,
    title: "Programming",
    items: ["JavaScript", "TypeScript", "Problem Solving"]
  },
  {
    icon: Layers3,
    title: "Frontend",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "Framer Motion"]
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "NextAuth", "Socket.IO", "WebRTC"]
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma ORM", "Redis"]
  },
  {
    icon: BrainCircuit,
    title: "AI & Product Features",
    items: ["Gemini AI", "AI Tutor", "Document Q&A", "Learning Paths", "AI Summaries"]
  },
  {
    icon: Terminal,
    title: "Engineering",
    items: ["Git", "GitHub", "Docker", "CI", "Vitest", "Vercel"]
  }
];

const contributions = [
  ["01", "Product Thinking", "I focus on the user problem first and connect technical decisions to a useful product experience."],
  ["02", "Full-Stack Development", "I work across frontend interfaces, backend APIs, authentication, databases and deployment."],
  ["03", "Real-Time Features", "I have built interactive experiences using Socket.IO, live state updates and WebRTC communication."],
  ["04", "AI Integration", "I integrate AI as a practical product capability through tutoring, summaries and guided learning features."],
  ["05", "Engineering Workflow", "I use GitHub, Docker, testing and CI practices to make projects easier to review, ship and maintain."]
];

function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [transform, setTransform] = useState("perspective(1100px) rotateX(0deg) rotateY(0deg)");

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 14;
    const rotateX = (0.5 - y) * 12;
    setTransform(`perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  return (
    <div
      className={`tiltShell ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={() => setTransform("perspective(1100px) rotateX(0deg) rotateY(0deg)")}
      style={{ transform }}
    >
      {children}
    </div>
  );
}

function HeroScene() {
  return (
    <TiltCard className="heroSceneShell">
      <div className="heroScene">
        <div className="sceneGrid" />
        <div className="sceneGlow" />
        <motion.div
          className="coreOrb"
          animate={{ rotate: 360, y: [0, -10, 0] }}
          transition={{ rotate: { duration: 18, repeat: Infinity, ease: "linear" }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        >
          <div className="coreOrbInner"><Cpu size={42} /></div>
        </motion.div>
        <motion.div className="orbitRing orbitRingOne" animate={{ rotateZ: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} />
        <motion.div className="orbitRing orbitRingTwo" animate={{ rotateX: 360, rotateZ: -360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} />
        <motion.div className="orbitDot dotOne" animate={{ y: [0, -16, 0] }} transition={{ duration: 3.2, repeat: Infinity }} />
        <motion.div className="orbitDot dotTwo" animate={{ y: [0, 18, 0] }} transition={{ duration: 4.1, repeat: Infinity }} />

        <motion.div className="floatPanel panelA" animate={{ y: [0, -12, 0], rotateZ: [-4, -2, -4] }} transition={{ duration: 5, repeat: Infinity }}>
          <Box size={18} />
          <div><span>Build</span><strong>Full-Stack</strong></div>
        </motion.div>
        <motion.div className="floatPanel panelB" animate={{ y: [0, 13, 0], rotateZ: [5, 3, 5] }} transition={{ duration: 5.5, repeat: Infinity }}>
          <Orbit size={18} />
          <div><span>Explore</span><strong>Real-Time + AI</strong></div>
        </motion.div>
        <motion.div className="floatPanel panelC" animate={{ x: [0, 8, 0], y: [0, -5, 0] }} transition={{ duration: 6, repeat: Infinity }}>
          <span className="metric">9.26</span>
          <small>CGPA</small>
        </motion.div>
      </div>
    </TiltCard>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <main className="siteRoot">
      <div className="ambient ambientOne" />
      <div className="ambient ambientTwo" />

      <nav className="nav glass3d">
        <button className="brand" onClick={() => scrollTo("home")}>YC<span>.</span></button>
        <div className={`navLinks ${open ? "show" : ""}`}>
          {[["about", "About"], ["skills", "Skills"], ["projects", "Projects"], ["contact", "Contact"]].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)}>{label}</button>
          ))}
        </div>
        <a className="navCta" href={LINKEDIN_URL} target="_blank" rel="noreferrer">Connect <ArrowUpRight size={16} /></a>
        <button className="menuBtn" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </nav>

      <section id="home" className="hero section">
        <div className="heroContent">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
            B.Tech · Software Product Engineering · Kalvium
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Full-Stack Developer building <span>production-ready web applications.</span>
          </motion.h1>
          <motion.p className="heroText" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            I&apos;m Cherukuri Yogini, a second-year B.Tech student at Kalvium focused on Software Product Engineering. I enjoy building full-stack products, real-time experiences and AI-assisted features that solve practical problems.
          </motion.p>
          <motion.div className="heroActions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <button className="primaryBtn depthBtn" onClick={() => scrollTo("projects")}>Explore my work <ArrowUpRight size={18} /></button>
            <a className="secondaryBtn depthBtn" href={GITHUB_URL} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
            <a className="secondaryBtn depthBtn" href={LINKEDIN_URL} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
          </motion.div>
        </div>
        <HeroScene />
      </section>

      <section id="about" className="section about">
        <div className="sectionHead">
          <p className="eyebrow">01 / ABOUT</p>
          <h2>A student developer who likes to understand the whole product.</h2>
        </div>
        <div className="aboutGrid">
          <TiltCard className="about3dCard">
            <div className="aboutCardInner">
              <p className="lead">I&apos;m a second-year B.Tech student at Kalvium studying Software Product Engineering, with a current CGPA of 9.26.</p>
              <p>My project work covers frontend development, backend APIs, authentication, databases, real-time communication, AI integrations, testing, Docker and deployment. I learn best by building complete applications and improving them through iteration.</p>
            </div>
          </TiltCard>
          <div className="facts3d">
            {[ ["9.26", "CGPA"], ["2nd", "B.Tech year"], ["2", "Featured projects"] ].map(([value, label], index) => (
              <motion.div key={label} className="factCube" whileHover={{ y: -10, rotateX: -5, rotateY: index % 2 ? -7 : 7 }}>
                <strong>{value}</strong><span>{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section skills">
        <div className="sectionHead">
          <p className="eyebrow">02 / SKILLS</p>
          <h2>My technical toolkit, layered in 3D.</h2>
          <p>Technologies represented in the products I have built and worked on.</p>
        </div>
        <div className="skillGrid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <TiltCard className="skillTilt" key={group.title}>
                <article className="skillCard" style={{ transform: `translateZ(${18 + index * 2}px)` }}>
                  <div className="skillIcon3d"><Icon size={24} /></div>
                  <h3>{group.title}</h3>
                  <div className="chips">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                </article>
              </TiltCard>
            );
          })}
        </div>
      </section>

      <section className="section contributions">
        <div className="sectionHead">
          <p className="eyebrow">03 / CONTRIBUTIONS</p>
          <h2>What I bring to a development team.</h2>
        </div>
        <div className="contributionList">
          {contributions.map(([num, title, text]) => (
            <motion.div className="contribution contribution3d" key={num} whileHover={{ x: 10, z: 20 }}>
              <span>{num}</span><h3>{title}</h3><p>{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="sectionHead projectIntro">
          <div><p className="eyebrow">04 / SELECTED WORK</p><h2>Projects you can tilt, open and explore.</h2></div>
          <p>My individual capstone and collaborative Kalvium team project, with direct links to the code and live applications.</p>
        </div>
        <div className="projectList">
          {projects.map((project) => (
            <TiltCard className="projectTilt" key={project.title}>
              <article className="projectCard">
                <div className="projectLayer projectLayerBack" />
                <div className="projectLayer projectLayerMid" />
                <div className="projectContent3d">
                  <div className="projectTop">
                    <span className="projectNumber">{project.number}</span>
                    <div className="projectLinks">
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}><Github size={18}/></a>
                      <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}><ExternalLink size={18}/></a>
                    </div>
                  </div>
                  <p className="projectSubtitle">{project.subtitle}</p>
                  <h3>{project.title}</h3>
                  <p className="projectDescription">{project.description}</p>
                  <h4>Project highlights</h4>
                  <ul>{project.contribution.map((item) => <li key={item}>{item}</li>)}</ul>
                  <div className="chips projectChips">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </section>

      <section className="section education">
        <TiltCard className="educationTilt">
          <div className="educationCard">
            <div><p className="eyebrow">05 / EDUCATION</p><h2>B.Tech — Software Product Engineering</h2><p>Kalvium</p></div>
            <div className="educationMeta"><strong>9.26 CGPA</strong><span>2nd Year</span></div>
          </div>
        </TiltCard>
      </section>

      <section id="contact" className="section contact">
        <TiltCard className="contactTilt">
          <div className="contactCard">
            <div className="contactOrb"><Sparkles size={28} /></div>
            <p className="eyebrow">06 / CONNECT</p>
            <h2>Let&apos;s connect and build.</h2>
            <p>I&apos;m interested in learning, collaborating and working on software products where I can contribute and grow as an engineer.</p>
            <a className="primaryBtn depthBtn" href={LINKEDIN_URL} target="_blank" rel="noreferrer"><Linkedin size={18} /> Connect on LinkedIn</a>
            <div className="socials">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer"><Github size={19}/> GitHub</a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer"><Linkedin size={19}/> LinkedIn</a>
            </div>
          </div>
        </TiltCard>
      </section>

      <footer><span>© 2026 Cherukuri Yogini</span><span>Interactive 3D portfolio · Next.js · React · TypeScript</span></footer>
    </main>
  );
}
