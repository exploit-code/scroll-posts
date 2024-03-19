import { useParams } from "react-router-dom";
import { IPost } from "../../types/types";
import { NotFoundPage } from "../not-found/not-found";
import styles from "./post.module.scss";

export const PostPage = ({ posts }: { posts: IPost[] }) => {
  const { id } = useParams<{ id?: string }>();
  const postId = id ? parseInt(id) : undefined;
  const post = postId ? posts.find((post) => post.id === postId) : undefined;

  return (
    <>
      {post ? (
        <div className={styles.post}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
};
