# Portfolio Website - Replit Development Guide

## Overview

This is a modern, responsive portfolio website for Shaik Nawaz, an AI Engineer and Freelance Data Scientist. The application is built as a full-stack web application using React with TypeScript for the frontend and Express.js for the backend, featuring a sleek design with Tailwind CSS and shadcn/ui components.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **Theme System**: Custom theme provider supporting light/dark modes

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Development**: tsx for TypeScript execution
- **Build System**: esbuild for production bundling

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Configured for PostgreSQL (via Neon Database)
- **Migrations**: Drizzle Kit for schema management
- **Storage Interface**: Abstracted storage layer with in-memory fallback

## Key Components

### Portfolio Sections
1. **Hero Section**: Main introduction with call-to-action buttons
2. **About Section**: Education, location, and skills overview
3. **Projects Section**: Showcase of 8 AI/ML projects with technology tags
4. **Freelance Section**: Service offerings and platform links
5. **Resume Section**: Download functionality for CV
6. **Contact Section**: Professional contact information
7. **Navigation**: Responsive header with smooth scrolling

### UI Components
- **shadcn/ui Integration**: Complete component library setup
- **Responsive Design**: Mobile-first approach with breakpoint considerations
- **Theme Support**: Light/dark mode toggle functionality
- **Accessibility**: ARIA labels and keyboard navigation support

### Technical Features
- **Type Safety**: Full TypeScript implementation across frontend and backend
- **Modern CSS**: CSS custom properties for theming
- **Performance**: Optimized builds with code splitting
- **SEO Ready**: Proper meta tags and semantic HTML structure

## Data Flow

### Client-Side Rendering
1. Vite serves the React application during development
2. React Router (Wouter) handles client-side navigation
3. TanStack Query manages API calls and caching
4. Theme provider handles dark/light mode persistence

### Development Workflow
1. Development server runs both frontend (Vite) and backend (Express)
2. Hot module replacement for instant updates
3. TypeScript compilation and type checking
4. Tailwind CSS processing and optimization

### Production Build
1. Frontend builds to optimized static assets
2. Backend compiles to single JavaScript bundle
3. Assets served through Express static middleware
4. Database connections handled via environment variables

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Framework**: Radix UI primitives, Tailwind CSS
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Development**: Vite, TypeScript, ESBuild

### Styling and UI
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built accessible components
- **Radix UI**: Headless component primitives
- **Class Variance Authority**: Component variant management
- **Lucide Icons**: Modern icon library

### Backend and Database
- **Express.js**: Web application framework
- **Drizzle ORM**: Type-safe database toolkit
- **PostgreSQL**: Database system (via Neon)
- **Connect-pg-simple**: PostgreSQL session store

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets in `dist/public`
2. **Backend Build**: ESBuild bundles Express server to `dist/index.js`
3. **Type Checking**: TypeScript compiler validates all code
4. **Database Migration**: Drizzle pushes schema changes to PostgreSQL

### Production Configuration
- **Environment Variables**: Database URL and other secrets
- **Static Serving**: Express serves built frontend assets
- **Database Connection**: Neon Database serverless PostgreSQL
- **Process Management**: Single Node.js process handling both frontend and API

### Development vs Production
- **Development**: Separate Vite dev server with HMR
- **Production**: Express serves static files and API routes
- **Database**: Same PostgreSQL setup for both environments
- **Build Optimization**: Minification and code splitting in production

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

```
Changelog:
- June 28, 2025. Initial setup
```