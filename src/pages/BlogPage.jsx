import { useEffect, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import PostCard from "../components/PostCard";

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log(data);
      setPosts(data);
      setError(false);
    } catch (e) {
      setError(true);
    }
  };

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
