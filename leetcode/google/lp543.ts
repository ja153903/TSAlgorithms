import TreeNode from "../dataStructures/treenode.ts";

// TODO: Finish this problem
export default function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0;

  function height(root: TreeNode | null): number {
    if (root === null) {
      return 0;
    }

    const left = height(root.left);
    const right = height(root.right);

    max = Math.max(max, left + right);

    return 1 + Math.max(left, right);
  }

  height(root);

  return max;
}
