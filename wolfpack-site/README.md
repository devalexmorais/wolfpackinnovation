# Wolfpack Innovation Website

Moderno site de portfólio para empresa de tecnologia Wolfpack Innovation, desenvolvido com React e Tailwind CSS.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **Tailwind CSS 3** - Framework CSS utilitário
- **Vite** - Build tool moderno
- **Plus Jakarta Sans** - Tipografia moderna

## 📋 Requisitos

- Node.js 18+ 
- npm 9+

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run preview` - Visualizar build de produção

## 🎨 Estrutura do Projeto

```
wolfpack-site/
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navegação fixa
│   │   ├── Hero.jsx       # Seção principal
│   │   ├── Apps.jsx       # Cards de aplicativos
│   │   ├── Features.jsx   # Diferenciais
│   │   ├── About.jsx      # Sobre a empresa
│   │   ├── Contact.jsx   # Formulário de contato
│   │   └── Footer.jsx    # Rodapé
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Entry point
│   └── index.css         # Estilos globais + Tailwind
├── index.html            # Template HTML
├── tailwind.config.js    # Configuração Tailwind
├── postcss.config.js     # Configuração PostCSS
└── package.json          # Dependências
```

## ✨ Features

- ✅ Design responsivo (mobile-first)
- ✅ Animações de scroll (fade-in)
- ✅ Menu mobile responsivo
- ✅ Formulário com validação
- ✅ Otimizado para SEO
- ✅ Cores: Laranja (#FFA500), Branco, Preto
- ✅ Tipografia: Plus Jakarta Sans
- ✅ Efeitos hover e transições suaves

## 📱 Seções do Site

1. **Header** - Logo + Menu + CTA
2. **Hero** - Título principal + Botões + Mockup
3. **Apps** - Grid de 3 apps (FinApp, InvestPro, QuickDelivery)
4. **Features** - 4 diferenciais
5. **About** - Missão, Visão, Valores
6. **Contact** - Formulário + Redes sociais
7. **Footer** - Links + Copyright

## 🔧 Customização

### Cores
Edite `tailwind.config.js` para alterar cores:
```js
colors: {
  primary: {
    DEFAULT: '#FFA500',
    dark: '#E69500',
    light: '#FFB733',
  },
}
```

### Adicionar Novos Apps
Edite o array `apps` em `src/components/Apps.jsx`:
```jsx
{
  id: 4,
  name: 'NovoApp',
  description: 'Descrição do app',
  // ... outras propriedades
}
```

## 📄 Licença

MIT © Wolfpack Innovation
