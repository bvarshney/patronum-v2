import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Search = ({ posts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = posts.filter(post => {
        const title = post.title ? post.title.toLowerCase() : '';
        const excerpt = post.excerpt ? post.excerpt.toLowerCase() : '';
        const content = post.content ? post.content.toLowerCase() : '';
        return title.includes(lowercasedQuery) ||
               excerpt.includes(lowercasedQuery) ||
               content.includes(lowercasedQuery);
      });
      setFilteredPosts(filtered.slice(0, 10)); // Show up to 10 results
      setShowSuggestions(true);
    } else {
      setFilteredPosts([]);
      setShowSuggestions(false);
    }
  }, [searchQuery, posts]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    router.push(`/search?query=${searchQuery}`);
  };

  const handleSuggestionClick = (slug) => {
    router.push(`/post/${slug}`);
  };

  return (
    <div className="search-container my-4">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          className="search-input p-2 border rounded w-full"
          placeholder="Search for posts..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </form>
      {showSuggestions && (
        <ul className="suggestions-list bg-white border rounded shadow-md mt-2">
          {filteredPosts.map((post) => (
            <li
              key={post.slug}
              className="suggestion-item p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(post.slug)}
            >
              {post.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
