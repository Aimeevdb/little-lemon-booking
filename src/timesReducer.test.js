import { initializeTimes, updateTimes } from "./timesReducer";
import { fetchAPI } from "./api";

jest.mock("./api");

describe("initializeTimes", () => {
  test("returns available times from fetchAPI", () => {
    const mockTimes = ["17:00", "18:30", "19:00"];
    fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTimes();

    expect(fetchAPI).toHaveBeenCalled();
    expect(result).toEqual(mockTimes);
  });
});

describe("updateTimes", () => {
  test("returns updated times for selected date", () => {
    const mockTimes = ["18:00", "20:30"];
    const selectedDate = new Date("2026-02-14");

    fetchAPI.mockReturnValue(mockTimes);

    const result = updateTimes([], {
      type: "UPDATE_TIMES",
      payload: selectedDate,
    });

    expect(fetchAPI).toHaveBeenCalledWith(selectedDate);
    expect(result).toEqual(mockTimes);
  });
});
