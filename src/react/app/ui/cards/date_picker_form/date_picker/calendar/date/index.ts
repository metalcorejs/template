const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const getDays = (date: Date) =>
  [...new Array(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate())]
    .fill(null)
    .map((_, i) => i + 1);

const getPrevDays = (date: Date) => {
  const lastDayPrevMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDay();
  const lastDayDatePrevMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  if (lastDayPrevMonth === 0) return [];
  else {
    const prevDays = 7 - lastDayPrevMonth;
    return [...new Array(prevDays)]
      .fill(null)
      .map((_, i) => lastDayDatePrevMonth - i)
      .reverse();
  }
};

export interface IDate {
  year: number;
  month: string;
  monthNumber: number;
  days: number[];
  prevDays: number[];
  nextDays: number[];
}

export const setDate = (date: Date = new Date()): IDate => {
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const monthNumber = date.getMonth();
  const days = getDays(date);
  const prevDays = getPrevDays(date);
  const nextDays = [...new Array(42 - days.length - prevDays.length)]
    .fill(null)
    .map((_, i) => i + 1);
  return { year, month, monthNumber, days, prevDays, nextDays };
};
