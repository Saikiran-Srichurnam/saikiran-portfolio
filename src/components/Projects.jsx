import { Github, ExternalLink, CheckCircle2 } from 'lucide-react'
import { projects } from '../data'

function ProjectCard({ project, delay }) {
  return (
    <div
      className="fade-up bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_24px_56px_rgba(37,99,235,0.13)] hover:-translate-y-1.5 hover:border-blue-400"
      style={{ transitionDelay:`${delay}ms` }}
    >
      {/* Card header */}
      <div className={`p-7 bg-gradient-to-br ${project.headCls} relative overflow-hidden`}>
        <div
          className="absolute w-44 h-44 rounded-full right-[-50px] top-[-50px] opacity-50"
          style={{ background:'rgba(255,255,255,0.5)' }}
        />
        <div className="text-4xl mb-2.5 relative z-10">{project.emoji}</div>
        <h3 className="text-xl font-black text-slate-900 tracking-tight mb-1.5 relative z-10">
          {project.title}
        </h3>
        <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${project.typeCls} relative z-10`}>
          {project.type}
        </span>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm text-slate-600 leading-relaxed mb-4">{project.desc}</p>

        <ul className="space-y-1.5 mb-5">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
              <CheckCircle2 size={13} className="text-blue-500 flex-shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((s) => (
            <span key={s} className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-md font-mono">
              {s}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-2.5 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-lg no-underline transition-all duration-200 hover:bg-slate-700 hover:-translate-y-0.5"
          >
            <Github size={13} /> GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-lg no-underline transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5"
            >
              <ExternalLink size={13} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="fade-up">
          <p className="text-xs font-bold text-blue-600 tracking-[2.5px] uppercase mb-2">What I've Built</p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-14 h-1 rounded-full mb-10" style={{ background:'linear-gradient(90deg,#1d4ed8,#3b82f6)' }} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 100} />
          ))}
        </div>

      </div>
    </section>
  )
}
