import { useParams } from "react-router";
import type { Route } from "./+types/home";
import { useEffect, useState } from "react";

import axios from "axios";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function PostById() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const id = params.id;

  useEffect(() => {
    const headers = {
      Authorization:
        "Bearer 3d517a1fc1702377e3367d12d2e27dbc0638a1c1e28ec724c5b32de271ce5698",
      Accept: "application/json",
    };
    axios
      .get(`https://gorest.co.in/public/v2/posts/${id}`, { headers })
      .then((data) => {
        setPost(data.data);
      });
    setLoading(false);
  }, []);

  if (loading) return <p>loading</p>;
  if (!post) return <p>Pas de posts</p>;

  return <p>{post.body}</p>;
}
