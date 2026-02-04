import { useState, useEffect, useRef } from 'react'
import './App.css'

/* ── Scroll-reveal hook ── */
function useInView() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

/* ── Service row ── */
function ServiceItem({ service, index }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={`service-item ${visible ? 'visible' : ''}`}
      style={{ '--i': index }}
    >
      <span className="service-item__num">{service.number}</span>
      <div className="service-item__body">
        <h3 className="service-item__name">{service.name}</h3>
        <p className="service-item__desc">{service.description}</p>
      </div>
      <span className="service-item__arrow">→</span>
    </div>
  )
}

/* ── Project card ── */
function ProjectCard({ project, index }) {
  const [ref, visible] = useInView()
  return (
    <a
      ref={ref}
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card project-card--${index % 6} ${visible ? 'visible' : ''}`}
      style={{ '--i': index }}
    >
      <div className="project-card__visual">
        <div className="project-card__visual-grid" />
      </div>
      <div className="project-card__body">
        <span className="project-card__cat">{project.category}</span>
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tags">
          {project.technologies.map((t, i) => (
            <span key={i} className="tag">{t}</span>
          ))}
        </div>
      </div>
      <div className="project-card__footer">
        View Live <span>→</span>
      </div>
    </a>
  )
}

/* ── Main App ── */
function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const projects = [
    {
      id: 1, name: 'ERP Enterprise', category: 'Enterprise',
      description: 'Comprehensive resource management system for large-scale industrial operations with real-time analytics dashboards.',
      liveUrl: 'https://vishwaengineers.com/',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      id: 2, name: 'Trade with Sagar', category: 'FinTech',
      description: 'Real-time stock analysis and trading tips platform with advanced charting and live market data feeds.',
      liveUrl: 'https://tradewithsagar.com/',
      technologies: ['Next.js', 'TypeScript', 'WebSocket', 'PostgreSQL']
    },
    {
      id: 3, name: 'Prerane Software', category: 'EdTech',
      description: 'Educational platform enhancing learning through interactive, adaptive content and progress tracking.',
      liveUrl: 'https://prerane.in/',
      technologies: ['React', 'Express', 'Firebase', 'Redis']
    },
    {
      id: 4, name: 'Horoscopebook', category: 'Lifestyle',
      description: 'Personalized horoscope and astrology insights app with daily readings and compatibility charts.',
      liveUrl: 'https://astrovastushrivmjoshi.com/horoscopebook/',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 5, name: 'Shakti Kit', category: 'E-Commerce',
      description: 'Direct-to-consumer product platform with a seamless purchasing flow and secure payment processing.',
      liveUrl: 'https://astrovastushrivmjoshi.com/shaktikit/',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma']
    },
    {
      id: 6, name: 'Quickvenue', category: 'Booking',
      description: 'Venue booking platform for events and weddings with real-time availability and instant confirmation.',
      liveUrl: 'https://www.quickvenue.in/',
      technologies: ['React', 'Express', 'PostgreSQL', 'Razorpay']
    }
  ]

  const services = [
    { number: '01', name: 'Web Development',      description: 'Custom websites and web apps built with React, Next.js, and Node.js — fast, scalable, SEO-ready.' },
    { number: '02', name: 'Mobile Applications',  description: 'Native and cross-platform apps delivering seamless experiences across iOS and Android.' },
    { number: '03', name: 'UI / UX Design',       description: 'User-centric design from wireframes to pixel-perfect, polished production interfaces.' },
    { number: '04', name: 'API & Backend',        description: 'Robust backend architectures, RESTful APIs, and third-party integrations built to scale.' },
    { number: '05', name: 'E-Commerce',           description: 'End-to-end online stores with secure payments, inventory management, and order systems.' },
    { number: '06', name: 'Consulting',           description: 'Strategic digital guidance to navigate complexity and accelerate your business growth.' }
  ]

  const techWords = ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS', 'Firebase', 'Stripe', 'Redis']

  const onWhatsApp = () =>
    window.open(`https://wa.me/917760437800?text=${encodeURIComponent('Hi Shrinidhi, I would like to discuss a project with you.')}`, '_blank')

  const onEmail = () => {
    window.location.href = `mailto:katti.shrinidhi@gmail.com?subject=${encodeURIComponent('Project Inquiry')}&body=${encodeURIComponent('Hi Shrinidhi,\n\nI would like to discuss a project.\n\nBest regards')}`
  }

  return (
    <div className="portfolio">

      {/* ── SVG filter defs (grain noise) ── */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
          </filter>
        </defs>
      </svg>
      <div className="grain" />

      {/* ── Nav ── */}
      <nav className={`nav ${scrolled ? 'nav--up' : ''}`}>
        <div className="nav__inner">
          <a href="#" className="nav__logo">
            <span className="nav__logo-badge">SK</span>
            <span className="nav__logo-name">Shrinidhi Katti</span>
          </a>
          <button
            className={`nav__hamburger ${menu ? 'nav__hamburger--x' : ''}`}
            onClick={() => setMenu(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
          <ul className={`nav__links ${menu ? 'nav__links--open' : ''}`}>
            <li><a href="#services" onClick={() => setMenu(false)}>Services</a></li>
            <li><a href="#projects" onClick={() => setMenu(false)}>Projects</a></li>
            <li><a href="#contact"  onClick={() => setMenu(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__dots" />
        <div className="hero__glow hero__glow--a" />
        <div className="hero__glow hero__glow--b" />

        <div className="hero__mid">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-line" />
            <span>Full Stack Developer &amp; Software Engineer</span>
          </div>
          <h1 className="hero__h1">
            <span className="hero__h1-line">Shrinidhi</span>
            <span className="hero__h1-line hero__h1-line--gold">Katti</span>
          </h1>
          <p className="hero__p">
            Crafting digital products that are beautiful and performant.
            I build scalable web &amp; mobile solutions that drive real business growth.
          </p>
          <div className="hero__btns">
            <a href="#projects" className="btn btn--gold">View My Work</a>
            <a href="#contact"  className="btn btn--ghost">Let&apos;s Talk</a>
          </div>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-n">5+</span>
            <span className="hero__stat-l">Years</span>
          </div>
          <div className="hero__stat-sep" />
          <div className="hero__stat">
            <span className="hero__stat-n">10+</span>
            <span className="hero__stat-l">Projects</span>
          </div>
          <div className="hero__stat-sep" />
          <div className="hero__stat">
            <span className="hero__stat-n">100%</span>
            <span className="hero__stat-l">Satisfaction</span>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...techWords, ...techWords].map((w, i) => (
            <span key={i} className="marquee__word">
              <span className="marquee__dot" />
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* ── Services ── */}
      <section className="services" id="services">
        <div className="services__hd">
          <span className="eyebrow"><span className="eyebrow__n">01</span> What I Do</span>
          <h2 className="sec-h">Services</h2>
        </div>
        <div className="services__list">
          {services.map((s, i) => <ServiceItem key={i} service={s} index={i} />)}
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="projects" id="projects">
        <div className="projects__hd">
          <span className="eyebrow"><span className="eyebrow__n">02</span> Selected Work</span>
          <h2 className="sec-h">Projects</h2>
        </div>
        <div className="projects__grid">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="contact" id="contact">
        <div className="contact__glow" />
        <div className="contact__wrap">
          <div className="contact__left">
            <span className="eyebrow"><span className="eyebrow__n">03</span> Get In Touch</span>
            <h2 className="sec-h contact__h">Ready to build<br />something great?</h2>
            <p className="contact__p">
              Have a project in mind? I&apos;d love to hear about it.
              Let&apos;s create something remarkable together.
            </p>
          </div>
          <div className="contact__right">
            <button onClick={onWhatsApp} className="c-btn">
              <span className="c-btn__icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              </span>
              <span className="c-btn__txt">
                <span className="c-btn__label">WhatsApp</span>
                <span className="c-btn__sub">+91 77 6043 7800</span>
              </span>
              <span className="c-btn__arr">→</span>
            </button>

            <button onClick={onEmail} className="c-btn">
              <span className="c-btn__icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" /></svg>
              </span>
              <span className="c-btn__txt">
                <span className="c-btn__label">Email</span>
                <span className="c-btn__sub">katti.shrinidhi@gmail.com</span>
              </span>
              <span className="c-btn__arr">→</span>
            </button>

            <a href="https://github.com/shrinidhikatti" target="_blank" rel="noopener noreferrer" className="c-btn">
              <span className="c-btn__icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </span>
              <span className="c-btn__txt">
                <span className="c-btn__label">GitHub</span>
                <span className="c-btn__sub">shrinidhikatti</span>
              </span>
              <span className="c-btn__arr">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__l">
            <span className="footer__badge">SK</span>
            <span className="footer__copy">© 2026 Shrinidhi Katti. All rights reserved.</span>
          </div>
          <span className="footer__r">Designed &amp; built with care</span>
        </div>
      </footer>
    </div>
  )
}

export default App
