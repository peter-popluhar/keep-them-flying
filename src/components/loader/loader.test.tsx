import { render } from "@testing-library/react";
import Loader from "./loader";

test("renders Loader", () => {
  const { container } = render(<Loader />);
  expect(container).toMatchSnapshot();
});
