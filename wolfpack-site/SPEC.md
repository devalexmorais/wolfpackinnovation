# Wolfpack Innovation - Website Specification

## Project Overview
- **Project Name**: Wolfpack Innovation Website
- **Type**: Corporate Portfolio / Showcase Website
- **Technology**: React 18 + Tailwind CSS + Vite
- **Core Functionality**: Present company apps, showcase services, and convert visitors into app users
- **Target Users**: Potential clients, app users, partners

## UI/UX Specification

### Layout Structure
- **Header**: Fixed navigation with logo, menu links, CTA button
- **Hero**: Full viewport height with headline, subtext, CTA buttons, app mockup
- **Apps Section**: Grid of 3 app cards with hover effects
- **Features Section**: 4-column grid of value propositions
- **About Section**: Company story with mission/vision
- **Contact Section**: Form + social links
- **Footer**: Links, copyright, social icons

### Responsive Breakpoints
- Mobile: < 640px (single column)
- Tablet: 640px - 1024px (2 columns)
- Desktop: > 1024px (full layout)

### Visual Design

#### Color Palette
- **Primary**: #FFA500 (Orange)
- **Primary Dark**: #E69500
- **Secondary**: #FFFFFF (White)
- **Background**: #0A0A0A (Near Black)
- **Surface**: #141414 (Dark Gray)
- **Surface Light**: #1F1F1F (Card Background)
- **Text Primary**: #FFFFFF
- **Text Secondary**: #A3A3A3 (Gray)
- **Accent**: #FFB733 (Light Orange)

#### Typography
- **Font Family**: "Plus Jakarta Sans" (Google Fonts)
- **Headings**: Bold, tracking tight
- **Body**: Regular, 16px base
- **Hero Title**: 56px desktop / 36px mobile
- **Section Titles**: 40px desktop / 28px mobile

#### Spacing System
- Section padding: 96px vertical desktop / 64px mobile
- Container max-width: 1280px
- Grid gap: 32px
- Card padding: 32px

#### Visual Effects
- Cards: Subtle border glow on hover (orange)
- Buttons: Scale + glow on hover
- Scroll: Fade-in animations
- Background: Subtle gradient mesh
- App cards: Glassmorphism effect

### Components

#### Header
- Logo: Text "Wolfpack" in bold + "Innovation" in light
- Nav links: Home, Apps, About, Contact
- CTA Button: "Ver Apps" with orange background
- Mobile: Hamburger menu

#### Hero Section
- Headline: "Transformando ideias em aplicativos reais"
- Subtitle: "Desenvolvemos soluções digitais modernas para facilitar sua vida financeira e produtividade."
- Buttons: "Conhecer aplicativos" (primary), "Entrar em contato" (outline)
- Visual: Abstract app mockup illustration

#### App Cards
- Icon/Mockup area (placeholder gradient)
- App name
- Short description
- "Ver mais" link
- "Baixar" button (Google Play style)

#### Feature Cards
- Icon (simple line icon)
- Title
- Description

#### Contact Form
- Name input
- Email input
- Message textarea
- Submit button

## Functionality Specification

### Core Features
1. Smooth scroll navigation
2. Mobile-responsive hamburger menu
3. Scroll-triggered fade animations
4. Interactive hover states
5. Form validation (basic)
6. External app store links

### User Interactions
- Click nav links → smooth scroll to section
- Hover cards → scale + glow effect
- Submit form → visual feedback
- Click mobile menu → slide-in navigation

### Apps to Display
1. **FinApp** - App de Finanças Pessoais
2. **InvestPro** - App de Investimentos
3. **QuickDelivery** - Sistema de Delivery

## Acceptance Criteria
- [ ] Site loads without errors
- [ ] All sections visible and properly styled
- [ ] Mobile navigation works
- [ ] Hover effects function on all interactive elements
- [ ] Form displays correctly
- [ ] Colors match specification exactly
- [ ] Typography is consistent
- [ ] Animations are smooth (60fps)
- [ ] No console errors in production build
