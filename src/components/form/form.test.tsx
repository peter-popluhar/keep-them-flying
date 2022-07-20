import { render } from "@testing-library/react";
import Form from "./container";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

test("renders Form", () => {
  const { container } = render(<Form />);
  expect(container).toMatchSnapshot();
});
