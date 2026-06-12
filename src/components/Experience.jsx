import { Briefcase, GraduationCap, ChevronRight } from 'lucide-react'
import { timeline } from '../data'

const icons = [
  <Briefcase    size={13} className="text-blue-600" />,
  <Briefcase    size={13} className="text-blue-600" />,
  <GraduationCap size={13} className="text-blue-600" />,
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="fade-up">
          <p className="text-xs font-bold text-blue-600 tracking-[2.5px] uppercase mb-2">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Experience & <span className="text-blue-600">Education</span>
          </h2>
          <div className="w-14 h-1 rounded-full mb-10" style={{ background:'linear-gradient(90deg,#1d4ed8,#3b82f6)' }} />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-3 bottom-3 w-0.5"
            style={{ background:'linear-gradient(180deg, #2563eb, #e2e8f0)' }}
          />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="fade-up relative pl-16"
                style={{ transitionDelay:`${i * 120}ms` }}
              >
                {/* Dot */}
                <div
                  className={`absolute left-[14px] top-2 w-6 h-6 rounded-full border-[3px] border-white shadow-[0_0_0_3px_#dbeafe] ${
                    item.filled ? 'bg-blue-600' : 'bg-white border-blue-600'
                  }`}
                />

                {/* Card */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_8px_28px_rgba(37,99,235,0.08)]">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        {icons[i]}
                      </div>
                      <span className="text-base font-black text-slate-900">{item.role}</span>
                    </div>
                    <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2.5 py-1 rounded-lg whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>

                  <p className="text-sm text-slate-500 font-semibold mb-4 ml-9">{item.org}</p>

                  <ul className="space-y-1.5 ml-9">
                    {item.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                        <ChevronRight size={13} className="text-blue-400 flex-shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
