import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-element').forEach((el) => {
              el.classList.add('animate-fade-in-up');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen pt-20 flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="fade-element inline-flex items-center space-x-2 bg-surface-light rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-gray-400">Inovação em cada détail</span>
            </div>

            <h1 className="fade-element text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Transformando{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                ideias
              </span>{' '}
              em aplicativos reais
            </h1>

            <p className="fade-element text-lg sm:text-xl text-gray-400 max-w-xl">
              Desenvolvemos soluções digitais modernas para facilitar sua vida financeira e de produtividade.
            </p>

            <div className="fade-element flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('#apps')}
                className="btn-primary text-lg px-8 py-4"
              >
                Conhecer aplicativos
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-outline text-lg px-8 py-4"
              >
                Entrar em contato
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="fade-element relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-surface-light rounded-3xl p-8 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-surface rounded w-3/4" />
                  <div className="h-4 bg-surface rounded w-1/2" />
                  <div className="flex gap-3 mt-6">
                    <div className="flex-1 h-20 bg-background/50 rounded-xl border border-primary/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 h-20 bg-background/50 rounded-xl border border-white/10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                  <button
                    onClick={() => scrollToSection('#apps')}
                    className="h-12 bg-primary rounded-xl flex items-center justify-center cursor-pointer hover:bg-primary-dark transition-colors w-full"
                  >
                    <span className="text-background font-semibold">Ver mais</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}