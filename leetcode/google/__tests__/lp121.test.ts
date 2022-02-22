import { assertEquals } from "../../../assert.ts";

import maxProfit from "../lp121.ts";

Deno.test("121. Best Time to Buy and Sell Stock - Case 1", () => {
  assertEquals(maxProfit([7, 1, 5, 3, 6, 4]), 5);
});

Deno.test("121. Best Time to Buy and Sell Stock - Case 2", () => {
  assertEquals(maxProfit([7, 6, 4, 3, 1]), 0);
});
