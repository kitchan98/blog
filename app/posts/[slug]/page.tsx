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
        <Link href="/" className="back-link">
          <span className="back-arrow">←</span>
          <span>Back to all posts</span>
        </Link>
        
        <header className="article-header fade-in">
          <h1 className="article-title">{post.title}</h1>
          <div className="article-meta">
            <time>{post.formattedDate}</time>
            {post.readingTime && (
              <>
                <span>•</span>
                <span>{post.readingTime}</span>
              </>
            )}
          </div>
        </header>
        
        <article className="prose fade-in">
          <MDXRemote source={post.content} />
        </article>
      </div>
    </div>
  );
}