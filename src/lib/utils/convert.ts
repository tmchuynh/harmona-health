/**
 * Applies a percentage discount to the given price.
 * @param price - The original price.
 * @param discountPercentage - The discount percentage to apply (e.g., 10 for 10%).
 * @returns The discounted price.
 */
export function applyDiscount(
  price: number,
  discountPercentage: number
): number {
  return price - (price * discountPercentage) / 100;
}

/**
 * Converts between monthly and annual prices.
 * @param price - The price to convert.
 * @param type - The conversion type: "MA" or "AM".
 * @returns The converted price.
 */
export function convertPrice(price: number, type: "MA" | "AM"): number {
  if (type === "MA") {
    return price * 12;
  } else if (type === "AM") {
    return price / 12;
  } else {
    throw new Error("Invalid conversion type. Use 'MA' or 'AM'.");
  }
}


/**
 * Converts minutes to hours and minutes.
 * @param totalMinutes - The total number of minutes.
 * @returns A string in the format "X hour(s) Y minute(s)".
 */
export function convertMinutesToHoursAndMinutes(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (minutes === 0) {
    return `${hours} ${hours === 1 ? "hour" : "hours"}`;
  }

  return `${hours} ${hours === 1 ? "hour" : "hours"} ${minutes} ${
    minutes === 1 ? "minute" : "minutes"
  }`;
}