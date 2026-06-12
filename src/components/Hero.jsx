import { useState, useEffect } from "react";
import {
  ArrowRight,
  MessageCircle,
  Zap,
  Database,
  CheckCircle,
} from "lucide-react";
import { personal, typedPhrases, heroStats } from "../data";

function FloatingTag({ children, className, style }) {
  return (
    <div
      className={`absolute bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 shadow-md flex items-center gap-1.5 whitespace-nowrap ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  const [typedText, setTyped] = useState("");
  const [phraseIdx, setPhIdx] = useState(0);
  const [charIdx, setChIdx] = useState(0);
  const [deleting, setDel] = useState(false);

  useEffect(() => {
    const current = typedPhrases[phraseIdx];
    let timeout;
    if (!deleting) {
      timeout = setTimeout(() => {
        setTyped(current.slice(0, charIdx + 1));
        setChIdx((c) => c + 1);
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDel(true), 2000);
        }
      }, 85);
    } else {
      timeout = setTimeout(() => {
        setTyped(current.slice(0, charIdx - 1));
        setChIdx((c) => c - 1);
        if (charIdx - 1 === 0) {
          setDel(false);
          setPhIdx((p) => (p + 1) % typedPhrases.length);
        }
      }, 45);
    }
    return () => clearTimeout(timeout);
  }, [typedText, charIdx, deleting, phraseIdx]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 px-8 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #f8fafc 0%, #eff6ff 45%, #f8fafc 100%)",
      }}
    >
      {/* Background orbs */}
      <div
        className="absolute pointer-events-none rounded-full animate-orb1"
        style={{
          width: 700,
          height: 700,
          top: -150,
          right: -150,
          background:
            "radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full animate-orb2"
        style={{
          width: 500,
          height: 500,
          bottom: -100,
          left: -120,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full animate-orb3"
        style={{
          width: 200,
          height: 200,
          top: "30%",
          left: "40%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* Left */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wide">
            <span
              className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot"
              style={{ flexShrink: 0 }}
            />
            Open to Full-Time Roles
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-none tracking-[-2.5px] mb-2">
            {personal.firstName}
            <br />
            <span className="text-blue-600">{personal.lastName}</span>
          </h1>

          {/* Typed */}
          <div className="text-lg font-medium text-slate-500 mb-5 min-h-8 font-mono">
            {typedText}
            <span className="inline-block w-0.5 h-5 bg-blue-600 ml-0.5 align-middle animate-blink" />
          </div>

          {/* Description */}
          <p className="text-base text-slate-600 leading-relaxed mb-7 max-w-lg">
            {personal.tagline} MERN stack · PostgreSQL · Prisma · Deployed on
            Vercel &amp; Render.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-xl font-bold text-sm no-underline transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(37,99,235,0.32)] border-2 border-blue-600"
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 bg-transparent text-blue-600 px-7 py-3.5 rounded-xl font-bold text-sm no-underline transition-all duration-200 hover:bg-blue-50 hover:-translate-y-0.5 border-2 border-blue-600"
            >
              <MessageCircle size={16} /> Let's Talk
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-8 pt-7 border-t border-slate-200">
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black text-blue-600 leading-none">
                  {s.num}
                </div>
                <div className="text-xs font-semibold text-slate-400 tracking-wide mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Avatar */}
        <div className="flex justify-center md:justify-end order-first md:order-last">
          <div className="relative" style={{ width: 320, height: 320 }}>
            <div
              className="absolute animate-spin-slow rounded-[40px]"
              style={{
                inset: -10,
                border: "1.5px dashed #3b82f6",
                opacity: 0.35,
              }}
            />
            <div
              className="absolute animate-spin-rev rounded-[48px]"
              style={{ inset: -20, border: "1px dashed #bfdbfe", opacity: 0.2 }}
            />

            <div className="w-full h-full rounded-[32px] bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-200 flex items-center justify-center text-7xl font-black text-blue-600 tracking-[-4px] relative animate-float overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)",
                }}
              />
              SS
            </div>

            {/* Floating tags with Lucide icons */}
            <FloatingTag
              className="animate-tag1"
              style={{ top: -20, left: 90 }}
            >
              <CheckCircle size={12} className="text-green-500" />
              Available now
            </FloatingTag>

            <FloatingTag
              className="animate-tag2"
              style={{ top: 50, right: -70 }}
            >
              <Zap size={12} className="text-blue-500" />
              React + Node.js
            </FloatingTag>

            <FloatingTag
              className="animate-tag3"
              style={{ top: 140, right: -90 }}
            >
              <Database size={12} className="text-blue-500" />
              Express.js
            </FloatingTag>

            <FloatingTag
              className="animate-tag4"
              style={{ bottom: 70, right: -80 }}
            >
              <Database size={12} className="text-blue-500" />
              MongoDB
            </FloatingTag>

            <FloatingTag
              className="animate-tag5"
              style={{ bottom: 50, left: -80 }}
            >
              <Database size={12} className="text-yellow-500" />
              JavaScript
            </FloatingTag>

            <FloatingTag
              className="animate-tag6"
              style={{ top: 120, left: -90 }}
            >
              <Database size={12} className="text-cyan-500" />
              Tailwind CSS
            </FloatingTag>
          </div>
        </div>
      </div>
    </section>
  );
}
