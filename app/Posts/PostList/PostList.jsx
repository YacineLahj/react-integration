import { useEffect, useState } from "react";
import { Post } from "./Post/Post";
import axios from "axios";

export function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const headers = {
      Authorization:
        "Bearer 3d517a1fc1702377e3367d12d2e27dbc0638a1c1e28ec724c5b32de271ce5698",
      Accept: "application/json",
    };

    axios
      .get(`https://gorest.co.in/public/v2/posts`, { headers })
      .then((data) => {
        setPosts(data.data);
      });

    setLoading(false);
  }, []);

  if (loading) return <p>Loading</p>;

  if (!posts.length) return <p>Pas encore de posts</p>;

  if (posts.length)
    return (
      <div className="flex flex-col justify-center items-center gap-6">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    );
}
