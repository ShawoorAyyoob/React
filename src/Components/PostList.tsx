import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Post {
    id: number;
    title: string;
}
function PostList() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<string | null>(null);

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

    return (
        <div className="container mt-4">
            <h1 className="fw-bold text-primary mb-4">
                <i className="bi bi-list-ul me-2"></i>Post List
            </h1>
            <ul className="list-group list-group-flush shadow-sm rounded-4">
                {posts.map((post) => (
                    <li
                        key={post.id}
                        className="list-group-item d-flex justify-content-between align-items-center py-3"
                        style={{
                            fontSize: "1.1rem",
                            background: "linear-gradient(90deg, #f5f7fa 80%, #c3cfe2 100%)",
                            border: "none",
                            borderBottom: "1px solid #e0e7ef",
                        }}
                    >
                        <span className="fw-semibold text-dark">{post.title}</span>
                        <Link
                            to={`/posts/${post.id}`}
                            className="btn btn-sm btn-gradient"
                            style={{ minWidth: 110 }}
                        >
                            <i className="bi bi-eye me-1"></i>View Post
                        </Link>
                    </li>
                ))}
            </ul>
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
          .list-group-item {
            transition: box-shadow 0.18s, transform 0.18s;
          }
          .list-group-item:hover {
            box-shadow: 0 4px 16px 0 rgba(63,95,251,0.10);
            transform: translateY(-2px) scale(1.01);
            background: linear-gradient(90deg, #e0e7ef 80%, #f5f7fa 100%);
          }
        `}
            </style>
        </div>
    );
}
export default PostList;