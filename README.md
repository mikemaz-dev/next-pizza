# 🍕 NextPizza — DodoPizza Clone with Next.js

NextPizza is a full-featured pizza delivery web app inspired by DodoPizza. It's built using modern web technologies and demonstrates how to build a real-world e-commerce experience using **Next.js 14**, **TypeScript**, **Prisma**, and more.

---

## ✨ Features

1. 🔍 **Product Filtering**  
   - Server-side rendering (SSR)  
   - Filter state stored in the URI

2. 🛒 **Cart and Checkout**  
   - Add/remove products to/from the cart 

3. 🔐 **Authentication and Registration**  
   - Email & Password login  
   - OAuth via GitHub and Google

4. ✅ **Email Confirmation**  
   - Confirmation email after registration  
   - Email notifications for orders and payments

5. 👤 **Profile Editing**

7. 🍕 **Product View**  
   - In a modal window  
   - Or via a separate route (using **Parallel Routes**)

8. 🚀 **Deployment and Database**  
   - Hosted on **Vercel**  
   - Data stored in **PostgreSQL** via **Prisma**

9. 🧠 **Client and Server Components**  
   - Real examples using **Server Actions**, **API Routes**, and **Dynamic Routing**

---

## 🧰 Tech Stack

| Technology              | Description                              |
|-------------------------|------------------------------------------|
| ⚡ **[Next.js](https://nextjs.org/)**        | App Router, Server Components, API Routes |
| 🟦 **[TypeScript](https://www.typescriptlang.org/)** | Type safety across the project           |
| 💨 **[Tailwind CSS](https://tailwindcss.com/)** | Utility-first CSS framework              |
| 🟣 **[Prisma](https://www.prisma.io/)**      | ORM for PostgreSQL                       |
| 🐘 **[PostgreSQL](https://www.postgresql.org/)** | Relational database                      |
| 🔐 **[NextAuth.js](https://next-auth.js.org/)** | Authentication system                    |
| 📝 **[React Hook Form](https://react-hook-form.com/)** + **[Zod](https://zod.dev/)** | Form validation                          |
| 🐻 **[Zustand](https://zustand-demo.pmnd.rs/)** | Global state management                  |
| 🔁 **[react-use](https://github.com/streamich/react-use)** | React hooks collection                   |
| 📶 **[nextjs-toploader](https://www.npmjs.com/package/nextjs-toploader)** | Route change loading bar                 |
| 🔥 **[react-hot-toast](https://react-hot-toast.com/)** | Toast notifications                      |
| 📸 **[react-insta-stories](https://www.npmjs.com/package/react-insta-stories)** | Instagram-like story player              |
| 💡 **[lucide-react](https://lucide.dev/)**   | Icon library                             |
| ✉️ **[Resend](https://resend.com/)**         | Email sending service                    |

---

## 📦 Deployment

This app is deployed on [Vercel](https://vercel.com/), with environment variables managed through the Vercel dashboard. PostgreSQL is hosted via the Vercel.

---

## 🧪 Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/mikemaz-dev/next-pizza.git


# Install dependencies
npm install

# Create .env file and add required variables
POSTGRES_URL
POSTGRES_URL_NON_POOLING
RESEND_API_KEY
NEXTAUTH_SECRET
NEXT_PUBLIC_API_URL

GITHUB_ID
GITHUB_SECRET

GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET

# Run development server
npm run dev
