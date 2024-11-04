# 🏠 Next.js Airbnb Project

Welcome to the Next.js bnb project! This app allows users to browse listings, book properties, and manage reservations. It’s built with [Next.js](https://nextjs.org), with [Clerk](https://clerk.dev) for authentication, [Prisma](https://prisma.io) for database management.

---

## 🚀 Getting Started

### Prerequisites

1. **Node.js**: Ensure Node.js is installed (version 16 or higher recommended).

### Quick Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run the Dev Server**:
   ```bash
   npm run dev
   ```

3. **Access the App**:
   Open [http://localhost:3000](http://localhost:3000) in your browser to see it live.

---

## 📄 Environment Setup

To set up the environment variables, create two files in the root directory of your project: `.env` and `.env.local`. Populate them as shown below. Replace the placeholders with your actual credentials.

### `.env`

```ini
# Primary Database Connection
DATABASE_URL="postgresql://your_database_url"
DIRECT_URL="postgresql://your_direct_database_url"

# Supabase settings
SUPABASE_URL="https://your_supabase_url.supabase.co"
SUPABASE_KEY="your_supabase_key"

# Admin User ID (replace with the correct admin user ID)
ADMIN_USER_ID="your_admin_user_id"

```

### `.env.local`

```ini
# Clerk settings (for user authentication)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"

# Redirects for user sign-in and sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL="/profile/create"
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL="/profile/create"

# Website URL
NEXT_PUBLIC_WEBSITE_URL="https://your_website_url.com"
```

> **Important**: Avoid sharing these files publicly, as they contain sensitive information.

---

## 🌍 Deployment

The easiest way to deploy this app is through [Vercel](https://vercel.com):

1. Create a project on Vercel and link it to this repository.
2. Add the environment variables in Vercel’s settings under the project.
3. Deploy with one click!

---

That’s it! Now you’re all set to run and deploy your very own bnb app. 🙌
