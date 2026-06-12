import { Heart, MapPin } from 'lucide-react'
import { personal } from '../data'

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/[0.06] py-7 px-8 text-center">
      <p className="text-slate-500 text-sm flex items-center justify-center gap-1.5 flex-wrap">
        Designed & built with <Heart size={13} className="text-red-400 fill-red-400" /> by{' '}
        <strong className="text-blue-300 font-bold">{personal.name}</strong>
        <span className="text-slate-600">·</span>
        Full Stack Developer
        <span className="text-slate-600">·</span>
        <span className="inline-flex items-center gap-1">
          <MapPin size={12} className="text-slate-500" /> Hyderabad, India
        </span>
      </p>
    </footer>
  )
}
