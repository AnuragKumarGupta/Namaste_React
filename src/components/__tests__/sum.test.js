import Sum from "../Sum";

test("sum function should add the numbers correctly", () => {
  const result = Sum(4, 5);
  expect(result).toBe(9);
});
