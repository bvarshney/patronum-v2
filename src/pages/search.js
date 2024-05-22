import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import PostCard from '@/components/PageComponents/BlogPage/PostCard';
import { getAllPosts } from '@/lib/posts';

export default function SearchResults({ posts }) {
  const router = useRouter();
  const { query } = router.query;
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (query) {
      const lowercasedQuery = query.toLowerCase();
      const filtered = posts.filter(post => {
        const title = post.title ? post.title.toLowerCase() : '';
        const excerpt = post.excerpt ? post.excerpt.toLowerCase() : '';
        const content = post.content ? post.content.toLowerCase() : '';
        return title.includes(lowercasedQuery) ||
               excerpt.includes(lowercasedQuery) ||
               content.includes(lowercasedQuery);
      });
      setFilteredPosts(filtered);
    }
  }, [query, posts]);

  return (
    <PageLayout
      pageTitle1="Search Results for"
      pageTitle2={`"${query}"`}
    >
      <section id="search-results">
        <div className="container">
          <div className="content">
            <h2>Search Results for "{query}"</h2>
            <div className='blog-main-container mt-4'>
              {filteredPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const { posts } = await getAllPosts({
    queryIncludes: 'all',
  });

  return {
    props: {
      posts,
    },
    revalidate: 500,
  };
}
