/**
 * Truncates a string to a specified length and appends ellipsis if truncated.
 * @param text The input string to truncate.
 * @param maxLength [max=50] The maximum length of the truncated string.
 * @returns The truncated string with ellipsis if truncated.
 */
export function textSlice(text: string, maxLength: number = 50): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}
