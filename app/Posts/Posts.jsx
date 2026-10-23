import { PostForm } from "./PostForm/PostForm";
import { PostList } from "./PostList/PostList";
import { CustomLayout } from "../components/CustomLayout/CustomLayout";

export function Posts() {
  return (
    <CustomLayout>
      <PostForm />
      <PostList />
    </CustomLayout>
  );
}
