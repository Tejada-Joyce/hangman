import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockFetch } from "./testUtils";
import MovieForm from "./MovieForm";

let windowFetchSpy;

beforeEach(() => {
  windowFetchSpy = jest.spyOn(window, "fetch").mockImplementation(mockFetch);
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("MovieForm", () => {
  it("should exist", () => {
    expect(MovieForm).toBeInstanceOf(Object);
  });

  it("should show all its parts", () => {
    render(<MovieForm />);
    expect(screen.getByRole("option", { name: "Select Genre" }).selected).toBe(
      true
    );
    const submitButton = screen.getByText(/Submit/i);
    expect(submitButton).toBeDisabled();
  });

  it("should submit form with selected genre", async () => {
    const setMovieData = jest.fn();
    const genre = {
      id: "28",
      name: "Action",
    };
    render(<MovieForm setMovieData={setMovieData} />);
    userEvent.selectOptions(screen.getByRole("combobox"), genre.id);
    expect(screen.getByRole("option", { name: genre.name }).selected).toBe(
      true
    );
    const submitButton = screen.getByText(/Submit/i);
    await fireEvent.click(submitButton);
    expect(windowFetchSpy).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/discover/movie?api_key=b11f13bb78577d3c7bc7dd29e72f09a1&with_genres=${genre.id}`
    );
  });
  it("should handle errors", async () => {
    const genre = {
      id: "35",
      name: "Comedy",
    };
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    render(<MovieForm />);
    userEvent.selectOptions(screen.getByRole("combobox"), genre.id);
    expect(screen.getByRole("option", { name: genre.name }).selected).toBe(
      true
    );
    const submitButton = screen.getByText(/Submit/i);
    await fireEvent.click(submitButton);
    expect(consoleSpy).toHaveBeenCalled();
  });
});
