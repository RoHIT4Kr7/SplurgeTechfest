# Splurge Techfest Website

Welcome to the official repository for the Splurge Techfest website, hosted by Pailan College of Management and Technology. This project is built using [Next.js](https://nextjs.org/) and various other modern web technologies.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/splurge-techfest.git
    cd splurge-techfest
    ```

2. Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3. Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project structure is as follows:

```
.eslintrc.json
.gitignore
.next/
app/
  aboutus/
  accomodation/
  ClientLayout.tsx
  contacts/
  data/
  default/
  effects/
  events/
  fonts/
  globals.css
  layout.tsx
  not-found.tsx
  page.tsx
  robots.ts
  sitemap.ts
build-script.js
components/
constants/
next-env.d.ts
next.config.mjs
package.json
postcss.config.mjs
public/
README.md
tailwind.config.ts
tsconfig.json
```

## Dependencies

The project uses the following dependencies:

- `@heroicons/react`: Icons for React
- `@react-three/drei`: Helper components for react-three-fiber
- `@react-three/fiber`: React renderer for three.js
- `aos`: Animate on scroll library
- `clsx`: Utility for constructing `className` strings conditionally
- `framer-motion`: Motion library for React
- `jquery`: JavaScript library for DOM manipulation
- `next`: React framework for production
- `next-images`: Import images in Next.js
- `react`: JavaScript library for building user interfaces
- `react-dom`: Entry point of the DOM-related rendering paths
- `react-icons`: Include popular icons in your React projects easily
- `react-intersection-observer`: React implementation of the Intersection Observer API

## Building the Project

To build the project, run:

```bash
npm run build
```

This will run the Next.js build process and execute the custom build script [`build-script.js`](build-script.js) to process and rename the output files.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is licensed under the MIT License.
