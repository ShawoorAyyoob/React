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
      setError(`Error while loading Posts`);
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
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <h1 className="fw-bold text-primary mb-0">
          <i className="bi bi-search me-2"></i>Search Posts
        </h1>
        <input
          type="text"
          name="searchBox"
          id="searchBox"
          value={searchTerm}
          placeholder=" 🔎 Search title"
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control ms-2"
          style={{ maxWidth: 300 }}
        />
      </div>
      <div className="row g-3">
        {filteredPosts.map((post) => (
          <div className="col-12 col-md-6 col-lg-4" key={post.id}>
            <div className="card shadow-sm border-0 h-100 post-card">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-semibold text-dark">{post.title}</h5>
                <Link
                  to={`/posts/${post.id}`}
                  className="btn btn-gradient mt-auto align-self-start"
                >
                  <i className="bi bi-eye me-1"></i>View Post
                </Link>
              </div>
            </div>
          </div>
        ))}
        {filteredPosts.length === 0 && (
          <div className="col-12">
            <div className="alert alert-info text-center shadow-sm mb-0">
              No posts found.
            </div>
          </div>
        )}
      </div>
      <style>
        {`
          .btn-gradient {
            background: linear-gradient(90deg, #fc466b 0%, #3f5efb 100%);
            color: #fff;
            border: none;
            font-weight: 600;
            box-shadow: 0 2px 8px #3f5efb22;
            transition: background 0.2s, color 0.2s;
          }
          .btn-gradient:hover {
            background: linear-gradient(90deg, #3f5efb 0%, #fc466b 100%);
            color: #fff;
          }
          .post-card {
            border-radius: 1rem;
            transition: transform 0.18s, box-shadow 0.18s;
            background: linear-gradient(120deg, #f5f7fa 70%, #c3cfe2 100%);
          }
          .post-card:hover {
            transform: translateY(-6px) scale(1.03);
            box-shadow: 0 8px 32px 0 rgba(44, 62, 80, 0.18);
            border: 1.5px solid #3f5efb;
          }
             `}
      </style>
    </div>
  );
}
export default FilteredPostList;
