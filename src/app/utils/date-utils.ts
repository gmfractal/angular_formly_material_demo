export function getCurrentDate(): {
  year: number;
  monthIndex: number;
  day: number;
} {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonthIndex = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  return {
    year: currentYear,
    monthIndex: currentMonthIndex,
    day: currentDay,
  };
}

export function getMonthName(
  inputMonthIndex: number | string
): string | undefined {
  const monthNamesLookupTable: Record<number, string> = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };

  const monthNumber = parseInt(inputMonthIndex as string, 10);

  return monthNamesLookupTable[monthNumber];
}

export function getOrdinalDay(inputDay: number | string): string | undefined {
  const ordinalLookupTable: Record<string, number[]> = {
    st: [1, 21, 31],
    nd: [2, 22],
    rd: [3, 23],
  };
  const rawDay = parseInt(inputDay as string, 10);

  if (rawDay < 1 || rawDay > 31) return undefined;

  if (ordinalLookupTable['st'].includes(rawDay)) {
    return `${rawDay}st`;
  } else if (ordinalLookupTable['nd'].includes(rawDay)) {
    return `${rawDay}nd`;
  } else if (ordinalLookupTable['rd'].includes(rawDay)) {
    return `${rawDay}rd`;
  } else {
    return `${rawDay}th`;
  }
}
