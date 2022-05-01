import React from "react";
import { render } from "@testing-library/react-native";
import App from "../App";

test("render ToDoList properly", () => {
  const { debug } = render(<App />);
  debug();
});
