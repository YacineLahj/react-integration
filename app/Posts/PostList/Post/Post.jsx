import { useNavigate } from "react-router";

export function Post({ id, user_id, title, body }) {
  let navigate = useNavigate();
  return (
    <div className="border border-white w-[520px] h[-80px] p-10 rounded-xl flex flex-col gap-4">
      <h3 className="text-xl">{title}</h3>
      <p className="text-xs">{body}</p>
      <button onClick={() => navigate(`/posts/${id}`)}>Voir</button>
    </div>
  );
}
