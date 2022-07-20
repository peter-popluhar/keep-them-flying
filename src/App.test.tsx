import { render } from "@testing-library/react";
import App from "./App";

test("renders Button", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
