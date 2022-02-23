import { assertEquals } from "../../../assert.ts";

import { convertListToTreeNode, inorder } from "../tree.ts";

Deno.test("convertListToTreeNode", () => {
  const items = [1, 2, 3, 4, 5];
  const result = convertListToTreeNode(items);

  const inorderResult = inorder(result);

  assertEquals(inorderResult, items);
});
