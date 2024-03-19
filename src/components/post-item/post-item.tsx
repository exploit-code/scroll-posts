import { IPost } from "../../types/types";
import { Link } from "react-router-dom";
import styles from "./post-item.module.scss";

export const PostItem = ({ id, title, body }: IPost) => {
  return (
    <Link className={styles.postItem} to={`/posts/${id}`}>
      <h3 className={styles.postItem__title}>{title}</h3>
      <p className={styles.postItem__desc}>{body}</p>
    </Link>
  );
};
