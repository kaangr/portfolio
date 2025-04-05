# Portfolio Website

A modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and Three.js. Features include a dynamic project showcase, admin panel for content management, and beautiful 3D animations.

## Features

- Modern and responsive design
- 3D background animations using Three.js
- Dynamic project showcase
- Admin panel for content management
- SQLite database with Prisma ORM
- Authentication with NextAuth.js
- Form validation with Zod
- Beautiful UI components with Shadcn UI

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Three.js
- Prisma (SQLite)
- NextAuth.js
- Shadcn UI
- Zod

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   ```bash
   npm run db:push
   npm run db:seed
   ```

4. Create a `.env` file in the root directory with the following variables:
   ```
   NEXTAUTH_SECRET=your-secret-key
   NEXTAUTH_URL=http://localhost:3000
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Admin Panel

The admin panel is accessible at `/admin`. Default credentials:
- Email: admin@example.com
- Password: admin123

## Project Structure

```
src/
├── app/
│   ├── admin/           # Admin panel pages
│   ├── api/             # API routes
│   └── page.tsx         # Home page
├── components/          # Reusable components
├── lib/                 # Utility functions and configurations
└── prisma/             # Database schema and migrations
```

## Deployment

The project can be deployed to Vercel or Netlify:

1. Push your code to GitHub
2. Connect your repository to Vercel/Netlify
3. Set up the environment variables
4. Deploy!

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
