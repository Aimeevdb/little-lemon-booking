import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "./BookingForm";

const mockDispatch = jest.fn();
const mockSubmit = jest.fn();

const setup = () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={mockDispatch}
        submitForm={mockSubmit}
      />
    </MemoryRouter>
  );
};

describe("BookingForm Component", () => {
  beforeEach(() => {
    mockDispatch.mockClear();
    mockSubmit.mockClear();
  });

  test("renders required HTML5 validation attributes", () => {
    setup();

    expect(screen.getByLabelText(/name/i)).toBeRequired();
    expect(screen.getByLabelText(/email/i)).toBeRequired();
    expect(screen.getByLabelText(/date/i)).toBeRequired();
    expect(screen.getByLabelText(/time/i)).toBeRequired();
    expect(screen.getByLabelText(/guests/i)).toBeRequired();
    expect(screen.getByLabelText(/indoor/i)).toBeRequired();
  });

  test("renders min/max/pattern attributes", () => {
    setup();

    expect(screen.getByLabelText(/name/i)).toHaveAttribute("minlength", "2");
    expect(screen.getByLabelText(/guests/i)).toHaveAttribute("min", "1");
    expect(screen.getByLabelText(/guests/i)).toHaveAttribute("max", "20");
    expect(screen.getByLabelText(/phone/i)).toHaveAttribute("pattern");
  });

  test("submit button is disabled when form is invalid", () => {
    setup();
    const button = screen.getByRole("button", { name: /confirm reservation/i });
    expect(button).toBeDisabled();
  });

  test("submit button enables when form is valid", () => {
    setup();

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Aimee" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "a@b.com" } });
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: "2026-02-20" } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: "17:00" } });
    fireEvent.change(screen.getByLabelText(/guests/i), { target: { value: "2" } });
    fireEvent.click(screen.getByLabelText(/indoor/i));

    const button = screen.getByRole("button", { name: /confirm reservation/i });
    expect(button).not.toBeDisabled();
  });

  test("dispatch is called when date changes", () => {
    setup();

    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2026-02-20" },
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "UPDATE_TIMES",
      payload: "2026-02-20",
    });
  });

  test("shows error when submitting incomplete form", () => {
    setup();

const form = screen.getByTestId("booking-form");

    fireEvent.submit(form);

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Please fill in all required fields."
    );
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  test("calls submitForm with correct data when form is valid", () => {
    setup();

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Aimee" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "a@b.com" } });
    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: "2026-02-20" } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: "17:00" } });
    fireEvent.change(screen.getByLabelText(/guests/i), { target: { value: "2" } });
    fireEvent.click(screen.getByLabelText(/indoor/i));

const form = screen.getByTestId("booking-form");

    fireEvent.submit(form);

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith({
      name: "Aimee",
      email: "a@b.com",
      phone: "",
      date: "2026-02-20",
      time: "17:00",
      guests: "2",
      occasion: "",
      seating: "indoor",
    });
  });
});