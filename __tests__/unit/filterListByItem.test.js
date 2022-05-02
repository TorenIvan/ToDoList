import { filterListByItem } from "../../src/utils";

describe("should delete one value by text and return the rest", () => {
  const input = [
    { text: "kapa", checked: "checked" },
    { text: "kipos", checked: "unchecked" },
    { text: "value", checked: "unchecked" },
    { text: "value1", checked: "checked" },
    { text: "value3", checked: "unchecked" },
    { text: "kai allo", checked: "checked" },
    { text: "it's a mess", checked: "unchecked" },
  ];
  const expectedResult = [
    { text: "kipos", checked: "unchecked" },
    { text: "value", checked: "unchecked" },
    { text: "value1", checked: "checked" },
    { text: "value3", checked: "unchecked" },
    { text: "kai allo", checked: "checked" },
    { text: "it's a mess", checked: "unchecked" },
  ];

  /* act */
  const actualResult = filterListByItem("kapa", input);

  /* assertions */
  it("is defined", () => {
    expect(actualResult).toBeDefined();
  });
  it("is not null", () => {
    expect(actualResult).not.toBeNull();
  });
  it("is not false", () => {
    expect(actualResult).not.toBeFalsy();
  });
  it("has length 6", () => {
    expect(actualResult).toHaveLength(6);
  });
  it("contains item with text `kapa`", () => {
    expect(actualResult).toContainEqual({ text: "kipos", checked: "unchecked" });
  });
  it("contains item with text `value`", () => {
    expect(actualResult).toContainEqual({ text: "value", checked: "unchecked" });
  });
  it("contains item with text `value1`", () => {
    expect(actualResult).toContainEqual({ text: "value1", checked: "checked" });
  });
  it("contains item with text `value3`", () => {
    expect(actualResult).toContainEqual({ text: "value3", checked: "unchecked" });
  });
  it("contains item with text `it's a mess`", () => {
    expect(actualResult).toContainEqual({ text: "it's a mess", checked: "unchecked" });
  });
  it("contains item with text `kai allo`", () => {
    expect(actualResult).toContainEqual({ text: "kai allo", checked: "checked" });
  });
  it("contains no checked item with text `kapa`", () => {
    expect(actualResult).not.toContainEqual({ text: "kapa", checked: "checked" });
  });
  it("contains no unchecked item with text `kapa`", () => {
    expect(actualResult).not.toContainEqual({ text: "kapa", checked: "unchecked" });
  });
  it("has equal value with expected result", () => {
    expect(actualResult.length).toBe(expectedResult.length);
    expect(actualResult).toEqual(expect.arrayContaining(expectedResult));
    expect(expectedResult).toEqual(expect.arrayContaining(actualResult));
  });
});
