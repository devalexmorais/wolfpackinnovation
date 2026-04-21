import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre nós</span>
            <h2 className="section-title mt-4">
              Tecnologia que{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                transforma
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mt-6">
              A Wolfpack Innovation é uma empresa focada no desenvolvimento de aplicativos modernos e soluções digitais eficientes. Nossa missão é simplificar a vida das pessoas através da tecnologia.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Missão</h3>
                  <p className="text-gray-400">
                    Democratizar o acesso à tecnologia de qualidade para todos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visão</h3>
                  <p className="text-gray-400">
                    Ser referência em inovação tecnológica no Brasil.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Valores</h3>
                  <p className="text-gray-400">
                    Inovação, qualidade, transparência e comprometimento com o cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl" />
            <div className="relative bg-surface-light rounded-3xl p-8 border border-white/10">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-2xl bg-surface rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">01</div>
                  <div className="text-gray-400 text-sm">Anos de experiência</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-surface rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">03+</div>
                  <div className="text-gray-400 text-sm">Apps desenvolvidos</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-surface rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-gray-400 text-sm">Satisfação</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-surface rounded-xl">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Suporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}