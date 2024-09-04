import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />    
      <Route path="/blog" element={<BlogPage />} />    
      <Route path="/blog/:id" element={<PostDetails />} />    
    </Routes>
  );
}

export default App;
