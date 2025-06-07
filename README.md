# iCoder: Heaven for Coders

**iCoder** is a blogging platform specifically designed for coders. Whether you want to read insightful articles or share your own coding knowledge, iCoder provides a dedicated space for the developer community.

## 🚀 Features

- **Blogging Platform**: Create, read, and manage coding-related blog posts.
- **User Authentication**: Secure user sign-up and login powered by Clerk.
- **Database Integration**: Seamless data storage and retrieval with MongoDB Atlas.
- **Responsive UI**: A modern and responsive design for an optimal viewing experience on any device.

## 🛠️ Tech Stack

iCoder leverages a robust and modern tech stack to deliver a fast and scalable blogging experience:

- **Frontend Framework**: [Next.js](https://nextjs.org/) (React Web Framework) for server-side rendering and efficient UI development.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling, enabling rapid and consistent design.
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) for beautifully designed and accessible UI components.
- **Authentication**: [Clerk](https://clerk.dev/) for secure and easy user management.
- **Database**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a flexible and scalable NoSQL database solution.
- **Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest) for efficient data fetching, caching, and state management.

## 🧪 Environment Variables

To run this project locally, set up the following environment variables. Create a `.env.local` file in your project root and add:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

MONGO_URI=your-mongodb-atlas-uri
