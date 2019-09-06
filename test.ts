
import partition from "./index.ts";

const isOdd = (value) => value % 2 != 0;

test(() => {
  expect(partition(isOdd)([1, 2, 3, 4])).toEqual([[1, 3], [2, 4]]);
});
