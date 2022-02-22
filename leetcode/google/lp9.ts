function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  const original = x;

  let result = 0;

  while (x > 0) {
    result = result * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return original === result;
}

export default isPalindrome;
