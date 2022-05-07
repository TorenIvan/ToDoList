import React from "react";
import { TextInput } from "react-native";
import { create, act } from "react-test-renderer";
import CreateItem from "../../src/containers/CreateItem";

/* tree needs update to keep no changes after every test that acts and affects the next ones */
const tree = create(<CreateItem />);

describe("Create Item Container Testing", () => {
  test("snapshot", () => {
    expect(tree).toMatchSnapshot();
  });

  it("should render without crushing", () => {
    expect(tree.toJSON()).toBeTruthy();
  });

  it("should render the placeholder when checkbox is not pressed no test is written", () => {
    expect(tree.root.findByType(TextInput).props.placeholder).toBe("Create a new todo");
  });

  it("should render the placeholder when checkbox is pressed and no text is written", () => {
    const checkbox = tree.root.findByProps({ testId: "CheckBox" }).props;
    act(() => checkbox.onRadioButtonPress());

    const textInput = tree.root.findByType(TextInput).props;
    expect(textInput.placeholder).toBe("Create a new todo");
  });

  it("should show the real-time text when textInput is written and checkbox is not pressed", () => {
    const tree = create(<CreateItem />);

    const textInput = tree.root.findByType(TextInput).props;
    act(() => textInput.onChangeText("Some Text"));

    const textInputUpdated = tree.root.findByType(TextInput).props;
    expect(textInputUpdated.children).toEqual("Some Text");
  });

  it("should show the real-time text with underline when textInput is written and checkbox is pressed", () => {
    const tree = create(<CreateItem />);

    const textInput = tree.root.findByType(TextInput).props;
    act(() => textInput.onChangeText("Some Text"));

    expect(textInput.style).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          textDecorationLine: "line-through",
        }),
      ])
    );

    const checkbox = tree.root.findByProps({ testId: "CheckBox" }).props;
    act(() => checkbox.onRadioButtonPress());

    const textInputUpdated = tree.root.findByType(TextInput).props;
    expect(textInputUpdated.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          textDecorationLine: "line-through",
        }),
      ])
    );
  });

  test("text input blurs when keyboard hides", () => {});

  test("text input becomes empty after submit", () => {
    const onSubmit = () => {};
    const tree = create(<CreateItem onSubmit={onSubmit} />);

    const textInput = tree.root.findByType(TextInput).props;
    act(() => textInput.onChangeText("Boring text"));

    const textInputAfterChange = tree.root.findByType(TextInput).props;
    act(() => textInputAfterChange.onSubmitEditing());

    const textInputAfterSubmit = tree.root.findByType(TextInput).props;
    expect(textInputAfterSubmit.children).toBe("");
  });
});
