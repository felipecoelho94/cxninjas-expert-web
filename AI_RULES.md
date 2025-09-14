# AI Development Rules

This document outlines the rules and conventions for AI-driven development on this project. Adhering to these guidelines ensures consistency, maintainability, and leverages the chosen tech stack effectively.

## Tech Stack Overview

This project is built with a modern, component-based architecture. Key technologies include:

-   **Framework**: React (v18) with Vite for a fast development experience.
-   **Language**: TypeScript for type safety and improved developer experience.
-   **UI Components**: shadcn/ui, providing a set of accessible and reusable components built on Radix UI.
-   **Styling**: Tailwind CSS for a utility-first styling approach.
-   **Routing**: React Router (`react-router-dom`) for client-side navigation.
-   **Data Fetching**: TanStack Query (`@tanstack/react-query`) for managing server state, caching, and data synchronization.
-   **Forms**: React Hook Form (`react-hook-form`) for performance-optimized form handling, paired with Zod for schema validation.
-   **Icons**: Lucide React (`lucide-react`) for a consistent and clean set of icons.
-   **Notifications**: Sonner and the built-in shadcn/ui Toaster for user feedback.

## Library Usage and Coding Conventions

### 1. Component Development

-   **Primary UI Library**: ALWAYS use components from `shadcn/ui` (located in `src/components/ui/`) as the foundation for the user interface.
-   **Custom Components**: When a `shadcn/ui` component doesn't meet a specific requirement, create a new, custom component in `src/components/`. These custom components should compose existing `shadcn/ui` components whenever possible.
-   **File Structure**: Each component must be in its own file. Page components go in `src/pages/`, and reusable components go in `src/components/`.

### 2. Styling

-   **Utility-First**: Use Tailwind CSS utility classes for all styling. Avoid writing custom CSS in `.css` files.
-   **Consistency**: Adhere to the design tokens (colors, spacing, fonts) defined in `tailwind.config.ts` and `src/index.css`. The `ninja-*` colors are brand-specific.
-   **Responsiveness**: All components and layouts MUST be responsive, using Tailwind's breakpoint prefixes (e.g., `md:`, `lg:`).

### 3. Routing

-   **Router**: Use `react-router-dom` for all navigation.
-   **Route Definitions**: All application routes must be defined in `src/App.tsx`. This provides a single source of truth for the app's structure.

### 4. State Management & Data Fetching

-   **Server State**: Use `@tanstack/react-query` for all interactions with APIs and server data. This includes fetching, caching, and mutations.
-   **Client State**: For simple, local component state, use `React.useState`. For state that needs to be shared across a few components, `React.Context` is acceptable. Avoid introducing complex global state managers like Redux or Zustand.

### 5. Forms

-   **Form Logic**: All forms must be built using `react-hook-form`.
-   **Validation**: Use `zod` to define validation schemas for forms. Connect Zod schemas to `react-hook-form` using `@hookform/resolvers`.
-   **Form Components**: Use the `shadcn/ui` `Form` component, which is built on top of `react-hook-form`, to build accessible and consistent forms.

### 6. Icons

-   **Icon Library**: Only use icons from the `lucide-react` package. This ensures visual consistency across the application.

### 7. Notifications

-   **Toasts**: Use `sonner` for simple, non-intrusive notifications (e.g., "Profile updated successfully").
-   **Alerts**: For more critical messages that require user attention, use the `shadcn/ui` `Alert` or `AlertDialog` components.

### 8. General Rules

-   **Simplicity**: Keep solutions simple and elegant. Do not over-engineer.
-   **File Structure**: Maintain the existing file structure (`src/pages`, `src/components`, `src/hooks`, `src/lib`).
-   **TypeScript**: Write strongly-typed code. Avoid using `any` unless absolutely necessary.