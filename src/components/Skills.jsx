import {
  Code2, Globe, Server, Database, GitBranch,
  Layers, Box, Cpu, Wind,
} from 'lucide-react'
import { skillTags } from '../data'

// Skills with lucide icons + brand colors
const skills = [
  { name: 'JavaScript',   pct: 88, icon: <Code2   size={15} />, bg: '#fef9c3', color: '#854d0e' },
  { name: 'React.js',     pct: 85, icon: <Layers  size={15} />, bg: '#e0f2fe', color: '#0369a1' },
  { name: 'HTML & CSS',   pct: 92, icon: <Globe   size={15} />, bg: '#fee2e2', color: '#b91c1c' },
  { name: 'Tailwind CSS', pct: 86, icon: <Wind    size={15} />, bg: '#cffafe', color: '#0e7490' },
  { name: 'Node.js',      pct: 82, icon: <Server  size={15} />, bg: '#dcfce7', color: '#15803d' },
  { name: 'Express.js',   pct: 82, icon: <Box     size={15} />, bg: '#f1f5f9', color: '#334155' },
  { name: 'PostgreSQL',   pct: 78, icon: <Database size={15}/>, bg: '#dbeafe', color: '#1e40af' },
  { name: 'Prisma ORM',   pct: 76, icon: <Cpu     size={15} />, bg: '#ede9fe', color: '#6d28d9' },
  { name: 'MongoDB',      pct: 74, icon: <Database size={15}/>, bg: '#dcfce7', color: '#166534' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="fade-up">
          <p className="text-xs font-bold text-blue-600 tracking-[2.5px] uppercase mb-2">What I Know</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Skills & <span className="text-blue-600">Technologies</span>
          </h2>
          <div className="w-14 h-1 rounded-full mb-10" style={{ background:'linear-gradient(90deg,#1d4ed8,#3b82f6)' }} />
        </div>

        {/* Skill cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="fade-up bg-white border border-slate-200 rounded-2xl px-5 py-4 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_8px_24px_rgba(37,99,235,0.1)]"
              style={{ transitionDelay:`${i * 60}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  {/* Icon badge */}
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: skill.bg, color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <span className="text-sm font-bold text-slate-800">{skill.name}</span>
                </div>
                <span className="text-sm font-black text-blue-600 font-mono">{skill.pct}%</span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="skill-fill h-full rounded-full" data-width={skill.pct} />
              </div>
            </div>
          ))}
        </div>

        {/* Tag pills */}
        <div className="fade-up flex flex-wrap gap-2 mt-6">
          {skillTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full"
            >
              <GitBranch size={10} />
              {tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
