import { assertEquals } from "../../../assert.ts";

import relativeSortArray from "../lp1122.ts";

Deno.test("1122. Relative Sort Array - Case 1", () => {
  assertEquals(
    [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19],
    relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
  );
});

Deno.test("1122. Relative Sort Array - Case 2", () => {
  assertEquals(
    [22, 28, 8, 6, 17, 44],
    relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6])
  );
});
