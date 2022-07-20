import { render, screen } from "@testing-library/react";
import Tiles from "./tiles";

test("renders Tiles", () => {
  const { container } = render(<Tiles />);
  const text = screen.getByText(
    /Find inspiration in places picked just for you/i
  );
  expect(text).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
