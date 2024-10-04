import { createContext, useState } from "react";

const BlogContext = createContext();

function BlogProviderWrapper(props) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
      setError(false);
    } catch (e) {
      setError(true);
    }
  };

  return (
    <BlogContext.Provider value={{posts, error, getPosts}}>
      {props.children}
    </BlogContext.Provider>
  );
}

export { BlogContext, BlogProviderWrapper };
