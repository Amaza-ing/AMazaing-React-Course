import { useContext, useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import PostCard from "../components/PostCard";
import { BlogContext } from "../contexts/blog.context";

function BlogPage() {
  const { posts, error, getPosts } = useContext(BlogContext);

  useEffect(() => {
    getPosts();
  }, []);

  const postCards = posts.map((post) => {
    return (
      <li key={post.id}>
        <PostCard post={post}></PostCard>
      </li>
    );
  });

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <section>
        <h2>Blog</h2>

        {error ? (
          <h2>Algo ha salido mal</h2>
        ) : !postCards.length ? (
          <h2>Loading...</h2>
        ) : (
          <ul>{postCards}</ul>
        )}
      </section>
    </>
  );
}

export default BlogPage;
