import React, { useState } from 'react'
import { Check, MessageSquare, Rocket, Shield, Zap, PhoneCall, Globe2, Send, Sparkles } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 grid place-items-center text-white font-bold">R</div>
          <span className="font-semibold text-gray-800">RCS Blast</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
          <a href="/test" className="text-blue-600 hover:text-blue-700">Status</a>
        </nav>
        <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
          <Rocket size={16} /> Get Started
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-96 w-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium ring-1 ring-blue-200">
              <Sparkles size={14}/> Next‑gen Messaging
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
              Grow faster with rich RCS bulk messaging
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Send branded, interactive, and verified messages at scale. Drive higher opens, replies, and conversions than legacy SMS.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700">
                <Send size={18}/> Start Sending
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-gray-800 font-semibold shadow-sm ring-1 ring-gray-200 hover:bg-gray-50">
                <MessageSquare size={18}/> See Features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Shield size={16} className="text-emerald-600"/> Verified Sender</div>
              <div className="flex items-center gap-2"><Zap size={16} className="text-yellow-500"/> High Deliverability</div>
              <div className="flex items-center gap-2"><Globe2 size={16} className="text-blue-600"/> Global Reach</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-black/5 shadow-xl overflow-hidden"/>
            <div className="absolute inset-0 p-6">
              <div className="h-full w-full rounded-xl bg-white/70 backdrop-blur-sm border border-white/60 shadow-inner p-4 grid grid-rows-3 gap-3">
                {[1,2,3].map((row) => (
                  <div key={row} className="grid grid-cols-3 gap-3">
                    {[1,2,3].map((col) => (
                      <div key={col} className="rounded-lg p-3 bg-white border border-gray-100 shadow-sm">
                        <div className="h-3 w-20 bg-gray-200 rounded"/>
                        <div className="mt-2 h-6 w-full rounded bg-gradient-to-r from-blue-100 to-indigo-100"/>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    {
      icon: <Shield className="text-blue-600" size={22} />, 
      title: 'Verified RCS brand',
      desc: 'Boost trust with your logo, brand colors, and verified badge.'
    },
    {
      icon: <Zap className="text-yellow-500" size={22} />, 
      title: 'Interactive cards',
      desc: 'Carousels, quick replies, and rich media for higher engagement.'
    },
    {
      icon: <PhoneCall className="text-emerald-600" size={22} />, 
      title: 'Two‑way conversations',
      desc: 'Capture replies, route to agents, or trigger automation flows.'
    },
    {
      icon: <Globe2 className="text-indigo-600" size={22} />, 
      title: 'Global scale',
      desc: 'Reliable delivery with smart routing and carrier compliance.'
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything you need to win with RCS</h2>
          <p className="mt-3 text-gray-600">Built for marketers, product teams, and growth leaders.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f, i) => (
            <div key={i} className="rounded-2xl border border-black/5 p-5 bg-gradient-to-br from-gray-50 to-white shadow-sm hover:shadow-md transition-shadow">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Simple, usage‑based pricing</h2>
          <p className="mt-3 text-gray-600">Only pay for what you send. Volume discounts available.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { name: 'Starter', price: 'Pay‑as‑you‑go', note: 'Perfect for testing', cta: 'Try now' },
            { name: 'Growth', price: 'Best value', note: 'Scale with confidence', cta: 'Talk to sales', featured: true },
            { name: 'Enterprise', price: 'Custom', note: 'Advanced controls & SLAs', cta: 'Contact us' }
          ].map((p, i) => (
            <div key={i} className={(p.featured ? 'ring-2 ring-blue-600 ' : '') + 'rounded-2xl border border-black/5 bg-white shadow-sm p-6 flex flex-col'}>
              <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
              <p className="mt-2 text-2xl font-bold text-gray-900">{p.price}</p>
              <p className="mt-1 text-sm text-gray-600">{p.note}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><Check size={16} className="text-emerald-600"/> Rich media RCS</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-emerald-600"/> High throughput</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-emerald-600"/> Real‑time reporting</li>
              </ul>
              <a href="#contact" className={(p.featured ? 'bg-blue-600 text-white hover:bg-blue-700 ' : 'bg-gray-900 text-white hover:bg-gray-800 ') + 'mt-6 px-4 py-2 rounded-lg text-center font-medium'}>
                {p.cta}
              </a>
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
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Talk to an RCS expert</h2>
            <p className="mt-3 text-gray-600">Tell us about your use case and we’ll help you launch rich conversations that convert.</p>
            <div className="mt-6 rounded-2xl border border-black/5 p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="flex items-center gap-3 text-gray-800"><Shield className="text-emerald-600"/> Enterprise‑grade privacy</div>
              <div className="mt-2 flex items-center gap-3 text-gray-800"><Zap className="text-yellow-500"/> 99.99% uptime</div>
              <div className="mt-2 flex items-center gap-3 text-gray-800"><PhoneCall className="text-blue-600"/> Dedicated support</div>
            </div>
          </div>

          <form onSubmit={submit} className="rounded-2xl border border-black/5 shadow-sm p-6 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input name="name" required value={form.name} onChange={onChange} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input name="email" type="email" required value={form.email} onChange={onChange} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Company</label>
                <input name="company" value={form.company} onChange={onChange} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Phone</label>
                <input name="phone" value={form.phone} onChange={onChange} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" rows={4} value={form.message} onChange={onChange} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
              </div>
            </div>

            <button disabled={status.state==='loading'} className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 disabled:opacity-60">
              <Send size={18}/> {status.state==='loading' ? 'Submitting…' : 'Request demo'}
            </button>
            {status.state !== 'idle' && (
              <p className={"mt-3 text-sm " + (status.state==='success' ? 'text-emerald-600' : status.state==='error' ? 'text-red-600' : 'text-gray-600')}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 grid place-items-center text-white font-bold">R</div>
          <span>© {new Date().getFullYear()} RCS Blast. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}
