import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

//it and test are same in jest

describe("Contact Component", () => {
  it("should load the component", () => {
    render(<Contact />);
    //querying
    const heading = screen.getByRole("heading");
    //assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside the component", () => {
    render(<Contact />);
    //   const button = screen.getByText("Submit");
    const button = screen.getByRole("button"); //we can use this also
    expect(button).toBeInTheDocument();
  });

  test("should load button inside the component", () => {
    render(<Contact />);
    //querying
    const button = screen.getByRole("button");
    //assertion
    expect(button).toBeInTheDocument();
  });

  test("should load input name inside the component", () => {
    render(<Contact />);
    //querying
    const inputName = screen.getByPlaceholderText("Name");
    //assertion
    expect(inputName).toBeInTheDocument();
  });

  test("should load two input boxes inside the component", () => {
    render(<Contact />);
    //querying
    const inputBoxes = screen.getAllByRole("textbox");
    //assertion
    expect(inputBoxes.length).toBe(2);
  });
});
