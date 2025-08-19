import Link from 'next/link';
import { PostMeta } from '@/lib/posts';

interface BlogListProps {
  posts: PostMeta[];
}

export default function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No blog posts yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {posts.map((post) => (
        <article key={post.slug} className="blog-card">
          <Link href={`/posts/${post.slug}`} className="block group">
            <h2 className="text-2xl font-bold mb-2 blog-title">
              {post.title}
            </h2>
            <time className="text-sm text-gray-600 blog-date block">
              {post.formattedDate}
            </time>
            {post.readingTime && (
              <span className="reading-time inline-block mt-2">{post.readingTime}</span>
            )}
            {post.preview && (
              <p className="blog-preview mt-3">
                {post.preview}
              </p>
            )}
          </Link>
        </article>
      ))}
    </div>
  );
}