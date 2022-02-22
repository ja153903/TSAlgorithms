function addStrings(num1: string, num2: string): string {
  // run through from back of the string to the front of the string
  // use parseInt(num1[i]) and parseInt(num2[j])
  // then once we've exhausted one of the strings, make sure to
  // do individual strings that we haven't finished iterating over
  // push each result into a character array. reverse array and join to string
  let carry = 0;

  let i = num1.length - 1;
  let j = num2.length - 1;

  const result = [];

  while (i >= 0 || j >= 0) {
    let current = carry;

    if (i >= 0) {
      current += parseInt(num1[i]);
      i--;
    }

    if (j >= 0) {
      current += parseInt(num2[j]);
      j--;
    }

    carry = Math.floor(current / 10);
    current = current % 10;

    result.unshift(current.toString());
  }

  if (carry > 0) {
    result.unshift(carry.toString());
  }

  return result.join("");
}

export default addStrings;
