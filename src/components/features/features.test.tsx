import { render, screen } from "@testing-library/react";
import Features from "./features";

test("renders Features", () => {
  const { container } = render(<Features />);
  const text = screen.getByText(
    /Solutions for travelers during the COVID-19 pandemic/i
  );
  expect(text).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
