import React from "react";
import { Link } from "react-router-dom";

function PostCard(props) {
  console.log("PostCard rendered");
  
  const { post } = props;
  return (
    <article>
      <h3>
        <Link to={`/blog/${post.id}`}>{post.title}</Link>
      </h3>
      <p>{post.body}</p>
    </article>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(PostCard);
