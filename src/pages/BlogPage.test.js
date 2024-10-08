import { render } from "@testing-library/react";
import BlogPage from "./BlogPage";
import { MemoryRouter } from "react-router-dom";
import { BlogProviderWrapper } from "../contexts/blog.context";
import { UserProviderWrapper } from "../contexts/user.context";

describe("BlogPage testing suit", () => {
  it("should say Blog", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <BlogProviderWrapper>
          <UserProviderWrapper>
            <BlogPage />
          </UserProviderWrapper>
        </BlogProviderWrapper>
      </MemoryRouter>
    );

    const blogTitle = getByTestId("blog-title").textContent;
    expect(blogTitle).toEqual("Blog");
  });
});
