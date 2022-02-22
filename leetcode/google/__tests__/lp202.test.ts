import { assertEquals } from "../../../assert.ts";

import isHappy from "../lp202.ts";

Deno.test("202. Happy Number - Case 1", () => {
  assertEquals(true, isHappy(19));
});

Deno.test("202. Happy Number - Case 2", () => {
  assertEquals(false, isHappy(2));
});
