function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  // keep track of the count
  // keep track of what items do not exist within arr2
  const counter = new Map<number, number>();
  const arr2Set = new Set<number>([...arr2]);
  const rest = [];

  for (const num of arr1) {
    if (!arr2Set.has(num)) {
      rest.push(num);
    } else {
      counter.set(num, (counter.get(num) ?? 0) + 1);
    }
  }

  const result = [];

  for (const num of arr2) {
    let count = counter.get(num) ?? 0;
    while (count > 0) {
      result.push(num);
      count--;
    }
  }

  if (rest.length) {
    rest.sort((a, b) => a - b);
  }

  return [...result, ...rest];
}

export default relativeSortArray;
