import { useRef } from 'react';
import pedifacilImg from '../assets/Pedifacil.png';
import finvestImg from '../assets/Finvest.png';

const apps = [
  {
    id: 1,
    name: 'PediFácil',
    description: 'App de delivery para pedir comida, bebidas e muito mais. Tecnologia que facilita seu dia a dia.',
    image: pedifacilImg,
    downloadUrl: 'https://pedifacilapp.github.io/pedifacilapp/',
    appStoreUrl: 'https://pedifacilapp.github.io/pedifacilapp/',
  },
  {
    id: 2,
    name: 'Finvest',
    description: 'Controle suas finanças e investimentos de forma inteligente. Organize gastos, acompanhe receitas e faça seu dinheiro render.',
    image: finvestImg,
    downloadUrl: '#',
    comingSoon: true,
  },
];

export default function Apps() {
  const sectionRef = useRef(null);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="apps" className="py-24 relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nossos Apps</span>
          <h2 className="section-title mt-4">
            Soluções digitais para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
              facilitar sua vida
            </span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Aplicativos desenvolvidos com foco em experiência do usuário e resultados reais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {apps.map((app, index) => (
            <div
              key={app.id}
              className={`app-card card group cursor-pointer ${app.comingSoon ? 'opacity-70' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-48 rounded-xl bg-gradient-to-br from-surface to-surface-light flex items-center justify-center mb-6 group-hover:scale-[1.02] transition-transform duration-300 overflow-hidden border border-white/5 relative">
                <img 
                  src={app.image} 
                  alt={app.name} 
                  className="w-full h-full object-contain p-4"
                />
                {app.comingSoon && (
                  <div className="absolute top-3 right-3 bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    Em breve
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {app.name}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {app.description}
              </p>

<div className="flex items-center justify-between pt-4 border-t border-white/10">
                  {app.comingSoon ? (
                    <span className="text-gray-500 font-medium">Em desenvolvimento</span>
                  ) : (
<a
                      href="https://www.instagram.com/pedifacil_app?igsh=MW44ZWQ5M2ZleHUzNA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary transition-colors flex items-center gap-2"
                      aria-label="Ver no Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span className="text-sm font-medium">Instagram</span>
                    </a>
                  )}

                {app.comingSoon ? (
                  <button className="flex items-center gap-2 bg-surface px-4 py-2 rounded-lg opacity-50 cursor-not-allowed" disabled>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.5 2A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2h-17zm6.268 4.7a.62.62 0 01.215-.47c.152-.12.36-.19.572-.19.215 0 .423.072.576.215l1.268 1.14c.148.133.222.324.222.524v9.116c0 .2-.078.39-.222.527l-1.223 1.165a.703.703 0 01-.597.288.703.703 0 01-.597-.288l-1.268-1.14a.698.698 0 01-.222-.527V7.354c0-.2.074-.39.222-.527l1.268-1.14c.152-.143.36-.215.575-.215.212 0 .42.07.572.19zm6.232 0a.62.62 0 01.215-.47c.152-.12.36-.19.572-.19.215 0 .423.072.576.215l1.268 1.14c.148.133.222.324.222.524v9.116c0 .2-.078.39-.222.527l-1.223 1.165a.703.703 0 01-.597.288.703.703 0 01-.597-.288l-1.268-1.14a.698.698 0 01-.222-.527V7.354c0-.2.074-.39.222-.527l1.268-1.14c.152-.143.36-.215.575-.215.212 0 .42.07.572.19z" />
                    </svg>
                    <span className="text-sm font-medium">Em breve</span>
                  </button>
                ) : (
                  <a
                    href={app.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Baixar app
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
