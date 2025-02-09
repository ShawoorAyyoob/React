import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  title: string;
}
function FilteredPostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchPosts = async () => {
    const response = await fetch("https://dummyjson.com/posts");
    if (response.ok == false) {
      setError(`Error while loading Recipes`);
    } else {
      const data = await response.json();
      setPosts(data.posts);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (error != null) {
    return <h3>Error, Please Wait.</h3>;
  }
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h1> Filtered Posts</h1>
      <input
        type="color-red"
        name="searchBox"
        id="searchBox"
        value={searchTerm}
        placeholder="Search title"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="list-group">
        {filteredPosts.map((post) => (
          <li key={post.id} className="list-group-item">
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FilteredPostList;
