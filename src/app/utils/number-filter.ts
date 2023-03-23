import { reverseString } from './reverse-string';

/**
 * Filter function to remove non-digits and extra decimals.
 */
export function digitsAndSingleDecimalFilter(inputString: string) {
  // Filter regex pattern will find all decimals except for the last one, so reverse the input string and then reverse the output again to get the correct results.
  const filteringPattern = new RegExp(/(?:[.](?=.*[.])|[^\d.])+/g);

  const reversedInputString = reverseString(inputString);
  const filteredString = reversedInputString.replace(filteringPattern, '');
  const reversedFilteredString = reverseString(filteredString);

  return reversedFilteredString;
}

/**
 * Filter function to remove any non-digit characters.
 */
export function digitsFilter(inputString: string) {
  // Filter regex pattern will find all decimals except for the last one, so reverse the input string and then reverse the output again to get the correct results.
  const filteringPattern = new RegExp(/[^\d]/g);
  const filteredString = inputString.replace(filteringPattern, '');

  return filteredString;
}
