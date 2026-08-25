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
  X
} from "lucide-react";
import { useState } from "react";

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

export default function Home() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <main>
      <nav className="nav">
        <button className="brand" onClick={() => scrollTo("home")}>
          YC<span>.</span>
        </button>

        <div className={`navLinks ${open ? "show" : ""}`}>
          {[
            ["about", "About"],
            ["skills", "Skills"],
            ["projects", "Projects"],
            ["contact", "Contact"]
          ].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)}>{label}</button>
          ))}
        </div>

        <a className="navCta" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
          Connect <ArrowUpRight size={16} />
        </a>
        <button className="menuBtn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <section id="home" className="hero section">
        <div className="heroGlow" />
        <div className="heroContent">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            B.Tech · Software Product Engineering · Kalvium
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            I build <span>useful software</span><br />
            from idea to deployment.
          </motion.h1>

          <motion.p
            className="heroText"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I&apos;m Cherukuri Yogini, a second-year B.Tech student at Kalvium
            focused on Software Product Engineering. I enjoy building full-stack
            products, real-time experiences and AI-assisted features that solve
            practical problems.
          </motion.p>

          <motion.div
            className="heroActions"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button className="primaryBtn" onClick={() => scrollTo("projects")}>
              Explore my work <ArrowUpRight size={18} />
            </button>
            <a className="secondaryBtn" href={GITHUB_URL} target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
            <a className="secondaryBtn" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
          </motion.div>
        </div>

        <div className="heroAside">
          <div className="availability"><span /> Open to learning and opportunities</div>
          <div className="codeCard">
            <div className="dots"><i /><i /><i /></div>
            <pre>{`const yogini = {
  education: "B.Tech - Kalvium",
  year: "2nd Year",
  cgpa: 9.26,
  focus: [
    "Full-Stack Products",
    "Real-Time Systems",
    "AI Integration"
  ],
  mindset: "build + learn + improve"
};`}</pre>
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="sectionHead">
          <p className="eyebrow">01 / ABOUT</p>
          <h2>A student developer who likes to understand the whole product.</h2>
        </div>
        <div className="aboutGrid">
          <div>
            <p className="lead">
              I&apos;m a second-year B.Tech student at Kalvium studying Software
              Product Engineering, with a current CGPA of 9.26.
            </p>
            <p>
              My project work covers frontend development, backend APIs,
              authentication, databases, real-time communication, AI integrations,
              testing, Docker and deployment. I learn best by building complete
              applications and improving them through iteration.
            </p>
          </div>
          <div className="facts">
            <div><strong>9.26</strong><span>CGPA</span></div>
            <div><strong>2nd</strong><span>B.Tech year</span></div>
            <div><strong>2</strong><span>Featured projects</span></div>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills">
        <div className="sectionHead">
          <p className="eyebrow">02 / SKILLS</p>
          <h2>My technical toolkit.</h2>
          <p>Technologies represented in the products I have built and worked on.</p>
        </div>
        <div className="skillGrid">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.article
                className="skillCard"
                key={group.title}
                whileHover={{ y: -5 }}
              >
                <Icon size={24} />
                <h3>{group.title}</h3>
                <div className="chips">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </motion.article>
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
            <div className="contribution" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="sectionHead projectIntro">
          <div>
            <p className="eyebrow">04 / SELECTED WORK</p>
            <h2>Projects that show how I build.</h2>
          </div>
          <p>My individual capstone and collaborative Kalvium team project, with direct links to the code and live applications.</p>
        </div>

        <div className="projectList">
          {projects.map((project, index) => (
            <motion.article
              className="projectCard"
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.05 }}
            >
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
              <ul>
                {project.contribution.map((item) => <li key={item}>{item}</li>)}
              </ul>

              <div className="chips projectChips">
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section education">
        <div className="educationCard">
          <div>
            <p className="eyebrow">05 / EDUCATION</p>
            <h2>B.Tech — Software Product Engineering</h2>
            <p>Kalvium</p>
          </div>
          <div className="educationMeta">
            <strong>9.26 CGPA</strong>
            <span>2nd Year</span>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="contactCard">
          <Sparkles size={24} />
          <p className="eyebrow">06 / CONNECT</p>
          <h2>Let&apos;s connect and build.</h2>
          <p>
            I&apos;m interested in learning, collaborating and working on software
            products where I can contribute and grow as an engineer.
          </p>
          <a className="primaryBtn" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            <Linkedin size={18} /> Connect on LinkedIn
          </a>
          <div className="socials">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer"><Github size={19}/> GitHub</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer"><Linkedin size={19}/> LinkedIn</a>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 Cherukuri Yogini</span>
        <span>Built with Next.js · React · TypeScript</span>
      </footer>
    </main>
  );
}
