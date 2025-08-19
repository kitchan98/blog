import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <header className="mb-8">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-black mb-6 inline-block"
          >
            ← Back to all posts
          </Link>
          <h1 className="text-4xl font-bold mb-3">{post.title}</h1>
          <time className="text-gray-600">{post.formattedDate}</time>
        </header>
        
        <article className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </article>
      </div>
    </div>
  );
}