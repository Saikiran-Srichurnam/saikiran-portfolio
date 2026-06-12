import { useEffect } from 'react'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  // Scroll-triggered fade animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Animate skill bars
            entry.target.querySelectorAll('[data-width]').forEach((bar) => {
              setTimeout(() => {
                bar.style.width = bar.dataset.width + '%'
              }, 150)
            })
          }
        })
      },
      { threshold: 0.12 }
    )

    // Re-query on every render so dynamically mounted elements are caught
    const timer = setTimeout(() => {
      document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach((el) => {
        observer.observe(el)
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
