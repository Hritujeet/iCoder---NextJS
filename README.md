iCoder: Heaven for Coders
iCoder is a blogging platform specifically designed for coders. Whether you want to read insightful articles or share your own coding knowledge, iCoder provides a dedicated space for the developer community.

Features
Blogging Platform: Create, read, and manage coding-related blog posts.
User Authentication: Secure user sign-up and login powered by Clerk.
Database Integration: Seamless data storage and retrieval with MongoDB Atlas.
Responsive UI: A modern and responsive design for an optimal viewing experience on any device.
Tech Stack
iCoder leverages a robust and modern tech stack to deliver a fast and scalable blogging experience:

Frontend Framework: Next.js (React Web Framework) for server-side rendering and efficient UI development.
Styling: Tailwind CSS for utility-first styling, enabling rapid and consistent design.
UI Components: Shadcn/UI for beautifully designed and accessible UI components.
Authentication: Clerk Authentication for secure and easy user management.
Database: MongoDB Atlas for a flexible and scalable NoSQL database solution.
Data Fetching: TanStack Query (React Query) for efficient data fetching, caching, and state management.
Environment Variables
To run this project locally, you'll need to set up the following environment variables. Create a .env.local file in your project root and add them:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY={Your Clerk Publishable Key}
CLERK_SECRET_KEY={Your Clerk Secret Key}

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

MONGO_URI={Your MongoDB Atlas Connection URI}
Clerk Keys: Obtain your Clerk Publishable and Secret keys from your Clerk dashboard.
MongoDB URI: Get your MongoDB Atlas connection string from your MongoDB Atlas dashboard.
Getting Started
Follow these steps to set up and run iCoder on your local machine:

Clone the repository:
Bash

git clone https://github.com/your-username/iCoder.git
cd iCoder
Install dependencies:
Bash

npm install
# or yarn install
Run the development server:
Bash

npm run dev
# or yarn dev
Open http://localhost:3000 in your browser to see the application.

Hosted Version
Explore the live version of iCoder here:

https://i-coder-next-js.vercel.app/

Contributing
Contributions are welcome! If you have suggestions or want to improve iCoder, feel free to fork the repository and submit a pull request.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
