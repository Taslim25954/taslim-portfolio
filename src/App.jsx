

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  FaArrowRight,
  FaBriefcase,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaMapMarkerAlt,
  FaQuoteLeft,
  FaRocket,
  FaServer,
  FaTools,
} from 'react-icons/fa'
import {
  BadgeCheck,
  ChevronRight,
  Menu,
  Moon,
  MoveRight,
  Sun,
  X,
} from 'lucide-react'
import './App.css'

const sections = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'blog',
  'contact',
]

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]

const skillGroups = [
  {
    title: 'Frontend',
    icon: <FaCode />,
    items: [
      { name: 'React', level: 96 },
      { name: 'Next.js', level: 92 },
      { name: 'TypeScript', level: 94 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Redux', level: 88 },
      { name: 'Framer Motion', level: 90 },
    ],
  },
  {
    title: 'Backend',
    icon: <FaServer />,
    items: [
      { name: 'Node.js', level: 93 },
      { name: 'Express.js', level: 91 },
      { name: 'MongoDB', level: 89 },
      { name: 'REST APIs', level: 95 },
      { name: 'JWT', level: 90 },
      { name: 'Authentication', level: 92 },
    ],
  },
  {
    title: 'Tools',
    icon: <FaTools />,
    items: [
      { name: 'Git', level: 95 },
      { name: 'GitHub', level: 94 },
      { name: 'Docker', level: 86 },
      { name: 'Vercel', level: 92 },
      { name: 'Postman', level: 90 },
      { name: 'Figma', level: 84 },
    ],
  },
]

const services = [
  {
    title: 'Product Engineering',
    description: 'From visionary concept to production-grade systems that feel effortless and scale with ambition.',
  },
  {
    title: 'Interface Systems',
    description: 'Elevated UI architecture with cinematic motion, accessibility, and premium interaction design.',
  },
  {
    title: 'Full Stack Delivery',
    description: 'Robust frontend, resilient backend, deployment strategy, and performance tuning in one loop.',
  },
]

const projects = [
  {
    name: 'Northstar Commerce',
    image:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
    summary: 'A premium marketplace experience with real-time personalization and conversion-focused UI systems.',
    stack: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
    features: ['AI product recommendations', 'Checkout orchestration', 'Dynamic dashboards'],
    result: '+38% conversion lift',
  },
  {
    name: 'Helio Analytics',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',
    summary: 'An analytics suite crafted for fast-moving teams needing clarity, forecasting, and beautiful visuals.',
    stack: ['React', 'Node.js', 'D3', 'PostgreSQL'],
    features: ['Realtime KPI boards', 'Forecasting engine', 'Role-based insights'],
    result: '15k+ weekly active users',
  },
  {
    name: 'Lumen Studio',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    summary: 'A design-forward creative platform blending editorial storytelling with collaborative workflows.',
    stack: ['Framer Motion', 'Supabase', 'Tailwind CSS'],
    features: ['Immersive case studies', 'CMS-driven content', 'Media-rich onboarding'],
    result: '4.9/5 satisfaction score',
  },
]

const experiences = [
  {
    company: 'Aether Labs',
    role: 'junior Full Stack Developer',
    period: '2026 — Present',
    description: 'Leading product design systems, architecting scalable web platforms, and shipping AI-powered experiences.',
    stack: ['React', 'Next.js', 'Node.js', 'AWS'],
  },
  {
    company: 'Northwind Studio',
    role: 'open source maintainer',
    period: '2024 — 2025',
    description: 'Built bespoke editorial experiences and conversion-led web products for ambitious global brands.',
    stack: ['TypeScript', 'Redux', 'Tailwind CSS', 'Vercel'],
  },
  {
    company: 'Pixel Forge',
    role: 'UI Developer',
    period: '2023 — 2025',
    description: 'Crafted polished interfaces and component systems for startups and agencies with a design-first mindset.',
    stack: ['JavaScript', 'Sass', 'Angular', 'GitHub'],
  },
]

const stats = [
  { label: 'Years Experience', value: '1+' },
  { label: 'Completed Products', value: '25+' },
  { label: 'GitHub Stars', value: '180+' },
  { label: 'Satisfied Clients', value: '16+' },

]

const certifications = ['AWS Cloud Practitioner', 'Google UX Design', 'Meta Front-End Certificate']
const achievements = ['Built 3 award-shortlisted digital products', 'Open source maintainer across 14 repositories', 'Speaker at product and design conferences']
const awards = ['Awwwards Honorable Mention', 'CSS Design Awards Finalist', 'Product Hunt #1 Product of the Week']
const contributions = ['Design systems', 'Performance optimization', 'Open-source utilities', 'Accessibility audits']
const posts = [
  {
    category: 'Frontend',
    title: 'Designing motion systems that feel premium and intentional',
    description: 'Patterns for creating smooth, luxurious transitions that elevate the product without overwhelming it.',
    readTime: '6 min read',
    date: 'Jun 12, 2026',
  },
  {
    category: 'Architecture',
    title: 'How I structure scalable React applications for fast-moving teams',
    description: 'A practical blueprint for writing maintainable apps with strong boundaries and clean growth.',
    readTime: '7 min read',
    date: 'May 27, 2026',
  },
  {
    category: 'Product',
    title: 'The modern developer portfolio as a product experience',
    description: 'What makes a portfolio memorable, persuasive, and useful for the teams you want to join.',
    readTime: '5 min read',
    date: 'Apr 18, 2026',
  },
]

const testimonials = [
  {
    name: 'Mina Alvarez',
    role: 'VP Product',
    company: 'Northstar',
    quote: 'The experience feels like a premium brand, and the product quality surpassed every expectation.',
  },
  {
    name: 'Daniel Ford',
    role: 'Founder',
    company: 'Lumen Studio',
    quote: 'Exceptional detail, remarkable velocity, and an interface that immediately elevated trust.',
  },
]

const faqs = [
  {
    question: 'What is your primary focus?',
    answer: 'I build high-quality digital products that balance design craft, technical excellence, and measurable growth.',
  },
  {
    question: 'Do you work with startups and teams?',
    answer: 'Yes — I partner with founders, product teams, and agencies to create elegant and scalable product experiences.',
  },
  {
    question: 'Can you take a project from concept to launch?',
    answer: 'Absolutely. I can guide strategy, UX, implementation, performance, and deployment with a clear roadmap.',
  },
]

const sectionMotion = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const listMotion = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.08 } },
}

function Counter({ value, suffix = '' }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let frame = 0
    const duration = 1200
    const startTime = performance.now()

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(Number(value) * eased))
      if (progress < 1) {
        frame = requestAnimationFrame(animate)
      }
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [value])

  return <span>{count}{suffix}</span>
}

function MagneticButton({ children, className = '', href, download = false }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const Component = href ? 'a' : 'div'

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    setPosition({ x: event.clientX - bounds.left, y: event.clientY - bounds.top })
  }

  return (
    <Component
      {...(href ? { href, download: download || undefined } : {})}
      className={`magnetic-button ${className}`.trim()}
      onMouseMove={handleMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      style={{
        '--mx': `${position.x}px`,
        '--my': `${position.y}px`,
      }}
    >
      {children}
    </Component>
  )
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState('dark')
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [formError, setFormError] = useState('')
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    document.body.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1400)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.35 },
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileMenuOpen(false)
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')
    setFormError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        const message = data?.errors?.join(' ') || data?.error || response.statusText || 'Unable to submit the form.'
        throw new Error(message)
      }

      setStatus('success')
      setFormState({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('error')
      setFormError(error?.message || 'Something went wrong. Please try again.')
    }
  }

  useEffect(() => {
    const handleMouseMove = (event) => {
      const panels = document.querySelectorAll('.panel')
      panels.forEach((panel) => {
        const rect = panel.getBoundingClientRect()
        const x = ((event.clientX - rect.left) / rect.width) * 100
        const y = ((event.clientY - rect.top) / rect.height) * 100
        panel.style.setProperty('--bx', `${x}%`)
        panel.style.setProperty('--by', `${y}%`)
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const heroParallax = useMemo(() => {
    if (reducedMotion) return { x: 0, y: 0 }
    return {
      x: 0,
      y: 0,
    }
  }, [reducedMotion])

  return (
    <div className="app-shell">
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="loading-ring"
              initial={{ rotate: 0, opacity: 0.4 }}
              animate={{ rotate: 360, opacity: 1 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
            />
            <p>Preparing the experience…</p>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="topbar">
        <button className="brand" type="button" onClick={() => scrollToSection('home')}>
       
<img
  src={`${import.meta.env.BASE_URL}logo2.jpeg`}
  alt="Logo"
/>
          <span>Taslim Ansari</span>
        </button>

        <nav className="desktop-nav" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={activeSection === item.id ? 'nav-link active' : 'nav-link'}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="topbar-actions">
          <button
            type="button"
            className="icon-button"
            aria-label="Toggle color theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <MagneticButton className="resume-pill" href="/resume.pdf" download>
            <FaDownload /> Resume
          </MagneticButton>
          <button className="mobile-menu-button" type="button" aria-label="Open navigation" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={20} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className="mobile-drawer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="mobile-drawer-panel">
              <div className="drawer-header">
                <span>Navigate</span>
                <button type="button" className="icon-button" onClick={() => setMobileMenuOpen(false)}>
                  <X size={18} />
                </button>
              </div>
              {navItems.map((item) => (
                <button key={item.id} type="button" className="drawer-link" onClick={() => scrollToSection(item.id)}>
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main initial="hidden" animate="visible" variants={sectionMotion}>
        <section id="home" className="hero-section section-shell">
          <motion.div className="hero-card panel" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
            <div className="hero-copy">
              <p className="eyebrow">Senior Full Stack Developer • Product Designer</p>
              <h1>I design and build digital experiences that feel premium, fast, and unforgettable.</h1>
              <p className="hero-description">
                I craft polished interfaces, resilient systems, and product thinking that turns ambitious ideas into memorable software.
              </p>
              <div className="hero-actions">
                <MagneticButton className="primary-action" href="#contact">
                  Hire Me <FaArrowRight />
                </MagneticButton>
                <MagneticButton className="secondary-action" href="#projects">
                  View Work <MoveRight />
                </MagneticButton>
              </div>
              <div className="hero-meta">
                <MagneticButton className="meta-pill"><BadgeCheck /> Available for select projects</MagneticButton>

                <MagneticButton
                  className="meta-pill"
                  href="https://www.google.com/maps/search/?api=1&query=Molana+Pur+Siwan+Bihar+India"
                >
                  <FaMapMarkerAlt />
                  Molana Pur, Siwan, Bihar
                </MagneticButton>
                <MagneticButton className="meta-pill"><FaBriefcase /> <Counter value={1} suffix="+ yrs" /></MagneticButton>
              </div>
              <div className="social-row" aria-label="Social links">
                <a href="https://github.com/Taslim25954" aria-label="GitHub"><FaGithub /></a>
                <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="https://ata71624@gmail.com" aria-label="Email"><FaEnvelope /></a>

              </div>
            </div>
            <motion.div className="hero-visual" animate={reducedMotion ? {} : { x: heroParallax.x, y: heroParallax.y }} transition={{ type: 'spring', stiffness: 60, damping: 15 }}>
              <div className="hero-image-card">
            <img
  src={`${import.meta.env.BASE_URL}logo.jpeg`}
  alt="Taslim Ansari"
/>
              </div>
              <div className="floating-card top-card">
                <span>UI Systems</span>
                <strong>Premium product design</strong>
              </div>
              <div className="floating-card bottom-card">
                <span>Stack</span>
                <strong>React • Node • AWS</strong>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section id="about" className="section-shell about-section">
          <SectionHeading eyebrow="About me" title="Crafting thoughtful products with calm confidence and rigorous execution." description="From design systems to backend architecture, I bridge beauty and reliability in every layer of the product." />
          <div className="about-grid">
            <motion.article className="panel about-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
              <p>
                I started building on the web with a fascination for interface detail and soon became obsessed with the way software can feel expressive, focused, and human. Today I work at the intersection of product strategy, elegant UI, and robust engineering.
              </p>
              <div className="timeline-list">
                <MagneticButton className="timeline-entry"><FaGraduationCap /> BCA in Computer Science</MagneticButton>
                <MagneticButton className="timeline-entry"><FaRocket /> Built digital products for startups, agencies, and growth-stage companies</MagneticButton>
                <MagneticButton className="timeline-entry"><BadgeCheck /> Trusted with product design systems, performance, and launch readiness</MagneticButton>
              </div>
            </motion.article>
            <motion.div className="panel about-card stats-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
              {stats.map((stat) => (
                <MagneticButton key={stat.label} className="stat-block">
                  <strong><Counter value={Number.parseInt(stat.value, 10) || 8} suffix={stat.value.includes('+') ? '+' : ''} /></strong>
                  <span>{stat.label}</span>
                </MagneticButton>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="skills" className="section-shell">
          <SectionHeading eyebrow="Core skills" title="A thoughtful stack for ambitious products." description="I bring deep craft in frontend, backend, and delivery systems so modern teams can move quickly without sacrificing quality." />
          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <motion.article className="panel skill-card" key={group.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }}>
                <div className="skill-title-row">
                  <div className="skill-icon">{group.icon}</div>
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-list">
                  {group.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ y: -10, scale: 1.06, rotate: skillIndex % 2 === 0 ? -1.5 : 1.5 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.08) + (skillIndex * 0.05), type: 'spring', stiffness: 360, damping: 13 }}
                    >
                      <span className="skill-orbit" aria-hidden="true" />
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}<small>%</small></span>
                    </motion.div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="services" className="section-shell">
          <SectionHeading eyebrow="Services" title="High-end product work built for momentum." description="Whether you need a new launch, an interface refresh, or a scalable product foundation, I can help shape it." />
          <div className="service-grid">
            {services.map((service, index) => (
              <motion.article className="panel service-card" key={service.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -12, scale: 1.015, rotate: index === 1 ? 0 : index === 0 ? -0.8 : 0.8 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08, type: 'spring', stiffness: 260, damping: 17 }}>
                <div className="service-card-top">
                  <div className="service-number">0{index + 1}</div>
                  <MoveRight className="service-arrow" size={20} aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-explore">Explore service</span>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-shell">
          <SectionHeading eyebrow="Experience" title="A career shaped by product rigor and design delight." description="I have led teams and shipped products that balance velocity, clarity, and craft." />
          <div className="timeline">
            {experiences.map((experience, index) => (
              <motion.article
                className="panel timeline-card"
                key={experience.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.012 }}
                onMouseMove={(event) => {
                  const bounds = event.currentTarget.getBoundingClientRect()
                  event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`)
                  event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`)
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <div className="timeline-top">
                    <div>
                      <h3>{experience.role}</h3>
                      <p>{experience.company}</p>
                    </div>
                    <span className="timeline-period">{experience.period}</span>
                  </div>
                  <p>{experience.description}</p>
                  <div className="tag-row">
                    {experience.stack.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell">
          <SectionHeading eyebrow="Featured work" title="Selected projects with strong product and visual depth." description="Every engagement is shaped by clarity, experimentation, and a premium user experience." />
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article
                className="panel project-card"
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.018 }}
                onMouseMove={(event) => {
                  const bounds = event.currentTarget.getBoundingClientRect()
                  event.currentTarget.style.setProperty('--project-x', `${event.clientX - bounds.left}px`)
                  event.currentTarget.style.setProperty('--project-y', `${event.clientY - bounds.top}px`)
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, type: 'spring', stiffness: 250, damping: 18 }}
              >
                <img src={project.image} alt={project.name} loading="lazy" />
                <div className="project-body">
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <div className="tag-row">
                    {project.stack.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                  <ul>
                    {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                  <div className="project-footer">
                    <span>{project.result}</span>
                    <MagneticButton className="tiny-action" href="#contact">Case study</MagneticButton>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section
          className="section-shell"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
        >
          <div className="panel split-panel">
            <div>
              <SectionHeading eyebrow="Case studies" title="Complete product stories from strategy through delivery." description="I turn complex ideas into cohesive launches, sharp messaging, and experienced-led execution." />
            </div>
            <div className="case-study-list">
              <div>
                <h3>Northstar Commerce</h3>
                <p>Connected growth strategy, modern checkout flows, and rich product storytelling into a launch that felt unmistakably premium.</p>
              </div>
              <div>
                <h3>Helio Analytics</h3>
                <p>Reframed complex data into intuitive interfaces that improved team confidence and drove usage across every department.</p>
              </div>
              <div>
                <h3>Lumen Studio</h3>
                <p>Created an editorial experience that made collaboration feel effortless while preserving a highly crafted visual identity.</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="section-shell"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
        >
          <div className="panel github-panel">
            <SectionHeading eyebrow="GitHub & open source" title="Consistent craft, meaningful contribution, and a design-minded engineering practice." description="I contribute to tools and ecosystems that improve developer experience and product quality." />
            <div className="github-grid">
              <div className="contribution-card">
                <div className="activity-header">
                  <div>
                    <span className="activity-kicker">Weekly signal</span>
                    <h3>Contribution graph</h3>
                  </div>
                  <span className="activity-status"><i /> Active</span>
                </div>
                <div className="graph-grid">
                  {Array.from({ length: 84 }).map((_, index) => (
                    <span key={index} className={`graph-cell level-${(index % 5) + 1}`} style={{ '--cell-index': index }} />
                  ))}
                </div>
                <div className="graph-footer"><span>Less</span><span className="graph-legend" aria-hidden="true"><i /><i /><i /><i /><i /></span><span>More</span></div>
              </div>
              <div className="metrics-card">
                {[
                  ['1.2k', 'Commits'],
                  ['180+', 'Stars'],
                  ['842', 'Followers'],
                  ['14', 'Repos'],
                ].map(([value, label], index) => (
                  <div key={label} className="metric" style={{ '--metric-order': index }}>
                    <span className="metric-index">0{index + 1}</span>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="contribution-list">
              {contributions.map((item) => <span key={item} className="tag">{item}</span>)}
            </div>
          </div>
        </motion.section>

        <motion.section
          className="section-shell"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
        >
          <div className="achievement-grid">
            <motion.article className="panel achievement-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
              <SectionHeading eyebrow="Certifications" title="Recognized expertise" description="Continuously sharpening my craft with learning that stays relevant and practical." />
              <ul>
                {certifications.map((cert) => <li key={cert}>{cert}</li>)}
              </ul>
            </motion.article>
            <motion.article className="panel achievement-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
              <SectionHeading eyebrow="Achievements" title="Milestones that matter" description="The work is measured by impact, quality, and the trust of the people I collaborate with." />
              <ul>
                {achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
              </ul>
            </motion.article>
            <motion.article className="panel achievement-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
              <SectionHeading eyebrow="Awards" title="Recognition for craft" description="A mix of design, product, and engineering honors that reflect the quality of the work." />
              <ul>
                {awards.map((award) => <li key={award}>{award}</li>)}
              </ul>
            </motion.article>
          </div>
        </motion.section>

        <motion.section
          id="blog"
          className="section-shell"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
        >
          <SectionHeading eyebrow="Writing" title="Notes on product craft, frontend systems, and modern digital experiences." description="I share what I learn while building at the frontier of design and engineering." />
          <div className="blog-grid">
            {posts.map((post, index) => (
              <motion.article className="panel blog-card" key={post.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }}>
                <div className="blog-top">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="blog-footer">
                  <span>{post.date}</span>
                  <a href="#contact">Read more <ChevronRight /></a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section-shell"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
        >
          <SectionHeading eyebrow="Testimonials" title="Trusted by founders, product teams, and ambitious brands." description="The work is built to create confidence, delight, and lasting value." />
          <div className="testimonial-grid">
            {testimonials.map((item, index) => (
              <motion.article className="panel testimonial-card" key={item.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }}>
                <FaQuoteLeft className="quote-icon" />
                <p>{item.quote}</p>
                <div className="testimonial-author">
                  <strong>{item.name}</strong>
                  <span>{item.role} • {item.company}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="section-shell"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
        >
          <div className="panel faq-panel">
            <SectionHeading eyebrow="FAQ" title="Questions people ask before we begin." description="A quick view into how I approach collaboration, quality, and delivery." />
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="section-shell contact-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionMotion}
        >
          <div className="panel contact-card">
            <div className="contact-copy">
              <SectionHeading eyebrow="Contact" title="Let’s create something remarkable together." description="If you are building something ambitious, I would love to hear about it and explore how we can shape it brilliantly." />
              <div className="contact-details">
                <a href="https://ata71624@gmail.com">alex@example.com</a>
                <a
                  href="https://wa.me/918271169597"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 8271169597
                </a>
                <span>Siwan, Bihar, India, </span>
              </div>
              <div className="social-row social-row-alt" aria-label="Social links">
                <a href="https://github.com/Taslim25954" aria-label="GitHub"><FaGithub /></a>
                <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="https://ata71624@gmail.com" aria-label="Email"><FaEnvelope /></a>

              </div>
            </div>
            <form className="contact-form" onSubmit={onSubmit}>
              <label>
                Name
                <input value={formState.name} onChange={(event) => setFormState({ ...formState, name: event.target.value })} placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" value={formState.email} onChange={(event) => setFormState({ ...formState, email: event.target.value })} placeholder="you@example.com" required />
              </label>
              <label>
                Project brief
                <textarea value={formState.message} onChange={(event) => setFormState({ ...formState, message: event.target.value })} placeholder="Tell me about the product, timeline, and goals." required />
              </label>
              <button type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Send inquiry'}
              </button>
              {status === 'success' && <p className="form-success">Thanks — your message is ready to send.</p>}
              {status === 'error' && <p className="form-error">{formError}</p>}
            </form>
          </div>
        </motion.section>
      </motion.main>

      <motion.footer className="footer" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: 'easeOut' }}>
        <div>
          <strong>Taslim Ansari</strong>
          <p>Design-led full stack development for modern teams.</p>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <button type="button" className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top</button>
      </motion.footer>
    </div>
  )
}



export default App
