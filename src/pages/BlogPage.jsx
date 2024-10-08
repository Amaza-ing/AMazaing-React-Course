import { useContext, useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import PostCard from "../components/PostCard";
import { BlogContext } from "../contexts/blog.context";
import { UserContext } from "../contexts/user.context";

function BlogPage() {
  const { posts, error, getPosts } = useContext(BlogContext);
  const {login, logout} = useContext(UserContext);


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
        <h2 data-testid="blog-title">Blog</h2>
        <button onClick={() => login()}>Login</button>
        <button onClick={() => logout()}>Logout</button>

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
