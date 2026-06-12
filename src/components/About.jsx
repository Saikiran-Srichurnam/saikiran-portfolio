import { GraduationCap, Briefcase, Rocket, MapPin, Award } from 'lucide-react'
import { personal, certifications } from '../data'

const aboutCards = [
  {
    icon: <GraduationCap size={26} className="text-blue-600" />,
    title: 'Education',
    desc:  'B.Tech CSE (Data Science) · MRIET · Graduated May 2025 · CGPA 8.1',
    bg:    'bg-blue-50',
  },
  {
    icon: <Briefcase size={26} className="text-violet-600" />,
    title: 'Internships',
    desc:  'Sandblaze Digitals (2025–26) + CodSoft (2024)',
    bg:    'bg-violet-50',
  },
  {
    icon: <Rocket size={26} className="text-green-600" />,
    title: 'Projects Shipped',
    desc:  '3 apps deployed — SaaS, Weather, Task Manager',
    bg:    'bg-green-50',
  },
  {
    icon: <MapPin size={26} className="text-orange-500" />,
    title: 'Location',
    desc:  'Hyderabad, India · Open to remote & relocation',
    bg:    'bg-orange-50',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="fade-up">
          <p className="text-xs font-bold text-blue-600 tracking-[2.5px] uppercase mb-2">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Not just a developer — <span className="text-blue-600">a builder</span>
          </h2>
          <div className="w-14 h-1 rounded-full mb-10" style={{ background:'linear-gradient(90deg,#1d4ed8,#3b82f6)' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Text */}
          <div className="fade-left space-y-4">
            <p className="text-base text-slate-600 leading-relaxed">
              I'm <strong className="text-slate-800 font-bold">{personal.name}</strong>, a B.Tech
              CSE (Data Science) graduate (May 2025) from{' '}
              <strong className="text-slate-800 font-bold">
                Malla Reddy Institute of Engineering and Technology
              </strong>
              , Hyderabad. My CGPA: <strong className="text-slate-800 font-bold">8.1</strong>.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              I don't just learn frameworks — I build with them. From architecting REST APIs to
              shipping responsive dashboards, I work across the full stack with{' '}
              <strong className="text-slate-800 font-bold">
                React, Node.js, Express, PostgreSQL, Prisma ORM,
              </strong>{' '}
              and more.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              I've already completed{' '}
              <strong className="text-slate-800 font-bold">2 internships</strong> and shipped{' '}
              <strong className="text-slate-800 font-bold">3 real projects</strong> — a full SaaS
              application, a weather app, and a task manager. I'm actively looking for a full-time
              role where I can grow fast and contribute from day one.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 pt-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full"
                >
                  <Award size={11} />
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="fade-right grid grid-cols-2 gap-3">
            {aboutCards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-slate-200 rounded-2xl p-5 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_8px_28px_rgba(37,99,235,0.1)] hover:-translate-y-1 cursor-default"
              >
                <div className={`w-11 h-11 rounded-xl ${card.bg} flex items-center justify-center mb-3`}>
                  {card.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">{card.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
