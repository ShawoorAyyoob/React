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
  const [post, setPost] = useState<Post >();
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
  if (post == null)  {
    return <h3>Please Wait.</h3>;
  }
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>
        <strong>👀 Views:</strong> {post.views}
      </p>
      <p>
        <strong>👍 Likes:</strong> {post.reactions.likes} |{" "}
        <strong>👎 Dislikes:</strong> {post.reactions.dislikes}
      </p>
      <Link to="/"> Get Back</Link>
    </div>
  );
}
export default PostDetails;