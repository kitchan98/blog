import BlogList from '@/components/BlogList';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <header className="site-header">
          <h1 className="text-4xl font-bold mb-2 site-title">My Blog</h1>
          <p className="tagline">Thoughts and ideas worth sharing</p>
        </header>
        
        <main className="fade-in">
          <BlogList posts={posts} />
        </main>
      </div>
    </div>
  );
}