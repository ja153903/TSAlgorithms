export default function isHappy(n: number): boolean {
  if (n === 1) {
    return true;
  }

  const seen = new Set<number>();

  while (n !== 1) {
    let c = n;
    let result = 0;

    while (c > 0) {
      const current = c % 10;
      result += current * current;
      c = Math.floor(c / 10);
    }

    if (result === 1) {
      return true;
    }

    if (seen.has(result)) {
      return false;
    }

    seen.add(result);

    n = result;
  }

  return false;
}
