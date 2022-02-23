import TreeNode from "../dataStructures/treenode.ts";

export function convertListToTreeNode(items: number[]): TreeNode | null {
  function helper(
    items: number[],
    left: number,
    right: number
  ): TreeNode | null {
    if (left >= right) {
      return null;
    }

    const mid = Math.floor((right + left) / 2);

    const root = new TreeNode(items[mid]);

    root.left = helper(items, left, mid);
    root.right = helper(items, mid + 1, right);

    return root;
  }

  return helper(items, 0, items.length);
}

export function inorder(root: TreeNode | null): number[] {
  function traverse(root: TreeNode | null, result: number[]) {
    if (root) {
      traverse(root.left, result);
      result.push(root.val);
      traverse(root.right, result);
    }
  }

  const result: number[] = [];

  traverse(root, result);

  return result;
}

export function preorder(root: TreeNode | null): number[] {
  function traverse(root: TreeNode | null, result: number[]) {
    if (root) {
      result.push(root.val);
      traverse(root.left, result);
      traverse(root.right, result);
    }
  }

  const result: number[] = [];

  traverse(root, result);

  return result;
}

export function postorder(root: TreeNode | null): number[] {
  function traverse(root: TreeNode | null, result: number[]) {
    if (root) {
      traverse(root.left, result);
      traverse(root.right, result);
      result.push(root.val);
    }
  }

  const result: number[] = [];

  traverse(root, result);

  return result;
}

export function levelorder(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const result: number[][] = []
  const queue: Array<TreeNode | null> = [];

  queue.push(root);

  while (queue.length) {
    const size = queue.length;

    const subresult: number[] = [];

    for (let i = 0; i < size; i++) {
      const front = queue.shift() ?? null;
      if (!front) {
        break;
      }

      subresult.push(front.val);

      if (front.left) {
        queue.push(front.left);
      }

      if (front.right) {
        queue.push(front.right);
      }
    }

    result.push(subresult);
  }

  return result.flat();
}
