import { IPost } from "../../types/types";
import { PostItem } from "../post-item/post-item";
import styles from "./posts-list.module.scss";

interface IPostsList {
  posts: IPost[];
}

export const PostsList = ({ posts }: IPostsList) => {
  const { v4: uuidv4 } = require("uuid");
  return (
    <section className={styles.posts__list}>
      {posts.map((item) => (
        <PostItem {...item} key={uuidv4()} />
      ))}
    </section>
  );
};
