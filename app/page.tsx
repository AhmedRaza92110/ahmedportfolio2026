'use client';
import Image from "next/image";

import { useMemo, useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BadgeCheck, Boxes, BriefcaseBusiness,
  CheckCircle2, Cloud, Code2, ExternalLink, Github, Instagram, Layers3, Linkedin,
  Menu, Network, Rocket, Search, ShieldCheck, Smartphone, X, Zap
} from 'lucide-react';

type Project = { name: string; description: string; url?: string; stack?: string; status?: string; category: 'mobile' | 'fullstack' | 'devops'; featured?: boolean };

const instagram = 'https://www.instagram.com/ahmedtechinfo99?exln=MTRicm1jYzhseWE5dA==';
const linkedin = 'https://www.linkedin.com/in/ahmed-raza-qadri-212b402a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
const github = 'https://github.com/AhmedRaza92110';

const projects: Project[] = [
  { category: 'mobile', name: 'Toyota Connect', description: 'A connected-car experience for Toyota Grande and Corolla, featuring real-time and offline GPS tracking, security alerts, and smart notifications.', url: 'https://play.google.com/store/apps/details?id=com.toyotaconnectpakistan.android', stack: 'Android · GPS · Notifications', featured: true },
  { category: 'mobile', name: 'Pipsta Trading Signals', description: 'A mobile trading-signals experience built to help users follow timely market ideas and updates.', url: 'https://play.google.com/store/apps/details?id=pk.pipsta.app', stack: 'Mobile · Trading', featured: true },
  { category: 'mobile', name: 'Mamta Survey', description: 'A Government of Sindh field-survey app supporting data collection across rural communities.', url: 'https://play.google.com/store/apps/details?id=com.softologics.mamta_survey', stack: 'Mobile · Field Data' },
  { category: 'mobile', name: 'Popular Groups CRM', description: 'A business CRM app with offline-friendly workflows and native Android/Kotlin implementation.', url: 'https://play.google.com/store/apps/details?id=com.popular.android.app', stack: 'Android · Kotlin · Offline' },
  { category: 'mobile', name: 'Roomi Builders CRM', description: 'An end-to-end property CRM app supporting tenant and occupant-related workflows.', url: 'https://play.google.com/store/apps/details?id=com.softologics.roomibuilders', stack: 'Mobile · Property CRM' },
  { category: 'mobile', name: 'Revoo Bike — Customer App', description: 'Customer-facing mobile experience for the Revoo Bike ecosystem.', status: 'In progress', stack: 'Mobile · Customer Experience' },
  { category: 'mobile', name: 'Revoo Bike — Admin App', description: 'Administrative mobile app for managing Revoo Bike operations.', status: 'In progress', stack: 'Mobile · Admin Operations' },
  { category: 'mobile', name: 'Falaknaaz CMS', description: 'A mobile CMS app for content and business workflow management.', url: 'https://play.google.com/store/apps/details?id=com.falaknazgroup', stack: 'Mobile · CMS' },
  { category: 'fullstack', name: 'Popular Groups Custom ERP', description: 'A custom enterprise platform supporting internal business operations and workflows.', url: 'https://popular.cloud.vrack.pk/Admin/Auth/signin', stack: 'ERP · Business Operations', featured: true },
  { category: 'fullstack', name: 'Byrsa E-commerce Store', description: 'A Shopify storefront built to support online product discovery and shopping.', url: 'https://byrsa.us/', stack: 'Shopify · E-commerce' },
  { category: 'fullstack', name: 'PACC Student CRM', description: 'A student-lead management system for people interested in joining courses.', url: 'https://pacc.pixeligniteagency.com/', stack: 'Laravel · CRM' },
  { category: 'fullstack', name: 'Building Management ERP', description: 'A multi-module ERP covering CRM, accounting, sales, and purchasing; primary contributions focused on accounting and sales/purchase modules.', url: 'https://buildingmanagement.softologics.com/', stack: 'CodeIgniter 3 · ERP' },
  { category: 'fullstack', name: 'Masky Technology', description: 'A focused, professional landing page for a technology business.', url: 'https://maskytechnology.com/', stack: 'WordPress · Landing Page' },
  { category: 'fullstack', name: 'CoAccounting', description: 'Accounting software for day-to-day financial workflows.', url: 'https://coaccounting.softologics.com/', stack: 'CodeIgniter 3 · Accounting' },
  { category: 'fullstack', name: 'CSS Corner Applicant Form', description: 'A lightweight frontend website with a form to submit applicant information.', url: 'https://csscorner.softologics.com/', stack: 'CodeIgniter 3 · Forms' },
  { category: 'fullstack', name: 'Ma3rood Marketplace', description: 'A broad marketplace spanning e-commerce, auctions, bidding, real estate, on-demand services, and jobs.', url: 'https://ma3rood.com/', stack: 'Laravel · React · Marketplace', featured: true },
  { category: 'fullstack', name: 'Nehlum Corporate CMS', description: 'A company website with a CMS for managing pages and published content.', url: 'https://nehlum.sa/', stack: 'NestJS · React · CMS' },
  { category: 'fullstack', name: 'POB Trust Management', description: 'A charity organization website with an admin panel for managing content and organizational workflows.', url: 'https://www.pobtrust.com/', stack: 'Laravel · React · Admin Panel' },
  { category: 'devops', name: 'Dockerized Three-Tier Application', description: 'A hands-on containerization project for frontend, API, and database tiers, with repeatable local deployment and service-to-service communication.', url: github, stack: 'Docker · Networking · Containers', featured: true },
  { category: 'devops', name: 'AWS E-commerce Deployment', description: 'A resume-focused cloud deployment project for an e-commerce app, designed around automated infrastructure and delivery workflows.', url: github, stack: 'AWS · Terraform · Docker · GitHub Actions', featured: true },
  { category: 'devops', name: 'Multi-Tenant HRM SaaS on AWS', description: 'Production-style infrastructure and delivery architecture for a Laravel API and Vue frontend, including IaC, Kubernetes, CI/CD, security scanning, monitoring, and centralized logging.', url: 'https://github.com/MusheAbdulHakim/Laravel-Smarthr', stack: 'Terraform · Docker · k3s · GitLab CI/CD · ECR · RDS · Route 53 · Nginx', featured: true },
];

const skills = ['AWS', 'Azure', 'Linux', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'GitHub Actions', 'GitLab CI/CD', 'Jenkins', 'Argo CD', 'SonarQube', 'Trivy', 'Prometheus', 'Grafana', 'System Design', 'Scalability'];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.category === 'mobile' ? Smartphone : project.category === 'fullstack' ? Code2 : Cloud;
  return <article className="project-card" style={{ animationDelay: `${Math.min(index * 35, 280)}ms` }}>
    <div className="card-top"><span className={`project-icon ${project.category}`}><Icon size={19} /></span>{project.status ? <span className="status-pill"><span />{project.status}</span> : <span className="card-arrow"><ArrowUpRight size={17} /></span>}</div>
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    <div className="card-bottom"><span className="stack-label">{project.stack}</span>{project.url && <a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>View project <ArrowUpRight size={14} /></a>}</div>
  </article>;
}

export default function Home() {
  const [filter, setFilter] = useState<'all' | Project['category']>('all');
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const visible = useMemo(() => projects.filter(p => (filter === 'all' || p.category === filter) && `${p.name} ${p.description} ${p.stack ?? ''}`.toLowerCase().includes(query.toLowerCase())), [filter, query]);
  const mobileCount = projects.filter(p => p.category === 'mobile').length;
  const webCount = projects.filter(p => p.category === 'fullstack').length;
  const devopsCount = projects.filter(p => p.category === 'devops').length;

  return <main>
    <div className="announcement"><span className="announcement-dot" /> Building products, automating delivery, sharing what I learn <span className="announcement-sep">✦</span> <a href={instagram} target="_blank" rel="noreferrer">Follow the DevOps journey <ArrowUpRight size={12} /></a></div>
    <header className="site-header"><a className="brand" href="#home" aria-label="Ahmed Raza Qadri home"><span className="brand-mark">AQ<span>.</span></span><span className="brand-copy">AHMED RAZA QADRI<small>ENGINEERING PORTFOLIO</small></span></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#expertise" onClick={() => setMenuOpen(false)}>Expertise</a><a href="#devops" onClick={() => setMenuOpen(false)}>DevOps</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a className="nav-cta" href={linkedin} target="_blank" rel="noreferrer">Let’s connect <ArrowUpRight size={15} /></a></nav>
    </header>

    
<section className="hero section-wrap" id="home">
  <div className="hero-copy">
    <div className="eyebrow">
      <span className="eyebrow-line" />
      MOBILE · FULL-STACK · DEVOPS
    </div>

    <h1>
      Engineering ideas<br />
      into <span className="highlight-word">real-world</span><br />
      <span className="headline-bottom">digital products.</span>
    </h1>

    <p className="hero-description">
      I’m Ahmed Raza Qadri — a software engineer building mobile
      experiences, full-stack business platforms, and automated
      cloud delivery workflows. I also teach DevOps and cloud
      engineering to a growing tech community.
    </p>

    <div className="hero-actions">
      <a className="btn btn-primary" href="#work">
        Explore my work <ArrowDownRight size={17} />
      </a>
      <a
        className="btn btn-secondary"
        href={linkedin}
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin size={16} /> Connect on LinkedIn
        <ArrowUpRight size={15} />
      </a>
    </div>

    <div className="social-proof">
      <div className="avatar-stack">
        <span>A</span>
        <span>⌘</span>
        <span>☁</span>
      </div>
      <div>
        <strong>10K+ LinkedIn followers</strong>
        <small>Sharing engineering, learning & building in public</small>
      </div>
      <span className="proof-divider" />
      <div className="proof-insta">
        <Instagram size={17} />
        <span>
          <strong>5K+ active followers</strong>
          <small>DevOps education on Instagram</small>
        </span>
      </div>
    </div>
  </div>

  <div
    className="hero-art"
    aria-label="Ahmed's portrait with connected software engineering disciplines"
  >
    {/* Photo layer: behind the artwork and floating cards */}
    <div className="hero-photo-layer">
      <img src="/ahmed3.png" alt="Ahmed Raza Qadri" />
    </div>

    <div className="art-orbit orbit-one" />
    <div className="art-orbit orbit-two" />

    <div className="art-center">
      <div className="art-center-inner">
        <span className="art-spark">✳</span>
        <span>BUILD</span>
        <strong>BETTER.</strong>
        <small>SHIP SMARTER.</small>
      </div>
    </div>

    <div className="float-card float-mobile">
      <span className="float-icon coral">
        <Smartphone size={18} />
      </span>
      <span>
        <strong>Mobile Apps</strong>
        <small>Build for people</small>
      </span>
      <CheckCircle2 size={15} className="float-check" />
    </div>

    <div className="float-card float-cloud">
      <span className="float-icon blue">
        <Cloud size={18} />
      </span>
      <span>
        <strong>Cloud & DevOps</strong>
        <small>Automate delivery</small>
      </span>
      <CheckCircle2 size={15} className="float-check" />
    </div>

    <div className="float-card float-code">
      <span className="float-icon yellow">
        <Code2 size={18} />
      </span>
      <span>
        <strong>Full-Stack</strong>
        <small>End-to-end systems</small>
      </span>
    </div>

    <div className="art-label label-top">IDEA → EXECUTION</div>
    <div className="art-label label-bottom">
      <span /> ALWAYS LEARNING
    </div>
  </div>

  <a className="scroll-cue" href="#expertise">
    <span /> SCROLL TO EXPLORE <ArrowDownRight size={14} />
  </a>
</section>


    <section className="metrics-band"><div className="metrics-inner"><div className="metric"><strong>{mobileCount.toString().padStart(2, '0')}<sup>+</sup></strong><span>Mobile app projects</span></div><div className="metric"><strong>{webCount.toString().padStart(2, '0')}<sup>+</sup></strong><span>Full-stack projects</span></div><div className="metric"><strong>{devopsCount.toString().padStart(2, '0')}</strong><span>DevOps showcase projects</span></div><div className="metric metric-last"><strong>10K<sup>+</sup></strong><span>LinkedIn community</span></div></div></section>

    <section className="expertise section-wrap" id="expertise"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> WHAT I DO</div><h2>Different disciplines.<br /><span className="muted-heading">One engineering mindset.</span></h2></div><p>From the interface a customer taps to the infrastructure that keeps a service running, I enjoy connecting the dots across the stack.</p></div>
      <div className="expertise-grid"><article className="expertise-card exp-mobile"><div className="expertise-icon"><Smartphone size={22} /></div><span className="expertise-number">01 / MOBILE</span><h3>Mobile App<br />Development</h3><p>Intuitive mobile experiences, offline-ready workflows, API integrations, GPS features, and business apps built around real user needs.</p><div className="tag-row"><span>Flutter</span><span>Android</span><span>Kotlin</span><span>REST APIs</span></div><a href="#work" onClick={() => setFilter('mobile')}>Explore mobile work <ArrowRight size={15} /></a><div className="exp-decoration"><Smartphone size={105} /></div></article>
      <article className="expertise-card exp-fullstack"><div className="expertise-icon"><Layers3 size={22} /></div><span className="expertise-number">02 / FULL-STACK</span><h3>Full-Stack &<br />Business Systems</h3><p>End-to-end platforms including CRM, ERP, marketplaces, e-commerce, accounting, admin panels, and content management.</p><div className="tag-row"><span>Laravel</span><span>React</span><span>Vue</span><span>Node.js</span></div><a href="#work" onClick={() => setFilter('fullstack')}>Explore web projects <ArrowRight size={15} /></a><div className="exp-decoration"><Boxes size={108} /></div></article>
      <article className="expertise-card exp-devops"><div className="expertise-icon"><Cloud size={22} /></div><span className="expertise-number">03 / DEVOPS</span><h3>Cloud, DevOps<br />& Automation</h3><p>Infrastructure as Code, container platforms, CI/CD, security checks, observability, and resilient deployment patterns.</p><div className="tag-row"><span>AWS</span><span>Docker</span><span>Kubernetes</span><span>Terraform</span></div><a href="#devops">Explore DevOps work <ArrowRight size={15} /></a><div className="exp-decoration"><Network size={110} /></div></article></div>
    </section>

    <section className="work-section" id="work"><div className="section-wrap work-wrap"><div className="section-heading work-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> SELECTED PROJECTS</div><h2>Work that makes<br /><span className="muted-heading">an impact.</span></h2></div><p>A selection of mobile apps, full-stack products, and DevOps builds. Open a project to explore the live product or source reference.</p></div>
      <div className="project-toolbar"><div className="filter-tabs" role="group" aria-label="Filter projects"><button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All work <span>{projects.length}</span></button><button className={filter === 'mobile' ? 'active' : ''} onClick={() => setFilter('mobile')}>Mobile apps <span>{mobileCount}</span></button><button className={filter === 'fullstack' ? 'active' : ''} onClick={() => setFilter('fullstack')}>Full-stack <span>{webCount}</span></button><button className={filter === 'devops' ? 'active' : ''} onClick={() => setFilter('devops')}>DevOps <span>{devopsCount}</span></button></div><label className="search-box"><Search size={16} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search projects..." aria-label="Search projects" />{query && <button onClick={() => setQuery('')} aria-label="Clear search"><X size={14} /></button>}</label></div>
      <div className="project-grid">{visible.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}</div>{visible.length === 0 && <div className="empty-state">No projects match that search. Try another keyword or category.</div>}
      <div className="work-footnote"><span className="tiny-star">✳</span> Some projects are in progress or represent ongoing portfolio builds. Details and availability may change over time.</div>
    </div></section>

    <section className="devops-section section-wrap" id="devops"><div className="devops-copy"><div className="eyebrow"><span className="eyebrow-line" /> CLOUD ENGINEERING</div><h2>From commit<br />to <span className="highlight-word">cloud.</span></h2><p className="devops-lead">I’m building practical, production-style DevOps projects that connect infrastructure, secure delivery, and observability into one workflow.</p><div className="devops-points"><div><span className="point-icon"><Rocket size={18} /></span><span><strong>Automated delivery</strong><small>CI/CD pipelines, repeatable builds, deployment strategies, and rollback planning.</small></span></div><div><span className="point-icon"><ShieldCheck size={18} /></span><span><strong>Security built in</strong><small>Image scanning, code quality gates, vulnerability awareness, and least privilege.</small></span></div><div><span className="point-icon"><Network size={18} /></span><span><strong>Observable infrastructure</strong><small>Metrics, alerts, centralized logs, troubleshooting, and reliability practices.</small></span></div></div><a className="btn btn-primary" href={github} target="_blank" rel="noreferrer">Explore GitHub <Github size={16} /><ArrowUpRight size={15} /></a></div>
      <div className="pipeline-card"><div className="pipeline-top"><div><span className="pipeline-dot" /><span className="pipeline-dot" /><span className="pipeline-dot" /></div><span>DELIVERY PIPELINE / 01</span><span className="pipeline-live"><span /> WORKFLOW</span></div><div className="pipeline-title">A repeatable path to production</div><div className="pipeline-flow"><div className="pipeline-node"><span className="node-icon node-purple"><Github size={20} /></span><strong>Commit</strong><small>Git workflow</small></div><div className="flow-line"><ArrowRight size={16} /></div><div className="pipeline-node"><span className="node-icon node-blue"><Code2 size={20} /></span><strong>Build & Test</strong><small>CI automation</small></div><div className="flow-line"><ArrowRight size={16} /></div><div className="pipeline-node"><span className="node-icon node-orange"><ShieldCheck size={20} /></span><strong>Scan</strong><small>Security gates</small></div><div className="flow-line"><ArrowRight size={16} /></div><div className="pipeline-node"><span className="node-icon node-green"><Cloud size={20} /></span><strong>Deploy</strong><small>Cloud runtime</small></div></div><div className="pipeline-divider" /><div className="pipeline-stack-label">TOOLS & TECHNOLOGIES</div><div className="tool-cloud">{['AWS','Azure','Linux','Docker','Kubernetes','Terraform','Ansible','GitHub Actions','GitLab CI/CD','Jenkins','Argo CD','SonarQube','Trivy','Prometheus','Grafana'].map(s => <span key={s}>{s}</span>)}</div><div className="pipeline-footer"><span><CheckCircle2 size={15} /> Build with repeatability</span><span><Zap size={15} /> Improve continuously</span></div></div>
    </section>

    <section className="creator-section" id="about"><div className="creator-inner section-wrap"><div className="creator-badge"><span className="creator-star">✳</span><span>ENGINEER BY PRACTICE<br />EDUCATOR BY PASSION</span></div><div className="creator-copy"><div className="eyebrow"><span className="eyebrow-line" /> BUILDING IN PUBLIC</div><h2>Learning is better<br />when we <span className="highlight-word">share it.</span></h2><p>I create approachable technical content to help developers understand how real-world systems fit together — from Linux fundamentals and Docker to AWS, CI/CD, Kubernetes, infrastructure automation, monitoring, system design, and scalability.</p><div className="creator-stats"><div><strong>10K+</strong><span>LinkedIn followers</span></div><div><strong>5K+</strong><span>Active Instagram followers</span></div><div><strong>17</strong><span>DevOps topics explored</span></div></div><div className="creator-links"><a href={instagram} target="_blank" rel="noreferrer"><Instagram size={18} /><span><strong>Instagram</strong><small>@ahmedtechinfo99</small></span><ArrowUpRight size={16} /></a><a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /><span><strong>LinkedIn</strong><small>Connect professionally</small></span><ArrowUpRight size={16} /></a><a href={github} target="_blank" rel="noreferrer"><Github size={18} /><span><strong>GitHub</strong><small>Explore code & projects</small></span><ArrowUpRight size={16} /></a></div></div></div></section>

    <section className="cert-section section-wrap"><div className="cert-heading"><div className="eyebrow"><span className="eyebrow-line" /> CONTINUOUS GROWTH</div><h2>Cloud certification<br /><span className="muted-heading">learning path.</span></h2><p>Focused on building cloud knowledge that translates into practical engineering decisions.</p></div><div className="cert-cards"><article className="cert-card"><div className="cert-brand aws">aws<span>☁</span></div><div className="cert-content"><span className="cert-kicker">AWS · PROFESSIONAL TRACK</span><h3>AWS Certified DevOps Engineer – Professional</h3><p>DOP-C02 · Focus on CI/CD, automation, monitoring, security, and resilient AWS operations.</p><span className="learning-pill"><span /> Certification track</span></div><BadgeCheck className="cert-watermark" size={54} /></article><article className="cert-card"><div className="cert-brand azure"><span className="azure-mark">▥</span>Microsoft Azure</div><div className="cert-content"><span className="cert-kicker">AZURE · ADMINISTRATOR TRACK</span><h3>Microsoft Certified: Azure Administrator Associate</h3><p>AZ-104 · Focus on identity, governance, storage, compute, networking, and monitoring.</p><span className="learning-pill"><span /> Certification track</span></div><BadgeCheck className="cert-watermark" size={54} /></article></div><p className="cert-note">Certification labels indicate the learning tracks showcased here; update this section to “Certified” once each credential has been earned.</p></section>

    <section className="contact-section"><div className="contact-inner section-wrap"><div><div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> HAVE A PROJECT IN MIND?</div><h2>Let’s make<br />something <span>great.</span></h2><p>Have a mobile app, business platform, or cloud automation challenge? Let’s talk about turning it into a thoughtful, scalable solution.</p></div><div className="contact-actions"><a className="btn btn-white" href={linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={17} /></a><a className="btn btn-outline-light" href={github} target="_blank" rel="noreferrer">Explore GitHub <Github size={16} /></a><a className="contact-social" href={instagram} target="_blank" rel="noreferrer"><Instagram size={17} /> Follow technical content on Instagram</a></div><div className="contact-decoration">AQ<span>.</span></div></div></section>
    <footer className="site-footer"><a className="footer-brand" href="#home">AQ<span>.</span></a><span>© {new Date().getFullYear()} Ahmed Raza Qadri. Built with curiosity and care.</span><div><a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a><a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a><a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={16} /></a><a href="#home" aria-label="Back to top"><ArrowUpRight size={16} /></a></div></footer>
  </main>;
}
