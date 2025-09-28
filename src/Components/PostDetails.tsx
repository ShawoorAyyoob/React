import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  body: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
}
function PostDetails() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post>();
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    if (response.ok == false) {
      setError(`Error while loading Content`);
    } else {
      const data = await response.json();
      setPost(data);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [id]);

  if (error != null) {
    return <h3>Error, Please Wait.</h3>;
  }
  if (post == null) {
    return <h3>Please Wait.</h3>;
  }
  return (
    <div className="container mt-4">
      <div className="card shadow rounded-4" style={{ maxWidth: 700, margin: "0 auto" }}>
        <div className="card-body p-4">
          <h2 className="card-title text-primary mb-3 text-center" style={{ wordBreak: "break-word" }}>
            {post.title}
          </h2>
          <hr />
          <p
            className="card-text fs-5 mb-4"
            style={{
              color: "#374151",
              lineHeight: 1.7,
              letterSpacing: "0.01em",
              textAlign: "justify",
              wordBreak: "break-word",
            }}
          >
            {post.body}
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-4 mb-4">
            <span className="badge bg-light text-dark px-3 py-2 shadow-sm fs-6">
              👀 <strong>Views:</strong> {post.views}
            </span>
            <span className="badge bg-success bg-opacity-75 px-3 py-2 shadow-sm fs-6">
              👍 <strong>Likes:</strong> {post.reactions.likes}
            </span>
            <span className="badge bg-danger bg-opacity-75 px-3 py-2 shadow-sm fs-6">
              👎 <strong>Dislikes:</strong> {post.reactions.dislikes}
            </span>
          </div>
          <div className="text-center">
            <Link to="/" className="btn btn-gradient px-4 py-2 fw-semibold">
              <i className="bi bi-arrow-left me-1"></i>Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PostDetails;