import { render } from "@testing-library/react";
import BlogPage from "./BlogPage";
import { MemoryRouter } from "react-router-dom";
import { BlogContext, BlogProviderWrapper } from "../contexts/blog.context";
import { UserProviderWrapper } from "../contexts/user.context";

jest.mock("../components/HeaderComponent.jsx", () => {
  return {
    __esModule: true,
    default: () => <></>,
  };
});

describe("BlogPage testing suit", () => {
  it("should say Blog", () => {
    const { getByTestId } = render(
      <BlogProviderWrapper>
        <UserProviderWrapper>
          <BlogPage />
        </UserProviderWrapper>
      </BlogProviderWrapper>
    );

    const blogTitle = getByTestId("blog-title").textContent;
    expect(blogTitle).toEqual("Blog");
  });

  it("should say Blog", () => {
    const { getByTestId } = render(
      <BlogContext.Provider
        value={{
          posts: [],
          error: true,
          getPosts: () => {},
        }}
      >
        <UserProviderWrapper>
          <BlogPage />
        </UserProviderWrapper>
      </BlogContext.Provider>
    );

    const errorMsg = getByTestId("error-msg").textContent;
    expect(errorMsg).toEqual("Algo ha salido mal");
  });

  it("should say Blog", () => {
    const { getByTestId } = render(
      <BlogContext.Provider
        value={{
          posts: [],
          error: false,
          getPosts: () => {},
        }}
      >
        <UserProviderWrapper>
          <BlogPage />
        </UserProviderWrapper>
      </BlogContext.Provider>
    );

    const loadingMsg = getByTestId("loading-msg").textContent;
    expect(loadingMsg).toEqual("Loading...");
  });
});
