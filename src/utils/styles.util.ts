export function addAlphaToRgbOrRgbaString(
  color: string,
  newAlpha: number,
): string {
  // Regular expression to extract the rgb or rgba components
  const rgbaRegex =
    /^rgba?\((\d{1,3}), (\d{1,3}), (\d{1,3})(?:, (\d(?:\.\d+)?))?\)$/;

  const match = color.match(rgbaRegex);
  if (!match) {
    throw new Error('Invalid RGB/RGBA color format');
  }

  // Extract the red, green, blue components
  const r = parseInt(match[1], 10);
  const g = parseInt(match[2], 10);
  const b = parseInt(match[3], 10);
  const a = newAlpha;

  // Ensure alpha is within the range [0, 1]
  if (a < 0 || a > 1) {
    throw new Error('Alpha value must be between 0 and 1');
  }

  // Return the new RGBA string
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
