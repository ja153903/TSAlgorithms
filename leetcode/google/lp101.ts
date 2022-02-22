import TreeNode from "../dataStructures/treenode.ts";

function isSymmetric(root: TreeNode | null): boolean {
  function helper(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) {
      return true;
    }

    if (!left || !right) {
      return false;
    }

    return (
      left.val === right.val &&
      helper(left.left, right.right) &&
      helper(left.right, right.left)
    );
  }

  if (!root) {
    return true;
  }

  return helper(root.left, root.right);
}

export default isSymmetric;
