import { render, screen } from "@testing-library/react";
import Banner from "./banner";

test("renders Banner", () => {
  const { container } = render(<Banner />);
  const text = screen.getByText(/Keep them flying/i);
  expect(text).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
