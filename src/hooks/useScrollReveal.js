import { useEffect } from 'react';

/**
 * Hook to attach IntersectionObserver for scroll-reveal animations
 */
export function useScrollReveal(options = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, options);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [options]);
}
