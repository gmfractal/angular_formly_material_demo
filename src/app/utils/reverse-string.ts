export function reverseString(inputString: string) {
  const reversedString = inputString.split('').reverse().join('');

  return reversedString;
}
