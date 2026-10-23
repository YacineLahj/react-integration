import axios from "axios";
import { useUser } from "../../contexts/UserContext";

export function PostForm() {
  const user = useUser();
  console.log(user);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submittedBody = form.body.value;
    const submittedTitle = form.title.value;

    const headers = {
      Authorization:
        "Bearer 3d517a1fc1702377e3367d12d2e27dbc0638a1c1e28ec724c5b32de271ce5698",
      Accept: "application/json",
    };

    axios
      .post(
        "https://gorest.co.in/public/v2/posts",
        {
          title: submittedTitle,
          body: submittedBody,
          user_id: user.user_id,
        },
        { headers },
      )
      .then((data) => console.log(data));
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-80">
      <input className="bg-white text-black" name="title" />
      <input className="bg-white text-black" name="body" />
      <button type="submit">Ajouter</button>
    </form>
  );
}
