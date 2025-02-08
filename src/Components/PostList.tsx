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
        const response = await fetch(
            "https://dummyjson.com/posts"
        );
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
            <h1> Post List</h1>
            <ul className="list-group">
                {posts.map((post) => (
                    <li key={post.id} className="list-group-item">
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default PostList;