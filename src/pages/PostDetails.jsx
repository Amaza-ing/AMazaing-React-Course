import { useParams } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import { useEffect, useState } from "react";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState();

  const fetchPost = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    console.log(data);
    setPost(data);
  };

  useEffect(() => {
    fetchPost(id);
  }, []);

  return (
    <>
      <HeaderComponent></HeaderComponent>

      {post && (
        <section>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>{post.id}</p>
          <p>{post.userId}</p>
        </section>
      )}
    </>
  );
}

export default PostDetails;
