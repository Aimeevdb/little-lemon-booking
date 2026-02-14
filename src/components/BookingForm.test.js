import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

test("renders the BookingForm heading", () => {
  render(<BookingForm />);
  expect(screen.getByText("Reserve a Table")).toBeInTheDocument();
});