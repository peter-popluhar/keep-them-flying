import { render } from "@testing-library/react";
import Result from "./container";

const mockedUsedLocation = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useLocation: () => mockedUsedLocation,
}));

test("renders Result", () => {
  // const { container } = render(<Result />);
  // expect(container).toMatchSnapshot();
});
