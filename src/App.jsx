import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import HomePage from "./pages/HomePage";

const BlogPage = lazy(() => import("./pages/BlogPage"));
const PostDetails = lazy(() => import("./pages/PostDetails"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<PostDetails />} />
        <Route path="/settings" element={<SettingsPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
