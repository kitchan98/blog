# My Personal Blog

This is a personal blog built with [Next.js](https://nextjs.org), designed to share thoughts, articles, and insights. It's structured to be easy to update and maintain, focusing on content delivery.

## Features

-   **MDX Support**: Write your blog posts using Markdown with JSX components for rich, interactive content.
-   **Content Management**: Posts are managed as `.mdx` files in the `content/posts` directory, parsed using `gray-matter` for metadata (title, date, preview).
-   **Date Formatting**: Utilizes `date-fns` for consistent and flexible date display.
-   **Styling**: Styled with [Tailwind CSS](https://tailwindcss.com/) for a modern and responsive design.
-   **Automatic Reading Time**: Each post automatically calculates and displays an estimated reading time.

## Adding New Posts

To add a new blog post:
1.  Create a new `.mdx` file inside the `content/posts` directory (e.g., `my-new-post.mdx`).
2.  Add frontmatter at the top of the file for metadata, like this:

    ```markdown
    ---
    title: "My New Awesome Post"
    date: "2025-08-19"
    preview: "A short preview of my new post."
    ---
    ```
3.  Write your post content below the frontmatter using Markdown and JSX.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.