import { assertEquals } from "../../../assert.ts";

import { convertListToTreeNode, inorder, levelorder } from "../tree.ts";

Deno.test("convertListToTreeNode", () => {
  const items = [1, 2, 3, 4, 5];
  const result = convertListToTreeNode(items);

  const inorderResult = inorder(result);

  assertEquals(inorderResult, items);
});

Deno.test("levelorder", () => {
  const items = [1, 2, 3, 4, 5];
  const result = [3, 2, 5, 1, 4];

  const root = convertListToTreeNode(items);

  const levelOrderResult = levelorder(root);

  assertEquals(levelOrderResult, result);
});
