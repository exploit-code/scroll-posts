import styles from "./home.module.scss";
import { PostsList } from "../../components/posts-list/posts-list";
import { IPost } from "../../types/types";
import { Button } from "../../components/button/button";

interface IHomePageProps {
  posts: IPost[];
  loadMoreVisible: boolean;
  handleLoadMore: () => void;
  loading: boolean;
}

export const HomePage = ({ posts, loadMoreVisible, handleLoadMore, loading }: IHomePageProps) => {
  return (
    <section className={styles.home}>
      <h1>Posts</h1>
      <PostsList posts={posts} />
      {loadMoreVisible && !loading && (
        <Button
          text={"Load More Posts"}
          color={"primary"}
          radius={"s"}
          size={"m"}
          onClick={handleLoadMore}
        />
      )}
    </section>
  );
};
