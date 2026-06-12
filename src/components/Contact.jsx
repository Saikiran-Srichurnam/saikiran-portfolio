import { useState } from 'react'
import { Github, Linkedin, Mail, FileDown, ExternalLink, Send, CheckCheck } from 'lucide-react'
import { personal } from '../data'

const contactLinks = [
  {
    Icon:  Github,
    label: 'GITHUB',
    value: 'Saikiran-Srichurnam',
    href:  personal.github,
    arrow: <ExternalLink size={14} className="text-slate-500" />,
  },
  {
    Icon:  Linkedin,
    label: 'LINKEDIN',
    value: 'saikiran-srichurnam',
    href:  personal.linkedin,
    arrow: <ExternalLink size={14} className="text-slate-500" />,
  },
  {
    Icon:  Mail,
    label: 'EMAIL',
    value: personal.email,
    href:  `mailto:${personal.email}`,
    arrow: null,
  },
  {
    Icon:     FileDown,
    label:    'RESUME',
    value:    'Download CV — PDF',
    href:     personal.resume,
    arrow:    null,
    download: true,
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <section id="contact" className="py-24 px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="fade-up">
          <p className="text-xs font-bold text-blue-300 tracking-[2.5px] uppercase mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
            Let's Build Something <span className="text-blue-400">Great</span>
          </h2>
          <div className="w-14 h-1 rounded-full mb-4" style={{ background:'linear-gradient(90deg,#3b82f6,#bfdbfe)' }} />
          <p className="text-slate-400 text-base leading-relaxed max-w-lg mb-10">
            I'm actively seeking full-stack developer roles. If you think I'd be a great fit for
            your team, I'd love to connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Contact links */}
          <div className="fade-left">
            <h3 className="text-base font-bold text-white mb-5">Find me here 👇</h3>
            <div className="flex flex-col gap-3">
              {contactLinks.map(({ Icon, label, value, href, arrow, download }) => (
                <a
                  key={label}
                  href={href}
                  target={download ? undefined : '_blank'}
                  rel={download ? undefined : 'noopener noreferrer'}
                  download={download || undefined}
                  className="flex items-center gap-4 px-4 py-3.5 rounded-xl no-underline transition-all duration-300 hover:translate-x-1.5 group"
                  style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.09)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background   = 'rgba(37,99,235,0.22)'
                    e.currentTarget.style.borderColor  = '#2563eb'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background   = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.borderColor  = 'rgba(255,255,255,0.09)'
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background:'rgba(255,255,255,0.1)' }}
                  >
                    <Icon size={18} className="text-blue-300" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-slate-400 tracking-widest mb-0.5">{label}</div>
                    <div className="text-sm font-semibold text-white">{value}</div>
                  </div>
                  {arrow}
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="fade-right">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-400 tracking-widest">YOUR NAME</label>
                <input
                  type="text"
                  placeholder="Nikhil Kumar"
                  required
                  className="rounded-xl px-4 py-3 text-sm text-white font-sans outline-none transition-colors duration-200"
                  style={{ background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.11)' }}
                  onFocus={(e) => (e.target.style.borderColor = '#2563eb')}
                  onBlur={(e)  => (e.target.style.borderColor = 'rgba(255,255,255,0.11)')}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-400 tracking-widest">EMAIL ADDRESS</label>
                <input
                  type="email"
                  placeholder="Nikhil@company.com"
                  required
                  className="rounded-xl px-4 py-3 text-sm text-white font-sans outline-none transition-colors duration-200"
                  style={{ background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.11)' }}
                  onFocus={(e) => (e.target.style.borderColor = '#2563eb')}
                  onBlur={(e)  => (e.target.style.borderColor = 'rgba(255,255,255,0.11)')}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-400 tracking-widest">MESSAGE</label>
                <textarea
                  placeholder="Hi Saikiran, I'd love to discuss an opportunity..."
                  rows={5}
                  required
                  className="rounded-xl px-4 py-3 text-sm text-white font-sans outline-none transition-colors duration-200 resize-y"
                  style={{ background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.11)', minHeight:120 }}
                  onFocus={(e) => (e.target.style.borderColor = '#2563eb')}
                  onBlur={(e)  => (e.target.style.borderColor = 'rgba(255,255,255,0.11)')}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(37,99,235,0.4)] border-none cursor-pointer inline-flex items-center justify-center gap-2"
                style={{
                  background: sent ? '#16a34a' : '#2563eb',
                  transition: 'background 0.3s, transform 0.2s, box-shadow 0.2s',
                }}
              >
                {sent
                  ? <><CheckCheck size={16} /> Message Sent!</>
                  : <><Send size={15} /> Send Message</>
                }
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
