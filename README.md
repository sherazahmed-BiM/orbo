# Orbo

A modern React application built with Vite, TypeScript, and Tailwind CSS.

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher recommended)
- **npm** (comes with Node.js) or **yarn**

You can check if you have Node.js installed by running:
```bash
node --version
npm --version
```

## Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd orbo
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

   This will install all the required packages listed in `package.json`.

## Running the Project

### Development Mode

To start the development server, run:

```bash
npm run dev
```

The application will start and be available at:
- **Local**: http://localhost:5173
- The server will automatically reload when you make changes to the code.

### Build for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality
- `npm run typecheck` - Run TypeScript type checking without emitting files

## Technologies Used

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Supabase** - Backend services
- **Lucide React** - Icon library

## Project Structure

```
orbo/
├── src/
│   ├── components/     # React components
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Troubleshooting

If you encounter any issues:

1. **Port already in use**: If port 5173 is already in use, Vite will automatically use the next available port. Check the terminal output for the actual URL.

2. **Dependencies issues**: Try deleting `node_modules` and `package-lock.json`, then run `npm install` again:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Type errors**: Run `npm run typecheck` to see detailed TypeScript errors.

## License

This project is private.
