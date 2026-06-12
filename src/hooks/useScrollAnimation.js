import { useEffect } from 'react'

export function useScrollAnimation() {
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
              }, 100)
            })
          }
        })
      },
      { threshold: 0.12 }
    )

    const elements = document.querySelectorAll('.fade-up, .fade-left, .fade-right')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
