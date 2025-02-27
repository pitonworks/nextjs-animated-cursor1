# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring 3D animations, interactive UI components, and a full-stack architecture.

## Features

- 🎨 Modern UI/UX with Tailwind CSS
- 🌗 Dark/Light mode support
- 🎬 Smooth animations with Framer Motion
- 🎮 Interactive 3D elements with Three.js
- 📱 Fully responsive design
- 📨 Contact form with API integration
- ⚡ Fast page loads with Next.js 13 App Router

## Tech Stack

- **Frontend:**
  - Next.js 13
  - React
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - Three.js (@react-three/fiber & @react-three/drei)

- **Backend:**
  - Next.js API Routes
  - MongoDB (ready to integrate)
  - Prisma (ready to integrate)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app
  /components      # Reusable components
  /api            # API routes
  /models         # Database models
  /utils          # Utility functions
  /about          # About page
  /projects       # Projects page
  /contact        # Contact page
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:
```
# Add your environment variables here
MONGODB_URI=your_mongodb_uri
EMAIL_SERVICE=your_email_service
EMAIL_USER=your_email_user
EMAIL_PASS=your_email_password
```

## Project Structure

```
/app
  /components      # Reusable components
  /api            # API routes
  /models         # Database models
  /utils          # Utility functions
  /about          # About page
  /projects       # Projects page
  /contact        # Contact page
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or need assistance, feel free to contact the project maintainers.