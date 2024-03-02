export function calculate({ entryPrice, goal, duration }) {
  const resultData = [];
  let entryValue = entryPrice;

  for (let i = 0; i < duration; i++) {
    const earnedInDay = entryValue * (goal / 100);
    entryValue += earnedInDay;
    resultData.push({
      day: i + 1,
      dailyEarn: earnedInDay,
      totalEarn: entryValue,
    });
  }
  return resultData;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});
