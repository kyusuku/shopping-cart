# Threadware

Threadware is a React application built with TypeScript and Vite. It leverages Tailwind CSS for styling and provides a seamless shopping experience with features like a dynamic shopping cart, checkout flow, and contextual state management. Product data is fetched from the [FakeStore API](https://fakestoreapi.com/).

## Try It Out

Check out the live demo: [Here!](https://threadware.vercel.app)

## Features

- **Modern UI & Animations:** Clean and responsive design with smooth transitions.
- **Dynamic Shopping Cart:** Add, update, and delete items with quantity adjustments.
- **Checkout Flow:** Review your order and see a live subtotal calculation.
- **Loading States:** Animated loading indicators for a polished UX.
- **State Management:** Utilizes React Context for managing cart state.
- **API Integration:** Fetches product data from the [FakeStore API](https://fakestoreapi.com/).

## Project Structure

```
shopping-cart/
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── Checkout.tsx
│   ├── Exit.tsx
│   ├── Shop.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── routes.tsx
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Dropdown.tsx
│   │   └── Card.tsx
│   └── context/
│       └── ItemCountContext.tsx
```

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/kyusuku/shopping-cart.git
   cd shopping-cart
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the development server:**
   ```sh
   npm run dev
   ```
   Open your browser at `http://localhost:5173` (or the port specified in the console) to view the application.

## Available Scripts

- **`dev`**: Starts the development server.
- **`build`**: Builds the project for production.
- **`preview`**: Serves the production build locally.
- **`lint`**: Runs ESLint to analyze code quality.

## Technologies Used

- **React** with TypeScript
- **Vite** for fast development and bundling
- **Tailwind CSS** for utility-first styling
- **React Router DOM** for client-side routing
- **Context API** for state management
- **FakeStore API:** Used to fetch product data

## Configuration Files

- **ESLint:** Configured in [eslint.config.js](./eslint.config.js) for code linting.
- **Prettier:** Formatting is set up via [`.prettierrc`](./.prettierrc) and [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss).
- **Vite:** The build configuration can be found in [vite.config.ts](./vite.config.ts).
- **Vercel:** Deployment settings are specified in [vercel.json](./vercel.json).

## Deployment

This project is configured for deployment on Vercel. Rewrites to `index.html` are handled automatically via the settings in [vercel.json](./vercel.json).

## Acknowledgments

This project was developed using best practices for modern web development with the React + TypeScript + Vite template. Special thanks to The Odin Project for providing invaluable learning resources, inspiration, and guidance on this journey.
