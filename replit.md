# Lace 1.2 - Email Client Application

## Overview

Lace 1.2 is a modern email client application built with React, TypeScript, and Express.js. The application features a clean dashboard interface for managing emails with image attachments, built using shadcn/ui components and styled with Tailwind CSS. The project follows a full-stack architecture with a React frontend and Express.js backend, using Drizzle ORM for database management.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix
- **Development Server**: Custom Vite integration for hot reloading
- **Error Handling**: Centralized error middleware

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema Management**: Type-safe schema definitions with Zod validation
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development

## Key Components

### Frontend Components
- **Dashboard**: Main email interface displaying email cards with image galleries
- **UI Components**: Comprehensive set of reusable components (buttons, cards, avatars, etc.)
- **Routing**: Simple routing with 404 handling
- **Asset Management**: SVG assets for UI icons and email thumbnails

### Backend Components
- **Routes**: Modular route registration system
- **Storage**: Abstract storage interface with CRUD operations for users
- **Middleware**: Request logging and error handling
- **Development Tools**: Vite integration for development workflow

### Shared Components
- **Schema**: Shared database schema definitions
- **Types**: Type-safe interfaces generated from database schema

## Data Flow

1. **Client Requests**: React frontend makes API calls using TanStack Query
2. **API Processing**: Express.js server handles requests through registered routes
3. **Data Storage**: Storage layer abstracts database operations using Drizzle ORM
4. **Response**: JSON responses sent back to client with error handling
5. **UI Updates**: React components update based on query results and mutations

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL client
- **drizzle-orm**: Type-safe ORM with PostgreSQL support
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router

### UI Dependencies
- **@radix-ui/***: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Utility for managing component variants

### Development Dependencies
- **vite**: Fast build tool and development server
- **typescript**: Type safety and development experience
- **tsx**: TypeScript execution for Node.js

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20 with PostgreSQL 16
- **Development Server**: Vite dev server with HMR
- **Database**: Environment-based DATABASE_URL configuration
- **Port Configuration**: Local port 5000 mapped to external port 80

### Production Build
- **Frontend**: Vite production build to `dist/public`
- **Backend**: esbuild bundling for Node.js deployment
- **Deployment Target**: Google Cloud Run
- **Environment**: Production NODE_ENV with optimized settings

### Configuration Management
- **Environment Variables**: DATABASE_URL for database connection
- **Build Scripts**: Separate dev, build, and start commands
- **Database Migrations**: Drizzle-kit for schema management

## Changelog

```
Changelog:
- June 17, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```