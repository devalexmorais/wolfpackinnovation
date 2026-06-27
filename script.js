const EMAILJS_CONFIG = {
  publicKey: 'PHQesvIUZPgmbeJGR',
  serviceID: 'service_ak3kapw',
  templateID: 'template_449423d',
};

document.addEventListener('DOMContentLoaded', () => {
  emailjs.init(EMAILJS_CONFIG.publicKey);
  initHeader();
  initScrollAnimation();
  initMobileMenu();
  initYear();
});

function initHeader() {
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  
  window.toggleMobileMenu = function() {
    mobileMenu.classList.toggle('active');
  };
}

function initYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

window.scrollToSection = function(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu && mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
  }
};

function initScrollAnimation() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  const delay = window.innerWidth < 768 ? 50 : 100;
  const fadeElements = document.querySelectorAll('.fade-element');
  fadeElements.forEach((el, index) => {
    el.style.transitionDelay = `${index * delay}ms`;
    observer.observe(el);
  });
  
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    card.style.transitionDelay = `${index * delay}ms`;
    
    const featureObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          featureObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    featureObserver.observe(card);
  });
}

window.handleSubmit = async function(e) {
  e.preventDefault();

  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const btnText = document.getElementById('btnText');
  const originalText = btnText.textContent;

  if (typeof emailjs === 'undefined') {
    alert('Erro: Biblioteca de email não carregou. Verifique sua internet e recarregue a página.');
    return;
  }

  btn.classList.add('btn-loading');
  btn.disabled = true;
  btnText.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" style="animation: spin 1s linear infinite; vertical-align: middle; margin-right: 4px;">
      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.25"></circle>
      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" opacity="0.75"></path>
    </svg>
    Enviando...
  `;

  try {
    const result = await emailjs.sendForm(
      EMAILJS_CONFIG.serviceID,
      EMAILJS_CONFIG.templateID,
      form,
    );

    btn.classList.remove('btn-loading');
    btn.disabled = false;
    btnText.innerHTML = `
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="vertical-align: middle; margin-right: 4px;">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      Enviado!
    `;

    form.reset();

    setTimeout(() => {
      btnText.textContent = originalText;
    }, 3000);
  } catch (error) {
    btn.classList.remove('btn-loading');
    btn.disabled = false;

    let msg = 'Erro ao enviar';
    if (error?.status === 0) {
      msg = 'Sem conexão com a internet';
    } else if (error?.status === 412) {
      msg = 'Template de email não configurado';
    } else if (error?.text) {
      msg = error.text;
    }

    btnText.innerHTML = `
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="vertical-align: middle; margin-right: 4px;">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
      ${msg}
    `;

    setTimeout(() => {
      btnText.textContent = originalText;
    }, 4000);
  }
};
