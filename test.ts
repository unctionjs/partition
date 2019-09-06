
import partition from "./index";

const isOdd = (value) => value % 2 != 0;

test("works", () => {
  expect(partition(isOdd)([1, 2, 3, 4])).toEqual([[1, 3], [2, 4]]);
});
