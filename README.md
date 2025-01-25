# Next Supabase Auth Kit

## Overview
**Next Supabase Auth Kit** is a minimal authentication boilerplate built with Next.js, TypeScript, and Supabase. It provides essential authentication functionality, making it easy to integrate user authentication into your Next.js projects.

## Features
### Implemented Features:
- ✅ User authentication (Sign Up, Sign In, Sign Out)
- ✅ Supabase client setup
- ✅ Environment variable configuration
- ✅ Authentication pages
- ✅ Protected routes
- ✅ Password reset functionality
- ✅ Dark mode support

### Planned Features:
- 🚀 OAuth providers (Google, GitHub, etc.)
- 🚀 Magic link authentication
- 🚀 Profile update (name, avatar, etc.)
- 🚀 Secure session handling
- 🚀 Server Actions for better API handling
- 🚀 ESLint + Prettier setup for code consistency
- 🚀 Husky + lint-staged for pre-commit hooks
- 🚀 Role-based access control (RBAC)
- 🚀 Vercel configuration for quick deployment
- 🚀 Type-safe API wrappers for Supabase

## Getting Started
Follow these steps to set up and run the project:

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/next-supabase-auth-kit.git
cd next-supabase-auth-kit
```
### 2. Install Dependencies
```sh
yarn install
# or
npm install
```
### 3. Set Up Supabase
Go to Supabase and create a new project.
Navigate to Project Settings → API and get your SUPABASE_URL and SUPABASE_ANON_KEY.
Create a .env.local file in the root of the project and add:
```sh
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```
4. Run the Development Server
```sh
yarn dev
# or
npm run dev
```
Open http://localhost:3000 in your browser.

Project Structure
```bash
next-supabase-auth-kit/
│-- components/          # UI components
│-- app/login/           # Sign in page
│-- app/register/        # Sign up page
│-- utils/supabase/      # Supabase client setup
│-- .env.local           # Environment variables
│-- package.json         # Project dependencies and scripts
│-- README.md            # Project documentation
```
## Contributing
Contributions are welcome! Feel free to submit issues and pull requests.
