# Overview

BPC Planejamento e Consultoria is a modern institutional website for a Brazilian healthcare and insurance consultancy company. The application serves as a digital presence for BPC, which has been operating since 2018 and expanded into health plan consulting in 2025. The website showcases their services in health plans and life insurance, providing consultation services with a focus on transparency and long-term client relationships.

The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a contact system for lead generation and client inquiries. The design emphasizes elegance, professionalism, and accessibility with a golden/beige color scheme representing trust and sophistication.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React 18 with TypeScript using Vite as the build tool and development server. The application uses a single-page application (SPA) architecture with client-side routing.

**UI Framework**: Shadcn/ui components built on top of Radix UI primitives, providing accessible and customizable components. Styled with Tailwind CSS for responsive design and consistent theming.

**Routing**: Wouter for lightweight client-side routing, handling navigation between pages (Home, About, Health Plans, Life Insurance, Blog, Contact).

**State Management**: TanStack Query (React Query) for server state management, handling API calls and caching. Local component state managed with React hooks.

**Form Handling**: React Hook Form with Zod validation for type-safe form handling and validation, particularly for the contact form.

**Styling**: Tailwind CSS with custom CSS variables for theming. Uses Inter font family for typography. Golden/beige color scheme with CSS custom properties for consistent theming.

## Backend Architecture

**Framework**: Express.js with TypeScript running on Node.js. RESTful API design for handling client requests.

**Development Setup**: Uses tsx for TypeScript execution in development and esbuild for production bundling. Hot module replacement enabled in development via Vite integration.

**API Structure**: RESTful endpoints for contact form submission (`/api/contact`) and contact retrieval (`/api/contacts`). Request/response handled with JSON, includes validation and error handling.

**Storage Interface**: Abstracted storage interface (IStorage) with in-memory implementation for development. Designed for easy swap to database implementation in production.

## Data Storage Solutions

**Database Configuration**: Configured for PostgreSQL using Drizzle ORM with Neon Database serverless adapter. Database schema defined in TypeScript with automatic type generation.

**Current Implementation**: In-memory storage for development using Map-based storage class. Production-ready database schema defined but not yet connected.

**Schema Design**: Two main entities - Users (id, username, password) and Contacts (id, name, email, phone, service, message, createdAt). Uses UUIDs for primary keys and proper timestamp handling.

## Authentication and Authorization

**Current State**: Basic user schema defined but no authentication implementation in the current codebase. Prepared for future authentication features with user table structure.

**Session Management**: Connect-pg-simple package included for PostgreSQL session storage when authentication is implemented.

## External Service Integrations

**WhatsApp Integration**: Direct WhatsApp Web API integration via URL scheme for instant customer communication. Configured with business phone number and pre-filled messages.

**Image Assets**: Uses Unsplash for stock photography with optimized loading and proper alt text for accessibility.

**Email Services**: Contact form prepared for email notification integration (commented for future implementation).

**Google Fonts**: Inter font family loaded from Google Fonts CDN for consistent typography.

## Build and Deployment

**Development**: Vite dev server with hot module replacement, TypeScript checking, and React Fast Refresh.

**Production Build**: Separate client and server builds - Vite for client-side bundling, esbuild for server-side bundling with ES modules format.

**Static Assets**: Public assets served from dist/public directory with proper caching headers.

**Environment Configuration**: Environment-based configuration for database URLs and development features.