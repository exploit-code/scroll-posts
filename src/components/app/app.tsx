import { Route, Routes } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { HomePage } from "../../pages/home/home";
import { NotFoundPage } from "../../pages/not-found/not-found";
import { Layout } from "../../pages/layout/layout";
import { PostPage } from "../../pages/post/post";
import { request } from "../../api/api";
import { IPost } from "../../types/types";

export const App = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadMoreVisible, setLoadMoreVisible] = useState<boolean>(false);
  const [scrollCount, setScrollCount] = useState<number>(1);

  const fetchPosts = useCallback(async (pageNumber: number) => {
    setLoading(true);
    try {
      try {
        const data = await request(`posts?_page=${pageNumber}&_limit=10`);
        setPosts((prevPosts) => [...prevPosts, ...data]);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleScroll = useCallback(() => {
    const innerHeight = window.innerHeight;
    const scrollTop = document.documentElement.scrollTop;
    const offsetHeight = document.documentElement.offsetHeight;

    if (innerHeight + scrollTop === offsetHeight) {
      if (scrollCount < 5) {
        setScrollCount((prevCount) => prevCount + 1);
        setPage((prevPage) => prevPage + 1);
      }
    }
  }, [scrollCount]);

  useEffect(() => {
    if (page >= 5 && posts.length < 100) {
      setLoadMoreVisible(true);
    } else {
      setLoadMoreVisible(false);
    }
  }, [page, posts]);

  useEffect(() => {
    const fetchPostsAndData = async () => {
      await fetchPosts(page);
    };
    fetchPostsAndData();
  }, [page, fetchPosts]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <HomePage
              posts={posts}
              loading={loading}
              loadMoreVisible={loadMoreVisible}
              handleLoadMore={handleLoadMore}
            />
          }
        />
        <Route path="posts/:id" element={<PostPage posts={posts} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
