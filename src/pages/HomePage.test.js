import { fireEvent, render } from "@testing-library/react";
import HomePage from "./HomePage";
import { UserProviderWrapper } from "../contexts/user.context";
import { MemoryRouter } from "react-router-dom";

describe("HomePage", () => {
  it("simple test", () => {
    expect(1).toEqual(1);
  });

  it("should get HomePage as title", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <UserProviderWrapper>
          <HomePage />
        </UserProviderWrapper>
      </MemoryRouter>
    );

    const homePageTitle = getByTestId("homepage-title").textContent;
    expect(homePageTitle).toEqual("HomePage");
  });

  it("should add one to counter", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <UserProviderWrapper>
          <HomePage />
        </UserProviderWrapper>
      </MemoryRouter>
    );

    const increseBtn = getByTestId("increase-counter");
    fireEvent.click(increseBtn);

    const counter = getByTestId("counter").textContent;
    expect(counter).toEqual("1")
  });
});
