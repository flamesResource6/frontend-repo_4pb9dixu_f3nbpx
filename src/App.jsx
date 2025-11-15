import React, { useEffect, useState } from 'react'
import {
  Check,
  MessageSquare,
  Rocket,
  Shield,
  Zap,
  PhoneCall,
  Globe2,
  Send,
  Sparkles,
  Star,
  Users,
  Building2,
  BarChart3,
  LineChart,
  Layers,
  Puzzle,
  Bot,
  Headphones,
  ShieldCheck,
  PlayCircle,
  ArrowRight
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Lottie from 'lottie-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

// Shared brand colors: light base #e7e8ea with rich purple/fuchsia accents
const brand = {
  base: '#e7e8ea',
  from: 'from-purple-600',
  to: 'to-fuchsia-600',
  ring: 'ring-purple-600',
  text: 'text-purple-700',
  glow: 'bg-purple-500/10'
}

// Animation presets
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.99] } }
}
const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } }
}
const stagger = { show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }

function Badge({ children }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 text-purple-700 text-xs font-medium ring-1 ring-purple-200 backdrop-blur`}>{children}</span>
  )
}

function LottieLoader({ src, loop = true, className = '' }) {
  const [data, setData] = useState(null)
  useEffect(() => {
    let mounted = true
    async function load() {
      try {
        const res = await fetch(src)
        if (!res.ok) return
        const json = await res.json()
        if (mounted) setData(json)
      } catch (_) {}
    }
    load()
    return () => { mounted = false }
  }, [src])

  if (!data) return <div className={`grid place-items-center ${className}`}><div className="h-8 w-8 animate-spin rounded-full border-2 border-purple-600 border-t-transparent"/></div>
  return <Lottie animationData={data} loop={loop} className={className} />
}

function Navbar({ bgMode, setBgMode }) {
  const toggle = () => setBgMode(bgMode === 'light' ? 'vibe' : 'light')
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-30 backdrop-blur bg-white/60 border-b border-black/5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <motion.div whileHover={{ rotate: 3 }} className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 grid place-items-center text-white font-bold">R</motion.div>
          <span className="font-semibold text-gray-800">RCS Blast</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          {[
            { href: '#features', label: 'Features' },
            { href: '#integrations', label: 'Integrations' },
            { href: '#analytics', label: 'Analytics' },
            { href: '#pricing', label: 'Pricing' },
            { href: '#faq', label: 'FAQ' },
          ].map((link) => (
            <motion.a key={link.href} href={link.href} whileHover={{ y: -2 }} className="hover:text-gray-900">
              {link.label}
            </motion.a>
          ))}
          <a href="/test" className="text-purple-700 hover:text-purple-800">Status</a>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggle} className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium ring-1 ring-black/10 bg-white/80 hover:bg-white">
            <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600"/>
            {bgMode === 'light' ? 'Gradient BG' : 'Light BG'}
          </button>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:opacity-95 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm"
          >
            <Rocket size={16} /> Get Started
          </motion.a>
        </div>
      </div>
    </motion.header>
  )
}

function Hero() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden"
      style={{ backgroundColor: brand.base }}
    >
      <motion.div
        variants={fade}
        className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full blur-3xl bg-gradient-to-br from-purple-400/30 to-fuchsia-400/30"
      />
      <motion.div
        variants={fade}
        className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full blur-3xl bg-gradient-to-br from-fuchsia-400/30 to-purple-400/30"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeUp}>
            <Badge><Sparkles size={14}/> Advanced RCS Platform</Badge>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
              Rich, interactive messaging that converts
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">
              Launch verified RCS at scale with branded carousels, quick replies, and event‑driven workflows. Built for performance and reliability.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <motion.a
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-sm hover:opacity-95"
              >
                <Send size={18}/> Request a demo
              </motion.a>
              <motion.a
                variants={fadeUp}
                whileHover={{ y: -2 }}
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/70 text-gray-900 font-semibold shadow-sm ring-1 ring-black/10 hover:bg-white"
              >
                <MessageSquare size={18}/> Explore features
              </motion.a>
            </div>
            <motion.div variants={fadeUp} className="mt-6 flex items-center gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-2"><Shield size={16} className="text-emerald-600"/> Verified brand</div>
              <div className="flex items-center gap-2"><Zap size={16} className="text-yellow-500"/> Lightning delivery</div>
              <div className="flex items-center gap-2"><Globe2 size={16} className="text-purple-700"/> Global reach</div>
            </motion.div>
          </motion.div>
          <motion.div variants={fadeUp} className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white to-white/40 border border-white/60 shadow-xl overflow-hidden grid place-items-center p-4">
              <LottieLoader
                // Using a hosted Lottie asset for sparkly hero
                src="https://lottie.host/6c6b5f3f-ecdc-4d83-9f8d-1b1e0ed1958c/6cVfW0p4uT.json"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>

        <LogoStrip />
      </div>
    </motion.section>
  )
}

function LogoStrip() {
  const logos = ['Acme', 'Nimbus', 'Vertex', 'Quantum', 'Helios', 'Atlas']
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mt-12">
      <motion.p variants={fade} className="text-xs uppercase tracking-widest text-gray-500">Trusted by growth teams</motion.p>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {logos.map((l, i) => (
          <motion.div
            key={l}
            variants={fadeUp}
            whileHover={{ y: -2 }}
            className="h-10 rounded-lg bg-white/70 backdrop-blur ring-1 ring-black/5 grid place-items-center text-gray-700 font-semibold"
          >
            {l}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function FeatureGrid() {
  const items = [
    { icon: <ShieldCheck className="text-purple-700" size={22} />, title: 'Verified RCS brand', desc: 'Boost trust with your logo, colors, and verified badge.' },
    { icon: <Layers className="text-fuchsia-600" size={22} />, title: 'Rich interactive cards', desc: 'Carousels, quick replies, CTAs, and media at scale.' },
    { icon: <Bot className="text-purple-700" size={22} />, title: 'Automation & AI', desc: 'Trigger workflows and smart replies based on events.' },
    { icon: <PhoneCall className="text-emerald-600" size={22} />, title: 'Two‑way conversations', desc: 'Route to agents or bots with real‑time context.' },
    { icon: <Puzzle className="text-fuchsia-600" size={22} />, title: 'Powerful APIs', desc: 'Webhooks and SDKs for seamless integration.' },
    { icon: <Headphones className="text-purple-700" size={22} />, title: 'Premium support', desc: 'Dedicated SLAs and onboarding assistance.' },
  ]

  return (
    <motion.section
      id="features"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="py-16 md:py-24 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything you need to win with RCS</h2>
          <p className="mt-3 text-gray-600">Built for scale, reliability, and delightful experiences.</p>
        </motion.div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(112, 26, 117, 0.12)' }}
              className="rounded-2xl border border-black/5 p-5 bg-gradient-to-br from-gray-50 to-white shadow-sm"
            >
              <div className="h-10 w-10 rounded-lg bg-white grid place-items-center border border-gray-100 shadow-sm">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><Check size={16} className="text-emerald-600"/> Enterprise security</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-emerald-600"/> Real‑time analytics</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-emerald-600"/> API & webhooks</li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function Integrations() {
  const items = [
    { name: 'CRM', icon: <Building2 size={18} /> },
    { name: 'Analytics', icon: <BarChart3 size={18} /> },
    { name: 'Data Warehouse', icon: <Layers size={18} /> },
    { name: 'Support', icon: <Headphones size={18} /> },
    { name: 'AI/ML', icon: <Bot size={18} /> },
    { name: 'Users', icon: <Users size={18} /> },
  ]
  return (
    <motion.section
      id="integrations"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="py-16 md:py-24"
      style={{ backgroundColor: brand.base }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeUp}>
            <Badge>Connect your stack</Badge>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Works with your tools</h2>
            <p className="mt-3 text-gray-700">Plug into your CRM, analytics, and data pipelines. Use webhooks and APIs to orchestrate end‑to‑end journeys.</p>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2"><Puzzle className="text-fuchsia-600" size={18}/> 30+ connectors</div>
              <div className="flex items-center gap-2"><Shield className="text-emerald-600" size={18}/> SSO & SCIM</div>
              <div className="flex items-center gap-2"><Globe2 className="text-purple-700" size={18}/> Global compliance</div>
            </div>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-4">
            {items.map((x, i) => (
              <motion.div
                key={x.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-xl bg-white/70 backdrop-blur ring-1 ring-black/5 p-4 shadow-sm"
              >
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600/10 to-fuchsia-600/10 grid place-items-center text-purple-700">{x.icon}</div>
                <div className="mt-3 font-medium text-gray-900">{x.name}</div>
                <div className="text-xs text-gray-600">Native & webhook‑based</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

function AnalyticsSection() {
  return (
    <motion.section
      id="analytics"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="py-16 md:py-24 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeUp}>
            <Badge>Insights that drive ROI</Badge>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Real‑time analytics & A/B testing</h2>
            <p className="mt-3 text-gray-700">Track opens, clicks, replies, and revenue attribution. Optimize flows with experiments and cohort analysis.</p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-center gap-2"><Star className="text-yellow-500" size={18}/> Funnel & conversion tracking</li>
              <li className="flex items-center gap-2"><LineChart className="text-purple-700" size={18}/> Cohorts & retention</li>
              <li className="flex items-center gap-2"><BarChart3 className="text-fuchsia-600" size={18}/> A/B tests with guardrails</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} className="relative">
            <div className="rounded-2xl p-6 bg-white shadow-xl border border-black/5">
              <div className="h-40 rounded-xl bg-gradient-to-br from-purple-50 to-fuchsia-50 border border-black/5"/>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[1,2,3].map((i)=> (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="rounded-lg p-3 bg-white border border-black/5 shadow-sm"
                  >
                    <div className="h-3 w-16 bg-gray-200 rounded"/>
                    <div className="mt-2 h-6 rounded bg-gradient-to-r from-purple-100 to-fuchsia-100"/>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-xs font-medium bg-gradient-to-r from-purple-600 to-fuchsia-600 shadow">
                <Sparkles size={14}/> Live
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

function Pricing() {
  return (
    <motion.section
      id="pricing"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="py-16 md:py-24 bg-gradient-to-b from-white to-transparent"
      style={{ backgroundColor: brand.base }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Simple, usage‑based pricing</h2>
          <p className="mt-3 text-gray-700">Only pay for what you send. Volume discounts available.</p>
        </motion.div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { name: 'Starter', price: 'Pay‑as‑you‑go', note: 'Perfect for testing', cta: 'Try now' },
            { name: 'Growth', price: 'Best value', note: 'Scale with confidence', cta: 'Talk to sales', featured: true },
            { name: 'Enterprise', price: 'Custom', note: 'Advanced controls & SLAs', cta: 'Contact us' }
          ].map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(112, 26, 117, 0.18)' }}
              className={(p.featured ? `${brand.ring} ring-2 ` : '') + 'rounded-2xl border border-black/5 bg-white shadow-sm p-6 flex flex-col'}
            >
              <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
              <p className="mt-2 text-2xl font-bold text-gray-900">{p.price}</p>
              <p className="mt-1 text-sm text-gray-600">{p.note}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><Check size={16} className="text-emerald-600"/> Rich media RCS</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-emerald-600"/> High throughput</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-emerald-600"/> Real‑time reporting</li>
              </ul>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={(p.featured ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white hover:opacity-95 ' : 'bg-gray-900 text-white hover:bg-gray-800 ') + 'mt-6 px-4 py-2 rounded-lg text-center font-medium'}
              >
                {p.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function Testimonials() {
  const quotes = [
    {
      name: 'Maya Patel', role: 'Growth Lead, Acme',
      quote: 'RCS Blast unlocked a 3x click‑through rate vs SMS. The rich cards made our promos irresistible.'
    },
    {
      name: 'Liam Chen', role: 'Head of CRM, Nimbus',
      quote: 'Integration took days, not weeks. Analytics and A/B testing are best‑in‑class.'
    },
    {
      name: 'Sofia Rossi', role: 'Marketing Director, Vertex',
      quote: 'Verified brand + interactive replies = higher trust and happier customers.'
    }
  ]
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="py-16 md:py-24 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto">
          <Badge>Social proof</Badge>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Loved by modern teams</h2>
          <p className="mt-3 text-gray-700">From startups to enterprises, teams choose us for performance and polish.</p>
        </motion.div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.div
              key={q.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-black/5 bg-white shadow-sm p-6"
            >
              <div className="flex items-center gap-2 text-yellow-500"><Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/><Star size={16}/></div>
              <p className="mt-3 text-gray-800">“{q.quote}”</p>
              <div className="mt-4 text-sm text-gray-600">{q.name} • {q.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function FAQ() {
  const [open, setOpen] = useState(0)
  const items = [
    { q: 'What is RCS and who can receive it?', a: 'RCS is Rich Communication Services, a modern messaging standard on Android. Recipients with RCS‑enabled devices and carriers will receive rich messages; others can receive SMS fallback.' },
    { q: 'Do you support two‑way conversations?', a: 'Yes. We support replies, quick actions, and routing to human agents or bots via APIs and webhooks.' },
    { q: 'How long does onboarding take?', a: 'Most teams launch in under a week. We provide verified brand setup, templates, and integration support.' },
    { q: 'Is my data secure?', a: 'We offer enterprise‑grade security, SSO/SCIM, audit logs, and regional data residency options.' },
  ]
  return (
    <section id="faq" className="py-16 md:py-24" style={{ backgroundColor: brand.base }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Badge>FAQ</Badge>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Answers to common questions</h2>
        </div>
        <div className="mt-8 space-y-3">
          {items.map((item, i) => (
            <div key={i} className="rounded-xl bg-white/80 backdrop-blur ring-1 ring-black/5 overflow-hidden">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between p-4 text-left">
                <span className="font-medium text-gray-900">{item.q}</span>
                <motion.span animate={{ rotate: open===i ? 90 : 0 }} className="text-gray-500">
                  <ArrowRight size={18}/>
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4 text-gray-700"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Sending…' })
    try {
      const res = await fetch(`${API_BASE}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'website' })
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus({ state: 'success', message: 'Thanks! We will reach out shortly.' })
      setForm({ name: '', email: '', company: '', phone: '', message: '' })
    } catch (err) {
      setStatus({ state: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <LottieLoader src="https://lottie.host/2a1bff65-8d2c-4d1b-b5f0-8d1f2f3a6b0d/NH8iJ2hSxg.json" className="w-full h-full" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div variants={fadeUp}>
            <Badge>Let’s talk</Badge>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Talk to an RCS expert</h2>
            <p className="mt-3 text-gray-700">Tell us about your use case and we’ll help you launch rich conversations that convert.</p>
            <div className="mt-6 rounded-2xl border border-black/5 p-6 bg-gradient-to-br from-purple-50 to-fuchsia-50">
              <div className="flex items-center gap-3 text-gray-800"><Shield className="text-emerald-600"/> Enterprise‑grade privacy</div>
              <div className="mt-2 flex items-center gap-3 text-gray-800"><Zap className="text-yellow-500"/> 99.99% uptime</div>
              <div className="mt-2 flex items-center gap-3 text-gray-800"><PhoneCall className="text-purple-700"/> Dedicated support</div>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
              <PlayCircle size={18} className="text-fuchsia-600"/> Prefer to watch? We’ll send a 2‑minute demo.
            </div>
          </motion.div>

          <motion.form onSubmit={submit} variants={fadeUp} className="rounded-2xl border border-black/5 shadow-sm p-6 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input name="name" required value={form.name} onChange={onChange} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"/>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input name="email" type="email" required value={form.email} onChange={onChange} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"/>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Company</label>
                <input name="company" value={form.company} onChange={onChange} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"/>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Phone</label>
                <input name="phone" value={form.phone} onChange={onChange} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"/>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" rows={4} value={form.message} onChange={onChange} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"/>
              </div>
            </div>

            <motion.button
              disabled={status.state==='loading'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold shadow-sm hover:opacity-95 disabled:opacity-60"
            >
              <Send size={18}/> {status.state==='loading' ? 'Submitting…' : 'Request demo'}
            </motion.button>
            {status.state !== 'idle' && (
              <p className={'mt-3 text-sm ' + (status.state==='success' ? 'text-emerald-600' : status.state==='error' ? 'text-red-600' : 'text-gray-600')}>
                {status.message}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </motion.section>
  )
}

function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-12 relative overflow-hidden"
      style={{ backgroundColor: brand.base }}
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <LottieLoader src="https://lottie.host/9f8f0c8f-36c3-4b73-b7e6-1b2c3d4e5f6a/2n8aYqH8rQ.json" className="w-full h-full" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-6 md:p-10 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Ready to launch rich messaging?</h3>
            <p className="mt-1 text-white/90">Get a tailored plan and a 2‑minute walkthrough.</p>
          </div>
          <motion.a href="#contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-xl font-semibold hover:bg-white/90">
            Talk to sales <ArrowRight size={18}/>
          </motion.a>
        </div>
      </div>
    </motion.section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 grid place-items-center text-white font-bold">R</div>
          <span>© {new Date().getFullYear()} RCS Blast. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#integrations" className="hover:text-gray-900">Integrations</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [bgMode, setBgMode] = useState('light') // 'light' | 'vibe'

  return (
    <div className={`min-h-screen text-gray-900 transition-colors duration-700 ${bgMode === 'vibe' ? 'bg-gradient-to-b from-purple-600 via-purple-200 to-[#e7e8ea]' : ''}`} style={bgMode === 'light' ? { backgroundColor: brand.base } : {}}>
      <Navbar bgMode={bgMode} setBgMode={setBgMode} />
      <Hero />
      <FeatureGrid />
      <Integrations />
      <AnalyticsSection />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}
