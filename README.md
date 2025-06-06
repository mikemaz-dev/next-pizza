# 🍕 NextPizza — DodoPizza Clone with Next.js

A full-featured pizza delivery web application inspired by DodoPizza, built with modern web technologies and demonstrating real-world e-commerce functionality.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma)](https://www.prisma.io/)

## 🚀 Live Demo

Visit the live application: [Your Vercel URL here]

## 📱 Live Preview

<div align="center">
  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/next-pizza-ws66RgB6VXa1beuTAKLFPf3pgwpe9L.png" alt="NextPizza Application Screenshot" width="800"/>
  <p><em>NextPizza's modern interface featuring product filtering, pizza selection, and detailed ingredient information</em></p>
</div>

## 📋 About

NextPizza is a comprehensive pizza delivery platform that replicates the functionality of DodoPizza. Built with Next.js 14 and modern web technologies, it showcases advanced e-commerce features including server-side rendering, authentication, payment processing, and real-time notifications.

## ✨ Features

- 🔍 **Advanced Product Filtering** - Server-side rendering with URI-based filter state
- 🛒 **Smart Cart Management** - Add, remove, and modify products with real-time updates
- 🔐 **Multi-Provider Authentication** - Email/password, GitHub, and Google OAuth integration
- ✅ **Email Verification System** - Confirmation emails and order notifications
- 👤 **User Profile Management** - Complete profile editing and order history
- 🍕 **Dynamic Product Views** - Modal windows and parallel routes for product details
- 💳 **Secure Checkout Process** - Integrated payment processing and order management
- 📱 **Responsive Design** - Optimized for all device sizes
- 🚀 **High Performance** - Server components and optimized loading
- 🔔 **Real-time Notifications** - Toast messages and email alerts

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="48" height="48" alt="Next.js" />
<br><strong>Next.js 14</strong>
</td>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="48" height="48" alt="TypeScript" />
<br><strong>TypeScript</strong>
</td>
<td align="center" width="100">
<img src="https://github.com/devicons/devicon/tree/v2.16.0/icons/tailwindcss/tailwindcss-original.svg" width="48" height="48" alt="Tailwind CSS" />
<br><strong>Tailwind CSS</strong>
</td>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" width="48" height="48" alt="Prisma" />
<br><strong>Prisma</strong>
</td>
</tr>
<tr>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="48" height="48" alt="PostgreSQL" />
<br><strong>PostgreSQL</strong>
</td>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="48" height="48" alt="React" />
<br><strong>React</strong>
</td>
<td align="center" width="100">
<img src="https://authjs.dev/img/logo-sm.png" width="48" height="48" alt="NextAuth.js" />
<br><strong>NextAuth.js</strong>
</td>
<td align="center" width="100">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" width="48" height="48" alt="Vercel" />
<br><strong>Vercel</strong>
</td>
</tr>
</table>

### 🔧 Development Tools & Libraries

| Technology | Purpose | Description |
|------------|---------|-------------|
| **Next.js 14** | Framework | App Router, Server Components, API Routes |
| **TypeScript** | Language | Type safety across the entire project |
| **Tailwind CSS** | Styling | Utility-first CSS framework |
| **Prisma** | Database ORM | Type-safe database operations |
| **PostgreSQL** | Database | Relational database for data storage |
| **NextAuth.js** | Authentication | Multi-provider authentication system |
| **React Hook Form** | Forms | Performant form handling |
| **Zod** | Validation | Schema validation for forms and APIs |
| **Zustand** | State Management | Lightweight global state management |
| **react-use** | Utilities | Collection of essential React hooks |
| **nextjs-toploader** | UX | Route change loading indicators |
| **react-hot-toast** | Notifications | Beautiful toast notifications |
| **react-insta-stories** | Media | Instagram-like story player |
| **Lucide React** | Icons | Beautiful and consistent icon library |
| **Resend** | Email Service | Reliable email delivery service |

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- PostgreSQL database (local or hosted)
- GitHub and Google OAuth applications (for social login)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mikemaz-dev/next-pizza.git
   cd next-pizza
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   
   ```env
   # Database
   POSTGRES_URL="your_postgres_connection_string"
   POSTGRES_URL_NON_POOLING="your_postgres_non_pooling_string"
   
   # Authentication
   NEXTAUTH_SECRET="your_nextauth_secret"
   NEXT_PUBLIC_API_URL="http://localhost:3000"
   
   # OAuth Providers
   GITHUB_ID="your_github_oauth_id"
   GITHUB_SECRET="your_github_oauth_secret"
   GOOGLE_CLIENT_ID="your_google_oauth_id"
   GOOGLE_CLIENT_SECRET="your_google_oauth_secret"
   
   # Email Service
   RESEND_API_KEY="your_resend_api_key"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 📁 Project Structure

```
next-pizza/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Dashboard routes
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable components
├── lib/                   # Utility functions
├── prisma/               # Database schema and migrations
├── public/               # Static assets
├── types/                # TypeScript type definitions
├── .env.local            # Environment variables
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🔧 Development

### Database Operations

```bash
# Generate Prisma client
npx prisma generate

# Push schema changes
npx prisma db push

# View database in Prisma Studio
npx prisma studio

# Reset database
npx prisma db reset
```

### Building for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

The application is deployed on Vercel with the following setup:

1. **Database**: PostgreSQL hosted on Vercel Postgres
2. **Environment Variables**: Configured in Vercel dashboard
3. **Automatic Deployments**: Connected to GitHub for CI/CD

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push to main branch

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Recent Updates

- ✅ Implemented server-side product filtering with URI state
- ✅ Built comprehensive cart and checkout system
- ✅ Integrated multi-provider authentication (GitHub, Google)
- ✅ Added email confirmation and notification system
- ✅ Created user profile management interface
- ✅ Implemented modal and parallel route product views
- ✅ Set up PostgreSQL database with Prisma ORM
- ✅ Deployed to Vercel with automatic CI/CD

## 🙏 Acknowledgments

- Inspired by [DodoPizza](https://dodopizza.com/) for the design and functionality
- Thanks to the Next.js team for the amazing framework
- Vercel for providing excellent hosting and database services
- The open-source community for the incredible tools and libraries

---

⭐ If you found this project helpful, please consider giving it a star!
