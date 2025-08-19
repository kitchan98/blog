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
        <article key={post.slug} className="border-b border-gray-200 pb-8 last:border-0">
          <Link href={`/posts/${post.slug}`} className="block group">
            <h2 className="text-2xl font-bold mb-2 group-hover:underline">
              {post.title}
            </h2>
            <time className="text-sm text-gray-600 mb-3 block">
              {post.formattedDate}
            </time>
            {post.preview && (
              <p className="text-gray-700 leading-relaxed">
                {post.preview}
              </p>
            )}
          </Link>
        </article>
      ))}
    </div>
  );
}