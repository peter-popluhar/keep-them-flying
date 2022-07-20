import { render } from "@testing-library/react";
import LandingPage from "./landing-page";

test("renders LandingPage", () => {
  const { container } = render(<LandingPage />);
  expect(container).toMatchSnapshot();
});
